'use client';

import { useState, useCallback } from 'react';
import type { Card } from '@/lib/types';
import type { BoxStyleColors } from '@/lib/theme';
import { WebCardBack, type CardBackStyleType } from '@/components/WebCardBack';
import { CardModal } from '@/components/CardModal';

interface Props {
  cards: Card[];
  style: BoxStyleColors;
  isLight: boolean;
  cardBack: CardBackStyleType;
  cardBackColor?: string;
}

export function CardList({ cards, style, isLight, cardBack, cardBackColor }: Props) {
  const [flippedId, setFlippedId] = useState<string | null>(null);
  const [modalCard, setModalCard] = useState<Card | null>(null);

  const handleCardClick = useCallback(
    (card: Card) => {
      setFlippedId(card.id);
      setTimeout(() => {
        setModalCard(card);
      }, 350);
    },
    [],
  );

  const handleModalClose = useCallback(() => {
    setModalCard(null);
    setTimeout(() => {
      setFlippedId(null);
    }, 200);
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
        {cards.map((card) => {
          const isFlipped = flippedId === card.id;
          return (
            <div key={card.id} style={{ perspective: 800 }}>
              <div
                className="relative w-full transition-transform duration-700"
                style={{
                  aspectRatio: '140 / 200',
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <WebCardBack
                    title={card.title}
                    tone={card.tone}
                    cardBackStyle={cardBack}
                    accentColor={style.accent}
                    bgColor={style.cardBg}
                    textColor={style.cardText}
                    cardBackColor={cardBackColor}
                    onClick={() => handleCardClick(card)}
                  />
                </div>
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    backgroundColor: style.cardBg,
                    border: `1px solid ${style.accent}30`,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.35)',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <CardModal
        card={modalCard}
        style={style}
        isLight={isLight}
        onClose={handleModalClose}
      />
    </>
  );
}
