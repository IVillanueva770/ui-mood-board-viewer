"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { tokens, type Txn } from "../_data";
import { useStripeMotion } from "./use-stripe-motion";
import { StatusDot } from "./StatusDot";

/**
 * Pieza interna 2: tabla de transacciones densa-pero-clara. Filtros por
 * estado (estado local), IDs mono, status dots, hover de fila restraint.
 */
export function TransactionsTable({ txns, filters }: { txns: Txn[]; filters: string[] }) {
  const [filter, setFilter] = useState(filters[0]);
  const { row, focusRing, reveal } = useStripeMotion();

  const shown = filter === filters[0] ? txns : txns.filter((t) => t.estado === filter);

  return (
    <motion.section {...reveal(0)}>
      <div className="flex items-end justify-between mb-4 flex-wrap gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] mb-1 font-semibold" style={{ color: tokens.muted }}>
            1,284 succeeded · últimos 7 días
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em]" style={{ color: tokens.ink }}>
            Transacciones
          </h3>
        </div>
        <div className="inline-flex p-0.5 rounded-lg" style={{ backgroundColor: tokens.bg, border: `1px solid ${tokens.border}` }}>
          {filters.map((f) => {
            const a = f === filter;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative px-3 py-1 text-xs font-semibold rounded-md ${focusRing}`}
                style={{ color: a ? "#ffffff" : tokens.muted }}
              >
                {a && (
                  <motion.span
                    layoutId="stripe-txn-filter"
                    transition={{ type: "spring", stiffness: 480, damping: 38 }}
                    className="absolute inset-0 rounded-md -z-10"
                    style={{ backgroundColor: tokens.violet }}
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="rounded-xl overflow-hidden"
        style={{ backgroundColor: tokens.surface, border: `1px solid ${tokens.border}` }}
      >
        <div
          className="grid grid-cols-12 px-5 py-2.5 text-[10px] uppercase tracking-[0.14em] font-semibold"
          style={{ borderBottom: `1px solid ${tokens.border}`, color: tokens.muted, backgroundColor: tokens.bg }}
        >
          <div className="col-span-3">Monto</div>
          <div className="col-span-4">Cliente · ID</div>
          <div className="col-span-3 hidden sm:block">Método</div>
          <div className="col-span-2 sm:col-span-1">Fecha</div>
          <div className="col-span-7 sm:col-span-1 text-right">Estado</div>
        </div>

        {shown.map((t, i) => (
          <motion.div
            key={t.id}
            {...row}
            className="grid grid-cols-12 px-5 py-3 items-center text-sm cursor-pointer"
            style={{ borderBottom: i < shown.length - 1 ? `1px solid ${tokens.borderSoft}` : "none" }}
          >
            <div className="col-span-3 min-w-0">
              <p className="font-semibold tabular-nums truncate" style={{ color: tokens.ink }}>{t.monto}</p>
              <p className="text-[10px]" style={{ color: tokens.muted }}>{t.moneda}</p>
            </div>
            <div className="col-span-4 min-w-0">
              <p className="text-xs truncate" style={{ color: tokens.faint }}>{t.cliente}</p>
              <p className="text-[11px] truncate" style={{ fontFamily: "var(--font-roboto-mono)", color: tokens.muted }}>
                {t.id}
              </p>
            </div>
            <div className="col-span-3 hidden sm:block text-xs truncate" style={{ color: tokens.muted, fontFamily: "var(--font-roboto-mono)" }}>
              {t.metodo}
            </div>
            <div className="col-span-2 sm:col-span-1 text-[11px]" style={{ color: tokens.muted }}>
              {t.fecha.replace("May 8, ", "")}
            </div>
            <div className="col-span-7 sm:col-span-1 flex justify-end">
              <StatusDot tone={t.tone} label={t.estado} />
            </div>
          </motion.div>
        ))}

        {shown.length === 0 && (
          <div className="px-5 py-10 text-center text-sm" style={{ color: tokens.muted }}>
            Sin transacciones en <span className="font-semibold">{filter}</span> en este rango.
          </div>
        )}
      </div>
    </motion.section>
  );
}
