import { SectionHeading } from "@/components/primitives";
import { TextReveal } from "@/components/TextReveal";
import { REVIEWS, REVIEWS_SECTION } from "@/lib/content";

/** Testimonials — quotes reveal word-by-word (Arc-style) on scroll. */
export function Reviews() {
  return (
    <section id="reviews" className="section-y relative overflow-hidden bg-canvas">
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[26rem] w-[26rem] bg-radial-gold" />

      <div className="container relative">
        <SectionHeading
          align="center"
          eyebrow={REVIEWS_SECTION.eyebrow}
          title={REVIEWS_SECTION.title}
          intro={REVIEWS_SECTION.intro}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="flex h-full flex-col rounded-3xl border border-line bg-ivory/70 p-8 shadow-[0_24px_70px_-40px_rgba(34,30,24,0.22)]"
            >
              <span
                aria-hidden="true"
                className="font-display text-5xl leading-none text-gold-soft"
              >
                &ldquo;
              </span>
              <blockquote className="mt-1 flex-1">
                <TextReveal
                  text={r.quote}
                  className="font-body text-[15px] font-light leading-relaxed text-ink"
                />
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-5">
                <div className="font-display text-lg text-ink">{r.name}</div>
                <div className="mt-1 font-body text-xs uppercase tracking-wide2 text-gold-deep">
                  {r.meta}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
