"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Estilo } from "@/lib/estilos";

type Props = {
  estilo: Estilo;
  borderColor: string;
  navColor: string;
};

export function StyleHeader({ estilo, borderColor, navColor }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-4 py-3 flex items-center justify-between text-xs"
      style={{ borderBottom: `1px solid ${borderColor}` }}
    >
      <Link
        href="/"
        style={{ color: navColor }}
        className="hover:opacity-80 transition-opacity"
      >
        ← Volver al index
      </Link>
      <div style={{ color: navColor }}>
        {estilo.nombre} · {estilo.tagline}
      </div>
    </motion.div>
  );
}

type FooterProps = {
  estilo: Estilo;
  textColor: string;
  borderColor: string;
  monoFont?: string;
  headingClass?: string;
};

export function StyleFooter({ estilo, textColor, borderColor, monoFont, headingClass }: FooterProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-xs"
      style={{ borderTop: `1px solid ${borderColor}`, color: textColor }}
    >
      <div>
        <div className={`font-semibold mb-2 ${headingClass || ""}`} style={{ color: textColor }}>Paleta</div>
        <div className="space-y-1" style={monoFont ? { fontFamily: monoFont } : undefined}>
          {estilo.paleta.map((c, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm ring-1 ring-black/10" style={{ backgroundColor: c }} />
              <span>{c}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className={`font-semibold mb-2 ${headingClass || ""}`} style={{ color: textColor }}>Tipografía</div>
        <div className="leading-relaxed">{estilo.tipografia}</div>
      </div>
      <div>
        <div className={`font-semibold mb-2 ${headingClass || ""}`} style={{ color: textColor }}>Cuándo usar</div>
        <p className="leading-relaxed">{estilo.cuandoUsar}</p>
      </div>
    </motion.section>
  );
}
