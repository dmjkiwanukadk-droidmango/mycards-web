'use client';

import React from 'react';

export type CardBackStyleType =
  | 'styleA'
  | 'styleB'
  | 'styleC'
  | 'styleD'
  | 'styleE'
  | 'styleF';

interface WebCardBackProps {
  title: string;
  tone: 'professional' | 'casual' | 'deep' | 'fun' | null;
  cardBackStyle: CardBackStyleType;
  accentColor: string;
  bgColor: string;
  textColor: string;
  cardBackColor?: string;
  onClick?: () => void;
}

const TONE_INDICATORS: Record<string, string> = {
  professional: '◆',
  casual: '○',
  deep: '◈',
  fun: '✦',
};

const CARD_WIDTH = 140;
const CARD_HEIGHT = 200;
const PATTERN_HEIGHT = 155;

/** Returns true when a hex color is perceptually light */
function isLightColor(hex: string): boolean {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.6;
}

// ── SVG Pattern Renderers ──

function PatternA({ accent }: { accent: string }) {
  const cx = CARD_WIDTH / 2;
  const cy = PATTERN_HEIGHT / 2;
  const stroke = accent + '35';
  const fill = accent + '20';
  const dotFill = accent + '40';
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${CARD_WIDTH} ${PATTERN_HEIGHT}`} preserveAspectRatio="xMidYMid meet">
      <rect x={cx - 30} y={cy - 30} width={60} height={60} rx={4} fill="none" stroke={stroke} strokeWidth={1} transform={`rotate(45, ${cx}, ${cy})`} />
      <rect x={cx - 18} y={cy - 18} width={36} height={36} rx={3} fill={fill} stroke={accent + '50'} strokeWidth={0.8} transform={`rotate(45, ${cx}, ${cy})`} />
      <rect x={cx - 7} y={cy - 7} width={14} height={14} rx={2} fill={accent + '20'} transform={`rotate(45, ${cx}, ${cy})`} />
      <circle cx={16} cy={16} r={3} fill={dotFill} />
      <circle cx={CARD_WIDTH - 16} cy={16} r={3} fill={dotFill} />
      <circle cx={16} cy={PATTERN_HEIGHT - 16} r={3} fill={dotFill} />
      <circle cx={CARD_WIDTH - 16} cy={PATTERN_HEIGHT - 16} r={3} fill={dotFill} />
    </svg>
  );
}

function PatternB({ accent }: { accent: string }) {
  const cx = CARD_WIDTH / 2;
  const cy = PATTERN_HEIGHT / 2;
  const lineColor = accent + '25';
  const circleStroke = accent + '40';
  const dotFill = accent + '50';
  const lineYs = [cy - 48, cy - 24, cy, cy + 24, cy + 48];
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${CARD_WIDTH} ${PATTERN_HEIGHT}`} preserveAspectRatio="xMidYMid meet">
      {lineYs.map((y, i) => (
        <line key={i} x1={20} y1={y} x2={CARD_WIDTH - 20} y2={y} stroke={lineColor} strokeWidth={1} />
      ))}
      <circle cx={cx} cy={cy} r={16} fill="none" stroke={circleStroke} strokeWidth={1.5} />
      <circle cx={cx} cy={cy} r={5} fill={dotFill} />
    </svg>
  );
}

function PatternC({ accent }: { accent: string }) {
  const strokeColor = accent + '28';
  const fillColor = accent + '15';
  const borderColor = accent + '40';
  const cx = CARD_WIDTH / 2;
  const cy = PATTERN_HEIGHT / 2;
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${CARD_WIDTH} ${PATTERN_HEIGHT}`} preserveAspectRatio="xMidYMid meet">
      {[-80, -40, 0, 40, 80, 120, 160].map((offset) => (
        <line key={`a${offset}`} x1={offset} y1={0} x2={offset + PATTERN_HEIGHT} y2={PATTERN_HEIGHT} stroke={strokeColor} strokeWidth={0.8} />
      ))}
      {[-80, -40, 0, 40, 80, 120, 160].map((offset) => (
        <line key={`b${offset}`} x1={CARD_WIDTH - offset} y1={0} x2={CARD_WIDTH - offset - PATTERN_HEIGHT} y2={PATTERN_HEIGHT} stroke={strokeColor} strokeWidth={0.8} />
      ))}
      <rect x={cx - 18} y={cy - 18} width={36} height={36} rx={3} fill={fillColor} stroke={borderColor} strokeWidth={1} />
    </svg>
  );
}

function PatternD({ accent }: { accent: string }) {
  const cx = CARD_WIDTH / 2;
  const cy = PATTERN_HEIGHT / 2;
  const rayColor = accent + '25';
  const circleStroke = accent + '40';
  const dotFill = accent + '20';
  const dotStroke = accent + '50';
  const len = Math.max(CARD_WIDTH, PATTERN_HEIGHT);
  const rays = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    return { x2: cx + Math.cos(angle) * len, y2: cy + Math.sin(angle) * len };
  });
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${CARD_WIDTH} ${PATTERN_HEIGHT}`} preserveAspectRatio="xMidYMid meet">
      {rays.map((r, i) => (
        <line key={i} x1={cx} y1={cy} x2={r.x2} y2={r.y2} stroke={rayColor} strokeWidth={0.8} />
      ))}
      <circle cx={cx} cy={cy} r={20} fill="none" stroke={circleStroke} strokeWidth={1} />
      <circle cx={cx} cy={cy} r={8} fill={dotFill} stroke={dotStroke} strokeWidth={0.8} />
    </svg>
  );
}

