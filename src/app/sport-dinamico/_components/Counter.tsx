"use client";

import { useRef, useState, type CSSProperties } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Counter sprint — firma numérica del estilo: el número arranca en 0 y
 * CORRE hasta el target con un ease-out fuerte (rápido, frena seco) la
 * primera vez que entra al viewport. Reduced-motion: muestra el valor final
 * sin animar (mantiene el dato, saca el sprint).
 *
 * Desacoplado: recibe el target por prop, no sabe de dónde salió el dato.
 */
export function Counter({
  to,
  durationMs = 850,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
  style,
}: {
  to: number;
  durationMs?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);
  const started = useRef(false);

  const run = () => {
    if (started.current) return;
    started.current = true;
    if (reduce) return;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3); // sprint: rápido y frena
      setVal(to * eased);
      if (p < 1) requestAnimationFrame(tick);
      else setVal(to);
    };
    requestAnimationFrame(tick);
  };

  const txt =
    decimals > 0
      ? val.toFixed(decimals)
      : Math.round(val).toLocaleString("es-AR");

  return (
    <motion.span
      onViewportEnter={run}
      viewport={{ once: true, margin: "-40px" }}
      className={className}
      style={style}
    >
      {prefix}
      {txt}
      {suffix}
    </motion.span>
  );
}
