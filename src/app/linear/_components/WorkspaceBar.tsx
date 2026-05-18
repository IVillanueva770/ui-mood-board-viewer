"use client";

import { motion } from "motion/react";
import { tokens, mono } from "../_data";
import { useLinearMotion } from "./use-linear-motion";

/**
 * Chrome del workspace + trigger ⌘K PROMINENTE (la firma power-user tiene que
 * verse de un vistazo en un viewer — no enterrada). Botón = abre el palette;
 * el atajo global ⌘K/Ctrl+K también lo abre (lo cablea useCommandCenter).
 */
export function WorkspaceBar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const { ring, cta } = useLinearMotion();
  const t = tokens;

  return (
    <div className="flex items-center justify-between gap-3 flex-wrap">
      <div className="flex items-center gap-2.5 text-sm">
        <span className="w-6 h-6 rounded flex items-center justify-center text-[11px] font-bold" style={{ backgroundColor: t.lime, color: t.bg }}>
          E
        </span>
        <span className="font-semibold">Exo</span>
        <span style={{ color: t.lineStrong }}>/</span>
        <span style={{ color: t.muted }}>Workspace</span>
      </div>

      <div className="flex items-center gap-2">
        <motion.button
          {...ring()}
          onClick={onOpenPalette}
          className="flex items-center gap-3 px-3 py-1.5 text-sm rounded focus-visible:outline-none"
          style={{ backgroundColor: t.surface, color: t.muted, border: `1px solid ${t.line}` }}
        >
          <span>Buscar o ejecutar un comando…</span>
          <span className="text-xs px-1.5 py-0.5 rounded" style={{ fontFamily: mono, backgroundColor: t.line, color: t.fg2 }}>
            ⌘ K
          </span>
        </motion.button>
        <motion.button
          {...cta}
          className="px-3 py-1.5 text-sm rounded font-semibold"
          style={{ backgroundColor: t.lime, color: t.bg }}
        >
          + Nueva issue
        </motion.button>
      </div>
    </div>
  );
}
