"use client";

import { motion } from "motion/react";
import { palette, type Feature } from "../_data";
import { useStudioMotion } from "./use-studio-motion";

/** Externo · grid de features para devs (sombra multi-capa al hover). */
export function Features({ features }: { features: Feature[] }) {
  const { lift, reveal } = useStudioMotion();
  const { ink, bg, accent, muted, border } = palette;

  return (
    <section>
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>
        por qué cambia el flow
      </p>
      <h2 className="text-3xl font-semibold tracking-tight mb-8" style={{ color: ink }}>
        Hecho para escribir código, no para mirarlo.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <motion.div key={f.tit} {...reveal(i)}>
            <motion.div
              {...lift}
              className="p-5 h-full bg-white"
              style={{ border: `1px solid ${border}`, borderRadius: "8px" }}
            >
              <span
                className="inline-block font-mono text-[10px] px-2 py-0.5 mb-3"
                style={{ backgroundColor: bg, color: accent, border: `1px solid ${border}`, borderRadius: "4px" }}
              >
                {f.chip}
              </span>
              <h4 className="font-semibold mb-1.5" style={{ color: ink }}>
                {f.tit}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: muted }}>
                {f.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
