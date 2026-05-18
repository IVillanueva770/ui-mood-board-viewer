"use client";

import { motion } from "motion/react";
import { palette, type Miembro, type UsoRecurso } from "../_data";
import { useSaasMotion } from "./use-saas-motion";

const ROL_COLOR: Record<Miembro["rol"], string> = {
  Owner: "#5e6ad2",
  Admin: "#8b5cf6",
  Developer: "#06b6d4",
  Billing: "#ec4899",
};

/**
 * Pieza interna (settings/billing): plan actual + uso de recursos con barras +
 * miembros del equipo con su rol. Cierra el panel scrolleable.
 */
export function EquipoBilling({
  plan,
  uso,
  equipo,
}: {
  plan: string;
  uso: UsoRecurso[];
  equipo: Miembro[];
}) {
  const { reduce } = useSaasMotion();
  const { accent, text, muted, mutedSoft, border, card, surface } = palette;

  return (
    <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-5" style={{ borderTop: `1px solid ${border}` }}>
      {/* Plan + uso */}
      <div className="rounded-xl p-5" style={{ border: `1px solid ${border}`, backgroundColor: card }}>
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-1" style={{ color: accent }}>
              Facturación
            </p>
            <p className="text-lg font-semibold" style={{ color: text }}>
              Plan {plan}
            </p>
          </div>
          <button
            className="text-xs font-medium px-3 py-1.5 rounded-lg"
            style={{ border: `1px solid ${border}`, color: text }}
          >
            Cambiar plan
          </button>
        </div>

        <div className="space-y-4">
          {uso.map((u) => {
            const pct = Math.min(100, Math.round((u.usado / u.limite) * 100));
            const ilimitado = u.limite >= 999;
            return (
              <div key={u.label}>
                <div className="flex items-center justify-between mb-1.5 text-xs">
                  <span style={{ color: muted }}>{u.label}</span>
                  <span className="tabular-nums" style={{ color: text }}>
                    {u.usado}
                    {u.unidad} {ilimitado ? "· ilimitado" : `/ ${u.limite}${u.unidad}`}
                  </span>
                </div>
                {!ilimitado && (
                  <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: surface }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: pct > 80 ? "#dc2626" : palette.gradient,
                      }}
                      initial={reduce ? false : { width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Equipo */}
      <div className="rounded-xl p-5" style={{ border: `1px solid ${border}`, backgroundColor: card }}>
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-1" style={{ color: accent }}>
              Equipo
            </p>
            <p className="text-lg font-semibold" style={{ color: text }}>
              {equipo.length} miembros
            </p>
          </div>
          <button
            className="text-xs font-medium px-3 py-1.5 rounded-lg"
            style={{ backgroundColor: text, color: "#fff" }}
          >
            + Invitar
          </button>
        </div>

        <ul className="space-y-3">
          {equipo.map((m) => (
            <li key={m.email} className="flex items-center gap-3">
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0"
                style={{ background: m.avatar }}
              >
                {m.nombre.split(" ").map((p) => p[0]).join("").slice(0, 2)}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate" style={{ color: text }}>
                  {m.nombre}
                </p>
                <p className="text-[11px] truncate" style={{ color: mutedSoft }}>
                  {m.email}
                </p>
              </div>
              <span
                className="text-[11px] font-medium px-2 py-0.5 rounded-full shrink-0"
                style={{ backgroundColor: ROL_COLOR[m.rol] + "1a", color: ROL_COLOR[m.rol] }}
              >
                {m.rol}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
