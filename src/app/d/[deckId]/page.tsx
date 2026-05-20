import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { fetchDeck, fetchDeckCards, fetchDeckCardCount } from '@/lib/queries';
import { getBoxStyleColors, isLightBoxStyle } from '@/lib/theme';
import { CardList } from './CardList';
import { GetAppBanner } from '@/components/GetAppBanner';

interface Props {
  params: { deckId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const deck = await fetchDeck(params.deckId);
  if (!deck) return { title: 'Deck Not Found — MyCards' };

  const title = `${deck.name} by ${deck.owner.name} — MyCards`;
  const description = deck.description || `A card deck by ${deck.owner.name} on MyCards`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      siteName: 'MyCards',
      ...(deck.cover_image_url && { images: [{ url: deck.cover_image_url }] }),
    },
    twitter: {
      card: deck.cover_image_url ? 'summary_large_image' : 'summary',
      title,
      description,
    },
  };
}

export default async function DeckPage({ params }: Props) {
  const deck = await fetchDeck(params.deckId);
  if (!deck) notFound();

  const [cards, cardCount] = await Promise.all([
    fetchDeckCards(params.deckId),
    fetchDeckCardCount(params.deckId),
  ]);

  const style = getBoxStyleColors(deck.theme.boxStyle);
  const isLight = isLightBoxStyle(deck.theme.boxStyle);

  return (
    <main
      className="min-h-screen pb-20"
      style={{ backgroundColor: style.tableBg }}
    >
      {/* Header */}
      <header
        className="px-6 pb-8 pt-12"
        style={{ backgroundColor: style.bg }}
      >
        <div className="mx-auto max-w-2xl">
          {/* Owner info */}
          <Link
            href={`/u/${deck.owner.username}`}
            className="mb-4 inline-flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            {deck.owner.profile_image_url ? (
              <img
                src={deck.owner.profile_image_url}
                alt={deck.owner.name}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
                style={{ backgroundColor: style.accent + '30', color: style.accent }}
              >
                {deck.owner.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <p
                className="text-sm font-semibold"
                style={{ color: style.text }}
              >
                {deck.owner.name}
              </p>
              <p className="text-xs" style={{ color: style.subtext }}>
                @{deck.owner.username}
              </p>
            </div>
          </Link>

          {/* Deck info */}
          <h1
            className="mb-2 text-3xl font-extrabold tracking-tight"
            style={{ color: style.text }}
          >
            {deck.name}
          </h1>
          {deck.description && (
            <p className="mb-4 text-base" style={{ color: style.subtext }}>
              {deck.description}
            </p>
          )}
          <p className="text-sm font-medium" style={{ color: style.accent }}>
            {cardCount} {cardCount === 1 ? 'card' : 'cards'}
          </p>
        </div>
      </header>

      {/* Cards */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-2xl">
          {cards.length > 0 ? (
            <CardList cards={cards} style={style} isLight={isLight} />
          ) : (
            <div className="py-16 text-center">
              <p style={{ color: style.subtext }}>
                This deck doesn&apos;t have any cards yet.
              </p>
            </div>
          )}
        </div>
      </section>

      <GetAppBanner />
    </main>
  );
}
