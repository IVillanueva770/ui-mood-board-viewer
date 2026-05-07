"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";

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

        {/* Divider firma — tech line draw */}
        <DividerReveal
          variant="tech-line-draw"
          lineColor="#e6e5e0"
          textColor="#7a7974"
          className="mb-10"
          textClassName="text-xs font-medium uppercase tracking-[0.15em]"
          textStyle={{ fontFamily: "var(--font-geist-mono)" }}
        >
          $ open ./
        </DividerReveal>

        {/* ====== VISTA OPERATIVA — el IDE en uso ====== */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: "#7a7974", fontFamily: "var(--font-geist-mono)" }}>
              así se trabaja con cursor
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.02em] leading-tight mb-3" style={{ color: "#262510" }}>
              El IDE entero, <em style={{ color: "#f54e00", fontStyle: "italic" }}>conversando</em> con vos.
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#52514a" }}>
              Tab completa la línea siguiente. Cmd+L abre un chat que ya leyó tu codebase. Cmd+K edita justo donde tenés el cursor.
            </p>
          </div>

          {/* IDE chrome — full window */}
          <div
            className="rounded-lg overflow-hidden"
            style={{
              border: "1px solid #e6e5e0",
              boxShadow: "0 1px 2px rgba(38,37,16,0.04), 0 8px 24px rgba(38,37,16,0.06), 0 24px 48px rgba(38,37,16,0.08)",
            }}
          >
            {/* Title bar */}
            <div className="px-4 py-2.5 flex items-center gap-3" style={{ backgroundColor: "#fbfbf8", borderBottom: "1px solid #e6e5e0" }}>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#e6e5e0" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#e6e5e0" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#e6e5e0" }} />
              </div>
              <div className="flex-1 text-center text-xs" style={{ color: "#7a7974", fontFamily: "var(--font-geist-mono)" }}>
                inmobiliaria-guadalupe — cursor
              </div>
              <div className="flex items-center gap-2 text-[11px]" style={{ color: "#7a7974", fontFamily: "var(--font-geist-mono)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#16a34a" }} />
                main
              </div>
            </div>

            {/* Body grid — sidebar | editor | chat */}
            <div className="grid grid-cols-12" style={{ minHeight: "420px", backgroundColor: "#fbfbf8" }}>
              {/* File tree */}
              <div className="col-span-3 p-3 text-xs hidden md:block" style={{ borderRight: "1px solid #e6e5e0", fontFamily: "var(--font-geist-mono)", color: "#52514a" }}>
                <p className="text-[10px] uppercase tracking-wider mb-3" style={{ color: "#7a7974" }}>EXPLORADOR</p>
                <ul className="space-y-1">
                  {[
                    { n: "📁 src", lvl: 0 },
                    { n: "📁 app", lvl: 1 },
                    { n: "📄 layout.tsx", lvl: 2 },
                    { n: "📄 page.tsx", lvl: 2 },
                    { n: "📁 components", lvl: 1 },
                    { n: "📄 PropertyCard.tsx", lvl: 2, active: true },
                    { n: "📄 SearchBar.tsx", lvl: 2 },
                    { n: "📁 lib", lvl: 1 },
                    { n: "📄 db.ts", lvl: 2 },
                    { n: "📄 .env.local", lvl: 0 },
                    { n: "📄 package.json", lvl: 0 },
                  ].map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-1.5 py-0.5 px-1.5 rounded cursor-pointer hover:bg-orange-50/40"
                      style={{
                        paddingLeft: 6 + f.lvl * 12,
                        backgroundColor: f.active ? "rgba(245,78,0,0.08)" : "transparent",
                        color: f.active ? "#f54e00" : "#52514a",
                      }}
                    >
                      {f.n}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Editor */}
              <div className="col-span-12 md:col-span-6 p-0 overflow-hidden" style={{ borderRight: "1px solid #e6e5e0" }}>
                <div className="px-3 py-2 text-xs flex items-center gap-3 border-b" style={{ borderColor: "#e6e5e0", fontFamily: "var(--font-geist-mono)", color: "#52514a" }}>
                  <span className="px-2 py-0.5 rounded" style={{ backgroundColor: "#fff", border: "1px solid #e6e5e0" }}>PropertyCard.tsx</span>
                  <span style={{ color: "#7a7974" }}>● modificado</span>
                </div>
                <pre className="p-5 text-[12.5px] leading-[1.65] overflow-x-auto" style={{ fontFamily: "var(--font-geist-mono)", color: "#262510" }}>
{`export function PropertyCard({ p }: Props) {
  return (
    <article className="group rounded-2xl">
      <Image src={p.cover} alt={p.title} />
      <div className="p-5">
        `}
                  <span style={{ backgroundColor: "rgba(245,78,0,0.12)", borderLeft: "2px solid #f54e00", paddingLeft: 4 }}>
                    {`<h3 className="text-lg font-semibold">{p.title}</h3>`}
                  </span>
                  {`
        <p className="text-sm">{p.location}</p>
      </div>
    </article>
  );
}`}
                </pre>
                {/* Tab suggestion ghost */}
                <div className="px-5 py-2 flex items-center gap-2 text-[11px]" style={{ color: "#7a7974", fontFamily: "var(--font-geist-mono)", borderTop: "1px solid #e6e5e0" }}>
                  <span className="px-1.5 py-0.5 rounded font-bold text-white" style={{ backgroundColor: "#f54e00" }}>TAB</span>
                  <span>cursor predice → agregar precio + badge zona</span>
                </div>
              </div>

              {/* AI Chat panel */}
              <div className="col-span-12 md:col-span-3 p-3 text-xs hidden md:flex flex-col" style={{ fontFamily: "var(--font-geist-mono)", color: "#52514a" }}>
                <p className="text-[10px] uppercase tracking-wider mb-3" style={{ color: "#7a7974" }}>CHAT · ⌘L</p>
                <div className="flex-1 space-y-3 overflow-y-auto">
                  <div className="rounded p-2.5" style={{ backgroundColor: "#fff", border: "1px solid #e6e5e0" }}>
                    <p className="text-[10px] uppercase mb-1" style={{ color: "#7a7974" }}>tú</p>
                    <p className="leading-relaxed">por qué la card no muestra el precio?</p>
                  </div>
                  <div className="rounded p-2.5" style={{ backgroundColor: "rgba(245,78,0,0.06)", border: "1px solid rgba(245,78,0,0.18)" }}>
                    <p className="text-[10px] uppercase mb-1 font-bold" style={{ color: "#f54e00" }}>cursor</p>
                    <p className="leading-relaxed">el componente no recibe <code>p.price</code>. el campo existe en el tipo pero no se renderiza. agrego el precio + badge zona?</p>
                    <button className="mt-2 px-2 py-1 rounded text-[10px] font-bold text-white" style={{ backgroundColor: "#f54e00" }}>
                      Aplicar cambio
                    </button>
                  </div>
                </div>
                <div className="mt-3 px-2 py-1.5 rounded flex items-center gap-2" style={{ backgroundColor: "#fff", border: "1px solid #e6e5e0" }}>
                  <span style={{ color: "#7a7974" }}>›</span>
                  <span className="text-[11px]" style={{ color: "#7a7974" }}>preguntá cualquier cosa…</span>
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div className="px-3 py-1 flex items-center justify-between text-[10px]" style={{ backgroundColor: "#fbfbf8", borderTop: "1px solid #e6e5e0", color: "#7a7974", fontFamily: "var(--font-geist-mono)" }}>
              <div className="flex items-center gap-3">
                <span style={{ color: "#16a34a" }}>● running</span>
                <span>main · ↑ 2 ↓ 0</span>
                <span>node 22.5</span>
              </div>
              <div className="flex items-center gap-3">
                <span>UTF-8</span>
                <span>TypeScript</span>
                <span style={{ color: "#f54e00" }}>cursor v0.42</span>
              </div>
            </div>
          </div>
        </motion.section>

        <StyleFooter estilo={e} textColor="#52514a" borderColor="#e6e5e0" />
      </main>
    </div>
  );
}
