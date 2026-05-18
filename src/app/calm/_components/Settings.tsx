"use client";

import { motion } from "motion/react";
import { palette, type SettingsGroup } from "../_data";
import { useCalmMotion } from "./use-calm-motion";

/**
 * Pieza interna (5): preferencias suaves. Listas pareadas clave/valor, mucho
 * aire, sin toggles ruidosos — coherente con el ritmo lento del estilo.
 */
export function Settings({ grupos }: { grupos: SettingsGroup[] }) {
  const { reveal } = useCalmMotion();
  const { sage, ink, muted, line } = palette;

  return (
    <section id="calm-settings" className="scroll-mt-10">
      <motion.p
        {...reveal()}
        className="text-[11px] uppercase tracking-[0.35em] mb-3"
        style={{ color: sage }}
      >
        ajustes
      </motion.p>
      <motion.h2
        {...reveal(0.06)}
        className="font-cormorant text-5xl sm:text-6xl font-light leading-[1.05] mb-12"
        style={{ color: ink }}
      >
        El detrás{" "}
        <em className="italic" style={{ color: sage }}>
          de la app.
        </em>
      </motion.h2>

      {grupos.map((g, gi) => (
        <motion.div key={g.titulo} {...reveal(gi * 0.08)} className="mb-10">
          <p
            className="font-cormorant italic text-2xl mb-4 pb-2"
            style={{ color: ink, borderBottom: `1px solid ${line}` }}
          >
            {g.titulo}
          </p>
          <div className="space-y-3">
            {g.items.map((it) => (
              <div
                key={it.k}
                className="flex items-center justify-between py-2"
              >
                <p className="font-cormorant text-lg" style={{ color: muted }}>
                  {it.k}
                </p>
                <p className="text-sm" style={{ color: ink }}>
                  {it.v}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
