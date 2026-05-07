"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";

export default function CursorPage() {
  const e = getEstilo("cursor")!;
  return (
    <div style={{ backgroundColor: "#f7f7f4", color: "#262510", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e6e5e0" navColor="#7a7974" />

      <main className="max-w-5xl mx-auto px-6 py-16 sm:py-24">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-5" style={{ color: "#7a7974", fontFamily: "var(--font-geist-mono)" }}>
            v0.42 · ahora con Tab
          </p>
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-[-0.025em] leading-[1.02] mb-6" style={{ color: "#262510" }}>
            El editor de código <br />
            <em style={{ color: "#f54e00", fontStyle: "italic" }}>diseñado con IA.</em>
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mb-10" style={{ color: "#52514a" }}>
            Cursor es la mejor manera de escribir código con IA. Tab autocompleta, edita, y entiende tu proyecto entero.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 8px 16px -4px rgba(38,37,16,0.12), 0 4px 8px -2px rgba(38,37,16,0.08)" }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 text-sm font-medium rounded transition-shadow"
              style={{ backgroundColor: "#262510", color: "#f7f7f4" }}
            >
              Descargar para macOS
            </motion.button>
            <motion.button
              whileHover={{ borderColor: "#262510" }}
              className="px-6 py-3 text-sm font-medium rounded border transition-colors"
              style={{ borderColor: "#d4d2c9", color: "#262510" }}
            >
              Ver pricing
            </motion.button>
          </div>
        </motion.section>

        {/* Code preview card */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div
            className="rounded-lg overflow-hidden"
            style={{
              border: "1px solid #e6e5e0",
              boxShadow: "0 1px 2px rgba(38,37,16,0.04), 0 4px 12px rgba(38,37,16,0.04), 0 12px 32px rgba(38,37,16,0.06)",
            }}
          >
            {/* Window chrome */}
            <div className="px-4 py-2.5 flex items-center gap-2" style={{ backgroundColor: "#fbfbf8", borderBottom: "1px solid #e6e5e0" }}>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#e6e5e0" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#e6e5e0" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#e6e5e0" }} />
              </div>
              <div className="flex-1 text-center text-xs" style={{ color: "#7a7974", fontFamily: "var(--font-geist-mono)" }}>
                authenticate.ts
              </div>
            </div>
            {/* Code */}
            <pre className="p-6 text-sm leading-relaxed overflow-x-auto" style={{ fontFamily: "var(--font-geist-mono)", color: "#262510", backgroundColor: "#fbfbf8" }}>
{`async function authenticate(email: string) {
  const user = await db.users.findOne({ email });
  if (!user) throw new Error("User not found");

  const token = await generateToken(user.id);
  return { user, token };
}`}
            </pre>
          </div>
          <p className="text-xs mt-4 text-center" style={{ color: "#7a7974" }}>Tab para que Cursor complete · Cmd+K para editar</p>
        </motion.section>

        {/* Features list */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { titulo: "Tab Tab Tab", desc: "Predice tu próxima edición. Acepta con Tab." },
            { titulo: "Codebase Aware", desc: "Conoce tu proyecto entero. Pregunta lo que sea." },
            { titulo: "Multi-line edit", desc: "Editá múltiples líneas con un solo prompt." },
          ].map((f, i) => (
            <motion.div
              key={f.titulo}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-1.5 h-8 mb-4 rounded-full" style={{ backgroundColor: "#f54e00" }} />
              <h3 className="font-semibold mb-1" style={{ color: "#262510" }}>{f.titulo}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#52514a" }}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        <StyleFooter estilo={e} textColor="#52514a" borderColor="#e6e5e0" />
      </main>
    </div>
  );
}
