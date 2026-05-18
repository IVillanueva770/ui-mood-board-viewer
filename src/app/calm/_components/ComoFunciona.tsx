"use client";

import { motion } from "motion/react";
import { palette, type Paso } from "../_data";
import { useCalmMotion } from "./use-calm-motion";

/**
 * Pieza externa: proceso sereno en 3 pasos. Sin flechas agresivas ni números
 * gigantes — números chicos, mucho aire, reveal lento secuencial.
 */
export function ComoFunciona({ pasos }: { pasos: Paso[] }) {
  const { reveal } = useCalmMotion();
  const { sage, ink, muted, line } = palette;

  return (
    <section className="max-w-3xl mx-auto">
      <motion.p
        {...reveal()}
        className="text-[11px] uppercase tracking-[0.35em] mb-12 text-center"
        style={{ color: sage }}
      >
        Cómo funciona
      </motion.p>

      <div className="space-y-12">
        {pasos.map((p, i) => (
          <motion.div
            key={p.n}
            {...reveal(i * 0.12)}
            className="grid grid-cols-12 gap-6 items-start pb-12"
            style={{ borderBottom: i < pasos.length - 1 ? `1px solid ${line}` : "none" }}
          >
            <div className="col-span-2">
              <span
                className="font-cormorant italic text-3xl"
                style={{ color: sage }}
              >
                {p.n}
              </span>
            </div>
            <div className="col-span-10">
              <h3 className="font-cormorant text-3xl sm:text-4xl mb-3" style={{ color: ink }}>
                {p.tit}
              </h3>
              <p
                className="font-cormorant italic text-lg leading-relaxed max-w-xl"
                style={{ color: muted }}
              >
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
