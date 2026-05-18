"use client";

import { motion } from "motion/react";
import { palette, type Testimonio } from "../_data";
import { useCalmMotion } from "./use-calm-motion";

/**
 * Pieza externa: "Cómo se siente" — sección emocional, no métricas agresivas.
 * Citas en serif italic grande, mucho aire entre ellas, fade lento al entrar.
 */
export function Testimonios({ testimonios }: { testimonios: Testimonio[] }) {
  const { reveal } = useCalmMotion();
  const { sage, ink, muted, line } = palette;

  return (
    <section className="max-w-3xl mx-auto text-center">
      <motion.p
        {...reveal()}
        className="text-[11px] uppercase tracking-[0.35em] mb-14"
        style={{ color: sage }}
      >
        Cómo se siente
      </motion.p>

      <div className="space-y-16">
        {testimonios.map((t, i) => (
          <motion.figure key={t.autor} {...reveal(i * 0.12)}>
            <blockquote
              className="font-cormorant italic text-2xl sm:text-4xl leading-[1.4]"
              style={{ color: ink }}
            >
              “{t.texto}”
            </blockquote>
            <figcaption
              className="mt-7 text-xs uppercase tracking-[0.3em]"
              style={{ color: sage }}
            >
              {t.autor}
              <span style={{ color: muted }}> · {t.contexto}</span>
            </figcaption>
            {i < testimonios.length - 1 && (
              <div
                className="w-10 h-px mx-auto mt-16"
                style={{ backgroundColor: line }}
              />
            )}
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
