import { Reveal } from "@/components/Reveal";
import { TextReveal } from "@/components/TextReveal";
import { MISSION } from "@/lib/content";
import { asset } from "@/lib/asset";

/**
 * Mission block — a spacious, centred statement over a full-bleed photo.
 */
export function Mission() {
  return (
    <section id="mission" className="section-y relative overflow-hidden">
      {/* Background photo + darkening overlay for legibility */}
      <div className="absolute inset-0">
        <img
          src={asset("/assets/mission-bg.jpg")}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,18,14,0.72) 0%, rgba(20,18,14,0.62) 45%, rgba(20,18,14,0.80) 100%)",
          }}
        />
      </div>

      <div className="container relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <span className="inline-flex items-center gap-3 font-body text-xs uppercase tracking-eyebrow text-gold-soft">
              <span className="h-[6px] w-[6px] rotate-45 bg-gold-soft" />
              {MISSION.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="display-2 mt-7 text-white">{MISSION.title}</h2>
          </Reveal>

          <TextReveal
            text={MISSION.lead}
            className="mt-8 max-w-2xl font-display text-xl font-normal italic leading-snug text-white sm:text-2xl"
          />

          <Reveal delay={0.15}>
            <span className="mt-10 block h-px w-16 bg-gold/60" />
          </Reveal>

          <div className="mt-10 flex max-w-2xl flex-col gap-5">
            {MISSION.paragraphs.map((p) => (
              <TextReveal
                key={p}
                text={p}
                className="font-body text-base font-light leading-relaxed text-white sm:text-[17px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
