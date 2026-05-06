"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";

export default function StripeRealPage() {
  const e = getEstilo("stripe-real")!;
  return (
    <div style={{ backgroundColor: "#ffffff", color: "#061b31", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e3e8ee" navColor="#425466" />

      <main className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        {/* Hero with subtle gradient */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 relative"
        >
          <div
            aria-hidden
            className="absolute inset-x-0 -top-20 h-80 -z-10 opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle at 20% 50%, #533afd, transparent 50%), radial-gradient(circle at 80% 30%, #00d4ff, transparent 50%)" }}
          />
          <p className="text-xs uppercase tracking-[0.2em] mb-5 font-semibold" style={{ color: "#533afd" }}>
            Pagos · Plataforma global
          </p>
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-[-0.02em] leading-[1.05] mb-7 max-w-4xl" style={{ color: "#061b31" }}>
            Infraestructura financiera <br />
            <span style={{ color: "#533afd" }}>para internet.</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mb-10" style={{ color: "#425466" }}>
            Millones de empresas de todos los tamaños usan Stripe online y en persona para aceptar pagos, enviar dinero y gestionar negocios en línea.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <motion.button
              whileHover={{ y: -2, boxShadow: "0 12px 24px -8px rgba(83,58,253,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 text-sm font-semibold rounded transition-shadow"
              style={{ backgroundColor: "#533afd", color: "#fff" }}
            >
              Empezar ahora
            </motion.button>
            <motion.button
              whileHover={{ x: 2 }}
              className="px-3 py-3 text-sm font-semibold flex items-center gap-1"
              style={{ color: "#533afd" }}
            >
              Contactar ventas →
            </motion.button>
          </div>
        </motion.section>

        {/* Stats grid */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 mb-20"
          style={{ borderTop: "1px solid #e3e8ee", borderBottom: "1px solid #e3e8ee" }}
        >
          {[
            { val: "$1T+", label: "Procesados anualmente" },
            { val: "135+", label: "Países y territorios" },
            { val: "47%", label: "Fortune 100 usan Stripe" },
            { val: "99.999%", label: "API uptime histórico" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight mb-1" style={{ color: "#061b31" }}>{s.val}</div>
              <div className="text-sm" style={{ color: "#425466" }}>{s.label}</div>
            </div>
          ))}
        </motion.section>

        {/* Products grid */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-2" style={{ color: "#533afd" }}>Productos</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12" style={{ color: "#061b31" }}>
            Todo lo que tu negocio necesita.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { titulo: "Payments", desc: "Acepta pagos online, en persona, y cross-border en 135+ monedas." },
              { titulo: "Billing", desc: "Suscripciones, facturación recurrente, y revenue automation." },
              { titulo: "Connect", desc: "Pagos para marketplaces y plataformas multilaterales." },
            ].map((f, i) => (
              <motion.div
                key={f.titulo}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(6,27,49,0.1)" }}
                className="p-6 rounded-md bg-white transition-shadow"
                style={{ border: "1px solid #e3e8ee" }}
              >
                <div className="w-12 h-12 rounded-md mb-5 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #533afd, #00d4ff)" }}>
                  <span className="text-white text-xl">◆</span>
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#061b31" }}>{f.titulo}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#425466" }}>{f.desc}</p>
                <a className="text-sm font-semibold" style={{ color: "#533afd" }}>Conocer más →</a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <StyleFooter estilo={e} textColor="#425466" borderColor="#e3e8ee" />
      </main>
    </div>
  );
}
