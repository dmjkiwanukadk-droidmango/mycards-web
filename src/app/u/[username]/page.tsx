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
      {/* Cover photo */}
      {user.cover_image_url ? (
        <div className="relative h-48 w-full sm:h-56">
          <img
            src={user.cover_image_url}
            alt=""
            className="h-full w-full object-cover"
          />
          {/* Bottom fade to page bg */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-950 to-transparent" />
        </div>
      ) : (
        /* Fallback gradient when no cover photo */
        <div className="h-32 w-full bg-gradient-to-b from-[#6C3FC5]/20 to-gray-950" />
      )}

      {/* Profile header — centered, matching mobile app */}
      <header className="border-b border-gray-800 px-6 pb-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center -mt-16">
          {/* Avatar with purple ring + dark backing ring for contrast against cover */}
          <div className="relative z-10 rounded-full bg-gray-950 p-1">
            {user.profile_image_url ? (
              <img
                src={user.profile_image_url}
                alt={user.name}
                className="h-24 w-24 rounded-full border-[3px] border-[#6C3FC5] object-cover shadow-lg shadow-black/40"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-[#6C3FC5] bg-[#6C3FC5]/20 text-3xl font-bold text-[#6C3FC5] shadow-lg shadow-black/40">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          {/* Name */}
          <h1 className="mt-4 text-2xl font-extrabold text-white">
            {user.name}
          </h1>

          {/* Username */}
          <p className="mt-1 text-sm text-gray-400">@{user.username}</p>

          {/* Tagline */}
          {user.tagline && (
            <p className="mt-3 max-w-md text-gray-300 leading-relaxed">
              {user.tagline}
            </p>
          )}
        </div>
      </header>

      {/* Deck list */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-2xl">
          {/* Section divider line (matches mobile violet accent line) */}
          <div className="mb-6 h-[2px] rounded-full bg-[#6C3FC5]/30" />

          <h2 className="mb-5 text-lg font-bold text-white">
            {decks.length > 0
              ? `${decks.length} Public ${decks.length === 1 ? 'Deck' : 'Decks'}`
              : 'No Public Decks'}
          </h2>

          {decks.length > 0 ? (
            <div className="flex flex-col gap-4">
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
      className="group block overflow-hidden rounded-2xl border transition-transform hover:scale-[1.01] active:scale-[0.99]"
      style={{
        backgroundColor: style.bg,
        borderColor: style.accent + '25',
      }}
    >
      {/* Top accent stripe */}
      <div className="h-[3px]" style={{ backgroundColor: style.accent }} />

      <div className="px-5 py-4">
        <h3
          className="mb-1 text-lg font-bold leading-tight"
          style={{ color: style.text }}
        >
          {deck.name}
        </h3>
        {deck.description && (
          <p
            className="mb-3 text-sm leading-relaxed line-clamp-2"
            style={{ color: style.subtext }}
          >
            {deck.description}
          </p>
        )}
        <span
          className="text-xs font-semibold"
          style={{ color: style.accent }}
        >
          {cardCount} {cardCount === 1 ? 'card' : 'cards'}
        </span>
      </div>
    </Link>
  );
}
