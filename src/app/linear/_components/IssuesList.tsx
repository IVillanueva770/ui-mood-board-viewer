"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { tokens, mono, priorityColor, type Issue } from "../_data";
import { useLinearMotion } from "./use-linear-motion";
import { StatusDot } from "./StatusDot";

/**
 * Pieza interna: lista densa de issues. Firma de ola 1 consolidada:
 * - dimming de siblings al hover (estado local — necesita la fila enfocada)
 * - focus ring neon-lime keyboard-first (tabIndex + whileFocus del hook)
 * - click/Enter en la fila abre el detalle (`onSelect`)
 */
export function IssuesList({ issues, onSelect }: { issues: Issue[]; onSelect: (id: string) => void }) {
  const { reduce, INSTANT } = useLinearMotion();
  const [hovered, setHovered] = useState<string | null>(null);
  const t = tokens;
  const open = issues.filter((i) => i.status !== "Done").length;

  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-xl font-semibold tracking-tight">Mis issues</h2>
        <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: t.surface, color: t.fg2, border: `1px solid ${t.line}` }}>
          {open} abiertas
        </span>
      </div>

      <div className="rounded-lg overflow-hidden" style={{ border: `1px solid ${t.line}` }} onMouseLeave={() => setHovered(null)}>
        <div className="px-4 py-2.5 text-[11px] uppercase tracking-wider grid grid-cols-12 gap-3" style={{ backgroundColor: t.surface, color: t.faint }}>
          <div className="col-span-1">P</div>
          <div className="col-span-2">ID</div>
          <div className="col-span-5 sm:col-span-4">Título</div>
          <div className="hidden sm:block sm:col-span-2">Estado</div>
          <div className="col-span-2">Asignado</div>
          <div className="col-span-2 sm:col-span-1 text-right">Act.</div>
        </div>

        {issues.map((i, idx) => {
          const dim = hovered !== null && hovered !== i.id;
          const focusedRow = hovered === i.id;
          return (
            <motion.div
              key={i.id}
              tabIndex={0}
              role="button"
              onMouseEnter={() => setHovered(i.id)}
              onFocus={() => setHovered(i.id)}
              onBlur={() => setHovered(null)}
              onClick={() => onSelect(i.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(i.id);
                }
              }}
              animate={{
                backgroundColor: focusedRow ? t.elevated : "transparent",
                opacity: reduce ? 1 : dim ? 0.42 : 1,
              }}
              whileFocus={{ boxShadow: `inset 2px 0 0 0 ${t.lime}` }}
              transition={INSTANT}
              className="px-4 py-3 grid grid-cols-12 gap-3 text-sm items-center cursor-pointer focus-visible:outline-none"
              style={{ borderTop: idx === 0 ? "none" : `1px solid ${t.line}` }}
            >
              <div className="col-span-1">
                <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: priorityColor[i.priority] }} title={i.priority} />
              </div>
              <div className="col-span-2 text-xs truncate" style={{ fontFamily: mono, color: t.muted }}>
                {i.id}
              </div>
              <div className="col-span-5 sm:col-span-4 truncate">{i.title}</div>
              <div className="hidden sm:flex sm:col-span-2 items-center gap-1.5 text-xs" style={{ color: t.fg2 }}>
                <StatusDot status={i.status} />
                {i.status}
              </div>
              <div className="col-span-2 flex items-center gap-2 text-xs" style={{ color: t.fg2 }}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0" style={{ backgroundColor: t.line, color: t.lime }}>
                  {i.assignee.initials}
                </span>
                <span className="hidden lg:inline truncate">{i.assignee.name}</span>
              </div>
              <div className="col-span-2 sm:col-span-1 text-xs text-right" style={{ color: t.muted, fontFamily: mono }}>
                {i.updated}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
