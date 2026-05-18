"use client";

import { motion } from "motion/react";
import { palette, type Feature } from "../_data";
import { useAiryMotion } from "./use-airy-motion";

/** Pieza externa: features clave, cards aireadas (restraint). */
export function Features({ features }: { features: Feature[] }) {
  const { reduce, reveal } = useAiryMotion();
  const { accent, muted, border, card, text } = palette;

  return (
    <section className="max-w-6xl mx-auto px-2 sm:px-4">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.22em] mb-2 font-semibold" style={{ color: accent }}>
          Lo que ya está adentro
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Todo el consultorio, sin abrir cinco pestañas
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.titulo}
            {...reveal(i * 0.06)}
            whileHover={reduce ? undefined : { y: -4 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            className="rounded-2xl p-6"
            style={{ backgroundColor: card, border: `1px solid ${border}` }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-lg mb-4"
              style={{ backgroundColor: palette.accentSoft }}
            >
              {f.icon}
            </div>
            <h3 className="font-semibold mb-1.5" style={{ color: text }}>{f.titulo}</h3>
            <p className="text-sm leading-relaxed" style={{ color: muted }}>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
