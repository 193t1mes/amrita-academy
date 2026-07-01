import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/primitives";
import { SPACES, FOUNDER_CARD } from "@/lib/content";
import { asset } from "@/lib/asset";

/**
 * Intro block right after the hero video:
 * left  — "Пространства Академии Амрита" + intro
 * centre — founder portrait
 * right — founder bio (Елена Коробова)
 */
export function About() {
  return (
    <section id="about" className="section-y relative overflow-hidden bg-canvas">
      <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-60" />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_minmax(17rem,22rem)_1.05fr] lg:gap-12">
          {/* LEFT — spaces */}
          <Reveal className="order-2 flex flex-col gap-5 lg:order-1 lg:text-right">
            <h2 className="font-display text-3xl font-normal leading-tight text-ink sm:text-4xl">
              {SPACES.title}
            </h2>
            {SPACES.paragraphs.map((p) => (
              <p
                key={p}
                className="font-body text-base font-light leading-relaxed text-ink-soft lg:ml-auto lg:max-w-sm"
              >
                {p}
              </p>
            ))}
          </Reveal>

          {/* CENTRE — portrait */}
          <Reveal delay={0.1} className="order-1 flex justify-center lg:order-2">
            <img
              src={asset("/assets/founder.jpg")}
              width={620}
              height={780}
              alt="Елена Коробова — основатель Академии Амрита"
              className="w-[min(80vw,22rem)] rounded-[1.75rem] object-cover shadow-[0_34px_90px_-45px_rgba(34,30,24,0.45)]"
            />
          </Reveal>

          {/* RIGHT — founder bio */}
          <Reveal delay={0.18} className="order-3 flex flex-col gap-4 lg:order-3">
            <div>
              <Eyebrow>{FOUNDER_CARD.eyebrow}</Eyebrow>
              <h3 className="mt-3 font-display text-3xl font-normal leading-tight text-ink sm:text-[2rem]">
                {FOUNDER_CARD.name}
              </h3>
              <span className="mt-1 block font-body text-xs uppercase tracking-eyebrow text-gold">
                {FOUNDER_CARD.spiritualName}
              </span>
            </div>
            {FOUNDER_CARD.paragraphs.map((p) => (
              <p
                key={p}
                className="font-body text-[15px] font-light leading-relaxed text-ink-soft"
              >
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
