"use client";

import { motion } from "motion/react";
import { palette, type Plan } from "../_data";
import { useStudioMotion } from "./use-studio-motion";

/** Externo · planes de dev-tool (Hobby / Pro / Business). */
export function Pricing({ planes }: { planes: Plan[] }) {
  const { lift, reveal } = useStudioMotion();
  const { ink, bg, accent, muted, border, card } = palette;

  return (
    <section>
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>
        precios
      </p>
      <h2 className="text-3xl font-semibold tracking-tight mb-8" style={{ color: ink }}>
        Gratis para arrancar. Barato para vivir adentro.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        {planes.map((p, i) => (
          <motion.div key={p.nombre} {...reveal(i)} className="h-full">
            <motion.div
              {...lift}
              className="p-6 h-full flex flex-col"
              style={{
                backgroundColor: p.destacado ? ink : card,
                color: p.destacado ? bg : ink,
                border: `1px solid ${p.destacado ? ink : border}`,
                borderRadius: "10px",
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-lg">{p.nombre}</h4>
                {p.destacado && (
                  <span
                    className="font-mono text-[10px] px-2 py-0.5"
                    style={{ backgroundColor: accent, color: bg, borderRadius: "3px" }}
                  >
                    popular
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-semibold tracking-tight">{p.precio}</span>
                <span className="font-mono text-xs" style={{ color: p.destacado ? "rgba(247,247,244,0.6)" : muted }}>
                  {p.periodo}
                </span>
              </div>
              <p className="text-sm mb-5" style={{ color: p.destacado ? "rgba(247,247,244,0.7)" : muted }}>
                {p.desc}
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="text-sm flex items-start gap-2">
                    <span style={{ color: accent }}>✓</span>
                    <span style={{ color: p.destacado ? bg : ink }}>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full px-4 py-2.5 text-sm font-semibold"
                style={{
                  backgroundColor: p.destacado ? accent : "transparent",
                  color: p.destacado ? bg : ink,
                  border: `1px solid ${p.destacado ? accent : border}`,
                  borderRadius: "6px",
                }}
              >
                {p.cta}
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
