"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { palette, REST_SHADOW, type ChatMsg, type DiffLine } from "../_data";
import { useStudioMotion } from "./use-studio-motion";

const DIFF_BG: Record<DiffLine["sign"], string> = {
  "+": "rgba(58,122,58,0.10)",
  "-": "rgba(162,59,45,0.10)",
  " ": "transparent",
};
const DIFF_FG: Record<DiffLine["sign"], string> = {
  "+": "#3a7a3a",
  "-": "#a23b2d",
  " ": "#7a7974",
};

type Props = { chat: ChatMsg[]; diff: { file: string; lines: DiffLine[] } };

/** Interno · pieza 2: panel de AI con diff sugerido (apply / reject por hunk). */
export function AiChat({ chat, diff }: Props) {
  const { lift } = useStudioMotion();
  const { ink, bg, accent, muted, border, card, faint } = palette;
  const [status, setStatus] = useState<"pending" | "applied" | "rejected">("pending");

  return (
    <section>
      <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] mb-3" style={{ color: muted }}>
        AI Chat
      </h3>
      <div
        className="bg-white overflow-hidden"
        style={{ border: `1px solid ${border}`, borderRadius: "8px", boxShadow: REST_SHADOW }}
      >
        <div
          className="px-4 py-2 font-mono text-[11px] flex items-center gap-2"
          style={{ borderBottom: `1px solid ${border}`, backgroundColor: bg, color: muted }}
        >
          <span style={{ color: accent }}>✦</span> claude-opus-4.7 · @codebase
        </div>

        <div className="p-4 space-y-3">
          {chat.map((m, i) => (
            <div
              key={i}
              className="text-sm leading-relaxed px-3 py-2 max-w-[88%]"
              style={{
                marginLeft: m.from === "user" ? "auto" : 0,
                backgroundColor: m.from === "user" ? ink : bg,
                color: m.from === "user" ? bg : ink,
                border: m.from === "user" ? "none" : `1px solid ${border}`,
                borderRadius: "10px",
              }}
            >
              {m.from === "ai" && (
                <span className="font-mono text-[10px] uppercase tracking-wide block mb-1" style={{ color: accent }}>
                  cursor
                </span>
              )}
              {m.text}
            </div>
          ))}

          {/* Diff sugerido */}
          <div style={{ border: `1px solid ${border}`, borderRadius: "8px", overflow: "hidden" }}>
            <div
              className="px-3 py-1.5 font-mono text-[11px] flex items-center justify-between"
              style={{ backgroundColor: bg, color: muted, borderBottom: `1px solid ${border}` }}
            >
              <span>{diff.file}</span>
              <span style={{ color: faint }}>+1 −5</span>
            </div>
            <div className="font-mono text-[11px] leading-relaxed" style={{ backgroundColor: card }}>
              {diff.lines.map((l, i) => (
                <div
                  key={i}
                  className="flex gap-2 px-3 py-0.5"
                  style={{ backgroundColor: DIFF_BG[l.sign], color: l.sign === " " ? ink : DIFF_FG[l.sign] }}
                >
                  <span className="select-none" style={{ color: DIFF_FG[l.sign], width: "10px" }}>
                    {l.sign}
                  </span>
                  <span className="whitespace-pre">{l.text}</span>
                </div>
              ))}
            </div>

            <div
              className="px-3 py-2 flex items-center gap-2"
              style={{ borderTop: `1px solid ${border}`, backgroundColor: bg }}
            >
              {status === "pending" ? (
                <>
                  <motion.button
                    {...lift}
                    onClick={() => setStatus("applied")}
                    className="px-3 py-1.5 text-xs font-semibold"
                    style={{ backgroundColor: ink, color: bg, borderRadius: "5px" }}
                  >
                    ⌘⏎ Aplicar
                  </motion.button>
                  <button
                    onClick={() => setStatus("rejected")}
                    className="px-3 py-1.5 text-xs font-semibold"
                    style={{ border: `1px solid ${border}`, color: muted, borderRadius: "5px", backgroundColor: card }}
                  >
                    Descartar
                  </button>
                </>
              ) : (
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-mono text-xs flex items-center gap-1.5"
                  style={{ color: status === "applied" ? "#3a7a3a" : muted }}
                >
                  {status === "applied" ? "✓ Aplicado a fetch-metrics.ts" : "✕ Sugerencia descartada"}
                  <button
                    onClick={() => setStatus("pending")}
                    className="underline"
                    style={{ color: faint }}
                  >
                    deshacer
                  </button>
                </motion.span>
              )}
            </div>
          </div>
        </div>

        <div className="px-4 py-3" style={{ borderTop: `1px solid ${border}` }}>
          <div
            className="px-3 py-2 font-mono text-xs flex items-center gap-2"
            style={{ backgroundColor: bg, border: `1px solid ${border}`, borderRadius: "6px", color: faint }}
          >
            <span style={{ color: accent }}>›</span> Preguntá sobre el codebase…
            <span className="ml-auto" style={{ color: muted }}>⌘L</span>
          </div>
        </div>
      </div>
    </section>
  );
}
