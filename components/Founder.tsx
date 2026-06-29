import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { AnimatedLogo } from "@/components/AnimatedLogo";
import { FOUNDER } from "@/lib/content";
import { asset } from "@/lib/asset";

/** Founder — gallery-framed portrait beside an intimate, signed introduction. */
export function Founder() {
  return (
    <section
      id="founder"
      className="section-y relative overflow-hidden bg-canvas"
    >
      {/* Soft radial glow + faint brand watermark for depth */}
      <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-60" />
      <AnimatedLogo
        spin={false}
        className="pointer-events-none absolute -right-24 top-12 h-[460px] w-[460px] opacity-[0.05]"
      />

      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:gap-20">
          {/* Portrait — gallery-framed with an offset gold border */}
          <Reveal className="relative mx-auto w-full max-w-md lg:mx-0">
            {/* Offset gold frame floating behind the portrait */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-gold/40"
            />
            {/* Hairline gold corner accents */}
            <span
              aria-hidden="true"
              className="absolute -left-3 -top-3 h-12 w-12 rounded-tl-3xl border-l border-t border-gold/50"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-12 w-12 rounded-br-3xl border-b border-r border-gold/50"
            />

            <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_70px_-40px_rgba(34,30,24,0.22)]">
              <Parallax distance={48}>
                <img
                  src={asset("/assets/founder.jpg")}
                  width={900}
                  height={1200}
                  alt="Основатель Академии Амрита"
                  loading="lazy"
                  className="h-full w-full scale-105 rounded-3xl object-cover"
                />
              </Parallax>
              {/* Gentle warm wash to blend the portrait into the page */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-ink/10 via-transparent to-transparent" />
            </div>
          </Reveal>

          {/* Text column */}
          <div className="max-w-xl">
            <Stagger className="flex flex-col gap-7">
              {/* Manual eyebrow */}
              <StaggerItem>
                <span className="inline-flex items-center gap-3 font-body text-xs uppercase tracking-eyebrow text-gold-deep">
                  <span className="inline-block h-[6px] w-[6px] rotate-45 bg-gold" />
                  {FOUNDER.eyebrow}
                </span>
              </StaggerItem>

              <StaggerItem>
                <h2 className="display-2">
                  Та, что держит{" "}
                  <span className="text-gradient-gold italic">пространство</span>
                </h2>
              </StaggerItem>

              {FOUNDER.paragraphs.map((paragraph) => (
                <StaggerItem key={paragraph}>
                  <p className="font-body text-lg font-light leading-relaxed text-ink-soft">
                    {paragraph}
                  </p>
                </StaggerItem>
              ))}

              {/* Signature */}
              <StaggerItem>
                <div className="mt-2 flex flex-col gap-3">
                  <span className="font-display text-2xl italic text-gold-deep">
                    {FOUNDER.signature}
                  </span>
                  <span className="h-px w-20 bg-gradient-to-r from-gold to-transparent" />
                  <span className="font-body text-xs uppercase tracking-wide2 text-ink-soft">
                    {FOUNDER.name}
                  </span>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
