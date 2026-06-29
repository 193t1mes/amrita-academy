import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import { asset } from "@/lib/asset";
import { HERO } from "@/lib/content";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

// Elegant high-contrast serif for display type (Cyrillic-capable).
const display = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Light, airy geometric sans for body + UI (Cyrillic-capable).
const body = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://193t1mes.github.io/amrita-academy/"),
  title: "AMRITA ACADEMY — Академия Амрита",
  description: HERO.intro,
  keywords: [
    "Академия Амрита",
    "Amrita Academy",
    "кундалини-йога",
    "медитация",
    "целительство",
    "энерготерапия",
    "космоэнергетика",
    "Sat Nam Rasayan",
    "женские практики",
    "ретриты",
  ],
  icons: {
    icon: [{ url: asset("/assets/logo.jpg") }],
    apple: [{ url: asset("/assets/logo.jpg") }],
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "AMRITA ACADEMY — Академия Амрита",
    description: HERO.subtitle,
    images: [{ url: asset("/assets/logo.jpg") }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
