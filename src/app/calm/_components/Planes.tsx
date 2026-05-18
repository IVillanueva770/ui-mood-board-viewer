"use client";

import { motion } from "motion/react";
import { palette, type Plan } from "../_data";
import { useCalmMotion } from "./use-calm-motion";

/**
 * Pieza externa: planes premium suave — sin pricing agresivo, sin "más
 * popular" gritado. El destacado se marca con borde cálido y relleno tenue,
 * no con escala ni color saturado. CTA con calma.
 */
export function Planes({ planes }: { planes: Plan[] }) {
  const { reveal, lift } = useCalmMotion();
  const { sage, clay, ink, surface, muted, line } = palette;

  return (
    <section>
      <motion.p
        {...reveal()}
        className="text-[11px] uppercase tracking-[0.35em] mb-3 text-center"
        style={{ color: sage }}
      >
        Planes
      </motion.p>
      <motion.h2
        {...reveal(0.08)}
        className="font-cormorant text-4xl sm:text-5xl font-light text-center mb-14"
        style={{ color: ink }}
      >
        Sin letra chica, <em className="italic" style={{ color: sage }}>sin presión.</em>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {planes.map((p, i) => (
          <motion.div
            key={p.nombre}
            {...reveal(i * 0.1)}
            {...lift}
            className="p-9 flex flex-col"
            style={{
              backgroundColor: surface,
              borderRadius: 24,
              border: p.destacado ? `1.5px solid ${clay}` : `1px solid ${line}`,
            }}
          >
            <div className="flex items-baseline justify-between mb-6">
              <p
                className="font-cormorant italic text-2xl"
                style={{ color: ink }}
              >
                {p.nombre}
              </p>
              {p.destacado && (
                <span
                  className="text-[10px] uppercase tracking-[0.25em]"
                  style={{ color: clay }}
                >
                  Recomendado
                </span>
              )}
            </div>

            <div className="mb-2">
              <span className="font-cormorant text-5xl" style={{ color: ink }}>
                {p.precio}
              </span>
              <span className="text-sm ml-2" style={{ color: sage }}>
                {p.periodo}
              </span>
            </div>
            <p
              className="font-cormorant italic text-base leading-relaxed mb-8"
              style={{ color: muted }}
            >
              {p.desc}
            </p>

            <ul className="space-y-3 mb-9 flex-1">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: muted }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: sage }}
                  />
                  {f}
                </li>
              ))}
            </ul>

            <motion.button
              {...lift}
              className="w-full px-7 py-3.5 text-sm tracking-wide"
              style={{
                backgroundColor: p.destacado ? ink : "transparent",
                color: p.destacado ? surface : ink,
                border: p.destacado ? "none" : `1px solid ${ink}`,
                borderRadius: 9999,
              }}
            >
              {p.cta}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
