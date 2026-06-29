"use client";

import { useState, type FormEvent } from "react";
import { SacredIcon } from "@/components/SacredIcons";
import { SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { CONTACT } from "@/lib/content";

type ContactChannel = {
  label: string;
  value: string;
  href: string;
};

const CHANNELS: ContactChannel[] = [
  {
    label: "Электронная почта",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    label: "Telegram",
    value: CONTACT.telegram,
    href: "https://t.me/amrita_academy",
  },
  {
    label: "Instagram",
    value: CONTACT.instagram,
    href: "https://instagram.com/amrita.academy",
  },
];

const inputClasses =
  "w-full rounded-xl border border-line bg-ivory/40 px-4 py-3 font-body text-ink placeholder:text-ink-mute transition-colors duration-300 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";

export function Contact() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name.trim() && contact.trim()) {
      setError(false);
      setSent(true);
      return;
    }
    setError(true);
  }

  return (
    <section
      id="contact"
      className="section-y relative overflow-hidden bg-ivory"
    >
      {/* Soft gold glow + faint sacred mark in the corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-[28rem] w-[28rem] bg-radial-gold"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-[-3rem] hidden text-gold/10 lg:block"
      >
        <SacredIcon name="satnam" className="h-64 w-64 animate-spin-slower" />
      </div>

      <div className="container relative">
        <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Left — heading + direct contact channels */}
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow={CONTACT.eyebrow}
              title={CONTACT.title}
              intro={CONTACT.intro}
            />

            <Reveal delay={0.1}>
              <ul className="flex flex-col">
                {CHANNELS.map((channel, i) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      className={`group flex flex-col gap-1 py-5 transition-colors duration-300 hover:text-gold-deep ${
                        i > 0 ? "border-t border-line" : ""
                      }`}
                    >
                      <span className="font-body text-xs uppercase tracking-eyebrow text-gold-deep">
                        {channel.label}
                      </span>
                      <span className="font-display text-xl text-ink transition-colors duration-300 group-hover:text-gold-deep sm:text-2xl">
                        {channel.value}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right — form card */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-line bg-canvas p-8 shadow-[0_30px_80px_-50px_rgba(34,30,24,0.3)] sm:p-10">
              {sent ? (
                <div className="flex min-h-[20rem] flex-col items-center justify-center gap-6 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 text-gold">
                    <SacredIcon name="rays" className="h-9 w-9" />
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-display text-2xl text-ink">
                      Заявка отправлена
                    </h3>
                    <p className="font-body text-base font-light leading-relaxed text-ink-soft">
                      Спасибо! Мы свяжемся с вами в ближайшее время.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-6"
                >
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-name"
                      className="font-body text-xs uppercase tracking-eyebrow text-gold-deep"
                    >
                      {CONTACT.form.name}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder={CONTACT.form.name}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClasses}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-detail"
                      className="font-body text-xs uppercase tracking-eyebrow text-gold-deep"
                    >
                      {CONTACT.form.contact}
                    </label>
                    <input
                      id="contact-detail"
                      name="contact"
                      type="text"
                      required
                      autoComplete="tel"
                      placeholder={CONTACT.form.contact}
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className={inputClasses}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-message"
                      className="font-body text-xs uppercase tracking-eyebrow text-gold-deep"
                    >
                      {CONTACT.form.message}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder={CONTACT.form.message}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  {error ? (
                    <p
                      role="alert"
                      className="font-body text-sm text-gold-deep"
                    >
                      Пожалуйста, оставьте имя и контакт — так мы сможем вам
                      ответить.
                    </p>
                  ) : null}

                  <button type="submit" className="btn-gold w-full">
                    {CONTACT.form.submit}
                  </button>

                  <p className="text-center font-body text-xs leading-relaxed text-ink-soft">
                    {CONTACT.form.note}
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
