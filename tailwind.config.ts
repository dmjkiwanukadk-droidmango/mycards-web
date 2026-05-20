import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: '#6C3FC5',
          'violet-light': '#8B5CF6',
        },
        // Box style theme colors (mirrors mobile deckThemeColors.ts)
        deck: {
          'midnight-bg': '#1A1440',
          'midnight-accent': '#C9A84C',
          'amber-bg': '#3A1F0A',
          'amber-accent': '#D4883C',
          'emerald-bg': '#0A2A22',
          'emerald-accent': '#5DCAA5',
          'indigo-bg': '#534AB7',
          'indigo-accent': '#B494F0',
          'canvas-bg': '#F2F0EC',
          'canvas-accent': '#6C3FC5',
          'rose-bg': '#993556',
          'rose-accent': '#E8A0B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
