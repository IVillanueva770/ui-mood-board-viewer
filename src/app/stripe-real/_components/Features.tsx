"use client";

import { motion } from "motion/react";
import { tokens, type Feature } from "../_data";
import { useStripeMotion } from "./use-stripe-motion";
import { LineIcon } from "./LineIcon";

/**
 * Pieza externa: grid de capacidades técnicas. Iconos line, copy preciso
 * (cifras concretas, no marketing inflado). Lift firma en hover.
 */
export function Features({ features }: { features: Feature[] }) {
  const { lift, reveal } = useStripeMotion();

  return (
    <section>
      <motion.div {...reveal(0)} className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.22em] mb-2 font-semibold" style={{ color: tokens.violet }}>
          Una sola integración
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em]" style={{ color: tokens.ink }}>
          Todo el stack financiero detrás de una API estable
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-xl overflow-hidden"
        style={{ backgroundColor: tokens.border }}>
        {features.map((f, i) => (
          <motion.div
            key={f.titulo}
            {...lift}
            className="p-5"
            style={{ backgroundColor: tokens.surface }}
            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1], delay: i * 0.03 }}
          >
            <div
              className="w-9 h-9 rounded-lg mb-4 flex items-center justify-center"
              style={{ backgroundColor: tokens.bg, border: `1px solid ${tokens.border}` }}
            >
              <LineIcon name={f.icon} color={tokens.violet} />
            </div>
            <h3 className="font-semibold mb-1.5 text-[15px]" style={{ color: tokens.ink }}>
              {f.titulo}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: tokens.slate }}>
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
