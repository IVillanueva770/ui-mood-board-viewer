"use client";

import { motion } from "motion/react";
import { tokens, toneColor, type PaymentDetailData } from "../_data";
import { useStripeMotion } from "./use-stripe-motion";
import { StatusDot } from "./StatusDot";

/**
 * Pieza interna 3: detalle de un pago. Timeline del PaymentIntent +
 * metadata + acciones. Visible como panel (no escondido tras un drawer que
 * el evaluador puede no abrir — para un viewer la riqueza tiene que verse).
 */
export function PaymentDetail({ pago }: { pago: PaymentDetailData }) {
  const { press, reveal, focusRing } = useStripeMotion();

  return (
    <motion.section {...reveal(0)}>
      <div className="mb-4">
        <p className="text-[11px] uppercase tracking-[0.18em] mb-1 font-semibold" style={{ color: tokens.muted }}>
          Detalle del pago
        </p>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] tabular-nums" style={{ color: tokens.ink }}>
            {pago.monto}
          </h3>
          <span
            className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: `${toneColor[pago.tone]}1f`, color: toneColor[pago.tone] }}
          >
            {pago.estado}
          </span>
          <span className="text-[12px]" style={{ fontFamily: "var(--font-roboto-mono)", color: tokens.muted }}>
            {pago.id}
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-3">
        <div
          className="lg:col-span-2 rounded-xl p-5"
          style={{ backgroundColor: tokens.surface, border: `1px solid ${tokens.border}` }}
        >
          <p className="text-[11px] uppercase tracking-[0.14em] mb-4 font-semibold" style={{ color: tokens.muted }}>
            Timeline
          </p>
          <ol className="relative ml-1">
            {pago.timeline.map((ev, i) => (
              <li key={i} className="relative pl-6 pb-5 last:pb-0">
                {i < pago.timeline.length - 1 && (
                  <span className="absolute left-[5px] top-3 bottom-0 w-px" style={{ backgroundColor: tokens.border }} />
                )}
                <span
                  className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: toneColor[ev.tone], boxShadow: `0 0 0 3px ${toneColor[ev.tone]}1f` }}
                />
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <span className="text-sm font-medium" style={{ color: tokens.ink }}>{ev.label}</span>
                  <span className="text-[11px]" style={{ fontFamily: "var(--font-roboto-mono)", color: tokens.muted }}>
                    {ev.hora}
                  </span>
                </div>
                <p className="text-xs mt-0.5" style={{ fontFamily: "var(--font-roboto-mono)", color: tokens.slate }}>
                  {ev.detalle}
                </p>
              </li>
            ))}
          </ol>

          <div className="flex items-center gap-2 mt-5 pt-4" style={{ borderTop: `1px solid ${tokens.borderSoft}` }}>
            <motion.button
              {...press}
              className={`px-4 py-2 text-xs font-semibold rounded-md text-white ${focusRing}`}
              style={{ backgroundColor: tokens.violet }}
            >
              Reintentar cobro
            </motion.button>
            <motion.button
              whileHover={{ borderColor: tokens.violet, color: tokens.violet }}
              transition={{ duration: 0.16 }}
              className={`px-4 py-2 text-xs font-semibold rounded-md ${focusRing}`}
              style={{ border: `1px solid ${tokens.border}`, color: tokens.faint }}
            >
              Ver logs
            </motion.button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl p-5" style={{ backgroundColor: tokens.surface, border: `1px solid ${tokens.border}` }}>
            <p className="text-[11px] uppercase tracking-[0.14em] mb-3 font-semibold" style={{ color: tokens.muted }}>
              Cliente
            </p>
            <p className="text-sm font-semibold" style={{ color: tokens.ink }}>{pago.cliente}</p>
            <p className="text-xs mt-0.5" style={{ color: tokens.slate }}>{pago.metodo}</p>
            <div className="mt-3 pt-3 flex items-center justify-between" style={{ borderTop: `1px solid ${tokens.borderSoft}` }}>
              <span className="text-xs" style={{ color: tokens.muted }}>Radar</span>
              <StatusDot tone="warn" label={pago.riesgo} />
            </div>
          </div>

          <div className="rounded-xl p-5" style={{ backgroundColor: tokens.surface, border: `1px solid ${tokens.border}` }}>
            <p className="text-[11px] uppercase tracking-[0.14em] mb-3 font-semibold" style={{ color: tokens.muted }}>
              Metadata
            </p>
            <div className="space-y-2">
              {pago.metadata.map((m) => (
                <div key={m.k} className="flex items-center justify-between text-xs" style={{ fontFamily: "var(--font-roboto-mono)" }}>
                  <span style={{ color: tokens.muted }}>{m.k}</span>
                  <span style={{ color: tokens.faint }}>{m.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
