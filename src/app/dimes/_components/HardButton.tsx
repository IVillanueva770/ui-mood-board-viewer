"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { palette } from "../_data";
import { useBrutalMotion } from "./use-brutal-motion";

type Variant = "solid" | "outline" | "accent";

/**
 * Botón canónico brutalist — un solo lugar define la firma para TODO botón
 * del estilo (consistencia exigida por el plan). Hard-shadow-shift snappy.
 */
export function HardButton({
  children,
  variant = "solid",
  accent = palette.lime,
  rest = 5,
  hover = 8,
  className = "",
  onClick,
}: {
  children: ReactNode;
  variant?: Variant;
  accent?: string;
  rest?: number;
  hover?: number;
  className?: string;
  onClick?: () => void;
}) {
  const { hardShadow } = useBrutalMotion();
  const { ink, bg } = palette;

  const skin =
    variant === "solid"
      ? { backgroundColor: ink, color: bg, border: `2px solid ${ink}` }
      : variant === "accent"
      ? { backgroundColor: accent, color: ink, border: `2px solid ${ink}` }
      : { backgroundColor: "transparent", color: ink, border: `2px solid ${ink}` };

  const shadowColor = variant === "accent" ? ink : variant === "solid" ? accent : ink;

  return (
    <motion.button
      {...hardShadow(rest, hover, shadowColor)}
      onClick={onClick}
      className={`px-6 py-3 font-bebas text-xl tracking-wide uppercase ${className}`}
      style={skin}
    >
      {children}
    </motion.button>
  );
}
