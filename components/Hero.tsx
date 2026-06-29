"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Parallax } from "@/components/Parallax";
import { HERO } from "@/lib/content";
import { asset } from "@/lib/asset";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ivory"
    >
      {/* Video background with a subtle parallax drift */}
      <Parallax distance={80} className="absolute inset-0">
        <video
          className="h-full w-full scale-110 object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          poster={asset("/assets/founder.jpg")}
        >
          <source src={asset("/assets/hero.mp4")} type="video/mp4" />
        </video>
      </Parallax>

      {/* Light overlay — lets the video read as a backdrop while keeping text legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-canvas/70 via-ivory/45 to-canvas" />
      <div className="absolute inset-0 bg-radial-gold" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container relative z-10 flex flex-col items-center pt-24 text-center"
      >
        <motion.div variants={item} className="animate-float">
          <Image
            src="/assets/logo.jpg"
            width={240}
            height={240}
            alt="AMRITA"
            priority
            className="mb-6 h-28 w-28 mix-blend-multiply sm:h-36 sm:w-36"
          />
        </motion.div>

        <motion.span variants={item} className="eyebrow mb-6">
          {HERO.eyebrow}
        </motion.span>

        <motion.h1 variants={item} className="display-1">
          AMRITA
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 font-display text-xl font-normal italic text-ink/90 sm:text-2xl"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl font-body text-base font-light leading-relaxed text-ink/75 sm:text-lg"
        >
          {HERO.intro}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a href={HERO.primaryCta.href} className="btn-gold">
            {HERO.primaryCta.label}
          </a>
          <a href={HERO.secondaryCta.href} className="btn-ghost">
            {HERO.secondaryCta.label}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label={HERO.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-body text-[11px] uppercase tracking-eyebrow text-ink-soft">
          {HERO.scrollHint}
        </span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-gold/50 pt-1.5">
          <span className="h-1.5 w-1.5 animate-scroll-dot rounded-full bg-gold" />
        </span>
      </motion.a>
    </section>
  );
}
