"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { palette, type NavLink } from "../_data";
import { useWebMotion } from "./use-web-motion";

/**
 * Pieza externa (hero web): nav top con hamburger en mobile + headline + CTA
 * + visual. Hero web clásico (no full-bleed app) — colapsa limpio en mobile
 * pero sigue siendo claramente un sitio web.
 */
export function LandingHero({ navLinks }: { navLinks: NavLink[] }) {
  const { reduce, tap } = useWebMotion();
  const { accent, text, muted, border, borderStrong, surface, card } = palette;
  const [menu, setMenu] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-5">
      {/* Top nav web */}
      <nav
        className="flex items-center justify-between py-4 mb-12"
        style={{ borderBottom: `1px solid ${border}` }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm text-white"
            style={{ background: "linear-gradient(135deg,#1d9bf0,#8b5cf6)" }}
          >
            N
          </div>
          <span className="font-bold text-lg" style={{ color: text }}>Nube</span>
        </div>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: muted }}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-semibold" style={{ color: text }}>Ingresar</a>
          <motion.button
            {...tap}
            className="px-4 py-2 rounded-full text-sm font-bold text-white"
            style={{ backgroundColor: accent }}
          >
            Crear cuenta
          </motion.button>
        </div>

        <button
          className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ border: `1px solid ${borderStrong}`, color: text }}
          aria-label="Abrir menú"
          aria-expanded={menu}
          onClick={() => setMenu((v) => !v)}
        >
          {menu ? "✕" : "☰"}
        </button>
      </nav>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden -mt-8 mb-8"
          >
            <div className="rounded-2xl p-4 space-y-1" style={{ backgroundColor: surface, border: `1px solid ${border}` }}>
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} className="block px-3 py-2 rounded-lg text-sm font-medium" style={{ color: text }}>
                  {l.label}
                </a>
              ))}
              <button className="w-full mt-2 px-3 py-2.5 rounded-lg text-sm font-bold text-white" style={{ backgroundColor: accent }}>
                Crear cuenta
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero web: 2 columnas en desktop, stack en mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] mb-4" style={{ color: text }}>
            El feed que <span style={{ color: accent }}>controlás vos.</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-7 max-w-md" style={{ color: muted }}>
            Sin algoritmo predatorio, sin sugerencias forzadas, sin anuncios disfrazados
            de posts. Cronológico de verdad — y desde cualquier pantalla.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <motion.button
              {...tap}
              whileHover={reduce ? undefined : { y: -2 }}
              className="px-6 py-3 rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: accent }}
            >
              Crear cuenta gratis
            </motion.button>
            <motion.button
              {...tap}
              className="px-6 py-3 rounded-full text-sm font-bold"
              style={{ border: `1px solid ${borderStrong}`, color: text, backgroundColor: card }}
            >
              Ver cómo funciona
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl p-5"
          style={{ backgroundColor: surface, border: `1px solid ${border}` }}
        >
          {[
            { a: "Guadalupe Alanís", h: "@guada_inmob", t: "Lanzamos el sitio nuevo con catálogo en vivo 🏡", c: "linear-gradient(135deg,#1d9bf0,#8b5cf6)" },
            { a: "Nacho Galland", h: "@kine_galland", t: "Si el dolor baja con movimiento, es información.", c: "linear-gradient(135deg,#00ba7c,#1d9bf0)" },
          ].map((row, i) => (
            <motion.div
              key={row.h}
              initial={reduce ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
              className="flex gap-3 p-3 rounded-xl mb-2"
              style={{ backgroundColor: card, border: `1px solid ${border}` }}
            >
              <div className="w-9 h-9 rounded-full shrink-0" style={{ background: row.c }} />
              <div className="min-w-0">
                <p className="text-xs font-bold" style={{ color: text }}>
                  {row.a} <span className="font-normal" style={{ color: muted }}>{row.h}</span>
                </p>
                <p className="text-sm mt-0.5" style={{ color: text }}>{row.t}</p>
              </div>
            </motion.div>
          ))}
          <p className="text-[11px] text-center mt-2" style={{ color: muted }}>
            Mismo sitio, mismo orden — en desktop y en el celular.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
