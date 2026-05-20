'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Card } from '@/lib/types';
import type { BoxStyleColors } from '@/lib/theme';
import { CardContent } from '@/components/CardContent';

interface Props {
  cards: Card[];
  style: BoxStyleColors;
  isLight: boolean;
}

/**
 * Interactive card list with expand/collapse for the deck page.
 */
export function CardList({ cards, style, isLight }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {cards.map((card, index) => {
        const isExpanded = expandedId === card.id;

        return (
          <div
            key={card.id}
            className="overflow-hidden rounded-2xl transition-all duration-300"
            style={{
              backgroundColor: style.cardBg,
              border: `1px solid ${style.accent}20`,
            }}
          >
            {/* Card header — always visible */}
            <button
              onClick={() => setExpandedId(isExpanded ? null : card.id)}
              className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:opacity-90"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold"
                  style={{ backgroundColor: style.accent + '20', color: style.accent }}
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold" style={{ color: style.cardText }}>
                    {card.title}
                  </h3>
                  {!isExpanded && card.summary && (
                    <p className="mt-0.5 text-sm line-clamp-1" style={{ color: style.subtext }}>
                      {card.summary}
                    </p>
                  )}
                </div>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className={`shrink-0 transition-transform duration-200 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                style={{ color: style.accent }}
              >
                <path
                  d="M5 7.5l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Expanded card content */}
            {isExpanded && (
              <div
                className="border-t px-5 pb-5 pt-4"
                style={{ borderColor: style.accent + '15' }}
              >
                {card.summary && (
                  <p className="mb-4 text-sm" style={{ color: style.subtext }}>
                    {card.summary}
                  </p>
                )}
                <CardContent blocks={card.blocks} style={style} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
