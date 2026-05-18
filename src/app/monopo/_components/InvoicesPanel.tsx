"use client";

import { motion } from "motion/react";
import { frost, type Invoice, type InvoiceStat } from "../_data";
import { useFrostMotion } from "./use-frost-motion";

/** Pieza interna: KPIs de facturación + tabla de facturas, frosted. */
export function InvoicesPanel({
  stats,
  facturas,
}: {
  stats: InvoiceStat[];
  facturas: Invoice[];
}) {
  const { sectionReveal, rowHover } = useFrostMotion();

  return (
    <motion.section {...sectionReveal}>
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.4em] mb-3" style={{ color: frost.textMute }}>
          Invoices
        </p>
        <h2 className="text-3xl sm:text-4xl font-light leading-tight" style={{ letterSpacing: "-0.02em" }}>
          <em className="italic" style={{ color: frost.blue }}>Money</em>, in motion.
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            whileHover={{ y: -2, borderColor: frost.borderHover }}
            transition={{ duration: 0.3 }}
            className="p-5 rounded-xl relative overflow-hidden"
            style={{
              backgroundColor: frost.surface,
              backdropFilter: frost.blur,
              border: `1px solid ${frost.border}`,
            }}
          >
            <div
              aria-hidden
              className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20 blur-2xl pointer-events-none"
              style={{ backgroundColor: s.glow }}
            />
            <p className="text-[10px] uppercase tracking-widest mb-1.5" style={{ color: frost.textMute }}>
              {s.label}
            </p>
            <p className="text-3xl font-light tabular-nums" style={{ fontFamily: frost.mono }}>
              {s.val}
            </p>
          </motion.div>
        ))}
      </div>

      <div
        className="rounded-xl overflow-hidden"
        style={{ border: `1px solid ${frost.border}`, backgroundColor: frost.surface, backdropFilter: frost.blur }}
      >
        <div
          className="grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] py-3 px-5"
          style={{ color: frost.textFaint, borderBottom: `1px solid ${frost.border}` }}
        >
          <div className="col-span-2" style={{ fontFamily: frost.mono }}>Inv.</div>
          <div className="col-span-4">Client</div>
          <div className="col-span-2 text-right">Amount</div>
          <div className="col-span-2 hidden sm:block">Due</div>
          <div className="col-span-2">Status</div>
        </div>

        {facturas.map((f, i) => (
          <motion.div
            key={f.num}
            {...rowHover}
            className="grid grid-cols-12 py-4 px-5 cursor-pointer items-center"
            style={{ borderTop: i > 0 ? `1px solid rgba(255,255,255,0.04)` : "none" }}
          >
            <div className="col-span-2 text-xs" style={{ fontFamily: frost.mono, color: frost.textMute }}>
              #{f.num}
            </div>
            <div className="col-span-4 text-base font-light">{f.cliente}</div>
            <div
              className="col-span-2 text-sm text-right tabular-nums"
              style={{ fontFamily: frost.mono }}
            >
              {f.monto}
            </div>
            <div
              className="col-span-2 hidden sm:block text-xs"
              style={{ color: frost.textMute, fontFamily: frost.mono }}
            >
              {f.vence}
            </div>
            <div className="col-span-2">
              <span
                className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm"
                style={{
                  backgroundColor: f.chip + "20",
                  color: f.chip,
                  border: `1px solid ${f.chip}40`,
                }}
              >
                {f.estado}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
