import { SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { ProgramsJourney } from "@/components/ProgramsJourney";
import { PROGRAMS_SECTION } from "@/lib/content";

/** Programs shown as a central golden "journey" that draws on scroll. */
export function Programs() {
  return (
    <section
      id="programs"
      className="section-y relative overflow-hidden bg-canvas"
    >
      {/* Faint gold glow drifting in from the right margin */}
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[28rem] w-[28rem] bg-radial-gold" />

      <div className="container relative z-10">
        <SectionHeading
          eyebrow={PROGRAMS_SECTION.eyebrow}
          title={PROGRAMS_SECTION.title}
          intro={PROGRAMS_SECTION.intro}
        />

        <ProgramsJourney />

        <Reveal className="mt-4 flex justify-center md:mt-8">
          <a href="#contact" className="btn-gold">
            Подобрать программу
          </a>
        </Reveal>
      </div>
    </section>
  );
}
