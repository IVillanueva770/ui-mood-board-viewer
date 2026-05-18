"use client";

import { motion } from "motion/react";
import { palette, type Feature } from "../_data";
import { useWebMotion } from "./use-web-motion";

/** Pieza externa: value trio en grid responsive. */
export function FeatureTrio({ features }: { features: Feature[] }) {
  const { reveal, hoverLift } = useWebMotion();
  const { text, muted, border, surface } = palette;

  return (
    <section className="max-w-6xl mx-auto px-5">
      <div className="mb-9">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: text }}>
          Una red que no te pelea
        </h2>
        <p className="text-sm mt-2" style={{ color: muted }}>
          Tres decisiones de diseño que no vas a encontrar en las otras.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.titulo}
            {...reveal(i * 0.06)}
            {...hoverLift}
            className="p-6 rounded-2xl"
            style={{ backgroundColor: surface, border: `1px solid ${border}` }}
          >
            <div className="w-9 h-9 rounded-full mb-4" style={{ backgroundColor: f.dot, opacity: 0.9 }} />
            <h3 className="font-bold text-lg mb-2" style={{ color: text }}>{f.titulo}</h3>
            <p className="text-sm leading-relaxed" style={{ color: muted }}>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
