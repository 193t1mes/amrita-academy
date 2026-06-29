import clsx, { type ClassValue } from "clsx";

/**
 * Prefix a public asset path with the deploy basePath so raw URLs
 * (e.g. <video src>, background images, metadata icons) resolve correctly
 * both locally ("") and on GitHub Pages ("/amrita-academy").
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Tailwind-friendly className combiner. */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
