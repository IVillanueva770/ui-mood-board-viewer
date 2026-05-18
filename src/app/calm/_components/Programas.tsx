"use client";

import { motion } from "motion/react";
import { palette, type Programa } from "../_data";
import { useCalmMotion } from "./use-calm-motion";

/**
 * Pieza externa: "Qué incluye" — 4 cards aireadas, ritmo lento. Cada card se
 * revela con fade-up escalonado y levanta suave al hover (sin bounce).
 */
export function Programas({ programas }: { programas: Programa[] }) {
  const { reveal, lift } = useCalmMotion();
  const { sage, ink, surface, muted, line } = palette;

  return (
    <section>
      <motion.p
        {...reveal()}
        className="text-[11px] uppercase tracking-[0.35em] mb-8 text-center"
        style={{ color: sage }}
      >
        Qué incluye
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {programas.map((p, i) => (
          <motion.div
            key={p.tit}
            {...reveal(i * 0.1)}
            {...lift}
            className="p-8"
            style={{ backgroundColor: surface, borderRadius: 22, border: `1px solid ${line}` }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.3em] mb-5 font-mono"
              style={{ color: sage }}
            >
              · {p.n}
            </p>
            <div
              className="w-10 h-10 rounded-full mb-6"
              style={{ backgroundColor: p.color, opacity: 0.85 }}
            />
            <h3 className="font-cormorant text-3xl mb-3" style={{ color: ink }}>
              {p.tit}
            </h3>
            <p
              className="font-cormorant italic text-lg leading-relaxed"
              style={{ color: muted }}
            >
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
