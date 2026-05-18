"use client";

import { motion } from "motion/react";
import { palette, type ChangelogEntry } from "../_data";
import { useStudioMotion } from "./use-studio-motion";

const TAG_COLOR: Record<ChangelogEntry["tag"], string> = {
  feature: "#f54e00",
  perf: "#9d6b1f",
  fix: "#3a7a3a",
};

/** Externo · band CTA dev-tool + changelog (look docs/github). */
export function CtaFooter({ changelog }: { changelog: ChangelogEntry[] }) {
  const { lift, reveal } = useStudioMotion();
  const { ink, bg, accent, muted, border } = palette;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-5 gap-4">
      {/* Band CTA */}
      <motion.div
        {...reveal(0)}
        className="lg:col-span-2 p-7 flex flex-col justify-between"
        style={{ backgroundColor: ink, color: bg, borderRadius: "10px" }}
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: accent }}>
            empezá hoy
          </p>
          <h3 className="text-2xl font-semibold tracking-tight leading-snug mb-2">
            Tu próximo proyecto, escrito a otra velocidad.
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(247,247,244,0.65)" }}>
            macOS · Linux · Windows. Importa tus extensiones y keybindings de VS Code.
          </p>
        </div>
        <div className="flex gap-3 mt-6 font-mono text-xs" style={{ color: "rgba(247,247,244,0.6)" }}>
          <span>↗ Docs</span>
          <span>↗ Changelog</span>
          <span>↗ GitHub</span>
        </div>
      </motion.div>

      {/* Changelog */}
      <motion.div {...reveal(1)} className="lg:col-span-3">
        <motion.div
          {...lift}
          className="bg-white h-full"
          style={{ border: `1px solid ${border}`, borderRadius: "10px" }}
        >
          <p
            className="px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] font-semibold"
            style={{ borderBottom: `1px solid ${border}`, color: muted }}
          >
            Changelog
          </p>
          <div>
            {changelog.map((c, i) => (
              <div
                key={c.ver}
                className="px-5 py-3 flex items-start gap-3"
                style={{ borderBottom: i < changelog.length - 1 ? `1px solid ${palette.hair}` : "none" }}
              >
                <span className="font-mono text-xs mt-0.5" style={{ color: accent, width: "34px" }}>
                  {c.ver}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-semibold" style={{ color: ink }}>
                      {c.titulo}
                    </span>
                    <span
                      className="font-mono text-[9px] uppercase px-1.5 py-0.5"
                      style={{ backgroundColor: bg, color: TAG_COLOR[c.tag], border: `1px solid ${border}`, borderRadius: "3px" }}
                    >
                      {c.tag}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: muted }}>
                    {c.detalle}
                  </p>
                </div>
                <span className="font-mono text-[10px] mt-0.5" style={{ color: palette.faint }}>
                  {c.fecha}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
