"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROGRAMS } from "@/lib/content";
import { cn } from "@/lib/asset";

/**
 * Central golden "journey" line that draws itself on scroll. The line is one
 * SOLID stroke; it's revealed top→down by an animated clip rectangle (no dashes),
 * so it grows continuously as you scroll. It starts on the first dot and ends
 * on the last. Step nodes alternate on either side.
 */

// Dot positions in the 0..100 viewBox (x, y). Sides alternate around centre.
const NODES = [
  { x: 60, y: 16, side: "right" as const },
  { x: 40, y: 50, side: "left" as const },
  { x: 60, y: 84, side: "right" as const },
];

// Path starts on the first dot, threads the middle dot, ends on the last dot.
const PATH = "M60 16 C 60 34, 40 34, 40 50 C 40 66, 60 66, 60 84";

export function ProgramsJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"],
  });

  // Reveal curtain height (viewBox units): from the first dot down past the last.
  const revealH = useTransform(scrollYProgress, [0, 1], [16, 88]);

  // Nodes pop in as the line reaches them.
  const d0 = useTransform(scrollYProgress, [0.0, 0.06], [0, 1]);
  const d1 = useTransform(scrollYProgress, [0.42, 0.5], [0, 1]);
  const d2 = useTransform(scrollYProgress, [0.9, 0.97], [0, 1]);
  const reveal = [d0, d1, d2];

  return (
    <div
      ref={ref}
      className="relative mx-auto mt-12 h-[44rem] w-full max-w-4xl sm:h-[50rem] md:mt-16 lg:h-[58rem]"
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <clipPath id="journey-reveal" clipPathUnits="userSpaceOnUse">
            <motion.rect x={0} y={0} width={100} height={revealH} />
          </clipPath>
        </defs>

        {/* faint always-on track */}
        <path
          d={PATH}
          fill="none"
          stroke="#C2A14E"
          strokeOpacity="0.16"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        {/* solid gold line, revealed top→down by the clip */}
        <path
          d={PATH}
          fill="none"
          stroke="#C2A14E"
          strokeWidth="2.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          clipPath="url(#journey-reveal)"
        />
      </svg>

      {/* Dots on the line */}
      {NODES.map((n, i) => (
        <span
          key={`dot-${i}`}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <motion.span
            style={{ opacity: reveal[i], scale: reveal[i] }}
            className="block h-3.5 w-3.5 rounded-full bg-gold ring-4 ring-gold/20"
          />
        </span>
      ))}

      {/* Step content, offset to the correct side of each dot */}
      {PROGRAMS.map((p, i) => {
        const n = NODES[i];
        const isRight = n.side === "right";
        return (
          <motion.div
            key={p.index}
            style={{
              opacity: reveal[i],
              top: `${n.y}%`,
              ...(isRight
                ? { left: `calc(${n.x}% + 1.75rem)` }
                : { right: `calc(${100 - n.x}% + 1.75rem)` }),
            }}
            className={cn(
              "absolute w-[min(42vw,17rem)] -translate-y-1/2",
              isRight ? "text-left" : "text-right",
            )}
          >
            <span className="font-display text-4xl font-normal italic text-gold-soft lg:text-5xl">
              {p.index}
            </span>
            <h3 className="mt-1 font-display text-2xl text-ink lg:text-[1.75rem]">
              {p.title}
            </h3>
            <p className="mt-2 font-body text-sm font-light leading-relaxed text-ink-soft">
              {p.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
