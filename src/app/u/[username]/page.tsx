export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { fetchUserByUsername, fetchUserPublicDecks, fetchDeckCardCount } from '@/lib/queries';
import { getBoxStyleColors } from '@/lib/theme';
import type { Deck } from '@/lib/types';
import { GetAppBanner } from '@/components/GetAppBanner';

interface Props {
  params: { username: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await fetchUserByUsername(params.username);
  if (!user) return { title: 'User Not Found — MyCards' };

  const title = `${user.name} (@${user.username}) — MyCards`;
  const description = user.tagline || `${user.name}'s profile on MyCards`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      siteName: 'MyCards',
      ...(user.profile_image_url && { images: [{ url: user.profile_image_url }] }),
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

export default async function ProfilePage({ params }: Props) {
  const user = await fetchUserByUsername(params.username);
  if (!user) notFound();

  const decks = await fetchUserPublicDecks(user.id);

  // Fetch card counts for all decks in parallel
  const cardCounts = await Promise.all(
    decks.map((d) => fetchDeckCardCount(d.id))
  );
  const deckWithCounts = decks.map((d, i) => ({ ...d, cardCount: cardCounts[i] }));

  return (
    <main className="min-h-screen bg-gray-950 pb-20">
      {/* Profile header */}
      <header className="border-b border-gray-800 px-6 pb-8 pt-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          {user.profile_image_url ? (
            <img
              src={user.profile_image_url}
              alt={user.name}
              className="mb-4 h-24 w-24 rounded-full border-[3px] border-[#6C3FC5] object-cover"
            />
          ) : (
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#6C3FC5]/20 text-3xl font-bold text-[#6C3FC5]">
              {user.name.charAt(0).toUpperCase()}
            </div>
          )}

          <h1 className="text-2xl font-extrabold text-white">{user.name}</h1>
          <p className="mt-1 text-sm text-gray-400">@{user.username}</p>
          {user.tagline && (
            <p className="mt-3 max-w-md text-gray-300">{user.tagline}</p>
          )}
        </div>
      </header>

      {/* Deck grid */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-5 text-lg font-bold text-white">
            {decks.length > 0
              ? `${decks.length} Public ${decks.length === 1 ? 'Deck' : 'Decks'}`
              : 'No Public Decks'}
          </h2>

          {decks.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {deckWithCounts.map((deck) => (
                <DeckCard key={deck.id} deck={deck} cardCount={deck.cardCount} />
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-gray-500">
              This user hasn&apos;t shared any public decks yet.
            </p>
          )}
        </div>
      </section>

      <GetAppBanner />
    </main>
  );
}

function DeckCard({ deck, cardCount }: { deck: Deck; cardCount: number }) {
  const style = getBoxStyleColors(deck.theme.boxStyle);

  return (
    <Link
      href={`/d/${deck.id}`}
      className="group overflow-hidden rounded-2xl transition-transform hover:scale-[1.02]"
      style={{ backgroundColor: style.bg }}
    >
      <div className="p-5">
        <h3
          className="mb-1 text-lg font-bold"
          style={{ color: style.text }}
        >
          {deck.name}
        </h3>
        {deck.description && (
          <p
            className="mb-3 text-sm line-clamp-2"
            style={{ color: style.subtext }}
          >
            {deck.description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span
            className="text-xs font-semibold"
            style={{ color: style.accent }}
          >
            {cardCount} {cardCount === 1 ? 'card' : 'cards'}
          </span>
          <span
            className="text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100"
            style={{ color: style.accent }}
          >
            View &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
