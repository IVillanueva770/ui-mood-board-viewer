"use client";

import { palette } from "../_data";

/** Pieza interna (hero del workspace): barra de título brutalist del estudio. */
export function WorkspaceHeader() {
  const { ink, bg, lime } = palette;

  return (
    <div
      className="flex items-center justify-between flex-wrap gap-4 p-5 sm:p-7"
      style={{ backgroundColor: ink, color: bg, border: `3px solid ${ink}` }}
    >
      <div className="flex items-center gap-4">
        <span
          className="font-bebas text-3xl sm:text-4xl flex items-center justify-center w-14 h-14"
          style={{ backgroundColor: lime, color: ink, border: `2px solid ${bg}` }}
        >
          D
        </span>
        <div>
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none">DIMES · ADENTRO</h2>
          <p className="text-xs uppercase tracking-[0.25em] mt-1" style={{ color: lime }}>
            Workspace del estudio · Spring 2026
          </p>
        </div>
      </div>
      <div className="text-right">
        <div className="font-bebas text-3xl tracking-wide leading-none">06</div>
        <div className="text-xs uppercase tracking-widest">proyectos activos</div>
      </div>
    </div>
  );
}
