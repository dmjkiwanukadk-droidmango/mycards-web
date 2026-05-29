export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { fetchCard, fetchCardDeck } from '@/lib/queries';
import { getBoxStyleColors, isLightBoxStyle } from '@/lib/theme';
import { CardContent } from '@/components/CardContent';
import { GetAppBanner } from '@/components/GetAppBanner';

interface Props {
  params: { cardId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const card = await fetchCard(params.cardId);
  if (!card) return { title: 'Card Not Found — MyCards' };

  const title = `${card.title} — MyCards`;
  const description = card.summary || 'A card on MyCards';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      siteName: 'MyCards',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

export default async function CardPage({ params }: Props) {
  const card = await fetchCard(params.cardId);
  if (!card) notFound();

  // Try to find the deck this card belongs to (for context + theming)
  const deck = await fetchCardDeck(params.cardId);
  const style = getBoxStyleColors(deck?.theme.boxStyle);
  const isLight = isLightBoxStyle(deck?.theme.boxStyle);

  return (
    <main
      className="min-h-screen pb-20"
      style={{ backgroundColor: style.tableBg }}
    >
      {/* Breadcrumb / context */}
      <header className="px-6 pt-8" style={{ backgroundColor: style.bg }}>
        <div className="mx-auto max-w-2xl pb-6">
          {deck && (
            <Link
              href={`/d/${deck.id}`}
              className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: style.accent }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8l4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to {deck.name}
            </Link>
          )}

          <h1
            className="text-2xl font-extrabold tracking-tight sm:text-3xl"
            style={{ color: style.text }}
          >
            {card.title}
          </h1>
          {card.summary && (
            <p className="mt-2 text-base" style={{ color: style.subtext }}>
              {card.summary}
            </p>
          )}

          {card.tone && (
            <span
              className="mt-3 inline-block rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-wide"
              style={{
                backgroundColor: style.accent + '20',
                color: style.accent,
              }}
            >
              {card.tone}
            </span>
          )}
        </div>
      </header>

      {/* Card content */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-2xl">
          <div
            className="rounded-2xl p-6"
            style={{
              backgroundColor: style.cardBg,
              border: `1px solid ${style.accent}15`,
            }}
          >
            <CardContent blocks={card.blocks} style={style} />
          </div>
        </div>
      </section>

      {/* Deck owner context */}
      {deck && (
        <section className="px-6">
          <div className="mx-auto max-w-2xl">
            <Link
              href={`/u/${deck.owner.username}`}
              className="flex items-center gap-3 rounded-xl p-4 transition-colors hover:opacity-90"
              style={{ backgroundColor: style.accent + '08' }}
            >
              {deck.owner.profile_image_url ? (
                <img
                  src={deck.owner.profile_image_url}
                  alt={deck.owner.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
              ) : (
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold"
                  style={{ backgroundColor: style.accent + '30', color: style.accent }}
                >
                  {deck.owner.name.charAt(0).toUpperCase()}
                </div>
              )}
              <div>
                <p className="font-semibold" style={{ color: style.text }}>
                  {deck.owner.name}
                </p>
                <p className="text-sm" style={{ color: style.subtext }}>
                  @{deck.owner.username} &middot; View profile
                </p>
              </div>
            </Link>
          </div>
        </section>
      )}

      <GetAppBanner />
    </main>
  );
}
