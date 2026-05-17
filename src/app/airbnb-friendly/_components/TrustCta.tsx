"use client";

import { motion } from "motion/react";
import { palette, type ItemConfianza } from "../_data";
import { useWarmMotion } from "./use-warm-motion";

/** Pieza externa: band de confianza + CTA final (reusa "persona real, no bot"). */
export function TrustCta({ items }: { items: ItemConfianza[] }) {
  const { reveal, bounce } = useWarmMotion();
  const { rausch, text, muted, border } = palette;

  return (
    <motion.section
      {...reveal(0)}
      className="rounded-3xl p-8 sm:p-12 mt-16 text-center overflow-hidden"
      style={{ background: "linear-gradient(135deg,#ffe4e6 0%, #fef3c7 100%)" }}
    >
      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: rausch }}>
        Reservá tranquilo
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3 max-w-2xl mx-auto">
        Tu próxima escapada está a un clic.
      </h2>
      <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: text }}>
        Más de <span style={{ fontWeight: 600 }}>2.300 alojamientos</span> en todo el país, con
        cancelación flexible y gente real para ayudarte.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-9">
        {items.map((b) => (
          <div key={b.titulo} className="bg-white/70 rounded-2xl p-4">
            <div className="text-2xl mb-1.5">{b.icon}</div>
            <p className="font-semibold text-sm">{b.titulo}</p>
            <p className="text-xs mt-0.5" style={{ color: muted }}>{b.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <motion.button
          {...bounce}
          className="px-7 py-3.5 rounded-full text-white text-sm font-semibold shadow-sm"
          style={{ backgroundColor: rausch }}
        >
          Buscar alojamiento
        </motion.button>
        <motion.button
          {...bounce}
          className="px-7 py-3.5 rounded-full text-sm font-semibold bg-white"
          style={{ border: `1px solid ${border}`, color: text }}
        >
          ¿Cómo funciona?
        </motion.button>
      </div>
    </motion.section>
  );
}
