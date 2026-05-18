"use client";

import { motion } from "motion/react";
import { tokens, type TrustStat } from "../_data";
import { useSteepMotion } from "./use-steep-motion";

/**
 * Externo · pieza 4: confianza + CTA con restraint. Stats de plataforma, una
 * cita en serif (gravitas) y una banda de cierre contenida (sin estridencia).
 */
export function TrustBand({
  trustStats,
  quote,
}: {
  trustStats: TrustStat[];
  quote: { texto: string; autor: string; rol: string };
}) {
  const { reveal, press, mistBtn } = useSteepMotion();

  return (
    <section className="space-y-14">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden" style={{ backgroundColor: tokens.border }}>
        {trustStats.map((s, i) => (
          <motion.div
            key={s.label}
            {...reveal(i)}
            className="p-7"
            style={{ backgroundColor: tokens.canvas }}
          >
            <p className="font-cormorant text-4xl mb-2" style={{ color: tokens.ink }}>
              {s.val}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: tokens.slate }}>
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.blockquote {...reveal(1)} className="max-w-3xl">
        <p
          className="font-cormorant italic text-2xl sm:text-3xl leading-snug mb-5"
          style={{ color: tokens.ink }}
        >
          “{quote.texto}”
        </p>
        <footer className="text-sm" style={{ color: tokens.slate }}>
          <span style={{ color: tokens.terracotta }}>{quote.autor}</span> · {quote.rol}
        </footer>
      </motion.blockquote>

      <motion.div
        {...reveal(2)}
        className="rounded-2xl p-10 sm:p-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        style={{ backgroundColor: tokens.surface, border: `1px solid ${tokens.border}` }}
      >
        <div>
          <h3 className="font-cormorant text-3xl sm:text-4xl mb-2" style={{ color: tokens.ink }}>
            Un solo número, <em className="italic" style={{ color: tokens.terracotta }}>en todos lados.</em>
          </h3>
          <p className="text-sm" style={{ color: tokens.slate }}>
            Conectá tu warehouse en minutos. Sin tarjeta para empezar.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <motion.button
            {...press}
            className="px-7 py-3.5 text-sm font-medium rounded-md"
            style={{ backgroundColor: tokens.ink, color: tokens.canvas }}
          >
            Empezar gratis
          </motion.button>
          <motion.button
            {...mistBtn}
            className="px-7 py-3.5 text-sm font-medium rounded-md"
            style={{ color: tokens.ink, border: `1px solid ${tokens.border}` }}
          >
            Ver demo →
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
