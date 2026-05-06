"use client";

import { motion } from "motion/react";
import type { Estilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "./style-chrome";

type Props = {
  estilo: Estilo;
  bg: string;
  fg: string;
  cardBg: string;
  borderColor: string;
  mutedColor: string;
  accent: string;
  fontClass?: string;
  headingClass?: string;
  radius?: string;
  contraste?: "light" | "dark";
};

export function StubPage({ estilo, bg, fg, cardBg, borderColor, mutedColor, accent, fontClass = "font-inter", headingClass, radius = "8px", contraste = "light" }: Props) {
  return (
    <div style={{ backgroundColor: bg, color: fg, minHeight: "100vh" }} className={fontClass}>
      <StyleHeader estilo={estilo} borderColor={borderColor} navColor={mutedColor} />

      <main className="max-w-5xl mx-auto px-6 py-14 sm:py-20">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: accent }}>
            {estilo.tagline}
          </p>
          <h1 className={`text-4xl sm:text-6xl mb-5 leading-[1.05] tracking-tight ${headingClass || "font-semibold"}`}>
            Sample layout aplicando <br />
            <span style={{ color: accent }}>{estilo.nombre}</span>.
          </h1>
          <p className="text-base leading-relaxed max-w-2xl mb-8" style={{ color: mutedColor }}>
            {estilo.descripcion}
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 text-sm font-medium transition-all"
              style={{
                backgroundColor: accent,
                color: contraste === "dark" ? bg : "#ffffff",
                borderRadius: radius,
              }}
            >
              CTA primario
            </motion.button>
            <motion.button
              whileHover={{ borderColor: fg }}
              className="px-6 py-3 text-sm font-medium transition-colors"
              style={{
                border: `1px solid ${borderColor}`,
                color: fg,
                borderRadius: radius,
              }}
            >
              Secundario
            </motion.button>
          </div>
        </motion.section>

        {/* Cards grid */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { titulo: "Feature uno", desc: "Descripción corta de la funcionalidad principal." },
              { titulo: "Feature dos", desc: "Otro beneficio del producto, contado simple." },
              { titulo: "Feature tres", desc: "Tercer valor agregado, comunicado con claridad." },
            ].map((c, i) => (
              <motion.div
                key={c.titulo}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -3, borderColor: accent }}
                className="p-5 transition-all"
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: radius,
                }}
              >
                <div className="w-10 h-10 mb-4 flex items-center justify-center font-semibold" style={{ backgroundColor: accent, color: contraste === "dark" ? bg : "#ffffff", borderRadius: radius }}>
                  {i + 1}
                </div>
                <h3 className={`font-semibold mb-2 ${headingClass || ""}`}>{c.titulo}</h3>
                <p className="text-sm leading-relaxed" style={{ color: mutedColor }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stats strip */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 mb-16"
          style={{ borderTop: `1px solid ${borderColor}`, borderBottom: `1px solid ${borderColor}` }}
        >
          {[
            { val: "94%", label: "Satisfacción" },
            { val: "12k", label: "Usuarios activos" },
            { val: "<2s", label: "Latencia avg" },
            { val: "24/7", label: "Soporte" },
          ].map((s) => (
            <div key={s.label}>
              <div className={`text-3xl mb-1 ${headingClass || "font-semibold"}`} style={{ color: fg }}>{s.val}</div>
              <div className="text-xs" style={{ color: mutedColor }}>{s.label}</div>
            </div>
          ))}
        </motion.section>

        <StyleFooter estilo={estilo} textColor={mutedColor} borderColor={borderColor} headingClass={headingClass} />
      </main>
    </div>
  );
}
