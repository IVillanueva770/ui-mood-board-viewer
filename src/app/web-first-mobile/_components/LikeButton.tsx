"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { palette } from "../_data";

/**
 * Pop del botón like — firma del estilo: el corazón hace scale 1→1.3→1 y
 * cambia de color al togglear, contador sube. Pop corto, SIN rubber-band iOS.
 */
export function LikeButton({ count, liked: initial }: { count: number; liked: boolean }) {
  const reduce = useReducedMotion();
  const [liked, setLiked] = useState(initial);

  const total = count + (liked ? 1 : 0) - (initial ? 1 : 0);

  return (
    <button
      type="button"
      aria-pressed={liked}
      aria-label={liked ? "Quitar me gusta" : "Me gusta"}
      onClick={(e) => {
        e.stopPropagation();
        setLiked((v) => !v);
      }}
      className="flex items-center gap-1.5 text-xs"
      style={{ color: liked ? palette.like : palette.muted }}
    >
      <motion.span
        initial={false}
        animate={reduce ? { scale: 1 } : { scale: liked ? [1, 1.3, 1] : 1 }}
        transition={{ duration: 0.28, ease: [0.34, 1.3, 0.64, 1] }}
        style={{ display: "inline-block", lineHeight: 1 }}
      >
        {liked ? "♥" : "♡"}
      </motion.span>
      <span className="tabular-nums">{total}</span>
    </button>
  );
}
