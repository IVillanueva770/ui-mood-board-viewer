"use client";

import { motion } from "motion/react";

/**
 * Barrido frosted-shimmer multicapa (la firma sobre superficies grandes).
 * Se monta DENTRO de un contenedor con variantes `rest`/`hover` (las hereda).
 * Capas: glow ancho difuso · banda brillante con grano (`#monopo-grain`) ·
 * núcleo radial · contra-pasada azul. Todo `mixBlendMode: screen`, sólo
 * `transform/opacity` → no tira el frame rate.
 */
export function FrostSweep() {
  return (
    <>
      <motion.div
        aria-hidden
        variants={{ rest: { x: "-130%", opacity: 0 }, hover: { x: "130%", opacity: 1 } }}
        transition={{ duration: 1.6, ease: [0.22, 0.61, 0.36, 1] }}
        className="absolute -inset-y-10 w-[85%] pointer-events-none"
        style={{
          background:
            "linear-gradient(108deg, transparent 0%, rgba(167,139,250,0.05) 30%, rgba(167,139,250,0.15) 50%, rgba(96,165,250,0.08) 70%, transparent 100%)",
          filter: "blur(20px)",
          mixBlendMode: "screen",
          transform: "rotate(-2deg)",
        }}
      />
      <motion.div
        aria-hidden
        variants={{ rest: { x: "-115%", opacity: 0 }, hover: { x: "115%", opacity: 1 } }}
        transition={{ duration: 1.3, ease: [0.22, 0.61, 0.36, 1], delay: 0.05 }}
        className="absolute -inset-y-4 w-[55%] pointer-events-none"
        style={{
          background:
            "linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.28) 48%, rgba(255,255,255,0.32) 52%, rgba(167,139,250,0.18) 70%, transparent 100%)",
          filter: "blur(8px) url(#monopo-grain)",
          mixBlendMode: "screen",
          transform: "rotate(-2deg)",
        }}
      />
      <motion.div
        aria-hidden
        variants={{ rest: { x: "-115%", opacity: 0 }, hover: { x: "115%", opacity: 1 } }}
        transition={{ duration: 1.3, ease: [0.22, 0.61, 0.36, 1], delay: 0.05 }}
        className="absolute inset-y-0 w-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 70% at 50% 50%, rgba(255,255,255,0.55) 0%, rgba(167,139,250,0.28) 35%, transparent 65%)",
          mixBlendMode: "screen",
          filter: "blur(2px)",
        }}
      />
      <motion.div
        aria-hidden
        variants={{ rest: { x: "120%", opacity: 0 }, hover: { x: "-120%", opacity: 0.6 } }}
        transition={{ duration: 2, ease: [0.22, 0.61, 0.36, 1], delay: 0.2 }}
        className="absolute inset-y-0 w-1/3 pointer-events-none"
        style={{
          background: "linear-gradient(75deg, transparent 0%, rgba(96,165,250,0.12) 50%, transparent 100%)",
          filter: "blur(14px)",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
