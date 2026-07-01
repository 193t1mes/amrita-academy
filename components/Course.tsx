import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/primitives";
import { COURSE } from "@/lib/content";
import { asset } from "@/lib/asset";

/**
 * Course / pricing block — 150 000 ₽ for 3 months, split into three monthly
 * modules, over a full-bleed background photo.
 */
export function Course() {
  return (
    <section id="course" className="section-y relative overflow-hidden">
      {/* Background photo + darkening overlay */}
      <div className="absolute inset-0">
        <img
          src={asset("/assets/course-bg.png")}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,18,14,0.74) 0%, rgba(20,18,14,0.80) 55%, rgba(20,18,14,0.88) 100%)",
          }}
        />
      </div>

      <div className="container relative">
        {/* Title + price / intro + CTA */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>{COURSE.eyebrow}</Eyebrow>
            <h2 className="display-2 text-white">{COURSE.title}</h2>
            <div className="flex flex-wrap items-end gap-3">
              <span className="font-display text-6xl font-medium leading-none text-gradient-gold sm:text-7xl">
                {COURSE.price}
              </span>
              <span className="mb-1 font-body text-sm text-white/70">
                {COURSE.priceNote}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col items-start gap-6">
            <p className="font-body text-base font-light leading-relaxed text-white/85">
              {COURSE.intro}
            </p>
            <p className="flex items-center gap-2 font-body text-sm text-white/70">
              <span className="text-gold">●</span>
              {COURSE.monthlyNote}
            </p>
            <a href={COURSE.cta.href} className="btn-gold">
              {COURSE.cta.label}
            </a>
          </Reveal>
        </div>

        {/* Monthly modules */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {COURSE.modules.map((m) => (
            <div
              key={m.index}
              className="flex flex-col rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-2xl italic text-gold-soft">
                  Модуль {m.index}
                </span>
                <span className="font-body text-xs uppercase tracking-wide2 text-white/50">
                  {m.meta}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl text-white">{m.title}</h3>
              <p className="mt-3 font-body text-sm font-light leading-relaxed text-white/70">
                {m.description}
              </p>
              <div className="mt-6 h-px w-16 bg-white/20" />
              <span className="mt-5 font-display text-2xl font-medium text-white">
                {m.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
