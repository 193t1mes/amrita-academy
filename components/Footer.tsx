import { AnimatedLogo } from "@/components/AnimatedLogo";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { BRAND, FOOTER, NAV_LINKS } from "@/lib/content";

/** Refined dark footer: brand mark, navigation, contact links and a hairline bottom bar. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-ivory">
      {/* Faint gold halo + watermark logo for depth */}
      <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-40" />
      <div className="pointer-events-none absolute -right-24 -top-24 hidden opacity-[0.04] lg:block">
        <AnimatedLogo className="h-[34rem] w-[34rem]" spin={false} />
      </div>

      <div className="container relative z-10 py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand column */}
          <Reveal className="flex flex-col gap-6">
            <a
              href="#hero"
              className="group inline-flex items-center gap-4"
              aria-label={BRAND.full}
            >
              <AnimatedLogo className="h-12 w-12 shrink-0" spin />
              <span className="font-display text-xl tracking-tight text-ivory">
                AMRITA <span className="text-gold">ACADEMY</span>
              </span>
            </a>
            <p className="max-w-sm font-body text-sm font-light leading-relaxed text-ivory/60">
              {FOOTER.tagline}
            </p>
          </Reveal>

          {/* Navigation column */}
          <Reveal delay={0.08} className="flex flex-col gap-6">
            <h3 className="flex items-center gap-3 font-body text-xs uppercase tracking-eyebrow text-gold">
              <span className="inline-block h-[6px] w-[6px] rotate-45 bg-gold" />
              Навигация
            </h3>
            <Stagger className="flex flex-col gap-3.5" gap={0.08}>
              {NAV_LINKS.map((link) => (
                <StaggerItem key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm font-light text-ivory/70 transition-colors duration-300 ease-smooth hover:text-gold"
                  >
                    {link.label}
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          {/* Socials column */}
          <Reveal delay={0.16} className="flex flex-col gap-6">
            <h3 className="flex items-center gap-3 font-body text-xs uppercase tracking-eyebrow text-gold">
              <span className="inline-block h-[6px] w-[6px] rotate-45 bg-gold" />
              Мы на связи
            </h3>
            <Stagger className="flex flex-col gap-3.5" gap={0.08}>
              {FOOTER.socials.map((social) => (
                <StaggerItem key={social.label}>
                  <a
                    href={social.href}
                    className="group inline-flex items-center gap-2 font-body text-sm font-light text-ivory/70 transition-colors duration-300 ease-smooth hover:text-gold"
                  >
                    <span className="h-px w-5 bg-gold/40 transition-all duration-300 ease-smooth group-hover:w-7 group-hover:bg-gold" />
                    {social.label}
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>

        {/* Hairline + bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-8 md:mt-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
