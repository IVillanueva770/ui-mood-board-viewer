"use client";

import { motion } from "motion/react";
import { palette } from "../_data";
import { useCalmMotion } from "./use-calm-motion";

/**
 * Cabecera del interno (NO es una pieza funcional): saludo + anclas in-page.
 *
 * Reemplaza al viejo `InternalNav` (switcher prohibido por la rúbrica: montaba
 * 1 sub-vista y desmontaba el resto = densidad escondida en un viewer). Acá la
 * nav son jumplinks a secciones que están TODAS montadas y se ven scrolleando.
 */
const anclas = [
  { href: "#calm-today", label: "Today" },
  { href: "#calm-meditation", label: "Meditation" },
  { href: "#calm-sleep", label: "Sleep" },
  { href: "#calm-mood", label: "Mood" },
  { href: "#calm-settings", label: "Settings" },
];

export function TodayHeader({ fecha, nombre }: { fecha: string; nombre: string }) {
  const { fade } = useCalmMotion();
  const { sage, ink, muted, line } = palette;

  return (
    <motion.header {...fade()}>
      <p className="text-[11px] uppercase tracking-[0.35em] mb-3" style={{ color: sage }}>
        {fecha}
      </p>
      <h2
        className="font-cormorant text-5xl sm:text-6xl font-light leading-[1.05] mb-8"
        style={{ color: ink }}
      >
        Buenos días,{" "}
        <em className="italic" style={{ color: sage }}>
          {nombre}.
        </em>
      </h2>

      <nav
        className="flex flex-wrap gap-x-7 gap-y-3 pb-6"
        style={{ borderBottom: `1px solid ${line}` }}
        aria-label="Secciones de la app"
      >
        {anclas.map((a) => (
          <a
            key={a.href}
            href={a.href}
            className="text-xs uppercase tracking-[0.25em] transition-colors"
            style={{ color: muted }}
          >
            {a.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
