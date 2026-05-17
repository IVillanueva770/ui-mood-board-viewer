"use client";

import { motion, useReducedMotion } from "motion/react";
import { palette } from "../_data";

/** Typing indicator gentil para el inbox. */
export function TypingDots() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span className="text-sm" style={{ color: palette.rausch, fontWeight: 500 }}>
        escribiendo…
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-sm" style={{ color: palette.rausch, fontWeight: 500 }}>
      escribiendo
      <span className="inline-flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ backgroundColor: palette.rausch }}
            animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          />
        ))}
      </span>
    </span>
  );
}
