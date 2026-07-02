import { SectionHeading } from "@/components/primitives";
import { REVIEWS, REVIEWS_SECTION, type Review } from "@/lib/content";

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold" aria-label="Оценка 5 из 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true" className="text-sm leading-none">
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="flex w-[330px] shrink-0 flex-col rounded-2xl border border-line bg-ivory/80 p-7 shadow-[0_20px_60px_-42px_rgba(34,30,24,0.28)]">
      <div className="flex items-center gap-3.5">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-mist font-display text-lg font-medium text-gold-deep">
          {r.name.charAt(0)}
        </span>
        <div className="min-w-0">
          <div className="font-display text-base text-ink">{r.name}</div>
          <div className="mt-0.5 truncate font-body text-[11px] uppercase tracking-wide2 text-gold-deep">
            {r.meta}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Stars />
      </div>

      <blockquote className="mt-3 font-body text-sm font-light leading-relaxed text-ink-soft">
        {r.quote}
      </blockquote>
    </figure>
  );
}

/** Testimonials — a single-row, right→left infinite marquee. */
export function Reviews() {
  // Duplicate the list so the -50% loop is seamless.
  const track = [...REVIEWS, ...REVIEWS];

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
      </div>

      {/* Full-width marquee with soft edge fade */}
      <div
        className="reviews-viewport relative mt-16 overflow-hidden md:mt-20"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)",
          maskImage:
            "linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)",
        }}
      >
        <div className="reviews-marquee flex w-max gap-6 px-6">
          {track.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
