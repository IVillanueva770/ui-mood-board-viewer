"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { palette, type Cliente } from "../_data";

const ESTADO_COLOR: Record<Cliente["estado"], { bg: string; fg: string }> = {
  activo: { bg: "#dcfce7", fg: "#166534" },
  trial: { bg: "#eef2ff", fg: "#3730a3" },
  "en riesgo": { bg: "#fef3c7", fg: "#92400e" },
  pausado: { bg: "#f1f5f9", fg: "#475569" },
};

/**
 * Pieza interna (detalle): drawer lateral con el detalle de un cliente +
 * timeline de actividad. Slide-in suave desde la derecha (firma premium del
 * mood, nada brusco). Cierra con backdrop, Escape implícito por botón.
 */
export function ClienteDrawer({
  cliente,
  onClose,
}: {
  cliente: Cliente | null;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();
  const { text, muted, mutedSoft, border, card, surface, accent } = palette;

  return (
    <AnimatePresence>
      {cliente && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(15,23,42,0.35)" }}
            onClick={onClose}
            aria-hidden
          />
          <motion.aside
            initial={reduce ? { x: 0 } : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduce ? { x: 0, opacity: 0 } : { x: "100%" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md h-full overflow-y-auto"
            style={{ backgroundColor: card, borderLeft: `1px solid ${border}` }}
            role="dialog"
            aria-label={`Detalle de ${cliente.empresa}`}
          >
            <div
              className="flex items-start justify-between gap-3 px-6 py-5 sticky top-0"
              style={{ borderBottom: `1px solid ${border}`, backgroundColor: card }}
            >
              <div>
                <p className="text-lg font-semibold" style={{ color: text }}>
                  {cliente.empresa}
                </p>
                <p className="text-xs" style={{ color: muted }}>
                  {cliente.contacto} · {cliente.email}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{ border: `1px solid ${border}`, color: muted }}
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>

            <div className="px-6 py-5 space-y-6">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { l: "Plan", v: cliente.plan },
                  { l: "MRR", v: cliente.mrr === 0 ? "—" : `$ ${cliente.mrr.toLocaleString("es-AR")}` },
                  { l: "Asientos", v: String(cliente.asientos) },
                  { l: "Cliente desde", v: cliente.desde },
                  { l: "Región", v: cliente.region },
                  {
                    l: "Estado",
                    v: cliente.estado,
                    chip: ESTADO_COLOR[cliente.estado],
                  },
                ].map((f) => (
                  <div
                    key={f.l}
                    className="rounded-lg p-3"
                    style={{ border: `1px solid ${border}`, backgroundColor: surface }}
                  >
                    <p className="text-[11px] mb-1" style={{ color: mutedSoft }}>
                      {f.l}
                    </p>
                    {f.chip ? (
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium capitalize"
                        style={{ backgroundColor: f.chip.bg, color: f.chip.fg }}
                      >
                        {f.v}
                      </span>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: text }}>
                        {f.v}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold" style={{ color: text }}>
                    Uso de API
                  </p>
                  <span className="text-xs tabular-nums" style={{ color: muted }}>
                    {cliente.usoApi}% del límite
                  </span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: border }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: palette.gradient }}
                    initial={reduce ? false : { width: 0 }}
                    animate={{ width: `${cliente.usoApi}%` }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold mb-3" style={{ color: text }}>
                  Actividad reciente
                </p>
                <ul className="space-y-3">
                  {cliente.actividad.map((a, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ backgroundColor: accent }}
                      />
                      <div>
                        <p className="text-sm" style={{ color: text }}>
                          {a.evento}
                        </p>
                        <p className="text-[11px]" style={{ color: mutedSoft }}>
                          {a.fecha}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="w-full py-2.5 rounded-lg text-sm font-medium"
                style={{ backgroundColor: text, color: "#fff" }}
              >
                Abrir cuenta completa →
              </button>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { ESTADO_COLOR };
