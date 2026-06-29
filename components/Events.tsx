import { EVENTS, EVENTS_SECTION } from "@/lib/content";
import { SectionHeading } from "@/components/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

/** Events — retreats, master-classes and live gatherings on a soft sand backdrop. */
export function Events() {
  return (
    <section
      id="events"
      className="section-y relative overflow-hidden bg-sand"
    >
      {/* Faint gold glow drifting across the sand */}
      <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-70" />
      <span className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rotate-45 rounded-[2.5rem] border border-gold/10" />

      <div className="container relative">
        <SectionHeading
          eyebrow={EVENTS_SECTION.eyebrow}
          title={EVENTS_SECTION.title}
          intro={EVENTS_SECTION.intro}
        />

        <Stagger className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {EVENTS.map((event) => (
            <StaggerItem key={event.title} className="group h-full">
              <article className="flex h-full flex-col rounded-3xl border border-line bg-canvas p-8 shadow-[0_24px_70px_-40px_rgba(34,30,24,0.22)] transition-all duration-500 ease-smooth hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_30px_80px_-38px_rgba(34,30,24,0.28)]">
                <span className="inline-flex items-center gap-3 font-body text-xs uppercase tracking-eyebrow text-gold-deep">
                  <span className="inline-block h-[6px] w-[6px] rotate-45 bg-gold" />
                  {event.kind}
                </span>

                <h3 className="mt-6 font-display text-xl text-ink">
                  {event.title}
                </h3>

                <p className="mt-4 flex-1 font-body text-sm font-light leading-relaxed text-ink-soft">
                  {event.description}
                </p>

                <span className="hairline mt-8" />

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium tracking-wide text-gold-deep transition-colors duration-300 ease-smooth hover:text-gold"
                >
                  Подробнее
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-smooth group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-16 flex flex-col items-center gap-7 text-center" delay={0.1}>
          <p className="max-w-prose2 font-display text-lg font-normal italic leading-relaxed text-ink/80">
            Расписание обновляется с каждым новым сезоном — узнайте о ближайших
            встречах первыми.
          </p>
          <a href="#contact" className="btn-ghost">
            Узнать расписание
          </a>
        </Reveal>
      </div>
    </section>
  );
}
