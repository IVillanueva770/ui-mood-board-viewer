"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Ripple } from "@/components/ripple";
import { m3, pesos, type Movimiento } from "../_data";
import { useM3Motion } from "./use-m3-motion";

type Filtro = "todos" | "gastos" | "ingresos";
const FILTROS: { id: Filtro; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "gastos", label: "Gastos" },
  { id: "ingresos", label: "Ingresos" },
];

/**
 * Vista interna 2 — Movimientos. Lista agrupada por día con swipe-to-delete
 * (arrastrar la fila a la izquierda revela y confirma borrar) + chips de
 * filtro con Ripple. Estado local autocontenido (copia del mock por props).
 */
export function MovimientosView({ movimientos }: { movimientos: Movimiento[] }) {
  const { EMPHASIZED_DECEL } = useM3Motion();
  const [items, setItems] = useState(movimientos);
  const [filtro, setFiltro] = useState<Filtro>("todos");

  const visibles = items.filter((m) =>
    filtro === "todos" ? true : filtro === "ingresos" ? m.monto > 0 : m.monto < 0
  );
  const grupos = [...new Set(visibles.map((m) => m.grupo))];

  return (
    <div className="h-full overflow-y-auto px-4 pt-5 pb-28">
      <h1 className="text-2xl font-medium tracking-tight mb-1" style={{ color: m3.onSurface }}>Movimientos</h1>
      <p className="text-xs mb-4" style={{ color: m3.onSurfaceVariant }}>Deslizá una fila para borrarla</p>

      <div className="flex gap-2 mb-5">
        {FILTROS.map((f) => {
          const a = f.id === filtro;
          return (
            <Ripple
              key={f.id}
              as="button"
              color="rgba(103,80,164,0.2)"
              onClick={() => setFiltro(f.id)}
              className="px-4 py-2 rounded-lg text-xs font-semibold"
              style={{
                backgroundColor: a ? m3.secondaryContainer : "transparent",
                color: a ? m3.onSecondaryContainer : m3.onSurfaceVariant,
                border: `1px solid ${a ? m3.secondaryContainer : m3.outlineVariant}`,
              }}
            >
              {a ? "✓ " : ""}{f.label}
            </Ripple>
          );
        })}
      </div>

      {grupos.map((g) => (
        <div key={g} className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wider mb-2 px-1" style={{ color: m3.onSurfaceVariant }}>{g}</p>
          <div className="space-y-2">
            <AnimatePresence initial={false}>
              {visibles.filter((m) => m.grupo === g).map((m) => (
                <motion.div
                  key={m.id}
                  layout
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.3, ease: EMPHASIZED_DECEL }}
                  className="relative rounded-2xl overflow-hidden"
                >
                  {/* Acción detrás (revelar al deslizar) */}
                  <div
                    className="absolute inset-0 flex items-center justify-end pr-5 text-sm font-semibold"
                    style={{ backgroundColor: m3.errorContainer, color: m3.error }}
                  >
                    🗑 Borrar
                  </div>
                  {/* Fila arrastrable */}
                  <motion.div
                    drag="x"
                    dragConstraints={{ left: -120, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -90) setItems((prev) => prev.filter((x) => x.id !== m.id));
                    }}
                    whileTap={{ cursor: "grabbing" }}
                    className="relative p-3.5 flex items-center gap-3"
                    style={{ backgroundColor: m3.surface, border: `1px solid ${m3.outlineVariant}` }}
                  >
                    <span className="w-10 h-10 rounded-full flex items-center justify-center text-base shrink-0" style={{ backgroundColor: m.bg }}>{m.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate" style={{ color: m3.onSurface }}>{m.comercio}</p>
                      <p className="text-xs" style={{ color: m3.onSurfaceVariant }}>{m.categoria} · {m.hora}</p>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: m.monto > 0 ? m3.success : m3.onSurface }}>
                      {m.monto > 0 ? "+" : ""}{pesos(m.monto)}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      ))}

      {visibles.length === 0 && (
        <div className="text-center py-16">
          <p className="text-4xl mb-3">🧾</p>
          <p className="text-sm font-medium" style={{ color: m3.onSurface }}>Sin movimientos</p>
          <p className="text-xs mt-1" style={{ color: m3.onSurfaceVariant }}>Probá con otro filtro o cargá uno con el botón ＋</p>
        </div>
      )}
    </div>
  );
}