function PatternE({ accent }: { accent: string }) {
  const waveColor = accent + '25';
  const circleFill = accent + '15';
  const circleStroke = accent + '40';
  const dotFill = accent + '40';
  const cx = CARD_WIDTH / 2;
  const cy = PATTERN_HEIGHT / 2;
  const waves = Array.from({ length: 7 }, (_, i) => {
    const y = 10 + i * 22;
    return `M0,${y} Q${CARD_WIDTH * 0.25},${y - 15} ${CARD_WIDTH * 0.5},${y} Q${CARD_WIDTH * 0.75},${y + 15} ${CARD_WIDTH},${y}`;
  });
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${CARD_WIDTH} ${PATTERN_HEIGHT}`} preserveAspectRatio="xMidYMid meet">
      {waves.map((d, i) => (
        <path key={i} d={d} fill="none" stroke={waveColor} strokeWidth={0.8} />
      ))}
      <circle cx={cx} cy={cy} r={16} fill={circleFill} stroke={circleStroke} strokeWidth={1} />
      <circle cx={cx} cy={cy} r={5} fill={dotFill} />
    </svg>
  );
}

function PatternF({ accent, initial }: { accent: string; initial: string }) {
  const frameStroke = accent + '25';
  const circleStroke = accent + '40';
  const textColor = accent + '70';
  const lineColor = accent + '30';
  const cx = CARD_WIDTH / 2;
  const cy = PATTERN_HEIGHT / 2 - 4;
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${CARD_WIDTH} ${PATTERN_HEIGHT}`} preserveAspectRatio="xMidYMid meet">
      <rect x={10} y={8} width={CARD_WIDTH - 20} height={PATTERN_HEIGHT - 16} rx={4} fill="none" stroke={frameStroke} strokeWidth={0.8} />
      <rect x={20} y={18} width={CARD_WIDTH - 40} height={PATTERN_HEIGHT - 36} rx={3} fill="none" stroke={frameStroke} strokeWidth={0.8} />
      <circle cx={cx} cy={cy} r={22} fill="none" stroke={circleStroke} strokeWidth={1.5} />
      <text x={cx} y={cy + 8} textAnchor="middle" fill={textColor} fontSize={22} fontWeight={500} fontFamily="inherit">{initial}</text>
      <line x1={cx - 22} y1={cy + 32} x2={cx + 22} y2={cy + 32} stroke={lineColor} strokeWidth={0.8} />
    </svg>
  );
}

// ── Main Component ──

export const WebCardBack = React.memo(function WebCardBack({
  title,
  tone,
  cardBackStyle,
  accentColor,
  bgColor,
  textColor,
  cardBackColor,
  onClick,
}: WebCardBackProps) {
  const toneSymbol = tone ? TONE_INDICATORS[tone] : null;
  const surfaceColor = cardBackColor || bgColor;
  const initial = title.charAt(0).toUpperCase();

  // When cardBackColor overrides the bg, check if we need to flip text/accent
  // for contrast. E.g. dark theme + white cardBackColor = light text on light bg.
  const surfaceIsLight = isLightColor(surfaceColor);
  const effectiveTextColor = cardBackColor
    ? surfaceIsLight ? '#2C2C2A' : '#F0F0F0'
    : textColor;
  const effectiveAccent = cardBackColor && surfaceIsLight && isLightColor(accentColor)
    ? '#6C3FC5'
    : accentColor;

  const renderPattern = () => {
    switch (cardBackStyle) {
      case 'styleA': return <PatternA accent={effectiveAccent} />;
      case 'styleB': return <PatternB accent={effectiveAccent} />;
      case 'styleC': return <PatternC accent={effectiveAccent} />;
      case 'styleD': return <PatternD accent={effectiveAccent} />;
      case 'styleE': return <PatternE accent={effectiveAccent} />;
      case 'styleF': return <PatternF accent={effectiveAccent} initial={initial} />;
      default: return <PatternA accent={effectiveAccent} />;
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      className="relative select-none overflow-hidden transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
      style={{
        aspectRatio: `${CARD_WIDTH} / ${CARD_HEIGHT}`,
        backgroundColor: surfaceColor,
        border: `1px solid ${effectiveAccent}40`,
        borderRadius: 12,
        cursor: 'pointer',
        boxShadow: '0 4px 16px rgba(0,0,0,0.35)',
      }}
    >
      <div className="absolute inset-x-0 top-0 h-[3px]" style={{ backgroundColor: effectiveAccent }} />
      <div className="flex-1" style={{ height: `${(PATTERN_HEIGHT / CARD_HEIGHT) * 100}%` }}>
        {renderPattern()}
      </div>
      <div
        className="absolute inset-x-0 bottom-0 flex items-center gap-1 px-2 py-2"
        style={{
          borderTop: `1px solid ${surfaceIsLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`,
          height: `${((CARD_HEIGHT - PATTERN_HEIGHT) / CARD_HEIGHT) * 100}%`,
        }}
      >
        {toneSymbol && (
          <span className="shrink-0 text-[10px] font-bold" style={{ color: effectiveAccent }}>
            {toneSymbol}
          </span>
        )}
        <span className="truncate text-[11px] font-semibold" style={{ color: effectiveTextColor }}>
          {title}
        </span>
      </div>
    </div>
  );
});

export { CARD_WIDTH, CARD_HEIGHT };
