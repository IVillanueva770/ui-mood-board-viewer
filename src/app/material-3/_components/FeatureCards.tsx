"use client";

import { motion } from "motion/react";
import { m3, elevation, type Feature } from "../_data";
import { useM3Motion } from "./use-m3-motion";

/**
 * Pieza externa 2 — "Qué hace": cards con elevación tonal Material 3.
 * Hover = sube de nivel de elevación (firma: elevación tonal animada).
 */
export function FeatureCards({ features }: { features: Feature[] }) {
  const { enter, EMPHASIZED } = useM3Motion();

  return (
    <section className="max-w-5xl mx-auto px-5">
      <motion.h2
        {...enter()}
        className="text-xl font-medium tracking-tight mb-6"
        style={{ color: m3.onSurface }}
      >
        Qué hace Mango por vos
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {features.map((f, i) => (
          <motion.article
            key={f.titulo}
            {...enter(i)}
            whileHover={{ y: -4, boxShadow: elevation(4) }}
            transition={{ duration: 0.3, ease: EMPHASIZED }}
            className="rounded-3xl p-6"
            style={{ backgroundColor: f.bg, color: f.fg, boxShadow: elevation(1) }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4"
              style={{ backgroundColor: m3.surface, boxShadow: elevation(1) }}
            >
              {f.icon}
            </div>
            <h3 className="text-lg font-medium tracking-tight mb-1.5">{f.titulo}</h3>
            <p className="text-sm leading-relaxed opacity-80">{f.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
