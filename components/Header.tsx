"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/content";
import { cn } from "@/lib/asset";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth",
        scrolled || open
          ? "border-b border-line/70 bg-canvas/85 shadow-[0_12px_34px_-20px_rgba(34,30,24,0.5)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between transition-[height] duration-500 ease-smooth",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <a href="#hero" className="group flex items-center" aria-label="AMRITA ACADEMY — наверх">
          <span className="font-display text-lg font-medium tracking-wide text-ink">
            AMRITA <span className="text-gold-deep">ACADEMY</span>
          </span>
        </a>

        <nav
          className="relative hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHovered(link.href)}
              className="relative rounded-full px-4 py-2 font-body text-sm font-medium text-ink/75 transition-colors duration-300 hover:text-ink"
            >
              {hovered === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gold/15"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-gold hidden lg:inline-flex">
          Записаться
        </a>

        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={cn(
              "h-px w-6 bg-ink transition-all duration-300",
              open && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn("h-px w-6 bg-ink transition-all duration-300", open && "opacity-0")}
          />
          <span
            className={cn(
              "h-px w-6 bg-ink transition-all duration-300",
              open && "-translate-y-[7px] -rotate-45",
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 -z-10 flex flex-col items-center justify-center gap-8 bg-canvas lg:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i + 0.1, duration: 0.4 }}
                className="font-display text-3xl text-ink transition-colors hover:text-gold-deep"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * NAV_LINKS.length + 0.1, duration: 0.4 }}
              className="btn-gold mt-2"
            >
              Записаться
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
