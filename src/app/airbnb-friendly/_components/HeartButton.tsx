"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { palette } from "../_data";

/** Pop del corazón: scale 1 → 1.28 → 1 con spring gentil al togglear (firma). */
export function HeartButton({ defaultLiked = false }: { defaultLiked?: boolean }) {
  const reduce = useReducedMotion();
  const [liked, setLiked] = useState(defaultLiked);

  return (
    <motion.button
      type="button"
      aria-label={liked ? "Quitar de guardados" : "Guardar en tu wishlist"}
      aria-pressed={liked}
      onClick={(ev) => {
        ev.stopPropagation();
        setLiked((v) => !v);
      }}
      whileTap={reduce ? undefined : { scale: 0.82 }}
      className="w-9 h-9 rounded-full flex items-center justify-center text-lg leading-none shadow-sm"
      style={{ backgroundColor: "rgba(255,255,255,0.94)" }}
    >
      <motion.span
        initial={false}
        animate={reduce ? { scale: 1 } : { scale: liked ? [1, 1.28, 1] : 1 }}
        transition={{ type: "spring", stiffness: 360, damping: 13 }}
        style={{ color: liked ? palette.rausch : palette.muted, display: "inline-block" }}
      >
        {liked ? "♥" : "♡"}
      </motion.span>
    </motion.button>
  );
}
