"use client";

import { motion } from "motion/react";
import { palette, REST_SHADOW, syn, type CodeLine } from "../_data";
import { useStudioMotion } from "./use-studio-motion";

/** Externo · hero: claim de dev-tool + CTAs + editor mock cálido al lado. */
export function Hero({ code }: { code: CodeLine[] }) {
  const { lift } = useStudioMotion();
  const { ink, bg, accent, muted, border, borderStrong, card, faint } = palette;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-6" style={{ color: accent }}>
          cursor.studio · v0.42
        </p>
        <h1
          className="text-5xl sm:text-6xl font-semibold tracking-[-0.025em] leading-[0.98] mb-6"
          style={{ color: ink }}
        >
          El editor que entiende
          <br />
          <span style={{ color: accent }}>tu codebase entero.</span>
        </h1>
        <p className="text-base sm:text-lg leading-relaxed max-w-md mb-8" style={{ color: muted }}>
          Predice el próximo paso, refactoriza con contexto y te deja pensar en el
          problema, no en el archivo.
        </p>

        <div className="flex items-center gap-3 flex-wrap mb-8">
          <motion.button
            {...lift}
            className="px-5 py-2.5 text-sm font-semibold flex items-center gap-2"
            style={{ backgroundColor: ink, color: bg, borderRadius: "6px" }}
          >
            <span className="font-mono text-xs opacity-70">↓</span> Descargar
          </motion.button>
          <motion.button
            {...lift}
            className="px-5 py-2.5 text-sm font-semibold flex items-center gap-2"
            style={{ border: `1px solid ${borderStrong}`, color: ink, backgroundColor: card, borderRadius: "6px" }}
          >
            <span className="font-mono text-xs opacity-70">≡</span> GitHub
          </motion.button>
          <span className="font-mono text-xs ml-1" style={{ color: faint }}>
            ↑ gratis para individuos
          </span>
        </div>

        <div
          className="p-3.5 font-mono text-xs leading-relaxed"
          style={{ backgroundColor: ink, color: bg, borderRadius: "8px", boxShadow: REST_SHADOW }}
        >
          <p className="opacity-50 mb-1">$ curl -fsSL cursor.studio/install.sh | sh</p>
          <p>
            installing cursor v0.42 ··· <span style={{ color: accent }}>done</span>
          </p>
        </div>
      </div>

      {/* Editor mock — el producto, no un screenshot genérico */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white overflow-hidden"
        style={{ border: `1px solid ${border}`, borderRadius: "10px", boxShadow: REST_SHADOW }}
      >
        <div
          className="px-4 py-2 flex items-center gap-2 font-mono text-[11px]"
          style={{ borderBottom: `1px solid ${border}`, backgroundColor: bg, color: muted }}
        >
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: borderStrong }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: borderStrong }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: accent }} />
          <span className="ml-2" style={{ color: ink }}>
            dashboard/page.tsx
          </span>
        </div>
        <div className="p-4 font-mono text-[11px] leading-relaxed" style={{ color: ink }}>
          {code.slice(0, 12).map((l) => (
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
          <div className="flex gap-3 mt-1">
            <span className="select-none text-right" style={{ width: "18px" }} />
            <span
              className="px-1.5 py-0.5 text-[10px]"
              style={{ backgroundColor: "rgba(245,78,0,0.12)", color: accent, borderRadius: "3px" }}
            >
              ⌘TAB · aceptar sugerencia
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
