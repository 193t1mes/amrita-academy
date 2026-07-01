import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/primitives";
import { SPACES, FOUNDER_CARD } from "@/lib/content";
import { asset } from "@/lib/asset";

/**
 * Intro block after the hero video — one cohesive composition:
 * left  — "Пространства Академии Амрита" + intro
 * centre — founder portrait over the big AMRITA ACADEMY wordmark
 * right — founder bio (Елена Коробова)
 * The portrait sits on white that matches the section, so only the figure reads.
 */
export function About() {
  return (
    <section
      id="about"
      className="section-y relative overflow-hidden"
      style={{ background: "#FDFDFD" }}
    >
      <div className="container relative">
        {/* Big wordmark spanning the full width, behind everything */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 z-0 -translate-x-1/2 translate-y-2 whitespace-nowrap font-display font-medium leading-none tracking-tight text-gold-soft"
          style={{ fontSize: "clamp(2.25rem, 14vw, 11rem)" }}
        >
          AMRITA ACADEMY
        </span>

        {/* 3-column composition, vertically centred around the figure */}
        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-12">
          {/* LEFT — spaces */}
          <Reveal className="order-2 flex flex-col gap-5 lg:order-1 lg:items-end lg:text-right">
            <h2 className="display-2">{SPACES.title}</h2>
            <div className="flex flex-col gap-5">
              {SPACES.paragraphs.map((p) => (
                <p
                  key={p}
                  className="max-w-sm font-body text-base font-light leading-relaxed text-ink-soft"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          {/* CENTRE — portrait */}
          <Reveal className="order-1 flex justify-center lg:order-2">
            <img
              src={asset("/assets/founder.png")}
              width={1024}
              height={1536}
              alt="Елена Коробова — основатель Академии Амрита"
              className="w-[min(78vw,26rem)] object-contain"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, #000 84%, transparent)",
                maskImage: "linear-gradient(to bottom, #000 84%, transparent)",
              }}
            />
          </Reveal>

          {/* RIGHT — founder bio */}
          <Reveal
            delay={0.12}
            className="order-3 flex flex-col gap-4 lg:order-3 lg:items-start"
          >
            <div>
              <Eyebrow>{FOUNDER_CARD.eyebrow}</Eyebrow>
              <h3 className="mt-3 font-display text-[1.9rem] font-normal leading-tight text-ink sm:text-4xl">
                {FOUNDER_CARD.name}
              </h3>
              <span className="mt-1.5 block font-body text-xs uppercase tracking-eyebrow text-gold">
                {FOUNDER_CARD.spiritualName}
              </span>
            </div>
            <div className="flex flex-col gap-3.5">
              {FOUNDER_CARD.paragraphs.map((p) => (
                <p
                  key={p}
                  className="max-w-sm font-body text-[15px] font-light leading-relaxed text-ink-soft"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
