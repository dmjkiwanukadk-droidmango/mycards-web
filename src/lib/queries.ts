import { supabase, supabaseAdmin } from './supabase';
import type { Deck, Card, CardBlock, User, DeckTheme } from './types';

/**
 * Re-sign expired card-media URLs for media blocks.
 * card-media is a private Supabase Storage bucket, so signed URLs
 * expire after 1 hour. This generates fresh 1-hour signed URLs
 * for any image/video/audio block whose content.url points to card-media.
 *
 * Uses the admin (service_role) client to bypass RLS — the anon key
 * cannot sign URLs for private buckets since there's no auth.uid().
 */
async function refreshBlockUrls(cards: Card[]): Promise<Card[]> {
  // Need the admin client to sign private bucket URLs
  const signer = supabaseAdmin ?? supabase;

  const mediaTypes = new Set(['image', 'video', 'audio']);
  const tasks: Array<{ block: CardBlock; storagePath: string }> = [];

  for (const card of cards) {
    for (const block of card.blocks) {
      if (!mediaTypes.has(block.type)) continue;
      const url: string = (block.content as any)?.url;
      if (!url) continue;
      // Extract storage path from a signed or raw card-media URL
      const match = url.match(/card-media\/(.+?)(?:\?|$)/);
      if (!match) continue;
      tasks.push({ block, storagePath: match[1] });
    }
  }

  if (tasks.length === 0) return cards;

  // Batch-sign all paths in parallel
  await Promise.all(
    tasks.map(async ({ block, storagePath }) => {
      const { data } = await signer.storage
        .from('card-media')
        .createSignedUrl(storagePath, 3600); // 1 hour

      if (data?.signedUrl) {
        block.content = { ...block.content, url: data.signedUrl } as any;
      }
    })
  );

  return cards;
}

/**
 * Fetch a public deck by ID with its owner info.
 * Returns null if deck is private, archived, or not found.
 */
export async function fetchDeck(deckId: string): Promise<(Deck & { owner: User }) | null> {
  const { data, error } = await supabase
    .from('decks')
    .select(`
      id, user_id, name, description, theme,
      cover_image_url, is_private, created_at, updated_at,
      users!decks_user_id_fkey ( id, username, name, tagline, profile_image_url, created_at )
    `)
    .eq('id', deckId)
    .eq('is_private', false)
    .eq('is_archived', false)
    .single();

  if (error || !data) return null;

  const owner = Array.isArray(data.users) ? data.users[0] : data.users;
  if (!owner) return null;

  return {
    id: data.id,
    user_id: data.user_id,
    name: data.name,
    description: data.description,
    theme: (data.theme || {}) as DeckTheme,
    cover_image_url: data.cover_image_url,
    is_private: data.is_private,
    created_at: data.created_at,
    updated_at: data.updated_at,
    owner: owner as User,
  };
}

/**
 * Fetch all cards in a deck with their blocks.
 */
export async function fetchDeckCards(deckId: string): Promise<Card[]> {
  // First get card IDs from the junction table
  const { data: deckCards, error: dcError } = await supabase
    .from('deck_cards')
    .select('card_id, position')
    .eq('deck_id', deckId)
    .order('position');

  if (dcError || !deckCards?.length) return [];

  const cardIds = deckCards.map((dc) => dc.card_id);

  // Fetch the cards
  const { data: cards, error: cError } = await supabase
    .from('cards')
    .select('id, user_id, title, summary, tone, created_at, updated_at')
    .in('id', cardIds);

  if (cError || !cards?.length) return [];

  // Fetch blocks for all cards
  const { data: blocks, error: bError } = await supabase
    .from('card_blocks')
    .select('id, card_id, type, content, position')
    .in('card_id', cardIds)
    .order('position');

  const blocksByCard = new Map<string, CardBlock[]>();
  if (blocks && !bError) {
    for (const block of blocks) {
      const list = blocksByCard.get(block.card_id) || [];
      list.push({
        id: block.id,
        card_id: block.card_id,
        type: block.type,
        content: block.content as any,
        position: block.position,
      });
      blocksByCard.set(block.card_id, list);
    }
  }

  // Build the position map from deck_cards
  const positionMap = new Map(deckCards.map((dc) => [dc.card_id, dc.position]));

  // Combine and sort by deck position
  const result = cards
    .map((card) => ({
      ...card,
      tone: card.tone as Card['tone'],
      blocks: blocksByCard.get(card.id) || [],
    }))
    .sort((a, b) => (positionMap.get(a.id) ?? 0) - (positionMap.get(b.id) ?? 0));

  // Re-sign expired card-media URLs
  return refreshBlockUrls(result);
}

/**
 * Fetch a single card by ID with its blocks.
 */
export async function fetchCard(cardId: string): Promise<Card | null> {
  const { data: card, error } = await supabase
    .from('cards')
    .select('id, user_id, title, summary, tone, created_at, updated_at')
    .eq('id', cardId)
    .single();

  if (error || !card) return null;

  const { data: blocks } = await supabase
    .from('card_blocks')
    .select('id, card_id, type, content, position')
    .eq('card_id', cardId)
    .order('position');

  const result: Card = {
    ...card,
    tone: card.tone as Card['tone'],
    blocks: (blocks || []).map((b) => ({
      id: b.id,
      card_id: b.card_id,
      type: b.type,
      content: b.content as any,
      position: b.position,
    })),
  };

  // Re-sign expired card-media URLs
  const [refreshed] = await refreshBlockUrls([result]);
  return refreshed;
}

/**
 * Fetch the deck that contains a given card (for context/navigation).
 * Returns the first public, non-archived deck containing this card.
 */
export async function fetchCardDeck(cardId: string): Promise<(Deck & { owner: User }) | null> {
  const { data: deckCard } = await supabase
    .from('deck_cards')
    .select('deck_id')
    .eq('card_id', cardId)
    .limit(1)
    .single();

  if (!deckCard) return null;
  return fetchDeck(deckCard.deck_id);
}

/**
 * Fetch a user by username.
 */
export async function fetchUserByUsername(username: string): Promise<User | null> {
  const { data, error } = await supabase
    .from('users')
    .select('id, username, name, tagline, profile_image_url, cover_image_url, created_at')
    .eq('username', username.toLowerCase())
    .single();

  if (error || !data) return null;
  return data as User;
}

/**
 * Fetch public decks for a user.
 */
export async function fetchUserPublicDecks(userId: string): Promise<Deck[]> {
  const { data, error } = await supabase
    .from('decks')
    .select('id, user_id, name, description, theme, cover_image_url, is_private, created_at, updated_at')
    .eq('user_id', userId)
    .eq('is_private', false)
    .eq('is_archived', false)
    .eq('show_on_profile', true)
    .order('profile_position', { ascending: true });

  if (error || !data) return [];

  return data.map((d) => ({
    ...d,
    theme: (d.theme || {}) as DeckTheme,
  }));
}

/**
 * Get the count of cards in a deck.
 */
export async function fetchDeckCardCount(deckId: string): Promise<number> {
  const { count, error } = await supabase
    .from('deck_cards')
    .select('id', { count: 'exact', head: true })
    .eq('deck_id', deckId);

  if (error) return 0;
  return count ?? 0;
}
