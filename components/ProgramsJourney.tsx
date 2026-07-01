"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROGRAMS } from "@/lib/content";
import { cn } from "@/lib/asset";

/**
 * Central golden "journey" line that draws itself on scroll, with the program
 * steps as nodes (dot + number + title) alternating on either side — matching
 * the "Как проходит обучение" reference.
 */

// Dot positions in the 0..100 viewBox (x, y). Sides alternate around centre.
const NODES = [
  { x: 60, y: 16, side: "right" as const },
  { x: 40, y: 50, side: "left" as const },
  { x: 60, y: 84, side: "right" as const },
];

// Path: enters from the top, threads each dot, exits at the bottom.
const PATH =
  "M60 2 L60 16 C 60 34, 40 34, 40 50 C 40 66, 60 66, 60 84 L60 98";

export function ProgramsJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.012, 1]);

  // Each node fades/pops in as the drawn line reaches it.
  const d0 = useTransform(scrollYProgress, [0.08, 0.2], [0, 1]);
  const d1 = useTransform(scrollYProgress, [0.42, 0.54], [0, 1]);
  const d2 = useTransform(scrollYProgress, [0.76, 0.88], [0, 1]);
  const reveal = [d0, d1, d2];

  return (
    <div
      ref={ref}
      className="relative mx-auto mt-12 h-[44rem] w-full max-w-4xl sm:h-[50rem] md:mt-16 lg:h-[58rem]"
    >
      {/* The golden line */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d={PATH}
          fill="none"
          stroke="#C2A14E"
          strokeOpacity="0.15"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <motion.path
          d={PATH}
          fill="none"
          stroke="#C2A14E"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
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
