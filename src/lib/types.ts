/**
 * Shared types for the web viewer.
 * Mirrors the mobile app's models.ts but only includes what the viewer needs.
 */

// ── Block content shapes ──

export interface TextBlockContent {
  text: string;
}

export interface ImageBlockContent {
  url: string;
  caption?: string;
}

export interface VideoBlockContent {
  url: string;
  thumbnail?: string;
}

export interface AudioBlockContent {
  url: string;
  duration?: number;
}

export interface UrlBlockContent {
  url: string;
  title?: string;
  description?: string;
  thumbnail?: string;
  domain?: string;
}

export type BlockContent =
  | TextBlockContent
  | ImageBlockContent
  | VideoBlockContent
  | AudioBlockContent
  | UrlBlockContent;

// ── Core models ──

export interface CardBlock {
  id: string;
  card_id: string;
  type: 'text' | 'image' | 'video' | 'audio' | 'url';
  content: BlockContent;
  position: number;
}

export interface Card {
  id: string;
  user_id: string;
  title: string;
  summary: string;
  tone: 'professional' | 'casual' | 'deep' | 'fun' | null;
  blocks: CardBlock[];
  created_at: string;
  updated_at: string;
}

export interface DeckTheme {
  boxStyle?: string;
  color?: string;
  vibe?: string;
  cardBack?: 'styleA' | 'styleB';
  openAnimation?: 'tiltAndSlide' | 'slideOnly';
}

export interface Deck {
  id: string;
  user_id: string;
  name: string;
  description: string | null;
  theme: DeckTheme;
  cover_image_url: string | null;
  is_private: boolean;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
  tagline: string | null;
  profile_image_url: string | null;
  cover_image_url: string | null;
  created_at: string;
}
