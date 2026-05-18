"use client";

import { motion } from "motion/react";
import { palette, type Review } from "../_data";
import { useIosMotion } from "./use-ios-motion";

function Stars({ n, color }: { n: number; color: string }) {
  return (
    <span style={{ color }} aria-label={`${n} de 5 estrellas`}>
      {"★".repeat(n)}
      <span style={{ opacity: 0.25 }}>{"★".repeat(5 - n)}</span>
    </span>
  );
}

/**
 * Pieza externa (ratings & reviews): bloque "Valoraciones y reseñas" tal cual
 * el App Store — promedio grande + distribución + reseñas con autor. Cierra la
 * presentación con prueba social en el lenguaje nativo.
 */
export function RatingsReviews({
  ratingProm,
  reviewsTexto,
  reviews,
}: {
  ratingProm: number;
  reviewsTexto: string;
  reviews: Review[];
}) {
  const { enter } = useIosMotion();
  const { text, muted, secondary, card, sep, orange } = palette;

  const dist = [
    { s: 5, pct: 86 },
    { s: 4, pct: 9 },
    { s: 3, pct: 3 },
    { s: 2, pct: 1 },
    { s: 1, pct: 1 },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight mb-4 px-1" style={{ color: text }}>
        Valoraciones y reseñas
      </h2>

      <div
        className="rounded-2xl p-5 mb-4 flex items-center gap-6"
        style={{ backgroundColor: card, border: `1px solid ${sep}` }}
      >
        <div className="text-center shrink-0">
          <p className="text-5xl font-bold tracking-tight" style={{ color: text }}>
            {ratingProm.toLocaleString("es-AR")}
          </p>
          <p className="text-[11px] mt-1" style={{ color: muted }}>
            de 5 · {reviewsTexto}
          </p>
        </div>
        <div className="flex-1 space-y-1">
          {dist.map((d) => (
            <div key={d.s} className="flex items-center gap-2">
              <span className="text-[10px] w-3 text-right" style={{ color: muted }}>
                {d.s}
              </span>
              <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: palette.groupBg }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: muted }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${d.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.05 * (5 - d.s) }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {reviews.map((r, i) => (
          <motion.div
            key={r.id}
            {...enter(i)}
            className="rounded-2xl p-4"
            style={{ backgroundColor: card, border: `1px solid ${sep}` }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                  style={{ backgroundColor: r.color }}
                >
                  {r.inicial}
                </span>
                <div>
                  <p className="text-sm font-semibold leading-tight" style={{ color: text }}>
                    {r.autor}
                  </p>
                  <p className="text-[11px]" style={{ color: muted }}>
                    {r.fecha}
                  </p>
                </div>
              </div>
              <Stars n={r.estrellas} color={orange} />
            </div>
            <p className="text-sm font-semibold mb-1" style={{ color: text }}>
              {r.titulo}
            </p>
            <p className="text-[13px] leading-relaxed" style={{ color: secondary }}>
              {r.texto}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
