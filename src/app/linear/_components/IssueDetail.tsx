"use client";

import { motion, AnimatePresence } from "motion/react";
import { tokens, mono, statusColor, priorityColor, type Issue } from "../_data";
import { useLinearMotion } from "./use-linear-motion";

/**
 * Pieza interna: detalle de la issue como panel lateral (drawer) anclado al
 * contenedor del workspace — NO fixed al viewport (no flota sobre el footer del
 * viewer). Se abre desde la lista o el board; Esc/click fuera lo cierra.
 */
export function IssueDetail({ issue, onClose }: { issue: Issue | null; onClose: () => void }) {
  const { overlay, drawer } = useLinearMotion();
  const t = tokens;

  return (
    <AnimatePresence>
      {issue && (
        <motion.div {...overlay} className="absolute inset-0 z-30 flex justify-end" style={{ backgroundColor: "rgba(8,9,10,0.6)" }} onClick={onClose}>
          <motion.aside
            {...drawer}
            onClick={(e) => e.stopPropagation()}
            className="h-full w-full max-w-md overflow-y-auto"
            style={{ backgroundColor: t.surface, borderLeft: `1px solid ${t.line}` }}
          >
            <div className="px-5 py-4 flex items-center justify-between sticky top-0" style={{ backgroundColor: t.surface, borderBottom: `1px solid ${t.line}` }}>
              <span className="text-xs" style={{ fontFamily: mono, color: t.muted }}>
                {issue.id}
              </span>
              <button
                onClick={onClose}
                className="text-xs px-2 py-1 rounded hover:opacity-80 transition-opacity"
                style={{ color: t.muted, border: `1px solid ${t.line}` }}
              >
                Esc ✕
              </button>
            </div>

            <div className="px-5 py-5">
              <h2 className="text-lg font-semibold leading-snug mb-4">{issue.title}</h2>

              <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                <Prop label="Estado">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: statusColor[issue.status] }} />
                    {issue.status}
                  </span>
                </Prop>
                <Prop label="Prioridad">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: priorityColor[issue.priority] }} />
                    {issue.priority}
                  </span>
                </Prop>
                <Prop label="Asignado">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ backgroundColor: t.line, color: t.lime }}>
                      {issue.assignee.initials}
                    </span>
                    {issue.assignee.name}
                  </span>
                </Prop>
                <Prop label="Proyecto">{issue.project}</Prop>
              </div>

              <div className="mb-6">
                <p className="text-[11px] uppercase tracking-wider mb-2" style={{ color: t.faint }}>
                  Descripción
                </p>
                <p className="text-sm leading-relaxed" style={{ color: t.fg2 }}>
                  {issue.description}
                </p>
              </div>

              <div className="mb-6 flex flex-wrap gap-1.5">
                {issue.labels.map((l) => (
                  <span key={l} className="text-[11px] px-2 py-0.5 rounded" style={{ backgroundColor: t.line, color: t.fg2, fontFamily: mono }}>
                    {l}
                  </span>
                ))}
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-wider mb-3" style={{ color: t.faint }}>
                  Actividad
                </p>
                <div className="space-y-3">
                  {issue.activity.map((a, idx) => (
                    <div key={idx} className="flex gap-3 text-sm">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0" style={{ backgroundColor: t.line, color: t.fg2 }}>
                        {a.who}
                      </span>
                      <p className="leading-snug" style={{ color: t.fg2 }}>
                        <span style={{ color: t.fg }}>{a.who}</span> {a.action}
                        <span className="ml-2 text-xs" style={{ color: t.faint, fontFamily: mono }}>
                          {a.when}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Prop({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wider mb-1" style={{ color: tokens.faint }}>
        {label}
      </p>
      <div style={{ color: tokens.fg }}>{children}</div>
    </div>
  );
}
