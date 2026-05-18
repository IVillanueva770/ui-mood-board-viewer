"use client";

import { motion } from "motion/react";
import { m3, elevation, type Review, type RatingDist } from "../_data";
import { useM3Motion } from "./use-m3-motion";

function Stars({ n, color = m3.primary }: { n: number; color?: string }) {
  return (
    <span aria-label={`${n} de 5 estrellas`} style={{ color }}>
      {"★".repeat(n)}
      <span style={{ color: m3.outlineVariant }}>{"★".repeat(5 - n)}</span>
    </span>
  );
}

/**
 * Pieza externa 4 — calificaciones y reseñas Play Store: puntaje grande +
 * barras de distribución 5★→1★ (animan al entrar) + reseñas reales.
 */
export function StoreReviews({
  score,
  total,
  dist,
  reviews,
}: {
  score: string;
  total: string;
  dist: RatingDist[];
  reviews: Review[];
}) {
  const { enter, EMPHASIZED } = useM3Motion();

  return (
    <section className="max-w-5xl mx-auto px-5">
      <motion.h2
        {...enter()}
        className="text-xl font-medium tracking-tight mb-6"
        style={{ color: m3.onSurface }}
      >
        Calificaciones y reseñas
      </motion.h2>

      <motion.div
        {...enter()}
        className="rounded-3xl p-6 mb-5 grid grid-cols-[auto_1fr] gap-7 items-center"
        style={{ backgroundColor: m3.surfaceContainerLow, boxShadow: elevation(1) }}
      >
        <div className="text-center">
          <div className="text-5xl font-semibold tracking-tight" style={{ color: m3.onSurface }}>{score}</div>
          <div className="mt-1"><Stars n={5} /></div>
          <div className="text-xs mt-1" style={{ color: m3.onSurfaceVariant }}>{total} reseñas</div>
        </div>
        <div className="space-y-1.5">
          {dist.map((d) => (
            <div key={d.estrellas} className="flex items-center gap-2">
              <span className="text-xs w-3 text-right" style={{ color: m3.onSurfaceVariant }}>{d.estrellas}</span>
              <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: m3.surfaceVariant }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${d.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: EMPHASIZED, delay: 0.1 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: m3.primary }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="space-y-3">
        {reviews.map((r, i) => (
          <motion.article
            key={r.autor}
            {...enter(i)}
            className="rounded-3xl p-5"
            style={{ backgroundColor: m3.surface, border: `1px solid ${m3.outlineVariant}` }}
          >
            <div className="flex items-center gap-3 mb-2.5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                style={{ backgroundColor: r.color, color: m3.onPrimary }}
              >
                {r.inicial}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium" style={{ color: m3.onSurface }}>{r.autor}</p>
                <p className="text-[11px]" style={{ color: m3.onSurfaceVariant }}>{r.fecha}</p>
              </div>
              <span className="text-sm"><Stars n={r.estrellas} /></span>
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: m3.onSurfaceVariant }}>{r.texto}</p>
            <p className="text-[11px]" style={{ color: m3.onSurfaceVariant }}>
              {r.utiles} personas encontraron útil esta reseña ·{" "}
              <span style={{ color: m3.primary }} className="font-medium">¿Te resultó útil?</span>
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
