import type { CardBlock, TextBlockContent, ImageBlockContent, UrlBlockContent } from '@/lib/types';
import type { BoxStyleColors } from '@/lib/theme';

interface Props {
  blocks: CardBlock[];
  style: BoxStyleColors;
}

/**
 * Renders card blocks (text, image, URL, etc.) for the web viewer.
 * Read-only — no editing capabilities.
 */
export function CardContent({ blocks, style }: Props) {
  if (!blocks.length) {
    return (
      <p className="text-sm italic" style={{ color: style.subtext }}>
        No content on this card.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {blocks
        .sort((a, b) => a.position - b.position)
        .map((block) => (
          <BlockRenderer key={block.id} block={block} style={style} />
        ))}
    </div>
  );
}

function BlockRenderer({ block, style }: { block: CardBlock; style: BoxStyleColors }) {
  switch (block.type) {
    case 'text':
      return <TextBlock content={block.content as TextBlockContent} style={style} />;
    case 'image':
      return <ImageBlock content={block.content as ImageBlockContent} style={style} />;
    case 'url':
      return <UrlBlock content={block.content as UrlBlockContent} style={style} />;
    case 'video':
    case 'audio':
      // Placeholder for future media types
      return (
        <div
          className="rounded-lg px-4 py-3 text-sm"
          style={{ backgroundColor: style.accent + '10', color: style.subtext }}
        >
          {block.type === 'video' ? 'Video' : 'Audio'} — open in the app to play
        </div>
      );
    default:
      return null;
  }
}

function TextBlock({ content, style }: { content: TextBlockContent; style: BoxStyleColors }) {
  return (
    <div
      className="whitespace-pre-wrap text-[15px] leading-relaxed"
      style={{ color: style.cardText }}
    >
      {content.text}
    </div>
  );
}

function ImageBlock({ content, style }: { content: ImageBlockContent; style: BoxStyleColors }) {
  return (
    <figure>
      <img
        src={content.url}
        alt={content.caption || 'Card image'}
        className="w-full rounded-xl object-cover"
        loading="lazy"
      />
      {content.caption && (
        <figcaption className="mt-2 text-center text-xs" style={{ color: style.subtext }}>
          {content.caption}
        </figcaption>
      )}
    </figure>
  );
}

function UrlBlock({ content, style }: { content: UrlBlockContent; style: BoxStyleColors }) {
  return (
    <a
      href={content.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex overflow-hidden rounded-xl border transition-opacity hover:opacity-90"
      style={{ borderColor: style.accent + '25', backgroundColor: style.accent + '08' }}
    >
      {content.thumbnail && (
        <img
          src={content.thumbnail}
          alt=""
          className="h-20 w-20 shrink-0 object-cover sm:h-24 sm:w-24"
          loading="lazy"
        />
      )}
      <div className="flex flex-col justify-center px-4 py-3">
        <p className="text-sm font-semibold line-clamp-1" style={{ color: style.cardText }}>
          {content.title || content.url}
        </p>
        {content.description && (
          <p className="mt-0.5 text-xs line-clamp-2" style={{ color: style.subtext }}>
            {content.description}
          </p>
        )}
        {content.domain && (
          <p className="mt-1 text-xs" style={{ color: style.accent }}>
            {content.domain}
          </p>
        )}
      </div>
    </a>
  );
}
