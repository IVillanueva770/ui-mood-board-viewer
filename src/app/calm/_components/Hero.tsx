"use client";

import { motion } from "motion/react";
import { palette } from "../_data";
import { useCalmMotion } from "./use-calm-motion";

/**
 * Pieza externa (hero): serif Cormorant gigante, mucho espacio negativo, claim
 * de bienestar sin gritos. El orbe que respira es la firma de motion del
 * estilo — scale 1↔1.03 en loop lentísimo, ancla calma toda la página.
 */
export function Hero() {
  const { fade, breathing, lift } = useCalmMotion();
  const { sage, clay, ink, surface, muted } = palette;

  return (
    <section className="text-center pt-10 pb-8 sm:pt-16 sm:pb-12">
      <motion.div {...fade()} className="relative max-w-4xl mx-auto">
        {/* Orbe que respira — firma del estilo, detrás del claim */}
        <motion.div
          {...breathing}
          aria-hidden
          className="absolute left-1/2 top-1/2 -z-10 rounded-full"
          style={{
            width: 380,
            height: 380,
            transform: "translate(-50%,-50%)",
            background: `radial-gradient(circle, ${sage}22 0%, ${clay}14 45%, transparent 70%)`,
          }}
        />

        <motion.p
          {...fade(0.15)}
          className="text-xs uppercase tracking-[0.4em] mb-9"
          style={{ color: sage }}
        >
          wellness · pausa · respiración
        </motion.p>

        <h1
          className="font-cormorant text-6xl sm:text-9xl font-light leading-[1.02] mb-9"
          style={{ letterSpacing: "-0.015em", color: ink }}
        >
          Pause. Breathe.{" "}
          <em className="italic" style={{ color: sage }}>
            Begin.
          </em>
        </h1>

        <motion.p
          {...fade(0.3)}
          className="font-cormorant italic text-xl sm:text-2xl leading-relaxed max-w-2xl mx-auto mb-14"
          style={{ color: muted }}
        >
          Una pausa diaria, sostenida. Sin gritos motivacionales, sin culpa los
          días que no.
        </motion.p>
      </motion.div>

      <motion.div
        {...fade(0.45)}
        className="flex items-center justify-center gap-4 flex-wrap"
      >
        <motion.button
          {...lift}
          className="px-9 py-4 text-sm tracking-wide"
          style={{ backgroundColor: ink, color: surface, borderRadius: 9999 }}
        >
          Comenzar — 7 días gratis
        </motion.button>
        <motion.button
          whileHover={{ backgroundColor: ink, color: surface }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="px-9 py-4 text-sm tracking-wide"
          style={{ color: ink, borderRadius: 9999, border: `1px solid ${ink}` }}
        >
          Cómo funciona →
        </motion.button>
      </motion.div>
    </section>
  );
}
