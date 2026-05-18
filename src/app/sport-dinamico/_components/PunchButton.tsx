"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { palette } from "../_data";
import { useSportMotion } from "./use-sport-motion";

/** CTA con scale-punch (firma). `solid` = naranja lleno; `outline` = borde. */
export function PunchButton({
  children,
  variant = "solid",
  className = "",
}: {
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const { punch } = useSportMotion();
  const solid = variant === "solid";

  return (
    <motion.button
      {...punch}
      type="button"
      className={`font-bebas tracking-wider uppercase ${className}`}
      style={
        solid
          ? { backgroundColor: palette.orange, color: palette.bg }
          : {
              border: `2px solid ${palette.ink}`,
              color: palette.ink,
              backgroundColor: "transparent",
            }
      }
    >
      {children}
    </motion.button>
  );
}
