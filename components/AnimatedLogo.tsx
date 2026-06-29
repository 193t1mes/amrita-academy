"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/asset";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.7, ease: "easeInOut" },
      opacity: { duration: 0.35 },
    },
  },
};

const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const C = { x: 100, y: 88 }; // centre of the sacred geometry
const SEED_R = 13;

// Round trig output to a fixed precision so server and client render the
// exact same coordinate strings (avoids React hydration mismatches).
const f = (n: number) => Math.round(n * 1000) / 1000;

// Six outer circles of the "seed of life" around a central circle.
const seed = Array.from({ length: 6 }).map((_, i) => {
  const a = (i * Math.PI) / 3 - Math.PI / 2;
  return { cx: f(C.x + Math.cos(a) * SEED_R), cy: f(C.y + Math.sin(a) * SEED_R) };
});

// Short radiating sun-rays around the seed.
const rays = Array.from({ length: 12 }).map((_, i) => {
  const a = (i * Math.PI) / 6;
  return {
    x1: f(C.x + Math.cos(a) * 30),
    y1: f(C.y + Math.sin(a) * 30),
    x2: f(C.x + Math.cos(a) * 36),
    y2: f(C.y + Math.sin(a) * 36),
  };
});

// Ornament dots riding the outer ring (slowly rotating).
const ornaments = Array.from({ length: 36 }).map((_, i) => {
  const a = (i * Math.PI) / 18;
  return { cx: f(100 + Math.cos(a) * 92), cy: f(100 + Math.sin(a) * 92) };
});

type Props = {
  className?: string;
  /** Re-run the draw-on animation each time it enters view. */
  replay?: boolean;
  spin?: boolean;
};

/**
 * Animated SVG re-creation of the AMRITA brand mark:
 * outer ornament ring · triangle · seed of life · crescent · sun-rays ·
 * wordmark · infinity. Strokes draw themselves on; the ring rotates slowly.
 */
export function AnimatedLogo({ className, replay = false, spin = true }: Props) {
  const viewProps = replay
    ? ({ whileInView: "visible", viewport: { margin: "-60px" } } as const)
    : ({ animate: "visible" } as const);

  return (
    <motion.svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="AMRITA ACADEMY"
      className={cn("text-gold", className)}
      variants={container}
      initial="hidden"
      {...viewProps}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={0.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Rotating ornament ring */}
        <motion.g
          variants={fade}
          style={{ transformOrigin: "100px 100px" }}
          animate={spin ? { rotate: 360 } : undefined}
          transition={
            spin
              ? { rotate: { duration: 140, ease: "linear", repeat: Infinity } }
              : undefined
          }
        >
          <circle cx="100" cy="100" r="92" strokeWidth={0.8} />
          <circle cx="100" cy="100" r="86" strokeWidth={0.6} />
          {ornaments.map((o, i) => (
            <circle key={i} cx={o.cx} cy={o.cy} r="1.1" fill="currentColor" stroke="none" />
          ))}
        </motion.g>

        {/* Inner frame */}
        <motion.circle variants={draw} cx="100" cy="100" r="78" />

        {/* Triangle */}
        <motion.path variants={draw} d="M100 40 156 134 44 134Z" strokeWidth={1.1} />

        {/* Crescent near the apex */}
        <motion.path
          variants={draw}
          d="M97 56a9 9 0 1 0 0 18 7 7 0 0 1 0-18Z"
        />

        {/* Seed of life */}
        <motion.circle variants={draw} cx={C.x} cy={C.y} r={SEED_R} />
        {seed.map((s, i) => (
          <motion.circle key={i} variants={draw} cx={s.cx} cy={s.cy} r={SEED_R} />
        ))}

        {/* Sun rays */}
        {rays.map((r, i) => (
          <motion.line key={i} variants={draw} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} />
        ))}

        {/* Wordmark */}
        <motion.text
          variants={fade}
          x="100"
          y="162"
          textAnchor="middle"
          fill="currentColor"
          stroke="none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "20px",
            fontWeight: 500,
            letterSpacing: "0.24em",
          }}
        >
          AMRITA
        </motion.text>

        {/* Infinity */}
        <motion.path
          variants={draw}
          d="M100 176c-3-4-9-4-9 0s6 4 9 0 9-4 9 0-6 4-9 0Z"
          strokeWidth={1}
        />
      </g>
    </motion.svg>
  );
}
