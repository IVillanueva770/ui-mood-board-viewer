"use client";

import { type CSSProperties, type ReactNode } from "react";
import { motion } from "motion/react";
import { useEtherealMotion } from "./use-ethereal-motion";

/**
 * Título con type mask reveal (clip-path wipe descendente) — firma de
 * ethereal. Reutilizado por el hero y los encabezados de sección.
 */
export function MaskHeading({
  children,
  className = "",
  style,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}) {
  const { maskReveal } = useEtherealMotion();
  return (
    <motion.h2 {...maskReveal(delay)} className={className} style={style}>
      {children}
    </motion.h2>
  );
}
