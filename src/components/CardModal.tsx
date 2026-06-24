'use client';

import { useEffect, useCallback } from 'react';
import type { Card } from '@/lib/types';
import type { BoxStyleColors } from '@/lib/theme';
import { CardContent } from './CardContent';

interface CardModalProps {
  card: Card | null;
  style: BoxStyleColors;
  isLight: boolean;
  onClose: () => void;
}

/**
 * Full-screen modal overlay that shows card content at a readable size.
 * Slides up when a card is flipped, slides down on close.
 */
export function CardModal({ card, style, isLight, onClose }: CardModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (card) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [card, handleKeyDown]);

  if (!card) return null;

  const toneLabels: Record<string, string> = {
    professional: '◆ Professional',
    casual: '○ Casual',
    deep: '◈ Deep',
    fun: '✦ Fun',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 animate-[fadeIn_200ms_ease-out]"
        style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
      />

      {/* Modal panel */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg animate-[slideUp_300ms_ease-out] overflow-hidden rounded-t-2xl sm:my-8 sm:rounded-2xl"
        style={{
          backgroundColor: style.cardBg,
          border: `1px solid ${style.accent}25`,
          boxShadow: '0 -8px 40px rgba(0,0,0,0.5)',
          maxHeight: '92vh',
        }}
      >
        {/* Top accent stripe */}
        <div
          className="h-[3px] w-full"
          style={{ backgroundColor: style.accent }}
        />

        {/* Header */}
        <div
          className="sticky top-0 z-10 flex items-start justify-between gap-3 px-5 py-4 sm:px-6"
          style={{
            backgroundColor: style.cardBg,
            borderBottom: `1px solid ${style.accent}15`,
          }}
        >
          <div className="min-w-0 flex-1">
            <h2
              className="text-lg font-bold leading-snug sm:text-xl"
              style={{ color: style.cardText }}
            >
              {card.title}
            </h2>
            {card.tone && (
              <span
                className="mt-1 inline-block text-xs font-medium"
                style={{ color: style.accent }}
              >
                {toneLabels[card.tone] || card.tone}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors"
            style={{
              backgroundColor: style.accent + '15',
              color: style.accent,
            }}
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div
          className="overflow-y-auto px-5 pb-8 pt-4 sm:px-6"
          style={{ maxHeight: 'calc(85vh - 80px)' }}
        >
          {card.summary && (
            <p
              className="mb-5 text-sm leading-relaxed"
              style={{ color: style.subtext }}
            >
              {card.summary}
            </p>
          )}
          <CardContent blocks={card.blocks} style={style} />
        </div>
      </div>

      {/* Keyframe animations injected via style tag */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
