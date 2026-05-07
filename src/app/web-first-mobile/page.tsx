"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";

function ActionButton({
  color,
  bg,
  label,
  ariaLabel,
  likeBurst,
  children,
}: {
  color: string;
  bg: string;
  label?: string;
  ariaLabel: string;
  likeBurst?: boolean;
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(false);
  const tinted = active ? color : "currentColor";
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      animate="rest"
      aria-label={ariaLabel}
      onClick={() => likeBurst && setActive((v) => !v)}
      className="relative flex items-center gap-1.5 group"
      style={{ color: active ? color : undefined }}
    >
      {/* Círculo de bg al hover, estilo X/Twitter */}
      <span className="relative w-8 h-8 inline-flex items-center justify-center">
        <motion.span
          aria-hidden
          variants={{
            rest: { scale: 0, opacity: 0 },
            hover: { scale: 1, opacity: 1 },
            tap: { scale: 0.92, opacity: 1 },
          }}
          transition={{ duration: 0.18, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ backgroundColor: bg }}
        />
        <motion.svg
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.05 },
            tap: { scale: 0.9 },
          }}
          transition={{ duration: 0.16, ease: [0.32, 0.72, 0, 1] }}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={likeBurst && active ? color : "none"}
          stroke={likeBurst && active ? color : tinted}
          strokeWidth="2"
          className="relative transition-colors group-hover:[stroke:var(--hover-color)]"
          style={{ ["--hover-color" as string]: color }}
        >
          {children}
        </motion.svg>
        {/* Burst de partículas para like */}
        {likeBurst && (
          <AnimatePresence>
            {active && (
              <>
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <motion.span
                    key={deg}
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{
                      scale: 1,
                      opacity: 0,
                      x: Math.cos((deg * Math.PI) / 180) * 18,
                      y: Math.sin((deg * Math.PI) / 180) * 18,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
                    style={{ backgroundColor: color, left: "50%", top: "50%", marginLeft: -3, marginTop: -3 }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        )}
      </span>
      {label !== undefined && (
        <motion.span
          variants={{ rest: { color: "#536471" }, hover: { color } }}
          transition={{ duration: 0.16 }}
          style={{ color: active ? color : undefined }}
        >
          {label}
        </motion.span>
      )}
    </motion.button>
  );
}

export default function WebFirstMobilePage() {
  const e = getEstilo("web-first-mobile")!;

  return (
    <div style={{ backgroundColor: "#ffffff", color: "#0f1419", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#eff3f4" navColor="#536471" />

      {/* ====== HERO COMERCIAL — landing tipo "join the conversation" ====== */}
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-5 pt-12 pb-14 sm:pt-20 sm:pb-20 text-center"
      >
        <div className="inline-flex items-center gap-2 mb-7">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-base text-white"
            style={{ background: "linear-gradient(135deg, #1d9bf0, #8b5cf6)" }}
          >
            N
          </div>
          <span className="font-bold text-xl">Nube</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-5 max-w-3xl mx-auto">
          Lo que está pasando,<br />
          <span style={{ color: "#1d9bf0" }}>contado por gente real.</span>
        </h1>
        <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8" style={{ color: "#536471" }}>
          Una red social sin algoritmos predatorios. Seguís a gente que querés leer, ves lo que escriben en orden cronológico, sin sugerencias forzadas.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap mb-10">
          <button
            className="px-6 py-3 rounded-full text-sm font-bold text-white"
            style={{ backgroundColor: "#1d9bf0" }}
          >
            Crear cuenta
          </button>
          <button
            className="px-6 py-3 rounded-full text-sm font-bold"
            style={{ border: "1px solid #cfd9de", color: "#0f1419" }}
          >
            Ya tengo cuenta
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-8" style={{ borderTop: "1px solid #eff3f4" }}>
          {[
            { v: "240k", l: "personas activas / día" },
            { v: "0", l: "anuncios en el feed" },
            { v: "100%", l: "cronológico" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-xl sm:text-2xl font-bold tracking-tight">{s.v}</p>
              <p className="text-xs mt-1" style={{ color: "#536471" }}>{s.l}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Divider firma — soft bounce social */}
      <DividerReveal
        variant="soft-bounce"
        lineColor="#eff3f4"
        textColor="#536471"
        className="max-w-md mx-auto px-4 mb-2"
        textClassName="text-[10px] uppercase tracking-[0.2em] font-bold"
      >
        así se ve el feed
      </DividerReveal>

      <main className="max-w-md mx-auto px-0 sm:px-4 py-0 sm:py-6">
        {/* App-like top bar */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="sticky top-0 z-10 px-4 py-3 flex items-center justify-between backdrop-blur-md"
          style={{ backgroundColor: "rgba(255,255,255,0.85)", borderBottom: "1px solid #eff3f4" }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm"
            style={{ background: "linear-gradient(135deg, #1d9bf0, #1da1f2)", color: "#fff" }}
          >
            N
          </div>
          <h2 className="font-semibold text-base">Para vos</h2>
          <button aria-label="Filtrar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1419" strokeWidth="2">
              <path d="M21 4H3M18 8H6M14 12H10M16 16H8" />
            </svg>
          </button>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-2 text-sm font-semibold"
          style={{ borderBottom: "1px solid #eff3f4" }}
        >
          <button className="py-3 relative" style={{ color: "#0f1419" }}>
            Para vos
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-12 rounded-full" style={{ backgroundColor: "#1d9bf0" }} />
          </button>
          <button className="py-3" style={{ color: "#536471" }}>Siguiendo</button>
        </motion.div>

        {/* Feed */}
        <div>
          {[
            {
              autor: "Guadalupe Alanís",
              user: "@guada_inmob",
              time: "2h",
              texto: "Lanzamos sitio nuevo con catálogo en vivo y blog de barrio. La idea: que cada propiedad cuente algo del lugar, no solo metros cuadrados.",
              likes: "184",
              rt: "23",
              replies: "12",
              destacado: true,
            },
            {
              autor: "Nacho Galland",
              user: "@kine_galland",
              time: "5h",
              texto: "Si el dolor lumbar baja con movimiento y sube en reposo, no es debilidad, es información. Empezá por ahí.",
              likes: "92",
              rt: "18",
              replies: "7",
            },
            {
              autor: "TECHO Salta",
              user: "@techo_salta",
              time: "1d",
              texto: "Cuadrillas para mayo: 4 jornadas de construcción + 2 colectas. Si querés sumarte, link en bio.",
              likes: "412",
              rt: "98",
              replies: "34",
            },
            {
              autor: "Buen Boy",
              user: "@buenboy_arg",
              time: "2d",
              texto: "Probamos el sistema nuevo de turnos online esta semana, primera vez sin overbooking en mucho tiempo. Recomiendo.",
              likes: "56",
              rt: "4",
              replies: "9",
            },
          ].map((p, i) => (
            <motion.article
              key={p.user + p.time}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
              className="px-4 py-4 flex gap-3 transition-colors hover:bg-slate-50/40 cursor-pointer"
              style={{ borderBottom: "1px solid #eff3f4" }}
            >
              <div
                className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center font-semibold text-sm"
                style={{
                  background: p.destacado
                    ? "linear-gradient(135deg, #1d9bf0, #8b5cf6)"
                    : "linear-gradient(135deg, #94a3b8, #64748b)",
                  color: "#fff",
                }}
              >
                {p.autor.split(" ").map((s) => s[0]).join("").slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-[13px] mb-0.5 flex-wrap">
                  <span className="font-bold">{p.autor}</span>
                  {p.destacado && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#1d9bf0">
                      <path d="M9 16.17l-3.88-3.88a1 1 0 00-1.41 1.41l4.59 4.59a1 1 0 001.41 0L20.41 7.59A1 1 0 1019 6.17z" />
                    </svg>
                  )}
                  <span style={{ color: "#536471" }}>{p.user} · {p.time}</span>
                </div>
                <p className="text-[15px] leading-snug mb-3">{p.texto}</p>
                <div className="flex items-center justify-between text-xs max-w-[280px]" style={{ color: "#536471" }}>
                  <ActionButton color="#1d9bf0" bg="rgba(29,155,240,0.1)" label={p.replies} ariaLabel="Responder">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </ActionButton>
                  <ActionButton color="#00ba7c" bg="rgba(0,186,124,0.1)" label={p.rt} ariaLabel="Repostear">
                    <path d="M17 1l4 4-4 4M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 01-4 4H3" />
                  </ActionButton>
                  <ActionButton color="#f91880" bg="rgba(249,24,128,0.1)" label={p.likes} ariaLabel="Me gusta" likeBurst>
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </ActionButton>
                  <ActionButton color="#1d9bf0" bg="rgba(29,155,240,0.1)" ariaLabel="Compartir">
                    <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
                  </ActionButton>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="px-4 mt-12">
          <StyleFooter estilo={e} textColor="#536471" borderColor="#eff3f4" />
        </div>
      </main>
    </div>
  );
}
