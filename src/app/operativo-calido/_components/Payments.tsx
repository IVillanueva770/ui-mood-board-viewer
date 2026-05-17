"use client";

import { motion } from "motion/react";
import { palette, pesos, COBROS_FIJOS, type Cobro } from "../_data";

type Props = { cobros: Cobro[]; aCobrar: number };

/** Pieza interna: cobros (Mercado Pago) — resumen + últimos pagos. */
export function Payments({ cobros, aCobrar }: Props) {
  const { verde, verdeSoft, rojo, rojoSoft, muted, border } = palette;

  const resumen = [
    ...COBROS_FIJOS,
    { valor: pesos(aCobrar), label: "Pendiente cobrar", color: rojo, bg: rojoSoft },
  ];

  return (
    <section>
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: verde }}>
          Mercado Pago · cuenta verificada ✓
        </p>
        <h2 className="text-2xl font-semibold tracking-tight mt-0.5">Cobros</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {resumen.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="rounded-xl p-4"
            style={{ backgroundColor: s.bg }}
          >
            <p className="text-xl sm:text-2xl font-semibold tracking-tight" style={{ color: s.color }}>
              {s.valor}
            </p>
            <p className="text-xs mt-1" style={{ color: muted }}>{s.label}</p>
          </motion.div>
        ))}
      </div>

      <p className="font-semibold mb-3">Últimos pagos recibidos</p>
      <div className="bg-white rounded-xl overflow-hidden" style={{ border: `1px solid ${border}` }}>
        {cobros.map((p, i, arr) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="grid grid-cols-12 gap-3 items-center px-4 py-3 text-sm"
            style={{ borderBottom: i < arr.length - 1 ? `1px solid ${border}` : "none" }}
          >
            <div className="col-span-4 truncate">{p.quien}</div>
            <div className="col-span-3 font-semibold">{p.monto}</div>
            <div className="col-span-3 text-xs" style={{ color: muted }}>{p.metodo}</div>
            <div className="col-span-2 text-right">
              <span
                className="text-[11px] uppercase tracking-wider font-bold px-2 py-1 rounded-full"
                style={{
                  backgroundColor: p.estado === "Acreditado" ? verdeSoft : "#fef3c7",
                  color: p.estado === "Acreditado" ? verde : "#92400e",
                }}
              >
                {p.estado}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
