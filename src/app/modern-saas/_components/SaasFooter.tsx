"use client";

import { motion } from "motion/react";
import { palette, type FooterCol } from "../_data";
import { useSaasMotion } from "./use-saas-motion";

/**
 * Pieza externa (footer de producto): footer SaaS real multi-columna —
 * marca + columnas de navegación + barra legal. Refuerza que es un producto
 * terminado, no un mockup. (El StyleFooter del chrome es aparte: "volver al
 * index" + paleta — éste es el footer del negocio.)
 */
export function SaasFooter({ footer }: { footer: FooterCol[] }) {
  const { reveal } = useSaasMotion();
  const { text, muted, mutedSoft, border } = palette;

  return (
    <motion.footer
      {...reveal()}
      className="pt-12 mt-4"
      style={{ borderTop: `1px solid ${border}` }}
    >
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-sm font-bold"
              style={{ background: palette.gradient }}
            >
              ◆
            </span>
            <span className="font-semibold" style={{ color: text }}>
              Plataforma
            </span>
          </div>
          <p className="text-xs leading-relaxed max-w-[200px]" style={{ color: mutedSoft }}>
            Una API para enviar producto sin pelear con la infraestructura.
          </p>
        </div>

        {footer.map((col) => (
          <div key={col.titulo}>
            <p
              className="text-xs uppercase tracking-wider mb-3 font-semibold"
              style={{ color: mutedSoft }}
            >
              {col.titulo}
            </p>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ color: muted }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="flex flex-wrap items-center justify-between gap-3 mt-10 pt-6 text-xs"
        style={{ borderTop: `1px solid ${border}`, color: mutedSoft }}
      >
        <span>© 2026 Plataforma Inc. Todos los derechos reservados.</span>
        <div className="flex items-center gap-5">
          <span>Estado: todos los sistemas operativos</span>
          <span style={{ fontFamily: "var(--font-geist-mono)" }}>v0.42.1</span>
        </div>
      </div>
    </motion.footer>
  );
}
