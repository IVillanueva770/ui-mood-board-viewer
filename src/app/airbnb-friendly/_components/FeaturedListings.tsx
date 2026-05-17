"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { palette, CATEGORIAS, type FiltroCategoria, type Listing } from "../_data";
import { useWarmMotion } from "./use-warm-motion";
import { HeartButton } from "./HeartButton";
import { Stars } from "./Stars";

/** Pieza externa: explorar alojamientos con filtro por categoría + wishlist. */
export function FeaturedListings({ listings }: { listings: Listing[] }) {
  const { reveal, lift, reduce } = useWarmMotion();
  const { rausch, text, muted } = palette;
  const [filtro, setFiltro] = useState<FiltroCategoria>("Todos");

  const visibles = filtro === "Todos" ? listings : listings.filter((l) => l.categoria === filtro);

  return (
    <section className="mt-14">
      <div className="flex items-end justify-between mb-1 flex-wrap gap-2">
        <h2 className="text-2xl font-semibold tracking-tight">Alojamientos destacados</h2>
        <a href="#" className="text-sm font-semibold" style={{ color: rausch }}>Ver todos →</a>
      </div>
      <p className="text-sm mb-5" style={{ color: muted }}>
        Los que más eligieron otros huéspedes esta semana en Argentina.
      </p>

      <div className="flex flex-wrap gap-2 mb-7">
        {CATEGORIAS.map((c) => {
          const activo = c === filtro;
          return (
            <motion.button
              key={c}
              onClick={() => setFiltro(c)}
              whileTap={reduce ? undefined : { scale: 0.96 }}
              className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
              style={{
                backgroundColor: activo ? rausch : "#ffffff",
                color: activo ? "#ffffff" : text,
                border: `1px solid ${activo ? rausch : palette.border}`,
              }}
            >
              {c}
            </motion.button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibles.map((l, i) => (
          <motion.div key={l.id} {...reveal(i * 0.04)} {...lift} className="cursor-pointer">
            <div
              className="aspect-[4/3] rounded-2xl mb-3 flex items-start justify-between p-3 relative overflow-hidden"
              style={{ background: l.gradient }}
            >
              <span className="text-4xl absolute bottom-3 left-4">{l.emoji}</span>
              {l.superAnfitrion && (
                <span
                  className="px-2.5 py-1 rounded-full text-[10px] font-bold"
                  style={{ backgroundColor: "#ffffff", color: text }}
                >
                  ⭐ Súper anfitrión
                </span>
              )}
              <div className="ml-auto">
                <HeartButton defaultLiked={l.favorito} />
              </div>
            </div>
            <div className="flex items-start justify-between gap-2">
              <p className="font-semibold text-sm leading-snug">{l.lugar}</p>
              <Stars rating={l.rating} count={l.reviews} />
            </div>
            <p className="text-sm" style={{ color: muted }}>{l.ciudad}</p>
            <p className="text-xs mt-0.5" style={{ color: muted }}>Anfitrión/a: {l.anfitrion}</p>
            <p className="text-sm mt-1.5">
              <span style={{ fontWeight: 600 }}>{l.precio}</span>{" "}
              <span style={{ color: muted }}>la noche</span>
            </p>
          </motion.div>
        ))}
      </div>

      {visibles.length === 0 && (
        <p className="text-sm text-center py-12" style={{ color: muted }}>
          No hay alojamientos en esa categoría todavía.
        </p>
      )}
    </section>
  );
}
