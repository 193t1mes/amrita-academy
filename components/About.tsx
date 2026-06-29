import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Eyebrow } from "@/components/primitives";
import { ABOUT, HERO } from "@/lib/content";

/**
 * About — Zenith-style centrepiece: a framed portrait standing over a large
 * AMRITA ACADEMY wordmark, flanked by the heading and intro, with a stats strip.
 */
export function About() {
  return (
    <section id="about" className="section-y relative overflow-hidden bg-canvas">
      <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-70" />

      <div className="container relative">
        {/* Heading + intro flank the composition */}
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <Reveal className="flex flex-col items-start gap-6">
            <Eyebrow>{ABOUT.eyebrow}</Eyebrow>
            <h2 className="display-2 max-w-xl">{ABOUT.title}</h2>
            <a href={HERO.primaryCta.href} className="btn-gold mt-1">
              {HERO.primaryCta.label}
            </a>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-5 lg:pb-2 lg:text-right">
            <p className="font-display text-2xl font-normal italic leading-snug text-ink">
              {ABOUT.lead}
            </p>
            <p className="font-body text-base font-light leading-relaxed text-ink-soft lg:ml-auto lg:max-w-md">
              {HERO.intro}
            </p>
          </Reveal>
        </div>

        {/* Centrepiece — portrait over the big wordmark */}
        <div className="relative mt-20 flex justify-center md:mt-24">
          {/* Large AMRITA ACADEMY wordmark behind / beneath the figure */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 whitespace-nowrap font-display font-medium leading-none tracking-tight text-gold-soft"
            style={{ fontSize: "clamp(2.75rem, 15vw, 12rem)" }}
          >
            AMRITA ACADEMY
          </span>

          {/* Portrait — base fades out so the wordmark reads through it */}
          <Reveal className="relative z-10">
            <Image
              src="/assets/founder.jpg"
              width={620}
              height={780}
              alt="Основатель Академии Амрита"
              className="w-[min(80vw,30rem)] rounded-t-[2.5rem] object-cover"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, #000 70%, transparent)",
                maskImage: "linear-gradient(to bottom, #000 70%, transparent)",
              }}
            />
          </Reveal>
        </div>

        {/* Stats strip */}
        <Reveal delay={0.05} className="mt-16 lg:mt-24">
          <div className="rounded-3xl border border-line bg-ivory/60 px-8 py-12 shadow-[0_24px_70px_-40px_rgba(34,30,24,0.22)] sm:px-12 sm:py-14">
            <Stagger
              className="grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0"
              gap={0.16}
            >
              {ABOUT.stats.map((stat) => (
                <StaggerItem
                  key={stat.label}
                  className="flex flex-col items-center gap-3 px-6 py-6 text-center sm:py-2"
                >
                  <span className="font-display text-5xl font-medium leading-none text-gradient-gold sm:text-6xl">
                    {stat.value}
                  </span>
                  <span className="max-w-[16ch] font-body text-sm uppercase tracking-wide2 text-ink-soft">
                    {stat.label}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
