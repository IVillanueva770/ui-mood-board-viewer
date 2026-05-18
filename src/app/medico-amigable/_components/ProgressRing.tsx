"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Anillo de progreso — firma de motion del estilo: se llena con un spring
 * calmo (sin rebote) cuando el valor cambia. Reduced-motion = salto directo.
 */
export function ProgressRing({
  value,
  size = 132,
  stroke = 12,
  color,
  track,
  centerTop,
  centerBottom,
  textColor,
  mutedColor,
}: {
  value: number; // 0..100
  size?: number;
  stroke?: number;
  color: string;
  track: string;
  centerTop: string;
  centerBottom: string;
  textColor: string;
  mutedColor: string;
}) {
  const reduce = useReducedMotion();
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, value));
  const offset = c - (clamped / 100) * c;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          initial={reduce ? false : { strokeDashoffset: c }}
          animate={{ strokeDashoffset: offset }}
          transition={
            reduce
              ? { duration: 0 }
              : { type: "spring", stiffness: 60, damping: 18, mass: 1 }
          }
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-semibold tracking-tight" style={{ color: textColor }}>
          {centerTop}
        </span>
        <span className="text-[11px] mt-0.5" style={{ color: mutedColor }}>
          {centerBottom}
        </span>
      </div>
    </div>
  );
}
