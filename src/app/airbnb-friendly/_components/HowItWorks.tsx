"use client";

import { motion } from "motion/react";
import { palette, type Paso } from "../_data";
import { useWarmMotion } from "./use-warm-motion";

/** Pieza externa: proceso en 3 pasos, tono humano (firma del estilo). */
export function HowItWorks({ pasos }: { pasos: Paso[] }) {
  const { reveal, lift } = useWarmMotion();
  const { rausch, muted, border, softPink } = palette;

  return (
    <section className="mt-2">
      <div className="text-center mb-9">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">¿Cómo funciona?</h2>
        <p className="text-base max-w-lg mx-auto" style={{ color: muted }}>
          Sin pasos raros ni letra chica. Te lo explicamos como se lo explicarías a un amigo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {pasos.map((s, i) => (
          <motion.div
            key={s.n}
            {...reveal(i * 0.08)}
            {...lift}
            className="bg-white rounded-2xl p-6 text-center"
            style={{ border: `1px solid ${border}` }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4"
              style={{ backgroundColor: softPink }}
            >
              {s.icon}
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: rausch }}>
              Paso {s.n}
            </p>
            <p className="text-lg font-semibold mb-2">{s.titulo}</p>
            <p className="text-sm leading-relaxed" style={{ color: muted }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
