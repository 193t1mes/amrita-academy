import { Reveal } from "@/components/Reveal";
import { GoldRule } from "@/components/primitives";
import { PHILOSOPHY } from "@/lib/content";
import { asset } from "@/lib/asset";

/** The dramatic dark moment: a single luminous statement over a gold watermark. */
export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="section-y relative overflow-hidden bg-ink text-ivory"
    >
      {/* Background photo + deep overlay for legibility */}
      <div className="absolute inset-0">
        <img
          src={asset("/assets/philosophy-bg.jpg")}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,18,14,0.42) 0%, rgba(20,18,14,0.60) 18%, rgba(20,18,14,0.85) 46%, rgba(20,18,14,0.90) 100%)",
          }}
        />
      </div>

      {/* Soft radial gold glow for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 42%, rgba(194,161,78,0.16), transparent 70%)",
        }}
      />

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
