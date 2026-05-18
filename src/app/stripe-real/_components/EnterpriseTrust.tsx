"use client";

import { motion } from "motion/react";
import { tokens, type Compliance } from "../_data";
import { useStripeMotion } from "./use-stripe-motion";

/**
 * Pieza externa: confianza enterprise. Badges de compliance + métricas duras
 * (uptime, volumen, latencia). Cifras, no adjetivos — el restraint vende.
 */
export function EnterpriseTrust({
  compliance,
  stats,
}: {
  compliance: Compliance[];
  stats: { val: string; label: string }[];
}) {
  const { reveal } = useStripeMotion();

  return (
    <section>
      <motion.div
        {...reveal(0)}
        className="rounded-xl overflow-hidden"
        style={{ border: `1px solid ${tokens.border}`, backgroundColor: tokens.surface }}
      >
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ borderBottom: `1px solid ${tokens.border}` }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="px-5 py-6"
              style={{
                borderRight: i < stats.length - 1 ? `1px solid ${tokens.border}` : "none",
                borderBottom: i < 2 ? `1px solid ${tokens.border}` : "none",
              }}
            >
              <p className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] tabular-nums mb-1" style={{ color: tokens.ink }}>
                {s.val}
              </p>
              <p className="text-xs" style={{ color: tokens.muted }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div className="px-5 py-4 flex items-center gap-x-6 gap-y-3 flex-wrap" style={{ backgroundColor: tokens.bg }}>
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: tokens.muted }}>
            Certificaciones
          </span>
          {compliance.map((c) => (
            <span key={c.sigla} className="flex items-baseline gap-2">
              <span className="text-sm font-semibold" style={{ color: tokens.ink }}>{c.sigla}</span>
              <span className="text-xs" style={{ color: tokens.slate }}>{c.desc}</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
