"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { tokens, type Feature } from "../_data";
import { useLinearMotion } from "./use-linear-motion";

/* Iconos SVG inline (sin libs — deps mínimas, mandato del cluster). */
const ICONS: Record<Feature["icon"], ReactNode> = {
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6z" />,
  keyboard: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8" />
    </>
  ),
  layers: <path d="M12 2 2 7l10 5 10-5zM2 12l10 5 10-5M2 17l10 5 10-5" />,
  plug: <path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-10 0zM12 16v6" />,
};

/** Pieza externa: features para power users. Grid dark, borde sutil, fade-up. */
export function FeaturesGrid({ features }: { features: Feature[] }) {
  const { reduce, ring } = useLinearMotion();
  const t = tokens;

  return (
    <motion.section
      initial={reduce ? false : "rest"}
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={{ rest: {}, show: { transition: { staggerChildren: 0.05 } } }}
    >
      <div className="max-w-2xl mb-12">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight mb-3">
          Construido para la velocidad
        </h2>
        <p className="text-sm sm:text-base leading-relaxed" style={{ color: t.fg2 }}>
          Cada decisión de producto empieza con la misma pregunta: ¿esto hace al equipo más rápido?
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden" style={{ backgroundColor: t.line }}>
        {features.map((f) => (
          <motion.div
            key={f.title}
            tabIndex={0}
            variants={{ rest: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            {...ring()}
            className="p-6 cursor-default focus-visible:outline-none"
            style={{ backgroundColor: t.surface, border: `1px solid transparent` }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke={t.lime}
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 mb-5"
            >
              {ICONS[f.icon]}
            </svg>
            <h3 className="text-base font-semibold mb-2">{f.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: t.muted }}>
              {f.body}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
