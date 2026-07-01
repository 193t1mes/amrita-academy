"use client";

import { Parallax } from "@/components/Parallax";
import { asset } from "@/lib/asset";

/**
 * Hero — clean full-screen background video, nothing overlaid.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100svh] w-full overflow-hidden bg-ink"
    >
      <Parallax distance={80} className="absolute inset-0">
        <video
          className="h-full w-full scale-110 object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src={asset("/assets/hero.mp4")} type="video/mp4" />
        </video>
      </Parallax>
    </section>
  );
}
