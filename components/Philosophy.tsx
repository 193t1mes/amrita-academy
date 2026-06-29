import { Reveal } from "@/components/Reveal";
import { GoldRule } from "@/components/primitives";
import { AnimatedLogo } from "@/components/AnimatedLogo";
import { PHILOSOPHY } from "@/lib/content";

/** The dramatic dark moment: a single luminous statement over a gold watermark. */
export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="section-y relative overflow-hidden bg-ink text-ivory"
    >
      {/* Soft radial gold glow for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 42%, rgba(194,161,78,0.16), transparent 70%)",
        }}
      />

      {/* Faint brand mark watermark behind the content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <AnimatedLogo className="w-[680px] max-w-none opacity-[0.06]" />
      </div>

      <div className="container relative z-10">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Manual gold eyebrow (dark-section variant) */}
          <span className="inline-flex items-center gap-3 font-body text-xs uppercase tracking-eyebrow text-gold">
            <span className="inline-block h-[6px] w-[6px] rotate-45 bg-gold" />
            {PHILOSOPHY.eyebrow}
          </span>

          {/* Large decorative quotation mark */}
          <span
            aria-hidden="true"
            className="mt-8 font-display text-7xl leading-none text-gold/40 sm:text-8xl"
          >
            &ldquo;
          </span>

          {/* The statement */}
          <blockquote className="-mt-4 text-balance font-display text-3xl font-medium leading-snug text-ivory sm:text-4xl lg:text-5xl">
            {PHILOSOPHY.quote}
          </blockquote>

          <GoldRule className="mt-12" />
        </Reveal>
      </div>
    </section>
  );
}
