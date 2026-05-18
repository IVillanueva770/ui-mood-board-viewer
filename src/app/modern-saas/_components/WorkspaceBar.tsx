"use client";

import { palette } from "../_data";

/**
 * Pieza interna (header del panel): identidad del workspace + entorno + estado.
 * Encabeza el dashboard scrolleable (no es un sub-nav que esconde piezas).
 */
export function WorkspaceBar({
  workspace,
}: {
  workspace: { nombre: string; plan: string; version: string };
}) {
  const { text, muted, border, surface } = palette;

  return (
    <div
      className="flex items-center justify-between gap-3 px-5 py-3.5 flex-wrap"
      style={{ borderBottom: `1px solid ${border}`, backgroundColor: surface }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
          style={{ background: palette.gradient }}
        >
          ◆
        </div>
        <div>
          <p className="text-sm font-semibold leading-tight" style={{ color: text }}>
            {workspace.nombre}
          </p>
          <p className="text-[11px]" style={{ color: muted }}>
            Plan {workspace.plan} · Production
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 text-xs" style={{ color: muted }}>
        <span
          className="px-2.5 py-1 rounded-full font-medium"
          style={{ backgroundColor: "#dcfce7", color: "#166534" }}
        >
          ● healthy
        </span>
        <span style={{ fontFamily: "var(--font-geist-mono)" }}>{workspace.version}</span>
      </div>
    </div>
  );
}
