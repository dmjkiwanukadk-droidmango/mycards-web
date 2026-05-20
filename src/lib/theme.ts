/**
 * Deck theme colors — mirrors mobile deckThemeColors.ts exactly.
 * Single source of truth for the web viewer's deck styling.
 */

export interface BoxStyleColors {
  bg: string;
  accent: string;
  text: string;
  lidBg: string;
  tableBg: string;
  cardBg: string;
  cardText: string;
  subtext: string;
}

export const DECK_THEME_COLORS: Record<string, BoxStyleColors> = {
  midnightGold: {
    bg: '#1A1440',
    accent: '#C9A84C',
    text: '#E8E0D0',
    lidBg: '#1E1850',
    tableBg: '#110E2A',
    cardBg: '#1A1440',
    cardText: '#E8E0D0',
    subtext: 'rgba(232,224,208,0.6)',
  },
  burntAmber: {
    bg: '#3A1F0A',
    accent: '#D4883C',
    text: '#F0E0CC',
    lidBg: '#44250E',
    tableBg: '#2A150A',
    cardBg: '#3A1F0A',
    cardText: '#F0E0CC',
    subtext: 'rgba(240,224,204,0.6)',
  },
  emeraldZen: {
    bg: '#0A2A22',
    accent: '#5DCAA5',
    text: '#D0F0E0',
    lidBg: '#0E3228',
    tableBg: '#061E18',
    cardBg: '#0A2A22',
    cardText: '#D0F0E0',
    subtext: 'rgba(208,240,224,0.6)',
  },
  indigoPulse: {
    bg: '#534AB7',
    accent: '#B494F0',
    text: '#F0ECF8',
    lidBg: '#5F55C4',
    tableBg: '#3A32A0',
    cardBg: '#534AB7',
    cardText: '#F0ECF8',
    subtext: 'rgba(240,236,248,0.6)',
  },
  cleanCanvas: {
    bg: '#F2F0EC',
    accent: '#6C3FC5',
    text: '#2C2C2A',
    lidBg: '#FAFAF8',
    tableBg: '#E8E5DF',
    cardBg: '#F2F0EC',
    cardText: '#2C2C2A',
    subtext: 'rgba(44,44,42,0.55)',
  },
  roseVelvet: {
    bg: '#993556',
    accent: '#E8A0B8',
    text: '#F8E8EE',
    lidBg: '#A63D62',
    tableBg: '#702040',
    cardBg: '#993556',
    cardText: '#F8E8EE',
    subtext: 'rgba(248,232,238,0.6)',
  },
};

export const DEFAULT_BOX_STYLE = 'midnightGold';

export function getBoxStyleColors(boxStyle?: string): BoxStyleColors {
  return DECK_THEME_COLORS[boxStyle || DEFAULT_BOX_STYLE] || DECK_THEME_COLORS.midnightGold;
}

export function isLightBoxStyle(boxStyle?: string): boolean {
  return (boxStyle || DEFAULT_BOX_STYLE) === 'cleanCanvas';
}
