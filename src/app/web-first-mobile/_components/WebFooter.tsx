"use client";

import { motion } from "motion/react";
import { palette, type FooterCol } from "../_data";
import { useWebMotion } from "./use-web-motion";

/**
 * Pieza externa: CTA final + footer web real con columnas de links.
 * El footer multi-columna refuerza "esto es un sitio web, no una app".
 */
export function WebFooter({ footer }: { footer: FooterCol[] }) {
  const { reduce, reveal, tap } = useWebMotion();
  const { accent, text, muted, border, surface } = palette;

  return (
    <section className="max-w-6xl mx-auto px-5">
      <motion.div
        {...reveal(0)}
        className="rounded-2xl px-6 py-12 text-center mb-12"
        style={{ background: "linear-gradient(135deg,#1d9bf0,#8b5cf6)" }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 text-white">
          Tu timeline, en orden, desde hoy
        </h2>
        <p className="text-sm mb-7 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
          Funciona igual de bien en la compu y en el celular. Sin instalar nada.
        </p>
        <motion.button
          {...tap}
          whileHover={reduce ? undefined : { y: -2 }}
          className="px-7 py-3 rounded-full text-sm font-bold"
          style={{ backgroundColor: "#ffffff", color: accent }}
        >
          Crear cuenta gratis
        </motion.button>
      </motion.div>

      <footer className="pt-10" style={{ borderTop: `1px solid ${border}` }}>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs text-white"
                style={{ background: "linear-gradient(135deg,#1d9bf0,#8b5cf6)" }}
              >
                N
              </div>
              <span className="font-bold" style={{ color: text }}>Nube</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: muted }}>
              El feed cronológico, en cualquier pantalla.
            </p>
          </div>
          {footer.map((col) => (
            <div key={col.titulo}>
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: text }}>
                {col.titulo}
              </p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-xs hover:opacity-70 transition-opacity" style={{ color: muted }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="flex items-center justify-between flex-wrap gap-3 py-6 text-xs"
          style={{ borderTop: `1px solid ${border}`, color: muted, backgroundColor: surface, paddingLeft: 16, paddingRight: 16, borderRadius: 12 }}
        >
          <span>© 2026 Nube · Hecho en Argentina</span>
          <span>Español (AR) · Términos · Privacidad</span>
        </div>
      </footer>
    </section>
  );
}
