"use client";

import { motion } from "motion/react";
import { frost } from "../_data";

/** Header del workspace interno del estudio (frosted, sobrio). */
export function WorkspaceHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between gap-4 flex-wrap rounded-2xl px-6 py-5"
      style={{
        backgroundColor: frost.surface,
        backdropFilter: frost.blur,
        border: `1px solid ${frost.border}`,
      }}
    >
      <div className="flex items-center gap-4">
        <span
          className="w-11 h-11 rounded-full flex items-center justify-center text-base font-light"
          style={{
            background: `linear-gradient(135deg, ${frost.violet}80, rgba(0,0,0,0.4))`,
            border: `1px solid ${frost.borderHover}`,
          }}
        >
          M
        </span>
        <div>
          <p className="text-sm font-light leading-tight">Monopo Studio</p>
          <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: frost.textFaint }}>
            Workspace · spring 2026
          </p>
        </div>
      </div>
      <p className="text-xs" style={{ color: frost.textMute, fontFamily: frost.mono }}>
        06 active · 4 people · Buenos Aires
      </p>
    </motion.div>
  );
}
