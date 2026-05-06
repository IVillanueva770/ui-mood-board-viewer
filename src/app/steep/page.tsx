"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";

export default function SteepPage() {
  const e = getEstilo("steep")!;
  return (
    <div style={{ backgroundColor: "#ffffff", color: "#17191c", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e8e8e8" navColor="#6b6b6b" />

      <main className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        {/* Hero with serif gravitas */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <p className="text-xs uppercase tracking-[0.25em] mb-6" style={{ color: "#5d2a1a" }}>
            Analytics · Beta abierta
          </p>
          <h1 className="font-cormorant text-6xl sm:text-8xl font-medium leading-[1.05] mb-7 max-w-4xl tracking-[-0.01em]">
            Analytics que <em style={{ color: "#5d2a1a" }}>te entiende</em>, no que entendés vos.
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mb-10" style={{ color: "#52545a" }}>
            Steep convierte tu warehouse en preguntas de lenguaje natural. Decile lo que querés saber. Te lo responde con gráficos honestos.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <motion.button
              whileHover={{ y: -1, boxShadow: "0 8px 20px -4px rgba(23,25,28,0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 text-sm font-medium rounded-md transition-shadow"
              style={{ backgroundColor: "#17191c", color: "#fff" }}
            >
              Empezar gratis
            </motion.button>
            <motion.button
              whileHover={{ backgroundColor: "#fbe1d1" }}
              className="px-6 py-3 text-sm font-medium rounded-md transition-colors"
              style={{ color: "#17191c" }}
            >
              Ver demo →
            </motion.button>
          </div>
        </motion.section>

        {/* Sample chart card */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div
            className="rounded-2xl p-8 sm:p-10"
            style={{
              backgroundColor: "#f7f7f8",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 12px 32px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "#5d2a1a" }}>Pregunta</p>
                <p className="font-cormorant text-2xl sm:text-3xl italic">
                  "¿Cómo creció el revenue mensual el último año?"
                </p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "#fbe1d1", color: "#5d2a1a", fontFamily: "var(--font-geist-mono)" }}>
                ~3.2s
              </span>
            </div>

            {/* Bar chart */}
            <div className="flex items-end gap-2 h-48 mb-4">
              {[40, 52, 48, 65, 58, 72, 80, 85, 78, 92, 88, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.04, ease: "easeOut" }}
                  className="flex-1 rounded-t-md"
                  style={{ backgroundColor: i === 11 ? "#5d2a1a" : "#fbe1d1" }}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs" style={{ color: "#6b6b6b", fontFamily: "var(--font-geist-mono)" }}>
              <span>Ene '25</span>
              <span>Dic '25</span>
            </div>

            <div className="mt-6 pt-6 border-t" style={{ borderColor: "#e8e8e8" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#52545a" }}>
                <span className="font-medium" style={{ color: "#17191c" }}>Insight:</span> El revenue creció <span className="font-semibold">2.5x</span> en el último año, con la mayor aceleración entre julio y octubre. ¿Querés ver qué la causó?
              </p>
            </div>
          </div>
        </motion.section>

        {/* Pricing teaser */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] mb-3" style={{ color: "#5d2a1a" }}>Precios</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl mb-3">Free hasta 1M de filas.</h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#52545a" }}>
            Sin tarjeta de crédito. Sin trial. Si tu warehouse es chico, Steep es gratis para siempre.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="px-8 py-3.5 rounded-md text-sm font-medium"
            style={{ backgroundColor: "#5d2a1a", color: "#fff" }}
          >
            Conectar warehouse
          </motion.button>
        </motion.section>

        <StyleFooter estilo={e} textColor="#52545a" borderColor="#e8e8e8" />
      </main>
    </div>
  );
}
