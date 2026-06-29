import { SectionHeading, GoldRule } from "@/components/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { AnimatedLogo } from "@/components/AnimatedLogo";
import { ABOUT } from "@/lib/content";

/** About the Academy — editorial two-column block + a full-width gold stats strip. */
export function About() {
  return (
    <section
      id="about"
      className="section-y relative overflow-hidden bg-canvas"
    >
      {/* Faint brand watermark — a quiet sacred-geometry presence */}
      <AnimatedLogo
        spin
        className="pointer-events-none absolute -right-24 -top-16 hidden h-[30rem] w-[30rem] opacity-[0.05] lg:block"
      />
      <div className="absolute inset-0 bg-radial-gold opacity-60" />

      <div className="container relative">
        {/* Editorial two-column block */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={ABOUT.eyebrow} title={ABOUT.title} />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-prose2 font-display text-2xl font-normal italic leading-snug text-ink sm:text-[1.7rem]">
                {ABOUT.lead}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:pt-4">
            <Stagger className="flex flex-col gap-7" gap={0.14}>
              {ABOUT.paragraphs.map((paragraph) => (
                <StaggerItem key={paragraph}>
                  <p className="font-body text-lg font-light leading-relaxed text-ink-soft">
                    {paragraph}
                  </p>
                </StaggerItem>
              ))}
              <StaggerItem>
                <GoldRule className="!justify-start" />
              </StaggerItem>
            </Stagger>
          </div>
        </div>

        {/* Full-width stats strip */}
        <Reveal delay={0.05} className="mt-20 lg:mt-28">
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
