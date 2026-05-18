"use client";

import { motion } from "motion/react";
import { tokens, elevation } from "../_data";
import { useStripeMotion } from "./use-stripe-motion";

/**
 * Pieza externa (hero): infra fintech. Headline preciso (no marketing
 * inflado), gradiente sutil deep-violet, y como visual un mock de la API
 * real — porque el producto ES infra, no una foto. Doble CTA + strip de
 * logos como prueba inmediata.
 */
export function Hero({ partners }: { partners: string[] }) {
  const { press, reveal } = useStripeMotion();

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-24 h-72 -z-10 opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 22% 50%, #533afd, transparent 52%), radial-gradient(circle at 78% 28%, #00d4ff, transparent 52%)",
        }}
      />

      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <motion.div {...reveal(0)} className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.22em] mb-5 font-semibold" style={{ color: tokens.violet }}>
            Infraestructura de pagos
          </p>
          <h1
            className="text-[2.6rem] sm:text-6xl font-semibold tracking-[-0.025em] leading-[1.02] mb-5"
            style={{ color: tokens.ink }}
          >
            La capa financiera<br />
            <span style={{ color: tokens.violet }}>de internet.</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-xl mb-8" style={{ color: tokens.slate }}>
            Una API para aceptar pagos, mover dinero y construir productos
            financieros. Sin SDKs frágiles, sin downtime: infra activa-activa
            que liquida en 46 países.
          </p>

          <div className="flex items-center gap-3 flex-wrap mb-10">
            <motion.button
              {...press}
              className="px-6 py-3 text-sm font-semibold rounded-md text-white"
              style={{ backgroundColor: tokens.violet, boxShadow: `0 4px 12px ${tokens.violet}4d` }}
            >
              Empezá con $0 →
            </motion.button>
            <motion.button
              whileHover={{ borderColor: tokens.violet, color: tokens.violet }}
              whileTap={{ scale: 0.985 }}
              transition={{ duration: 0.16 }}
              className="px-6 py-3 text-sm font-semibold rounded-md"
              style={{ border: `1px solid ${tokens.border}`, color: tokens.ink }}
            >
              Hablar con ingeniería de ventas
            </motion.button>
          </div>

          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-4" style={{ color: tokens.muted }}>
            Construido sobre esta infra
          </p>
          <div className="flex items-center gap-x-7 gap-y-2.5 flex-wrap opacity-55">
            {partners.map((p) => (
              <span key={p} className="text-sm font-semibold tracking-tight" style={{ color: tokens.slate }}>
                {p}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div {...reveal(2)} className="lg:col-span-5">
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: `1px solid ${tokens.border}`, boxShadow: elevation.rest }}
          >
            <div
              className="flex items-center gap-1.5 px-4 py-3"
              style={{ borderBottom: `1px solid ${tokens.border}`, backgroundColor: tokens.bg }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#e6ebf1" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#e6ebf1" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#e6ebf1" }} />
              <span
                className="ml-2 text-[11px]"
                style={{ fontFamily: "var(--font-roboto-mono)", color: tokens.muted }}
              >
                POST /v1/payment_intents
              </span>
            </div>
            <pre
              className="px-4 py-4 text-[12px] leading-relaxed overflow-x-auto"
              style={{ fontFamily: "var(--font-roboto-mono)", color: tokens.faint, backgroundColor: tokens.surface }}
            >
{`stripe.paymentIntents.create({
  `}<span style={{ color: tokens.violet }}>amount</span>{`: 125000,
  `}<span style={{ color: tokens.violet }}>currency</span>{`: `}<span style={{ color: tokens.ok }}>{`'usd'`}</span>{`,
  `}<span style={{ color: tokens.violet }}>automatic_payment_methods</span>{`: {
    `}<span style={{ color: tokens.violet }}>enabled</span>{`: `}<span style={{ color: tokens.warn }}>true</span>{`,
  },
});`}
            </pre>
            <div
              className="px-4 py-3 flex items-center justify-between text-[11px]"
              style={{ borderTop: `1px solid ${tokens.border}`, backgroundColor: tokens.bg, fontFamily: "var(--font-roboto-mono)" }}
            >
              <span style={{ color: tokens.muted }}>200 OK · 42 ms</span>
              <span style={{ color: tokens.ok }}>● requires_payment_method</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
