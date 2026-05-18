"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { palette, type PaletteCmd } from "../_data";
import { useStudioMotion } from "./use-studio-motion";

/**
 * Interno · pieza 4: command palette (firma dev-tool). Se renderiza ABIERTA
 * sobre un editor atenuado — el viewer la muestra sin que haya que invocarla.
 * Entrada con fade+scale (`pop`); el input filtra de verdad la lista.
 */
export function CommandPalette({ commands }: { commands: PaletteCmd[] }) {
  const { pop } = useStudioMotion();
  const { ink, bg, accent, muted, border, faint, card } = palette;
  const [q, setQ] = useState("");

  const groups = useMemo(() => {
    const f = commands.filter((c) => c.label.toLowerCase().includes(q.toLowerCase()));
    const by: Record<string, PaletteCmd[]> = {};
    for (const c of f) (by[c.group] ??= []).push(c);
    return Object.entries(by);
  }, [commands, q]);

  return (
    <section>
      <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] mb-3" style={{ color: muted }}>
        Command Palette · ⌘P
      </h3>

      {/* Editor atenuado de fondo + palette encima */}
      <div
        className="relative overflow-hidden"
        style={{ border: `1px solid ${border}`, borderRadius: "8px", backgroundColor: card, minHeight: "380px" }}
      >
        <div className="p-4 font-mono text-xs leading-relaxed select-none" style={{ color: faint, opacity: 0.5 }}>
          {["export default function Dashboard() {", "  const { data } = useMetrics()", "  return (", "    <main className=\"grid gap-4\">", "      {data?.metrics.map(m => <MetricCard key={m.id} {...m} />)}", "    </main>", "  )", "}"].map(
            (l, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-right" style={{ width: "20px" }}>
                  {i + 1}
                </span>
                <span className="whitespace-pre">{l}</span>
              </div>
            ),
          )}
        </div>

        <div
          className="absolute inset-0 flex items-start justify-center pt-10"
          style={{ backgroundColor: "rgba(38,37,16,0.18)" }}
        >
          <motion.div
            {...pop}
            className="w-[min(560px,92%)] bg-white overflow-hidden"
            style={{
              border: `1px solid ${border}`,
              borderRadius: "10px",
              boxShadow: "0 8px 18px -6px rgba(38,37,16,0.18), 0 28px 56px -16px rgba(38,37,16,0.30)",
            }}
          >
            <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: `1px solid ${border}` }}>
              <span className="font-mono text-sm" style={{ color: accent }}>
                ›
              </span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Escribí un comando o archivo…"
                autoComplete="off"
                spellCheck={false}
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: ink }}
              />
              <span
                className="font-mono text-[10px] px-1.5 py-0.5"
                style={{ backgroundColor: bg, border: `1px solid ${border}`, borderRadius: "3px", color: faint }}
              >
                esc
              </span>
            </div>

            <div className="max-h-[230px] overflow-y-auto py-1">
              {groups.length === 0 && (
                <p className="px-4 py-6 text-sm text-center" style={{ color: faint }}>
                  Sin resultados para "{q}"
                </p>
              )}
              {groups.map(([group, cmds]) => (
                <div key={group}>
                  <p
                    className="px-4 pt-2 pb-1 font-mono text-[10px] uppercase tracking-[0.18em]"
                    style={{ color: faint }}
                  >
                    {group}
                  </p>
                  {cmds.map((c, i) => (
                    <motion.button
                      key={c.label}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.16, delay: i * 0.02 }}
                      whileHover={{ backgroundColor: bg }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-left text-sm"
                      style={{ color: ink }}
                    >
                      <span className="font-mono" style={{ color: accent, width: "14px" }}>
                        {c.icon}
                      </span>
                      <span className="flex-1">{c.label}</span>
                      {c.hint && (
                        <span className="font-mono text-[11px]" style={{ color: muted }}>
                          {c.hint}
                        </span>
                      )}
                    </motion.button>
                  ))}
                </div>
              ))}
            </div>

            <div
              className="px-4 py-2 flex items-center gap-4 font-mono text-[10px]"
              style={{ borderTop: `1px solid ${border}`, backgroundColor: bg, color: faint }}
            >
              <span>↑↓ navegar</span>
              <span>⏎ ejecutar</span>
              <span className="ml-auto" style={{ color: muted }}>
                {groups.reduce((n, [, c]) => n + c.length, 0)} comandos
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
