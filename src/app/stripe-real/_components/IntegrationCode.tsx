"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { tokens, elevation, type CodeSample } from "../_data";
import { useStripeMotion } from "./use-stripe-motion";

const synColor: Record<string, string> = {
  kw: tokens.violet,
  str: tokens.ok,
  fn: tokens.ink,
  com: tokens.muted,
};

/**
 * Pieza externa: bloque de integración con tabs de lenguaje (cURL / Node /
 * Python) al estilo docs de Stripe. Es la firma "infra": el lenguaje técnico
 * preciso, Source Code Pro (Roboto Mono), restraint. Estado local del tab.
 */
export function IntegrationCode({ samples }: { samples: CodeSample[] }) {
  const [active, setActive] = useState(samples[0].id);
  const { reveal, focusRing } = useStripeMotion();
  const sample = samples.find((s) => s.id === active) ?? samples[0];

  return (
    <section className="grid lg:grid-cols-12 gap-8 items-center">
      <motion.div {...reveal(0)} className="lg:col-span-4">
        <p className="text-xs uppercase tracking-[0.22em] mb-2 font-semibold" style={{ color: tokens.violet }}>
          Integración
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] mb-3" style={{ color: tokens.ink }}>
          Tu primer cobro en siete líneas
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: tokens.slate }}>
          SDKs idiomáticos en 8 lenguajes, tipados, con reintentos y
          idempotencia incorporados. El mismo objeto <code
            style={{ fontFamily: "var(--font-roboto-mono)", color: tokens.violet }}
          >PaymentIntent</code> en todos.
        </p>
      </motion.div>

      <motion.div {...reveal(1)} className="lg:col-span-8">
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: `1px solid ${tokens.border}`, boxShadow: elevation.rest }}
        >
          <div
            className="flex items-center gap-1 px-3 py-2"
            style={{ borderBottom: `1px solid ${tokens.border}`, backgroundColor: tokens.bg }}
          >
            {samples.map((s) => {
              const a = s.id === active;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`relative px-3 py-1.5 text-xs font-semibold rounded-md ${focusRing}`}
                  style={{ color: a ? tokens.violet : tokens.muted }}
                >
                  {a && (
                    <motion.span
                      layoutId="stripe-code-tab"
                      transition={{ type: "spring", stiffness: 480, damping: 38 }}
                      className="absolute inset-0 rounded-md -z-10"
                      style={{ backgroundColor: tokens.surface, border: `1px solid ${tokens.border}` }}
                    />
                  )}
                  <span className="relative">{s.label}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.pre
              key={sample.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.16 }}
              className="px-5 py-4 text-[12.5px] leading-[1.7] overflow-x-auto"
              style={{ fontFamily: "var(--font-roboto-mono)", backgroundColor: tokens.surface }}
            >
              {sample.lines.map((ln, i) => (
                <div key={i} style={{ color: ln.c ? synColor[ln.c] : tokens.faint }}>
                  {ln.t || " "}
                </div>
              ))}
            </motion.pre>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
