"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Golden serpentine that draws itself as the Programs section scrolls by.
 * Symmetric S-curves weaving around the left of the list; a faint track is
 * always visible, the bright gold stroke follows scroll progress.
 */
const PATH =
  "M50 12 C 16 130, 84 225, 50 345 C 16 465, 84 560, 50 680 C 16 800, 84 895, 50 988";

export function ProgramsSnake() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.35"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.015, 1]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-0 z-0 hidden w-[44%] max-w-[36rem] lg:block"
    >
      <svg
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        {/* faint always-on track */}
        <path
          d={PATH}
          fill="none"
          stroke="#C2A14E"
          strokeOpacity="0.14"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        {/* bright gold stroke drawn on scroll */}
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
    </div>
  );
}
