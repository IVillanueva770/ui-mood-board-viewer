"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { palette, type Paciente } from "../_data";
import { useAiryMotion, focusRing } from "./use-airy-motion";

const ESTADO: Record<Paciente["estado"], { fg: string; bg: string }> = {
  Activo: { fg: "#166534", bg: "#d1fae5" },
  Pausa: { fg: "#92400e", bg: "#fef3c7" },
  Alta: { fg: "#0369a1", bg: "#e0f2fe" },
};

/** Pieza interna: tabla de pacientes buscable (filtro funcional) + detalle. */
export function PacientesTabla({ pacientes }: { pacientes: Paciente[] }) {
  const { reduce, reveal, rowHover } = useAiryMotion();
  const { accent, accentDeep, muted, faint, border, hairline, card, surface, text } = palette;

  const [q, setQ] = useState("");
  const [abierto, setAbierto] = useState<string | null>(null);

  const visibles = pacientes.filter(
    (p) =>
      p.nombre.toLowerCase().includes(q.toLowerCase()) ||
      p.obra.toLowerCase().includes(q.toLowerCase()) ||
      p.plan.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <section>
      <div className="flex items-end justify-between mb-5 flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] mb-1 font-semibold" style={{ color: accent }}>
            {pacientes.length} pacientes en seguimiento
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Pacientes</h2>
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por nombre, obra social o plan…"
          className={`px-4 py-2 text-sm rounded-full ${focusRing}`}
          style={{ border: `1px solid ${border}`, color: text, backgroundColor: card, minWidth: "260px" }}
        />
      </div>

      <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: card, border: `1px solid ${border}` }}>
        <div
          className="hidden sm:grid grid-cols-12 px-5 py-3 text-[11px] uppercase tracking-wider font-semibold"
          style={{ borderBottom: `1px solid ${border}`, color: faint, backgroundColor: surface }}
        >
          <span className="col-span-4">Paciente</span>
          <span className="col-span-3">Plan</span>
          <span className="col-span-2">Adherencia</span>
          <span className="col-span-2">Última</span>
          <span className="col-span-1 text-right">Estado</span>
        </div>

        {visibles.map((p, i) => {
          const est = ESTADO[p.estado];
          const open = abierto === p.id;
          return (
            <div key={p.id} style={{ borderBottom: i < visibles.length - 1 ? `1px solid ${hairline}` : "none" }}>
              <motion.button
                {...rowHover}
                onClick={() => setAbierto(open ? null : p.id)}
                aria-expanded={open}
                className={`w-full grid grid-cols-12 px-5 py-3.5 items-center text-sm text-left ${focusRing}`}
              >
                <div className="col-span-12 sm:col-span-4 flex items-center gap-3 min-w-0">
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0"
                    style={{ backgroundColor: palette.accentSoft, color: accentDeep }}
                  >
                    {p.iniciales}
                  </span>
                  <div className="min-w-0">
                    <p className="font-medium truncate" style={{ color: text }}>{p.nombre}</p>
                    <p className="text-xs truncate" style={{ color: muted }}>{p.edad} años · {p.obra}</p>
                  </div>
                </div>
                <div className="hidden sm:block col-span-3 truncate" style={{ color: muted }}>{p.plan}</div>
                <div className="hidden sm:flex col-span-2 items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: hairline }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: p.adherencia >= 75 ? palette.green : palette.amber }}
                      initial={reduce ? false : { width: 0 }}
                      whileInView={reduce ? undefined : { width: `${p.adherencia}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                    />
                  </div>
                  <span className="text-xs tabular-nums" style={{ color: text }}>{p.adherencia}%</span>
                </div>
                <div className="hidden sm:block col-span-2 text-xs" style={{ color: muted }}>{p.ultima}</div>
                <div className="hidden sm:flex col-span-1 justify-end">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: est.bg, color: est.fg }}>
                    {p.estado}
                  </span>
                </div>
              </motion.button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduce ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 grid grid-cols-1 sm:grid-cols-3 gap-3" style={{ backgroundColor: surface }}>
                      {[
                        { l: "Plan asignado", v: p.plan },
                        { l: "Adherencia", v: `${p.adherencia}% · ${p.estado}` },
                        { l: "Última sesión", v: p.ultima },
                      ].map((d) => (
                        <div key={d.l} className="pt-3">
                          <p className="text-[11px] uppercase tracking-wider mb-1" style={{ color: faint }}>{d.l}</p>
                          <p className="text-sm font-medium" style={{ color: text }}>{d.v}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {visibles.length === 0 && (
          <p className="text-sm text-center py-10" style={{ color: muted }}>
            No hay pacientes que coincidan con “{q}”.
          </p>
        )}
      </div>
    </section>
  );
}
