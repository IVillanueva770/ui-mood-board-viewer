"use client";

import { motion } from "motion/react";
import { Ripple } from "@/components/ripple";
import { m3, elevation, pesos, type Resumen, type Categoria, type Movimiento } from "../_data";
import { useM3Motion } from "./use-m3-motion";

/**
 * Vista interna 1 — Inicio. Cards con elevación tonal Material: saldo filled,
 * presupuesto del mes, presupuesto por categoría (barras animadas, Ripple →
 * Detalle) y últimos movimientos. El FAB persistente vive en el frame.
 */
export function InicioView({
  resumen,
  categorias,
  movimientos,
  onVerTodos,
  onVerCategoria,
}: {
  resumen: Resumen;
  categorias: Categoria[];
  movimientos: Movimiento[];
  onVerTodos: () => void;
  onVerCategoria: () => void;
}) {
  const { enter, surface } = useM3Motion();
  const pctMes = Math.round((resumen.gastadoMes / resumen.presupuestoMes) * 100);

  return (
    <div className="h-full overflow-y-auto px-4 pt-4 pb-28">
      {/* Top app bar M3 (small) */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-medium" style={{ backgroundColor: m3.primaryContainer, color: m3.onPrimaryContainer }}>N</div>
          <div>
            <p className="text-xs" style={{ color: m3.onSurfaceVariant }}>Hola</p>
            <p className="text-base font-medium" style={{ color: m3.onSurface }}>Nacho</p>
          </div>
        </div>
        <Ripple color="rgba(103,80,164,0.2)" ariaLabel="Buscar" className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: m3.surfaceContainerHigh, color: m3.onSurfaceVariant }}>
          🔍
        </Ripple>
      </div>

      {/* Saldo — card filled tonal */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={surface}
        className="rounded-3xl p-6 mb-4"
        style={{ backgroundColor: m3.primary, color: m3.onPrimary, boxShadow: elevation(2) }}
      >
        <p className="text-xs uppercase tracking-wider opacity-80 mb-1">Saldo disponible</p>
        <p className="text-4xl font-medium tracking-tight mb-4">{resumen.saldo}</p>
        <div className="flex gap-6 text-sm">
          <div>
            <p className="opacity-75 text-xs">Ingresos</p>
            <p className="font-medium">{resumen.ingresoMes}</p>
          </div>
          <div>
            <p className="opacity-75 text-xs">Gastos</p>
            <p className="font-medium">{resumen.gastoMes}</p>
          </div>
        </div>
      </motion.section>

      {/* Presupuesto del mes */}
      <motion.section
        {...enter(1)}
        className="rounded-3xl p-5 mb-5"
        style={{ backgroundColor: m3.surface, border: `1px solid ${m3.outlineVariant}` }}
      >
        <div className="flex items-baseline justify-between mb-2">
          <p className="text-sm font-medium" style={{ color: m3.onSurface }}>Presupuesto de mayo</p>
          <p className="text-xs font-semibold" style={{ color: pctMes >= 100 ? m3.error : m3.primary }}>{pctMes}%</p>
        </div>
        <div className="h-2.5 rounded-full overflow-hidden mb-1.5" style={{ backgroundColor: m3.surfaceVariant }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(pctMes, 100)}%` }}
            transition={{ duration: 0.9, ease: [0.05, 0.7, 0.1, 1], delay: 0.2 }}
            className="h-full rounded-full"
            style={{ backgroundColor: pctMes >= 100 ? m3.error : m3.primary }}
          />
        </div>
        <p className="text-xs" style={{ color: m3.onSurfaceVariant }}>
          {pesos(resumen.gastadoMes)} de {pesos(resumen.presupuestoMes)}
        </p>
      </motion.section>

      {/* Presupuesto por categoría */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium" style={{ color: m3.onSurface }}>Por categoría</p>
        <button onClick={onVerCategoria} className="text-xs font-semibold" style={{ color: m3.primary }}>Ver detalle</button>
      </div>
      <div className="space-y-2 mb-6">
        {categorias.slice(0, 4).map((c, i) => {
          const pct = Math.round((c.gastado / c.presupuesto) * 100);
          const over = pct > 100;
          return (
            <Ripple
              key={c.id}
              as="div"
              color={`${c.color}26`}
              onClick={onVerCategoria}
              className="rounded-2xl p-3.5 flex items-center gap-3 cursor-pointer"
              style={{ backgroundColor: m3.surface, border: `1px solid ${m3.outlineVariant}` }}
            >
              <span className="w-10 h-10 rounded-full flex items-center justify-center text-base shrink-0" style={{ backgroundColor: c.bg }}>{c.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium" style={{ color: m3.onSurface }}>{c.nombre}</span>
                  <span style={{ color: over ? m3.error : m3.onSurfaceVariant }}>{pesos(c.gastado)}</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: m3.surfaceVariant }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min(pct, 100)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.05, 0.7, 0.1, 1], delay: 0.1 + i * 0.05 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: over ? m3.error : c.color }}
                  />
                </div>
              </div>
            </Ripple>
          );
        })}
      </div>

      {/* Últimos movimientos */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium" style={{ color: m3.onSurface }}>Últimos movimientos</p>
        <button onClick={onVerTodos} className="text-xs font-semibold" style={{ color: m3.primary }}>Ver todos</button>
      </div>
      <div className="space-y-2">
        {movimientos.slice(0, 3).map((m) => (
          <Ripple
            key={m.id}
            as="div"
            color={`${m.color}26`}
            onClick={onVerTodos}
            className="rounded-2xl p-3.5 flex items-center gap-3 cursor-pointer"
            style={{ backgroundColor: m3.surface, border: `1px solid ${m3.outlineVariant}` }}
          >
            <span className="w-10 h-10 rounded-full flex items-center justify-center text-base shrink-0" style={{ backgroundColor: m.bg }}>{m.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate" style={{ color: m3.onSurface }}>{m.comercio}</p>
              <p className="text-xs" style={{ color: m3.onSurfaceVariant }}>{m.hora} · {m.metodo}</p>
            </div>
            <span className="text-sm font-semibold" style={{ color: m.monto > 0 ? m3.success : m3.onSurface }}>
              {m.monto > 0 ? "+" : ""}{pesos(m.monto)}
            </span>
          </Ripple>
        ))}
      </div>
    </div>
  );
}
