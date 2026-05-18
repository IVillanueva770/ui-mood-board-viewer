"use client";

import { motion, useReducedMotion } from "motion/react";
import { palette } from "../_data";

/**
 * Botón de "marcar hecho" — check con bounce contenido (firma calma).
 * Controlado: el padre maneja el estado para que el anillo reaccione en vivo.
 */
export function CheckExercise({
  done,
  onToggle,
  size = 28,
}: {
  done: boolean;
  onToggle: () => void;
  size?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.button
      type="button"
      aria-pressed={done}
      aria-label={done ? "Marcar como pendiente" : "Marcar como hecho"}
      onClick={onToggle}
      whileTap={reduce ? undefined : { scale: 0.9 }}
      className="rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
      style={{
        width: size,
        height: size,
        backgroundColor: done ? palette.greenSoft : palette.surface,
        color: done ? palette.greenText : palette.muted,
        border: `1.5px solid ${done ? "#86efac" : palette.border}`,
      }}
    >
      <motion.span
        initial={false}
        animate={reduce ? { scale: 1 } : { scale: done ? [1, 1.18, 1] : 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 16 }}
        style={{ display: "inline-block", lineHeight: 1 }}
      >
        {done ? "✓" : "○"}
      </motion.span>
    </motion.button>
  );
}
