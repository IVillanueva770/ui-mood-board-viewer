"use client";

import { motion } from "motion/react";
import { palette, type ItemWishlist } from "../_data";
import { useWarmMotion } from "./use-warm-motion";
import { HeartButton } from "./HeartButton";

/** Pieza interna: lugares guardados (corazón con pop — firma del estilo). */
export function WishlistGrid({ items }: { items: ItemWishlist[] }) {
  const { reveal, lift } = useWarmMotion();
  const { rausch, text, muted } = palette;

  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: rausch }}>
            ❤️ Tu wishlist
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">Lugares guardados</h2>
        </div>
        <span className="text-sm" style={{ color: muted }}>{items.length} alojamientos</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {items.map((w, i) => (
          <motion.div key={w.id} {...reveal(i * 0.05)} {...lift} className="cursor-pointer">
            <div
              className="aspect-[4/3] rounded-2xl mb-3 flex items-end justify-between p-4 relative"
              style={{ background: w.gradient }}
            >
              <span className="text-3xl">{w.emoji}</span>
              {w.superAnfitrion && (
                <span
                  className="px-2 py-1 rounded-full text-[10px] font-bold absolute top-3 left-3"
                  style={{ backgroundColor: "#ffffff", color: text }}
                >
                  ⭐ Súper anfitrión
                </span>
              )}
              <span className="absolute top-3 right-3">
                <HeartButton defaultLiked />
              </span>
            </div>
            <p className="font-semibold text-sm">{w.lugar}</p>
            <p className="text-sm" style={{ color: muted }}>{w.ciudad}</p>
            <p className="text-sm mt-1">
              <span style={{ fontWeight: 600 }}>{w.precio}</span>{" "}
              <span style={{ color: muted }}>noche</span>
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
