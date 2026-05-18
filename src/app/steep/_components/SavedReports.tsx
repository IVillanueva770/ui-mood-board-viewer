"use client";

import { motion } from "motion/react";
import { tokens, type SavedReport } from "../_data";
import { useSteepMotion } from "./use-steep-motion";

/**
 * Interno · pieza 3: reportes guardados. Lista con dueño, alcance, vistas y el
 * "compartir-look" (avatares + scope). Hover de fila = mist cálido (la firma).
 */
const scopeStyle: Record<SavedReport["scope"], { bg: string; fg: string }> = {
  Equipo: { bg: "#fbe1d1", fg: "#5d2a1a" },
  Privado: { bg: "#f7f7f8", fg: "#52545a" },
  Público: { bg: "#17191c", fg: "#ffffff" },
};

export function SavedReports({ reports }: { reports: SavedReport[] }) {
  const { reveal, row } = useSteepMotion();

  return (
    <section>
      <div className="flex items-end justify-between flex-wrap gap-3 mb-7">
        <motion.h3
          {...reveal(0)}
          className="font-cormorant text-3xl sm:text-4xl font-medium leading-tight"
          style={{ color: tokens.ink }}
        >
          Reportes — <em className="italic" style={{ color: tokens.terracotta }}>la vista del equipo.</em>
        </motion.h3>
        <motion.span
          {...reveal(0)}
          className="text-xs uppercase tracking-[0.2em]"
          style={{ color: tokens.terracotta }}
        >
          {reports.length} guardados
        </motion.span>
      </div>

      <motion.div
        {...reveal(1)}
        className="rounded-xl overflow-hidden"
        style={{ backgroundColor: tokens.canvas, border: `1px solid ${tokens.border}` }}
      >
        <div
          className="grid grid-cols-12 gap-3 px-6 py-3 text-[11px] uppercase tracking-wider"
          style={{ borderBottom: `1px solid ${tokens.border}`, backgroundColor: tokens.surface, color: tokens.terracotta }}
        >
          <div className="col-span-5">Reporte</div>
          <div className="col-span-2">Alcance</div>
          <div className="col-span-2 text-right">Vistas / 7d</div>
          <div className="col-span-3 text-right">Compartido</div>
        </div>
        {reports.map((r, i) => {
          const sc = scopeStyle[r.scope];
          return (
            <motion.div
              key={r.name}
              {...row}
              className="grid grid-cols-12 gap-3 px-6 py-4 items-center cursor-pointer"
              style={{ borderBottom: i < reports.length - 1 ? `1px solid ${tokens.border}` : "none" }}
            >
              <div className="col-span-5">
                <p className="font-cormorant italic text-lg leading-tight" style={{ color: tokens.ink }}>
                  {r.name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: tokens.slate }}>
                  {r.owner} · {r.charts} gráficos · {r.updated}
                </p>
              </div>
              <div className="col-span-2">
                <span
                  className="px-2 py-1 rounded text-[11px] font-mono"
                  style={{ backgroundColor: sc.bg, color: sc.fg }}
                >
                  {r.scope}
                </span>
              </div>
              <div className="col-span-2 text-right text-sm font-mono" style={{ color: tokens.ink }}>
                {r.views}
              </div>
              <div className="col-span-3 flex items-center justify-end -space-x-2">
                {r.shared.map((av) => (
                  <span
                    key={av}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-medium"
                    style={{
                      backgroundColor: tokens.mist,
                      color: tokens.terracotta,
                      boxShadow: `0 0 0 2px ${tokens.canvas}`,
                    }}
                  >
                    {av}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
