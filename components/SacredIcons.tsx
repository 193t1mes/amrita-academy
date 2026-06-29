import type { Direction } from "@/lib/content";

type IconProps = { className?: string };

// Round trig output so SSR and client coordinate strings match exactly.
const f = (n: number) => Math.round(n * 1000) / 1000;

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

/** Minimal, single-stroke sacred-geometry line icons, one per direction. */
const ICONS: Record<Direction["icon"], (p: IconProps) => JSX.Element> = {
  // Lotus / rising energy
  kundalini: (p) => (
    <svg {...base} {...p}>
      <path d="M24 8c2.5 4 2.5 8 0 12-2.5-4-2.5-8 0-12Z" />
      <path d="M24 20c4-3 9-3 13 0-3 4-9 5-13 2" />
      <path d="M24 20c-4-3-9-3-13 0 3 4 9 5 13 2" />
      <path d="M10 28c4 8 24 8 28 0" />
      <circle cx="24" cy="34" r="2" />
    </svg>
  ),
  // Radiant healing hands / aura
  healing: (p) => (
    <svg {...base} {...p}>
      <circle cx="24" cy="24" r="7" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        const x1 = f(24 + Math.cos(a) * 11);
        const y1 = f(24 + Math.sin(a) * 11);
        const x2 = f(24 + Math.cos(a) * 15);
        const y2 = f(24 + Math.sin(a) * 15);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </svg>
  ),
  // Sun with rays
  rays: (p) => (
    <svg {...base} {...p}>
      <circle cx="24" cy="24" r="8" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const x1 = f(24 + Math.cos(a) * 12);
        const y1 = f(24 + Math.sin(a) * 12);
        const x2 = f(24 + Math.cos(a) * 17);
        const y2 = f(24 + Math.sin(a) * 17);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </svg>
  ),
  // Concentric seed — Sat Nam Rasayan
  satnam: (p) => (
    <svg {...base} {...p}>
      <circle cx="24" cy="24" r="16" />
      <circle cx="24" cy="24" r="10" />
      <circle cx="24" cy="24" r="4" />
      <circle cx="24" cy="24" r="1" fill="currentColor" />
    </svg>
  ),
  // Six-point star in circle — cosmoenergetics
  cosmo: (p) => (
    <svg {...base} {...p}>
      <circle cx="24" cy="24" r="16" />
      <path d="M24 9 36 30H12L24 9Z" />
      <path d="M24 39 12 18h24L24 39Z" />
    </svg>
  ),
  // Eye within triangle — channeling / intuition
  channeling: (p) => (
    <svg {...base} {...p}>
      <path d="M24 8 40 38H8L24 8Z" />
      <path d="M16 30c4-5 12-5 16 0-4 5-12 5-16 0Z" />
      <circle cx="24" cy="30" r="2.4" />
    </svg>
  ),
  // Crescent + spark — feminine practices
  feminine: (p) => (
    <svg {...base} {...p}>
      <path d="M30 14a13 13 0 1 0 0 20 10 10 0 0 1 0-20Z" />
      <circle cx="33" cy="24" r="1.4" fill="currentColor" />
      <path d="M37 16l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5L37 16Z" />
    </svg>
  ),
  // Winding path through a circle — individual guidance
  individual: (p) => (
    <svg {...base} {...p}>
      <circle cx="24" cy="24" r="16" />
      <path d="M17 33c0-6 14-6 14-12s-9-6-9-10" />
      <circle cx="17" cy="33" r="1.6" fill="currentColor" />
      <circle cx="22" cy="11" r="1.6" fill="currentColor" />
    </svg>
  ),
  // Flower-of-life cluster — gatherings & retreats
  events: (p) => (
    <svg {...base} {...p}>
      <circle cx="24" cy="24" r="6" />
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i * Math.PI) / 3;
        const cx = f(24 + Math.cos(a) * 6);
        const cy = f(24 + Math.sin(a) * 6);
        return <circle key={i} cx={cx} cy={cy} r="6" />;
      })}
    </svg>
  ),
};

export function SacredIcon({
  name,
  className,
}: {
  name: Direction["icon"];
  className?: string;
}) {
  const Icon = ICONS[name];
  return <Icon className={className} />;
}
