import { SectionHeading } from "@/components/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SacredIcon } from "@/components/SacredIcons";
import { DIRECTIONS, DIRECTIONS_SECTION } from "@/lib/content";

/** The core "Направления" grid — nine sacred-geometry practice spaces. */
export function Directions() {
  return (
    <section
      id="directions"
      className="section-y relative overflow-hidden bg-ivory"
    >
      {/* Soft gold aura, faint geometric whisper behind the grid */}
      <div className="pointer-events-none absolute inset-0 bg-radial-gold" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-24 h-[34rem] w-[34rem] rounded-full border border-gold/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-12 h-[28rem] w-[28rem] rounded-full border border-gold/10"
      />

      <div className="container relative">
        <SectionHeading
          align="center"
          eyebrow={DIRECTIONS_SECTION.eyebrow}
          title={DIRECTIONS_SECTION.title}
          intro={DIRECTIONS_SECTION.intro}
        />

        <Stagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8 md:mt-20">
          {DIRECTIONS.map((d, i) => (
            <StaggerItem key={d.title}>
              <article className="group relative flex h-full flex-col rounded-3xl border border-line bg-canvas p-8 shadow-[0_24px_70px_-40px_rgba(34,30,24,0.22)] transition-all duration-500 ease-smooth hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_30px_70px_-45px_rgba(34,30,24,0.3)]">
                {/* Faint index numeral — editorial rhythm, sits quietly in the corner */}
                <span className="absolute right-7 top-7 font-display text-sm text-gold-soft/70 transition-colors duration-500 group-hover:text-gold/60">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-mist text-gold-deep transition-transform duration-500 ease-smooth group-hover:-rotate-3 group-hover:scale-105">
                  <SacredIcon name={d.icon} className="h-7 w-7" />
                </span>

                <h3 className="mt-7 font-display text-xl text-ink">{d.title}</h3>

                <p className="mt-3 font-body text-sm font-light leading-relaxed text-ink-soft">
                  {d.description}
                </p>

                {/* Thin gold hairline that warms on hover — a quiet luxury detail */}
                <span className="mt-6 h-px w-10 bg-line transition-all duration-500 ease-smooth group-hover:w-16 group-hover:bg-gold/60" />
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-14 flex justify-center md:mt-16">
          <a href="#programs" className="btn-gold">
            Подобрать программу
          </a>
        </Reveal>
      </div>
    </section>
  );
}
