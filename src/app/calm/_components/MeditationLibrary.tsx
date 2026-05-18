"use client";

import { motion } from "motion/react";
import { palette, type CategoriaMeditacion } from "../_data";
import { useCalmMotion } from "./use-calm-motion";

/**
 * Pieza interna (2): biblioteca de meditaciones por estado. Lista calma con
 * nudge lateral lentísimo al hover (sin bounce). Cada categoría se revela
 * suave al scrollear.
 */
export function MeditationLibrary({
  categorias,
}: {
  categorias: CategoriaMeditacion[];
}) {
  const { reveal, nudge } = useCalmMotion();
  const { sage, ink, muted, line } = palette;

  return (
    <section id="calm-meditation" className="scroll-mt-10">
      <motion.p
        {...reveal()}
        className="text-[11px] uppercase tracking-[0.35em] mb-3"
        style={{ color: sage }}
      >
        meditations
      </motion.p>
      <motion.h2
        {...reveal(0.06)}
        className="font-cormorant text-5xl sm:text-6xl font-light leading-[1.05] mb-12"
        style={{ color: ink }}
      >
        Un ejercicio para{" "}
        <em className="italic" style={{ color: sage }}>
          cada estado.
        </em>
      </motion.h2>

      {categorias.map((g, gi) => (
        <motion.div key={g.cat} {...reveal(gi * 0.08)} className="mb-12">
          <div
            className="flex items-baseline gap-4 mb-5 pb-3"
            style={{ borderBottom: `1px solid ${line}` }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: g.color }}
            />
            <p className="font-cormorant italic text-2xl" style={{ color: ink }}>
              {g.cat}
            </p>
            <span className="text-xs ml-auto" style={{ color: sage }}>
              {g.items.length} sesiones
            </span>
          </div>
          <div className="space-y-1">
            {g.items.map((it) => (
              <motion.div
                key={it.t}
                {...nudge}
                className="flex items-center justify-between py-3 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: g.color }}
                  />
                  <p className="font-cormorant text-xl" style={{ color: ink }}>
                    {it.t}
                  </p>
                </div>
                <p className="text-sm" style={{ color: muted }}>
                  {it.min}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
