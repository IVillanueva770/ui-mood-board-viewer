"use client";

import { motion } from "motion/react";
import { palette, type FacturaStat, type Factura } from "../_data";
import { useBrutalMotion } from "./use-brutal-motion";
import { HardButton } from "./HardButton";
import { StatusChip } from "./StatusChip";

/** Pieza interna: facturación — stats brutalist + tabla de facturas. */
export function Facturas({
  stats,
  facturas,
}: {
  stats: FacturaStat[];
  facturas: Factura[];
}) {
  const { colorFlip } = useBrutalMotion();
  const { ink, bg, orange, lime } = palette;

  return (
    <section>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <h3 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none mb-1">FACTURAS</h3>
          <p className="text-xs uppercase tracking-widest font-bold opacity-70">
            3 pendientes · $ 845k por cobrar
          </p>
        </div>
        <HardButton variant="solid" accent={orange} className="text-lg px-5 py-3">
          + Emitir factura
        </HardButton>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-8" style={{ border: `3px solid ${ink}` }}>
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="p-5"
            style={{
              borderRight: i < stats.length - 1 ? `3px solid ${ink}` : "none",
              backgroundColor: s.color,
              color: s.fg,
            }}
          >
            <div className="font-bebas text-3xl sm:text-4xl tracking-wide leading-none mb-1">{s.val}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold">{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ border: `3px solid ${ink}` }}>
        <div className="grid grid-cols-12 text-xs uppercase tracking-widest font-bold" style={{ backgroundColor: ink, color: bg }}>
          <div className="col-span-2 px-4 py-3.5" style={{ borderRight: `2px solid ${bg}` }}>Fact.</div>
          <div className="col-span-4 px-4 py-3.5" style={{ borderRight: `2px solid ${bg}` }}>Cliente</div>
          <div className="col-span-2 px-4 py-3.5 text-right" style={{ borderRight: `2px solid ${bg}` }}>Monto</div>
          <div className="col-span-2 px-4 py-3.5 hidden sm:block" style={{ borderRight: `2px solid ${bg}` }}>Vence</div>
          <div className="col-span-2 px-4 py-3.5">Estado</div>
        </div>

        {facturas.map((f, i) => (
          <motion.div
            key={f.num}
            {...colorFlip(lime, ink)}
            className="grid grid-cols-12 cursor-pointer"
            style={{ borderTop: i > 0 ? `2px solid ${ink}` : "none", backgroundColor: bg }}
          >
            <div className="col-span-2 px-4 py-4 font-mono font-bold" style={{ borderRight: `2px solid ${ink}` }}>#{f.num}</div>
            <div className="col-span-4 px-4 py-4 font-bebas text-xl tracking-wide" style={{ borderRight: `2px solid ${ink}` }}>{f.cliente.toUpperCase()}</div>
            <div className="col-span-2 px-4 py-4 text-right font-mono font-bold" style={{ borderRight: `2px solid ${ink}` }}>{f.monto}</div>
            <div className="col-span-2 px-4 py-4 hidden sm:block font-mono text-sm" style={{ borderRight: `2px solid ${ink}` }}>{f.vence}</div>
            <div className="col-span-2 px-4 py-4 flex items-center">
              <StatusChip label={f.estado} fill={f.chip} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
