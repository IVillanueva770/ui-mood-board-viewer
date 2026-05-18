"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import { tokens, mono, statusColor, priorityColor, STATUS_ORDER, type Issue, type IssueStatus } from "../_data";
import { useLinearMotion } from "./use-linear-motion";

/** Pieza interna: board kanban por estado. Cards con focus ring; abren detalle. */
export function KanbanBoard({ issues, onSelect }: { issues: Issue[]; onSelect: (id: string) => void }) {
  const { ring } = useLinearMotion();
  const t = tokens;

  const columns = useMemo(
    () =>
      STATUS_ORDER.map((status: IssueStatus) => ({
        status,
        items: issues.filter((i) => i.status === status),
      })),
    [issues],
  );

  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-xl font-semibold tracking-tight">Board</h2>
        <span className="text-xs" style={{ color: t.muted, fontFamily: mono }}>
          {issues.length} issues · {STATUS_ORDER.length} columnas
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {columns.map((col) => (
          <div key={col.status} className="min-w-0">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="inline-flex items-center gap-2 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: statusColor[col.status] }} />
                <span className="truncate">{col.status}</span>
              </span>
              <span className="text-[10px]" style={{ color: t.faint, fontFamily: mono }}>
                {String(col.items.length).padStart(2, "0")}
              </span>
            </div>

            <div className="space-y-2">
              {col.items.map((i) => (
                <motion.div
                  key={i.id}
                  tabIndex={0}
                  role="button"
                  onClick={() => onSelect(i.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onSelect(i.id);
                    }
                  }}
                  {...ring()}
                  className="p-3 rounded-lg cursor-pointer focus-visible:outline-none"
                  style={{ backgroundColor: t.surface, border: `1px solid ${t.line}` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px]" style={{ fontFamily: mono, color: t.muted }}>
                      {i.id}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: priorityColor[i.priority] }} title={i.priority} />
                  </div>
                  <p className="text-sm leading-snug mb-3 line-clamp-3">{i.title}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ backgroundColor: t.line, color: t.fg2 }}>
                      {i.project}
                    </span>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ backgroundColor: t.line, color: t.lime }}>
                      {i.assignee.initials}
                    </span>
                  </div>
                </motion.div>
              ))}
              {col.items.length === 0 && (
                <div className="rounded-lg px-3 py-6 text-center text-xs" style={{ border: `1px dashed ${t.line}`, color: t.faint }}>
                  Sin issues
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
