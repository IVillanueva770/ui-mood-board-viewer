"use client";

import { motion } from "motion/react";
import { palette, type Testimonio, type Sello } from "../_data";
import { usePremiumMotion } from "./use-premium-motion";

/**
 * Pieza externa: confianza. Testimonios de dueños de negocio reales
 * (inmobiliaria / comercio / servicios) + sellos de seguridad.
 */
export function TrustWall({
  testimonios,
  sellos,
}: {
  testimonios: Testimonio[];
  sellos: Sello[];
}) {
  const { reveal, softLift } = usePremiumMotion();
  const { muted, border, card, text } = palette;

  return (
    <section>
      <motion.h2
        {...reveal()}
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-9 text-center"
      >
        Lo usan negocios que no son de tecnología
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12">
        {testimonios.map((t, i) => (
          <motion.figure
            key={t.id}
            {...reveal(i * 0.07)}
            {...softLift}
            className="rounded-2xl p-6 m-0 flex flex-col"
            style={{ backgroundColor: card, border: `1px solid ${border}` }}
          >
            <blockquote className="text-sm leading-relaxed flex-1 mb-5" style={{ color: text }}>
              “{t.texto}”
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold shrink-0"
                style={{ backgroundColor: t.color, color: palette.text }}
              >
                {t.inicial}
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-sm truncate">{t.nombre}</p>
                <p className="text-xs truncate" style={{ color: muted }}>{t.rubro}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <motion.div
        {...reveal()}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl p-6"
        style={{ backgroundColor: palette.surface, border: `1px solid ${border}` }}
      >
        {sellos.map((s) => (
          <div key={s.titulo} className="flex items-start gap-3">
            <span className="text-xl shrink-0">{s.icon}</span>
            <div>
              <p className="font-semibold text-sm mb-0.5">{s.titulo}</p>
              <p className="text-xs leading-relaxed" style={{ color: muted }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
