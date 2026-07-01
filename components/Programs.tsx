import { SectionHeading } from "@/components/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { ProgramsSnake } from "@/components/ProgramsSnake";
import { PROGRAMS, PROGRAMS_SECTION } from "@/lib/content";

/** Editorial numbered list of the Academy's accompaniment programs. */
export function Programs() {
  return (
    <section
      id="programs"
      className="section-y relative overflow-hidden bg-canvas"
    >
      {/* Faint gold glow drifting in from the right margin */}
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[28rem] w-[28rem] bg-radial-gold" />

      {/* Golden serpentine drawn on scroll */}
      <ProgramsSnake />

      <div className="container relative z-10">
        <SectionHeading
          eyebrow={PROGRAMS_SECTION.eyebrow}
          title={PROGRAMS_SECTION.title}
          intro={PROGRAMS_SECTION.intro}
        />

        <Stagger className="mt-16 border-b border-line md:mt-20">
          {PROGRAMS.map((program) => (
            <StaggerItem key={program.index}>
              <article className="group grid grid-cols-1 items-baseline gap-6 border-t border-line py-10 lg:grid-cols-12 lg:gap-8 lg:py-14">
                {/* Big faded index number */}
                <div className="lg:col-span-2">
                  <span className="font-display text-5xl font-medium leading-none text-gold-soft transition-colors duration-500 ease-smooth group-hover:text-gold lg:text-6xl">
                    {program.index}
                  </span>
                </div>

                {/* Meta tag + title */}
                <div className="lg:col-span-5">
                  <span className="font-body text-xs uppercase tracking-eyebrow text-gold-deep">
                    {program.meta}
                  </span>
                  <h3 className="mt-3 font-display text-2xl text-ink transition-transform duration-500 ease-smooth group-hover:translate-x-1 lg:text-3xl">
                    {program.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="max-w-prose2 font-body text-base font-light leading-relaxed text-ink-soft">
                    {program.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-16 flex justify-center md:mt-20">
          <a href="#contact" className="btn-gold">
            Подобрать программу
          </a>
        </Reveal>
      </div>
    </section>
  );
}
