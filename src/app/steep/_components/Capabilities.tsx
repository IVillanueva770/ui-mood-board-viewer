"use client";

import { motion } from "motion/react";
import { tokens, type Capability } from "../_data";
import { useSteepMotion } from "./use-steep-motion";

/**
 * Externo · pieza 2: capabilities. Tres tarjetas con número monoespaciado,
 * título serif itálico (gravitas) y cuerpo sans. Hover = lift con mist tenue.
 */
export function Capabilities({ capabilities }: { capabilities: Capability[] }) {
  const { reveal, lift } = useSteepMotion();

  return (
    <section>
      <motion.h2
        {...reveal(0)}
        className="font-cormorant text-4xl sm:text-5xl font-medium leading-tight mb-3"
        style={{ color: tokens.ink }}
      >
        Rigor, <em className="italic" style={{ color: tokens.terracotta }}>con calidez.</em>
      </motion.h2>
      <motion.p
        {...reveal(1)}
        className="text-base leading-relaxed max-w-2xl mb-12"
        style={{ color: tokens.slate }}
      >
        Tres cosas que tu equipo de datos deja de pelear el primer día.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {capabilities.map((c, i) => (
          <motion.div
            key={c.num}
            {...reveal(i + 1)}
            {...lift}
            className="p-7 rounded-2xl"
            style={{ backgroundColor: tokens.surface }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.3em] mb-5 font-mono"
              style={{ color: tokens.terracotta }}
            >
              · {c.num}
            </p>
            <h3
              className="font-cormorant italic text-2xl mb-3 leading-tight"
              style={{ color: tokens.ink }}
            >
              {c.titulo}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: tokens.slate }}>
              {c.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
