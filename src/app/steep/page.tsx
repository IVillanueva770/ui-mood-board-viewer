"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";

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
          animate={{ opacity: 1, y: 0 }}
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
                  animate={{ height: `${h}%` }}
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
          animate={{ opacity: 1 }}
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

        {/* Divider firma — tech line draw analytics */}
        <DividerReveal
          variant="tech-line-draw"
          lineColor="#e8e8e8"
          textColor="#5d2a1a"
          className="mb-16"
          textClassName="font-cormorant text-base italic"
        >
          adentro del producto
        </DividerReveal>

        {/* ====== VISTA OPERATIVA — workspace del producto ====== */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] mb-3" style={{ color: "#5d2a1a" }}>Workspace</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-medium mb-4 leading-tight">
              Conversás con tus datos. <em style={{ color: "#5d2a1a" }}>Steep</em> hace los joins.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#52545a" }}>
              Una pregunta en la barra de arriba. Steep escribe el SQL, lo corre, te da el chart con la lectura. El SQL queda visible si querés revisarlo.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden bg-white" style={{ border: "1px solid #e8e8e8", boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 12px 32px rgba(0,0,0,0.05)" }}>
            {/* Top bar */}
            <div className="px-5 py-3 flex items-center gap-3 text-sm" style={{ borderBottom: "1px solid #e8e8e8", backgroundColor: "#fafafa" }}>
              <div className="w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#5d2a1a" }}>S</div>
              <span className="font-cormorant text-lg italic">acme · production warehouse</span>
              <span className="ml-auto text-xs" style={{ color: "#6b6b6b", fontFamily: "var(--font-geist-mono)" }}>connected · 2 min ago</span>
            </div>

            <div className="grid grid-cols-12">
              {/* Sidebar */}
              <aside className="col-span-3 hidden md:block p-4 text-sm" style={{ borderRight: "1px solid #e8e8e8" }}>
                <p className="text-[11px] uppercase tracking-wider mb-3" style={{ color: "#5d2a1a", fontFamily: "var(--font-geist-mono)" }}>collections</p>
                <div className="space-y-1">
                  {[
                    { l: "Revenue", n: 12 },
                    { l: "Funnel", n: 8 },
                    { l: "Cohorts", n: 5 },
                    { l: "Customers", n: 23 },
                    { l: "Drafts", n: 4 },
                  ].map((c) => (
                    <button key={c.l} className="w-full text-left px-2 py-1.5 rounded flex items-center justify-between hover:bg-orange-50/40">
                      <span className="font-cormorant text-base">{c.l}</span>
                      <span className="text-xs" style={{ color: "#6b6b6b", fontFamily: "var(--font-geist-mono)" }}>{c.n}</span>
                    </button>
                  ))}
                </div>
                <p className="text-[11px] uppercase tracking-wider mt-6 mb-3" style={{ color: "#5d2a1a", fontFamily: "var(--font-geist-mono)" }}>history</p>
                <div className="space-y-2 text-xs leading-snug" style={{ color: "#52545a" }}>
                  <p>· top customers by ARR</p>
                  <p>· churn rate week over week</p>
                  <p>· avg deal size by region</p>
                  <p>· conversion 30d</p>
                </div>
              </aside>

              {/* Workspace */}
              <div className="col-span-12 md:col-span-9 p-6">
                {/* Question bar */}
                <div className="rounded-md p-3 mb-5 flex items-center gap-3" style={{ backgroundColor: "#fbe1d1" }}>
                  <span className="text-lg">✶</span>
                  <p className="font-cormorant text-lg italic flex-1" style={{ color: "#5d2a1a" }}>
                    ¿Qué cohorte de mayo'25 retuvo mejor a los 90 días?
                  </p>
                  <span className="text-[11px] px-2 py-1 rounded-full" style={{ backgroundColor: "#fff", color: "#5d2a1a", fontFamily: "var(--font-geist-mono)" }}>2.8s</span>
                </div>

                {/* Result chart */}
                <div className="rounded-md p-5 mb-5" style={{ backgroundColor: "#f7f7f8" }}>
                  <div className="flex items-baseline justify-between mb-4">
                    <p className="font-cormorant text-xl">Retención por cohorte de signup</p>
                    <span className="text-xs" style={{ color: "#6b6b6b" }}>5 cohortes · D0–D90</span>
                  </div>
                  <svg viewBox="0 0 400 120" className="w-full" preserveAspectRatio="none">
                    {[
                      { label: "may", color: "#5d2a1a", points: [100, 78, 65, 60, 58, 56] },
                      { label: "jun", color: "#a04a32", points: [100, 72, 58, 50, 46, 44] },
                      { label: "jul", color: "#c97c5d", points: [100, 75, 62, 55, 50, 48] },
                      { label: "ago", color: "#dba684", points: [100, 70, 54, 46, 41, 38] },
                      { label: "sep", color: "#ecc6ad", points: [100, 68, 50, 42, 36, 32] },
                    ].map((line) => (
                      <polyline
                        key={line.label}
                        fill="none"
                        stroke={line.color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={line.points.map((y, i) => `${i * 80},${120 - y * 1.05}`).join(" ")}
                      />
                    ))}
                  </svg>
                  <div className="flex items-center justify-between text-xs mt-3" style={{ color: "#6b6b6b", fontFamily: "var(--font-geist-mono)" }}>
                    <span>D0</span>
                    <span>D14</span>
                    <span>D30</span>
                    <span>D60</span>
                    <span>D75</span>
                    <span>D90</span>
                  </div>
                </div>

                {/* Insight reading */}
                <div className="p-5 rounded-md mb-5" style={{ border: "1px solid #e8e8e8" }}>
                  <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "#5d2a1a" }}>Lectura</p>
                  <p className="font-cormorant text-xl leading-relaxed" style={{ color: "#17191c" }}>
                    Mayo retuvo <em>56% a 90 días</em>. Septiembre cayó a <em>32%</em>. Coincide con el cambio de onboarding del 12 de septiembre.
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs" style={{ color: "#6b6b6b" }}>
                  <button className="px-3 py-1.5 rounded text-white font-medium" style={{ backgroundColor: "#17191c" }}>Guardar en Cohorts</button>
                  <button className="px-3 py-1.5 rounded font-medium" style={{ border: "1px solid #e8e8e8", color: "#17191c" }}>Ver SQL</button>
                  <button className="px-3 py-1.5 rounded font-medium" style={{ border: "1px solid #e8e8e8", color: "#17191c" }}>Compartir →</button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <StyleFooter estilo={e} textColor="#52545a" borderColor="#e8e8e8" />
      </main>
    </div>
  );
}
