"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Makes all Framer Motion animation honour the user's OS "reduce motion"
 * setting (disables transform/layout motion, keeps gentle opacity fades).
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
