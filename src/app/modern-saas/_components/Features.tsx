"use client";

import { motion } from "motion/react";
import { palette, type Feature, type IconKey } from "../_data";
import { useSaasMotion } from "./use-saas-motion";

/* Iconos SVG inline (sin libs) — geométricos, coherentes con el mood minimal. */
function FeatureIcon({ icon }: { icon: IconKey }) {
  const common = { fill: "none", stroke: "#fff", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
      {icon === "auth" && (
        <>
          <rect x="4" y="10" width="16" height="10" rx="2" {...common} />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" {...common} />
          <circle cx="12" cy="15" r="1.4" {...common} />
        </>
      )}
      {icon === "db" && (
        <>
          <ellipse cx="12" cy="6" rx="7" ry="3" {...common} />
          <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6" {...common} />
          <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" {...common} />
        </>
      )}
      {icon === "edge" && (
        <>
          <circle cx="12" cy="12" r="8" {...common} />
          <path d="M4 12h16M12 4c2.5 2.4 2.5 13.6 0 16M12 4c-2.5 2.4-2.5 13.6 0 16" {...common} />
        </>
      )}
      {icon === "obs" && (
        <>
          <path d="M4 16l4-5 4 3 4-7 4 6" {...common} />
          <path d="M4 20h16" {...common} />
        </>
      )}
    </svg>
  );
}

/**
 * Pieza externa (features): grid de 4 capacidades con icono SVG.
 * Scroll-reveal fade-up ESCALONADO (variants group/groupItem) — esta cascada
 * es la firma concreta de modern-saas. Hover de card = elevación soft + borde
 * accent.
 */
export function Features({ features }: { features: Feature[] }) {
  const { reveal, groupProps, groupItem, hoverCard } = useSaasMotion();
  const { accent, text, muted, border, card } = palette;

  return (
    <section>
      <motion.div {...reveal()} className="max-w-2xl mb-10">
        <h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3"
          style={{ color: text }}
        >
          Todo lo aburrido, resuelto.
        </h2>
        <p className="text-base leading-relaxed" style={{ color: muted }}>
          Lo que antes eran cuatro servicios y un equipo de plataforma, ahora es
          una sola API que escala sola.
        </p>
      </motion.div>

      <motion.div
        {...groupProps}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {features.map((f) => (
          <motion.div
            key={f.titulo}
            variants={groupItem}
            {...hoverCard(accent)}
            className="p-6 rounded-xl border"
            style={{ borderColor: border, backgroundColor: card }}
          >
            <div
              className="w-11 h-11 rounded-xl mb-5 flex items-center justify-center"
              style={{ background: palette.gradient }}
            >
              <FeatureIcon icon={f.icon} />
            </div>
            <h3 className="font-semibold text-lg mb-2" style={{ color: text }}>
              {f.titulo}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: muted }}>
              {f.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
