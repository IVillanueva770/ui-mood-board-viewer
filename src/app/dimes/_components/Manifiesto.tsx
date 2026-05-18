"use client";

import { motion } from "motion/react";
import { palette, type ManifiestoLinea } from "../_data";
import { useBrutalMotion } from "./use-brutal-motion";

/**
 * Pieza externa: manifiesto/about con la tipografía como protagonista
 * (lo que faltaba en el monolito). Bloque ink, líneas que entran secas.
 */
export function Manifiesto({ lineas }: { lineas: ManifiestoLinea[] }) {
  const { reduce } = useBrutalMotion();
  const { ink, bg, lime } = palette;

  return (
    <section
      className="p-6 sm:p-12"
      style={{ backgroundColor: ink, color: bg, border: `3px solid ${ink}` }}
    >
      <p className="text-xs uppercase tracking-[0.3em] mb-6 font-bold" style={{ color: lime }}>
        Manifiesto · sin asteriscos
      </p>
      <h2 className="font-bebas text-5xl sm:text-8xl leading-[0.92] tracking-wide">
        {lineas.map((l, i) => (
          <motion.span
            key={i}
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.18, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
            className="block"
            style={{ color: l.resaltado ? lime : bg }}
          >
            {l.texto}
          </motion.span>
        ))}
      </h2>
      <p className="mt-8 text-base sm:text-lg max-w-xl font-medium" style={{ color: bg }}>
        12 años, 47 proyectos, cero plantillas. Trabajamos con marcas que prefieren
        molestar a diez y enamorar a mil, antes que tibiar a todos.
      </p>
    </section>
  );
}
