"use client";

import { motion } from "motion/react";
import { palette, syn, type CodeLine, type ChatMsg } from "../_data";
import { useStudioMotion } from "./use-studio-motion";

/**
 * Externo · showcase: el editor en acción. DOS paneles VISIBLES lado a lado
 * (código + AI), no un switcher — el viewer muestra todo de un vistazo.
 */
export function Showcase({ code, chat }: { code: CodeLine[]; chat: ChatMsg[] }) {
  const { lift, reveal } = useStudioMotion();
  const { ink, bg, accent, muted, border, faint, card } = palette;

  return (
    <section>
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>
        en acción
      </p>
      <h2 className="text-3xl font-semibold tracking-tight mb-8" style={{ color: ink }}>
        Predice, indexa, refactoriza.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <motion.div {...reveal(0)}>
          <motion.div
            {...lift}
            className="bg-white overflow-hidden h-full"
            style={{ border: `1px solid ${border}`, borderRadius: "8px" }}
          >
            <div
              className="px-4 py-2 font-mono text-[11px]"
              style={{ borderBottom: `1px solid ${border}`, backgroundColor: bg, color: muted }}
            >
              fetch-metrics.ts
            </div>
            <div className="p-4 font-mono text-[11px] leading-relaxed" style={{ color: ink }}>
              {code.slice(0, 10).map((l) => (
                <div key={l.n} className="flex gap-3">
                  <span className="select-none text-right" style={{ color: faint, width: "18px" }}>
                    {l.n}
                  </span>
                  <span className="whitespace-pre">
                    {l.segs.map((s, i) => (
                      <span key={i} style={s.k ? { color: syn[s.k] } : undefined}>
                        {s.x}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div {...reveal(1)}>
          <motion.div
            {...lift}
            className="bg-white h-full flex flex-col"
            style={{ border: `1px solid ${border}`, borderRadius: "8px" }}
          >
            <div
              className="px-4 py-2 font-mono text-[11px] flex items-center gap-2"
              style={{ borderBottom: `1px solid ${border}`, backgroundColor: bg, color: muted }}
            >
              <span style={{ color: accent }}>✦</span> AI · @codebase
            </div>
            <div className="p-4 space-y-3 flex-1">
              {chat.map((m, i) => (
                <div
                  key={i}
                  className="text-sm leading-relaxed px-3 py-2"
                  style={{
                    backgroundColor: m.from === "user" ? bg : card,
                    border: `1px solid ${border}`,
                    borderRadius: "8px",
                    color: m.from === "user" ? ink : muted,
                  }}
                >
                  <span
                    className="font-mono text-[10px] uppercase tracking-wide block mb-1"
                    style={{ color: m.from === "user" ? muted : accent }}
                  >
                    {m.from === "user" ? "vos" : "cursor"}
                  </span>
                  {m.text}
                </div>
              ))}
              <div
                className="font-mono text-[11px] px-3 py-2 flex items-center gap-2"
                style={{ backgroundColor: ink, color: bg, borderRadius: "6px" }}
              >
                <span style={{ color: accent }}>+</span> useMetrics() generado en lib/fetch-metrics.ts
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
