import type { ReactNode } from "react";
import { cn } from "@/lib/asset";
import { Reveal } from "@/components/Reveal";

/** Uppercase, letter-spaced label with a gold diamond — sits above section titles. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn("eyebrow", className)}>{children}</span>;
}

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  className?: string;
};

/** Standard, animated heading block: eyebrow → title → optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        centered && "items-center text-center",
        centered ? "mx-auto max-w-2xl" : "max-w-3xl",
        className,
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="display-2">{title}</h2>
      {intro ? (
        <p
          className={cn(
            "font-body text-lg font-light leading-relaxed text-ink-soft",
            centered && "mx-auto",
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

/** A thin centered gold rule with a diamond — section divider motif. */
export function GoldRule({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
    </div>
  );
}
