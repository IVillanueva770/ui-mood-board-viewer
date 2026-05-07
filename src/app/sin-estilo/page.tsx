"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function SinEstiloPage() {
  return (
    <div
      style={{ backgroundColor: "#ffffff", color: "#000000", minHeight: "100vh" }}
      className="font-roboto-mono"
    >
      {/* Top nav */}
      <div
        className="px-4 py-3 flex items-center justify-between text-xs"
        style={{ borderBottom: "1px solid #000000" }}
      >
        <Link href="/" className="hover:underline">
          [← VOLVER AL INDEX]
        </Link>
        <div>SIN-ESTILO · DEFAULT PLACEHOLDER</div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Aviso */}
        <div
          className="p-4 mb-12 text-xs"
          style={{ border: "1px solid #000000" }}
        >
          [AVISO] Esta pantalla NO es un estilo terminado. Es el default que usa el agente cuando NO hay mood board elegido todavía. Hace evidente la falta de decisión de diseño y evita que un mockup se confunda con producto final.
        </div>

        {/* Hero */}
        <section className="mb-16">
          <div className="text-xs mb-4">[HERO]</div>
          <h1 className="text-3xl mb-4 leading-tight">
            Título de la página.
          </h1>
          <p className="text-sm mb-6" style={{ color: "#666666" }}>
            Aquí va una descripción corta del proyecto, una o dos oraciones que comuniquen la propuesta de valor sin pretensión visual.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button
              className="px-4 py-2 text-xs"
              style={{
                border: "1px solid #000000",
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: 0,
              }}
            >
              [CTA PRIMARIO]
            </button>
            <button
              className="px-4 py-2 text-xs"
              style={{
                border: "1px solid #000000",
                backgroundColor: "#ffffff",
                color: "#000000",
                borderRadius: 0,
              }}
            >
              [CTA SECUNDARIO]
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <div className="text-xs mb-4">[STATS]</div>
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[
              { label: "MÉTRICA 1", value: "00" },
              { label: "MÉTRICA 2", value: "00" },
              { label: "MÉTRICA 3", value: "00" },
              { label: "MÉTRICA 4", value: "00" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="p-4"
                style={{
                  border: "1px solid #000000",
                  borderLeft: i === 0 ? "1px solid #000000" : "none",
                }}
              >
                <div className="text-xs mb-1" style={{ color: "#666666" }}>{s.label}</div>
                <div className="text-2xl">{s.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <div className="text-xs mb-4">[CARDS]</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="p-5"
                style={{ border: "1px solid #000000", borderRadius: 0 }}
              >
                <div className="text-xs mb-3" style={{ color: "#666666" }}>[CARD {n}]</div>
                <div className="text-base mb-2">Título card.</div>
                <div className="text-xs leading-relaxed mb-4" style={{ color: "#666666" }}>
                  Descripción placeholder. Cuando se elija estilo del mood board, esto va a tener tipografía, color y layout reales.
                </div>
                <a href="#" className="text-xs underline">[VER MÁS]</a>
              </div>
            ))}
          </div>
        </section>

        {/* Divider firma — typewriter ASCII */}
        <motion.div
          initial="rest"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="mb-12 py-2 flex items-center gap-3"
          style={{ borderTop: "1px solid #000000", borderBottom: "1px solid #000000" }}
        >
          <motion.span
            variants={{ rest: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0, delay: 0.1 }}
            className="text-xs"
            style={{ color: "#666666" }}
          >
            [ARRIBA]
          </motion.span>
          <motion.span
            variants={{ rest: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0, delay: 0.25 }}
            className="text-xs"
          >
            CARA COMERCIAL
          </motion.span>
          <motion.span
            variants={{
              rest: { width: "0%", opacity: 0 },
              visible: { width: "100%", opacity: 1 },
            }}
            transition={{ duration: 0.6, delay: 0.4, ease: "linear" }}
            className="text-xs flex-1 overflow-hidden whitespace-nowrap"
            style={{ color: "#666666" }}
          >
            · · · · · · · · · ·
          </motion.span>
          <motion.span
            variants={{ rest: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0, delay: 1.0 }}
            className="text-xs"
          >
            VISTA OPERATIVA
          </motion.span>
          <motion.span
            variants={{ rest: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0, delay: 1.15 }}
            className="text-xs"
            style={{ color: "#666666" }}
          >
            [ABAJO]
          </motion.span>
        </motion.div>

        {/* Form */}
        <section className="mb-16">
          <div className="text-xs mb-4">[FORM ADMIN]</div>
          <div className="p-5 max-w-md" style={{ border: "1px solid #000000" }}>
            <label className="block text-xs mb-1" style={{ color: "#666666" }}>NOMBRE</label>
            <input
              type="text"
              placeholder="placeholder..."
              className="w-full px-3 py-2 text-sm mb-4 outline-none"
              style={{ border: "1px solid #000000", borderRadius: 0, fontFamily: "var(--font-roboto-mono)" }}
            />
            <label className="block text-xs mb-1" style={{ color: "#666666" }}>EMAIL</label>
            <input
              type="email"
              placeholder="placeholder..."
              className="w-full px-3 py-2 text-sm mb-4 outline-none"
              style={{ border: "1px solid #000000", borderRadius: 0, fontFamily: "var(--font-roboto-mono)" }}
            />
            <button
              className="w-full px-4 py-2 text-xs"
              style={{
                border: "1px solid #000000",
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: 0,
              }}
            >
              [ENVIAR]
            </button>
          </div>
        </section>

        {/* Tabla */}
        <section className="mb-16">
          <div className="text-xs mb-4">[TABLA]</div>
          <table className="w-full text-xs" style={{ border: "1px solid #000000" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #000000" }}>
                <th className="px-3 py-2 text-left" style={{ borderRight: "1px solid #000000" }}>COL 1</th>
                <th className="px-3 py-2 text-left" style={{ borderRight: "1px solid #000000" }}>COL 2</th>
                <th className="px-3 py-2 text-left">COL 3</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((n) => (
                <tr key={n} style={{ borderBottom: n < 4 ? "1px solid #000000" : "none" }}>
                  <td className="px-3 py-2" style={{ borderRight: "1px solid #000000" }}>row {n}</td>
                  <td className="px-3 py-2" style={{ borderRight: "1px solid #000000" }}>data {n}</td>
                  <td className="px-3 py-2" style={{ color: "#666666" }}>--</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Meta info */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-xs" style={{ borderTop: "1px solid #000000" }}>
          <div>
            <div className="mb-2">[PALETA]</div>
            <div className="space-y-1" style={{ color: "#666666" }}>
              <div>--bg: #ffffff</div>
              <div>--fg: #000000</div>
              <div>--muted: #666666</div>
              <div>--border: #000000</div>
              <div>--radius: 0</div>
              <div>--accent: ninguno</div>
            </div>
          </div>
          <div>
            <div className="mb-2">[TIPOGRAFÍA]</div>
            <div className="space-y-1" style={{ color: "#666666" }}>
              <div>Roboto Mono (todo)</div>
            </div>
          </div>
          <div>
            <div className="mb-2">[CUÁNDO USAR]</div>
            <p className="leading-relaxed" style={{ color: "#666666" }}>
              Default cuando NO hay estilo elegido del mood board. Comunica claramente que falta decisión de diseño. Reemplazar al elegir estilo concreto.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
