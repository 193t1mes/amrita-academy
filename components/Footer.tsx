import { AnimatedLogo } from "@/components/AnimatedLogo";
import { Reveal } from "@/components/Reveal";
import {
  BRAND,
  CONTACT,
  FOOTER,
  NAV_LINKS,
  PROGRAMS,
} from "@/lib/content";

function ColHeading({ children }: { children: string }) {
  return (
    <h3 className="inline-flex items-center gap-2.5 font-body text-xs uppercase tracking-eyebrow text-gold">
      <span className="inline-block h-[6px] w-[6px] rotate-45 bg-gold" />
      {children}
    </h3>
  );
}

/** Refined, symmetric dark footer. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-ivory">
      {/* Soft gold halo + faint watermark for depth */}
      <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 hidden -translate-x-1/2 opacity-[0.04] lg:block"
      >
        <AnimatedLogo className="h-[30rem] w-[30rem]" spin={false} />
      </div>

      <div className="container relative z-10 py-20 md:py-24">
        {/* Brand — centred */}
        <Reveal className="flex flex-col items-center text-center">
          <AnimatedLogo className="h-14 w-14" spin />
          <span className="mt-4 font-display text-2xl tracking-tight text-ivory">
            AMRITA <span className="text-gold">ACADEMY</span>
          </span>
          <p className="mt-4 max-w-md font-body text-sm font-light leading-relaxed text-ivory/60">
            {FOOTER.tagline}
          </p>
        </Reveal>

        {/* Ornamental divider */}
        <div className="mx-auto mt-12 flex max-w-3xl items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/35" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/35" />
        </div>

        {/* Three symmetric columns */}
        <div className="mt-14 grid gap-12 text-center sm:grid-cols-3">
          <Reveal className="flex flex-col items-center gap-6">
            <ColHeading>Навигация</ColHeading>
            <ul className="flex flex-col gap-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm font-light text-ivory/70 transition-colors duration-300 ease-smooth hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col items-center gap-6">
            <ColHeading>Программы</ColHeading>
            <ul className="flex flex-col gap-3.5">
              {PROGRAMS.map((p) => (
                <li key={p.index}>
                  <a
                    href="#programs"
                    className="font-body text-sm font-light text-ivory/70 transition-colors duration-300 ease-smooth hover:text-gold"
                  >
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16} className="flex flex-col items-center gap-6">
            <ColHeading>Контакты</ColHeading>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-body text-sm font-light text-ivory/70 transition-colors duration-300 ease-smooth hover:text-gold"
                >
                  {CONTACT.email}
                </a>
              </li>
              {FOOTER.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="font-body text-sm font-light text-ivory/70 transition-colors duration-300 ease-smooth hover:text-gold"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-8 md:mt-20">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="font-body text-xs font-light tracking-wide text-ivory/50">
              © {year} {BRAND.ru}. Все права защищены.
            </p>
            <p className="font-body text-xs font-light italic tracking-wide text-ivory/55">
              Сделано с любовью и намерением.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
