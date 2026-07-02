"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { MISSION } from "@/lib/content";

function Word({
  children,
  progress,
  range,
}: {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }}>
      {children}
      {" "}
    </motion.span>
  );
}

/**
 * Mission copy with ONE block-wide Arc reveal: all words share a single scroll
 * progress that completes by the time the whole block is in view — so once the
 * section is fully open, the text is fully lit.
 */
export function MissionText() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.8"],
  });

  const lead = MISSION.lead.split(" ");
  const paras = MISSION.paragraphs.map((p) => p.split(" "));
  const total = lead.length + paras.reduce((n, w) => n + w.length, 0);

  let idx = 0;
  const nextRange = (): [number, number] => {
    const start = idx / total;
    idx += 1;
    return [start, idx / total];
  };

  return (
    <div ref={ref} className="flex w-full flex-col items-center">
      <p className="max-w-2xl text-center font-display text-xl font-normal italic leading-snug text-white sm:text-2xl">
        {lead.map((w, i) => (
          <Word key={`l-${i}`} progress={scrollYProgress} range={nextRange()}>
            {w}
          </Word>
        ))}
      </p>

      <span className="mt-10 block h-px w-16 bg-gold/60" />

      <div className="mt-10 flex max-w-2xl flex-col gap-5 text-center">
        {paras.map((words, pi) => (
          <p
            key={`p-${pi}`}
            className="font-body text-base font-light leading-relaxed text-white sm:text-[17px]"
          >
            {words.map((w, i) => (
              <Word
                key={`p-${pi}-${i}`}
                progress={scrollYProgress}
                range={nextRange()}
              >
                {w}
              </Word>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
}
