import type { Config } from "tailwindcss";

/**
 * AMRITA ACADEMY design tokens.
 * The palette is sampled directly from the brand logo (gold sacred geometry
 * on white) and the founder photograph (cream / sand / amber at golden hour).
 * The logo is the single source of truth for the visual identity.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Backgrounds — pure white through warm ivory to soft sand.
        canvas: "#FFFFFF",
        ivory: "#FBF8F2",
        sand: "#F5EEE1",
        // Gold — the logo's stroke colour and its tonal range.
        gold: {
          DEFAULT: "#C2A14E",
          deep: "#8A6A1E",
          soft: "#E3D2A6",
          mist: "#F1E8D2",
        },
        // Azure (голубой) — accent used on buttons / pills.
        azure: {
          DEFAULT: "#3585C7",
          deep: "#265E91",
          soft: "#CFE4F5",
          mist: "#EAF3FB",
        },
        // Ink — warm near-black for type, with a muted body tone.
        ink: {
          DEFAULT: "#221E18",
          soft: "#6E6556",
          mute: "#A79C88",
        },
        line: "#ECE3D1",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.32em",
        wide2: "0.18em",
      },
      maxWidth: {
        prose2: "62ch",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "scroll-dot": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both",
        "spin-slow": "spin-slow 60s linear infinite",
        "spin-slower": "spin-slow 120s linear infinite",
        shimmer: "shimmer 6s linear infinite",
        "scroll-dot": "scroll-dot 1.8s ease-in-out infinite",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
