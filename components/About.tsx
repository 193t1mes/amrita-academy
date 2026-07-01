import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/primitives";
import { SPACES, FOUNDER_CARD } from "@/lib/content";
import { asset } from "@/lib/asset";

/**
 * Intro block after the hero video.
 * Two balanced text columns (spaces • founder), then the portrait standing
 * over the big AMRITA ACADEMY wordmark. The portrait sits on a white
 * background that matches the section, so only the figure reads.
 */
export function About() {
  return (
    <section
      id="about"
      className="section-y relative overflow-hidden"
      style={{ background: "#FDFDFD" }}
    >
      <div className="container relative">
        {/* Two balanced text columns */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="flex flex-col gap-6">
            <h2 className="display-2">{SPACES.title}</h2>
            <div className="flex flex-col gap-5">
              {SPACES.paragraphs.map((p) => (
                <p
                  key={p}
                  className="max-w-md font-body text-base font-light leading-relaxed text-ink-soft"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col gap-5">
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
                  className="max-w-md font-body text-[15px] font-light leading-relaxed text-ink-soft"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Centrepiece — portrait over the AMRITA ACADEMY wordmark */}
        <div className="relative mt-16 flex justify-center md:mt-24">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 whitespace-nowrap font-display font-medium leading-none tracking-tight text-gold-soft"
            style={{ fontSize: "clamp(2.5rem, 15vw, 12rem)" }}
          >
            AMRITA ACADEMY
          </span>

          <Reveal className="relative z-10">
            <img
              src={asset("/assets/founder.png")}
              width={1024}
              height={1536}
              alt="Елена Коробова — основатель Академии Амрита"
              className="w-[min(82vw,30rem)] object-contain"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, #000 80%, transparent)",
                maskImage: "linear-gradient(to bottom, #000 80%, transparent)",
              }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
