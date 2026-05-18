"use client";

import { motion } from "motion/react";
import { palette, type AppMeta } from "../_data";
import { useIosMotion } from "./use-ios-motion";

/**
 * Pieza externa (hero App Store): ficha de la app tal cual la verías en el
 * App Store — ícono, nombre, claim, botón "Obtener", fila de rating/descargas,
 * y un mockup de iPhone con una captura real de la app. NO es una landing web
 * (eso es web-first-mobile): es la presentación nativa.
 */
export function AppStoreHero({ app }: { app: AppMeta }) {
  const { reduce, tap } = useIosMotion();
  const { text, muted, secondary, sep, card, groupBg, accent } = palette;

  return (
    <section>
      <div
        className="rounded-3xl p-6 sm:p-8"
        style={{ backgroundColor: card, border: `1px solid ${sep}` }}
      >
        <div className="flex items-start gap-5 flex-wrap">
          <motion.div
            initial={reduce ? false : { scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-24 h-24 rounded-[1.4rem] flex items-center justify-center text-4xl shrink-0"
            style={{ background: app.iconGradient, boxShadow: "0 10px 30px -8px rgba(0,122,255,0.5)" }}
          >
            🧭
          </motion.div>

          <div className="flex-1 min-w-[200px]">
            <h1 className="text-2xl font-bold tracking-tight" style={{ color: text }}>
              {app.nombre}
            </h1>
            <p className="text-sm mb-1" style={{ color: muted }}>
              {app.tagline}
            </p>
            <p className="text-[15px] font-medium mb-4" style={{ color: secondary }}>
              {app.claim}
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <motion.button
                {...tap}
                whileHover={reduce ? undefined : { scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="px-7 py-2 rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: accent }}
              >
                Obtener
              </motion.button>
              <span className="text-[11px]" style={{ color: muted }}>
                Compras dentro de la app
              </span>
            </div>
          </div>
        </div>

        <p className="text-[15px] leading-relaxed mt-6" style={{ color: secondary }}>
          {app.sub}
        </p>

        <div
          className="grid grid-cols-3 gap-2 mt-6 pt-5"
          style={{ borderTop: `0.5px solid ${sep}` }}
        >
          {[
            { v: `★ ${app.ratingProm}`, l: app.reviewsTexto },
            { v: app.descargas, l: "descargas" },
            { v: app.ranking.split(" ")[0], l: app.ranking.replace(/^\S+\s/, "") },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-base font-bold" style={{ color: text }}>
                {s.v}
              </p>
              <p className="text-[11px] leading-tight mt-0.5" style={{ color: muted }}>
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mockup de iPhone con captura de "Hoy" */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 240, damping: 26 }}
        className="mt-8 mx-auto rounded-[2.25rem] overflow-hidden"
        style={{
          maxWidth: 280,
          backgroundColor: card,
          border: `1px solid ${sep}`,
          boxShadow: "0 24px 50px -18px rgba(0,0,0,0.25)",
        }}
      >
        <div
          className="flex items-center justify-between px-6 pt-2.5 pb-1.5 text-[11px] font-semibold"
          style={{ backgroundColor: groupBg }}
        >
          <span>9:41</span>
          <span>􀙇 􀛨 􀛪</span>
        </div>
        <div className="p-4" style={{ backgroundColor: groupBg }}>
          <p className="text-lg font-bold tracking-tight" style={{ color: text }}>
            Hola, Nacho
          </p>
          <p className="text-[11px] mb-3" style={{ color: muted }}>
            Te quedan 3 hábitos
          </p>
          <div
            className="rounded-2xl p-3 mb-3"
            style={{ background: "linear-gradient(135deg,#007aff,#5856d6)", color: "#fff" }}
          >
            <p className="text-[10px] uppercase tracking-wider opacity-80">Racha</p>
            <p className="text-2xl font-bold">12 días</p>
          </div>
          {["🧘 Movilidad lumbar", "🚶 Caminata", "💧 Hidratación"].map((h, i) => (
            <div
              key={h}
              className="flex items-center gap-2 p-2.5 rounded-xl mb-2 text-xs font-medium"
              style={{ backgroundColor: card, color: text }}
            >
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-[11px]"
                style={{
                  backgroundColor: i < 2 ? palette.green : card,
                  color: i < 2 ? "#fff" : text,
                  border: i < 2 ? "none" : `1px solid ${sep}`,
                }}
              >
                {i < 2 ? "✓" : "›"}
              </span>
              {h}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
