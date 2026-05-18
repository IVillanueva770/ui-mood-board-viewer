"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { palette, REST_SHADOW, type SettingsSection } from "../_data";
import { useStudioMotion } from "./use-studio-motion";

/** Interno · pieza 3: panel de Settings (toggles reales, swappables). */
export function SettingsPanel({ sections }: { sections: SettingsSection[] }) {
  const { reveal } = useStudioMotion();
  const { ink, bg, accent, muted, border, faint, card } = palette;

  const [on, setOn] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      sections.flatMap((s) => s.items.map((it) => [`${s.sec}:${it.label}`, it.on])),
    ),
  );

  return (
    <section>
      <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] mb-3" style={{ color: muted }}>
        Settings
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sections.map((s, i) => (
          <motion.div
            key={s.sec}
            {...reveal(i)}
            className="bg-white"
            style={{ border: `1px solid ${border}`, borderRadius: "8px", boxShadow: REST_SHADOW }}
          >
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom: `1px solid ${border}` }}
            >
              <p className="font-semibold text-sm" style={{ color: ink }}>
                {s.sec}
              </p>
              <span
                className="font-mono text-[10px] px-2 py-0.5"
                style={{ backgroundColor: bg, border: `1px solid ${border}`, borderRadius: "3px", color: faint }}
              >
                {s.chip}
              </span>
            </div>
            <div>
              {s.items.map((it, j) => {
                const key = `${s.sec}:${it.label}`;
                const active = on[key];
                return (
                  <div
                    key={it.label}
                    className="flex items-center justify-between px-4 py-2.5 text-sm"
                    style={{ borderBottom: j < s.items.length - 1 ? `1px solid ${palette.hair}` : "none" }}
                  >
                    <span style={{ color: ink }}>{it.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs" style={{ color: muted }}>
                        {it.val}
                      </span>
                      <button
                        onClick={() => setOn((p) => ({ ...p, [key]: !p[key] }))}
                        className="w-8 h-[18px] rounded-full flex items-center px-0.5"
                        style={{ backgroundColor: active ? accent : palette.borderStrong }}
                        aria-pressed={active}
                        aria-label={it.label}
                      >
                        <motion.span
                          layout
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="w-3.5 h-3.5 rounded-full"
                          style={{ backgroundColor: card, marginLeft: active ? "auto" : 0 }}
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
