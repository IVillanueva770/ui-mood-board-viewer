"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";

export default function ModernSaasPage() {
  const e = getEstilo("modern-saas")!;
  return (
    <div style={{ backgroundColor: "#ffffff", color: "#111827", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e5e7eb" navColor="#6b7280" />

      <main className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        {/* Hero gradient */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 relative"
        >
          <div
            aria-hidden
            className="absolute inset-x-0 -top-10 h-72 -z-10 opacity-60 blur-3xl"
            style={{ background: "radial-gradient(circle at 30% 30%, #c7d2fe, transparent 60%), radial-gradient(circle at 70% 60%, #fbcfe8, transparent 60%)" }}
          />
          <p className="text-xs uppercase tracking-[0.2em] mb-5" style={{ color: "#5e6ad2" }}>
            Plataforma · Beta abierta
          </p>
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-[-0.02em] leading-[1.05] mb-7 max-w-4xl" style={{ color: "#0f172a" }}>
            Construí <span style={{ background: "linear-gradient(90deg, #5e6ad2, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>menos infraestructura</span>, lanzá más producto.
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mb-10" style={{ color: "#475569" }}>
            La plataforma que reemplaza tu stack de seis pestañas con una sola API. Setup en segundos, sin tarjeta de crédito.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <motion.button
              whileHover={{ y: -1, boxShadow: "0 10px 30px rgba(94,106,210,0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 text-sm font-medium rounded-lg"
              style={{ backgroundColor: "#0f172a", color: "#fff" }}
            >
              Empezar gratis
            </motion.button>
            <motion.button
              whileHover={{ borderColor: "#0f172a" }}
              className="px-6 py-3 text-sm font-medium rounded-lg border"
              style={{ borderColor: "#cbd5e1", color: "#0f172a" }}
            >
              Ver demo →
            </motion.button>
          </div>

          {/* Logos strip */}
          <div className="mt-16 pt-8 border-t" style={{ borderColor: "#e5e7eb" }}>
            <p className="text-xs uppercase tracking-wider mb-4" style={{ color: "#94a3b8" }}>Confían en nosotros</p>
            <div className="flex flex-wrap gap-8 items-center opacity-60">
              {["Acme Co", "Globex", "Initech", "Soylent", "Hooli"].map((n) => (
                <div key={n} className="text-sm font-medium tracking-tight" style={{ color: "#475569" }}>{n}</div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features grid */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "#5e6ad2" }}>Funcionalidad</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12" style={{ color: "#0f172a" }}>
            Todo lo que necesitás. Nada más.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { titulo: "Auth en 1 línea", desc: "Email magic links, OAuth, y SSO sin configurar nada." },
              { titulo: "Database serverless", desc: "Postgres con autoscale. Pagás solo lo que usás." },
              { titulo: "Edge functions", desc: "Tu código en 30 regiones. <50ms en cualquier parte." },
            ].map((f, i) => (
              <motion.div
                key={f.titulo}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4, borderColor: "#5e6ad2" }}
                className="p-6 rounded-xl border bg-white transition-colors"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="w-10 h-10 rounded-lg mb-5 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #5e6ad2, #8b5cf6)" }}>
                  <span className="text-white text-lg">◆</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "#0f172a" }}>{f.titulo}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <StyleFooter estilo={e} textColor="#475569" borderColor="#e5e7eb" />
      </main>
    </div>
  );
}
