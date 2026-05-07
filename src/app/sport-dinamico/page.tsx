"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";

export default function SportDinamicoPage() {
  const e = getEstilo("sport-dinamico")!;

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#fafafa", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#222222" navColor="#a3a3a3" />

      {/* ====== HERO COMERCIAL — landing app entreno ====== */}
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative max-w-5xl mx-auto px-5 sm:px-8 pt-12 pb-14 sm:pt-20 sm:pb-20 text-center overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120%] h-96 -z-0 opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,87,34,0.6), transparent 70%)" }}
        />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.4em] mb-6 font-bold" style={{ color: "#ff5722" }}>
            FUERZA · CARDIO · MOVILIDAD
          </p>
          <h1 className="font-bebas text-7xl sm:text-9xl leading-[0.85] tracking-wide mb-6">
            ENTRENÁS<br />
            <span style={{ color: "#ff5722" }}>VOS.</span> NO LA APP.
          </h1>
          <p className="text-base sm:text-lg max-w-xl mx-auto mb-10" style={{ color: "#a3a3a3" }}>
            Plan diseñado por entrenadores reales. Progresión semanal real. Sin gamificación de niño que infla métricas falsas.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="font-bebas text-2xl tracking-wider px-8 py-3.5"
              style={{ backgroundColor: "#ff5722", color: "#0a0a0a" }}
            >
              EMPEZAR 7 DÍAS GRATIS
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="font-bebas text-2xl tracking-wider px-8 py-3.5"
              style={{ border: "2px solid #fafafa", color: "#fafafa", backgroundColor: "transparent" }}
            >
              VER PLANES →
            </motion.button>
          </div>

          {/* Big proof stats */}
          <div className="grid grid-cols-3 gap-0 max-w-3xl mx-auto" style={{ border: "1px solid #2a2a2a" }}>
            {[
              { val: "47K", label: "ENTRENAMIENTOS / MES" },
              { val: "12+", label: "ENTRENADORES" },
              { val: "★ 4.9", label: "APP STORE / PLAY" },
            ].map((s, i) => (
              <div key={s.label} className="p-5 text-center" style={{ borderRight: i < 2 ? "1px solid #2a2a2a" : "none" }}>
                <p className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none mb-1">{s.val}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: "#a3a3a3" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Divider firma — slide-in agresivo sport */}
      <DividerReveal
        variant="slide-in"
        lineColor="#2a2a2a"
        textColor="#ff5722"
        className="max-w-5xl mx-auto px-5 sm:px-8 mb-6"
        textClassName="font-bebas text-sm uppercase tracking-[0.3em]"
      >
        ↓ TU DÍA, ADENTRO
      </DividerReveal>

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        {/* Hero gigante con fondo dinámico */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12 overflow-hidden rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #2a1410 100%)",
            border: "1px solid #2a2a2a",
            minHeight: "420px",
          }}
        >
          {/* Diagonal stripes accent */}
          <div
            aria-hidden
            className="absolute -right-32 -top-32 w-96 h-96 rotate-45"
            style={{ background: "linear-gradient(180deg, rgba(255,87,34,0.18), transparent 70%)" }}
          />
          <div
            aria-hidden
            className="absolute -left-20 -bottom-20 w-80 h-80"
            style={{ background: "radial-gradient(circle, rgba(255,87,34,0.12), transparent 70%)" }}
          />

          <div className="relative px-6 sm:px-10 py-10 sm:py-14">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xs uppercase tracking-[0.3em] mb-5"
              style={{ color: "#ff5722" }}
            >
              Día 12 · Semana 3 · Lunes
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-bebas text-7xl sm:text-9xl leading-[0.85] tracking-wide mb-4"
            >
              NO ES SOLO<br />
              <span style={{ color: "#ff5722" }}>HOY.</span><br />
              ES OTRA VEZ.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg max-w-md mb-7"
              style={{ color: "#a3a3a3" }}
            >
              Tu próximo entrenamiento empieza en 2 horas. 45 minutos. Sin excusas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {/* Slide-in agresivo en CTA principal */}
              <motion.button
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.96 }}
                animate="rest"
                className="relative font-bebas text-2xl tracking-wider px-7 py-3 overflow-hidden"
                style={{ backgroundColor: "#ff5722", color: "#0a0a0a" }}
              >
                <motion.span
                  aria-hidden
                  variants={{
                    rest: { x: "-100%" },
                    hover: { x: "0%" },
                  }}
                  transition={{ duration: 0.28, ease: [0.65, 0, 0.35, 1] }}
                  className="absolute inset-0 pointer-events-none"
                  style={{ backgroundColor: "#0a0a0a" }}
                />
                <motion.span
                  variants={{
                    rest: { color: "#0a0a0a", x: 0 },
                    hover: { color: "#ff5722", x: 4 },
                  }}
                  transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] }}
                  className="relative inline-block"
                >
                  EMPEZAR AHORA →
                </motion.span>
              </motion.button>
              {/* Ghost CTA con slide invertido */}
              <motion.button
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.96 }}
                animate="rest"
                className="relative font-bebas text-2xl tracking-wider px-7 py-3 overflow-hidden"
                style={{ border: "2px solid #fafafa", color: "#fafafa", backgroundColor: "transparent" }}
              >
                <motion.span
                  aria-hidden
                  variants={{
                    rest: { x: "100%" },
                    hover: { x: "0%" },
                  }}
                  transition={{ duration: 0.28, ease: [0.65, 0, 0.35, 1] }}
                  className="absolute inset-0 pointer-events-none"
                  style={{ backgroundColor: "#fafafa" }}
                />
                <motion.span
                  variants={{
                    rest: { color: "#fafafa", x: 0 },
                    hover: { color: "#0a0a0a", x: -4 },
                  }}
                  transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] }}
                  className="relative inline-block"
                >
                  VER PLAN
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats brutales */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-12"
          style={{ border: "1px solid #2a2a2a" }}
        >
          {[
            { num: "12", label: "Días seguidos", accent: false },
            { num: "847", label: "Cal quemadas", accent: false },
            { num: "8.2", label: "KM corridos", accent: true },
            { num: "94%", label: "Asistencia", accent: false },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-5 sm:p-6"
              style={{
                borderRight: i < 3 ? "1px solid #2a2a2a" : "none",
                backgroundColor: s.accent ? "#ff5722" : "#1a1a1a",
                color: s.accent ? "#0a0a0a" : "#fafafa",
              }}
            >
              <div className="font-bebas text-5xl sm:text-6xl leading-none tracking-wide mb-2">{s.num}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80">{s.label}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* Workout list */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-end justify-between mb-6 flex-wrap gap-3" style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "1rem" }}>
            <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide">PRÓXIMOS WORKOUTS</h2>
            <a href="#" className="text-xs uppercase tracking-[0.2em] hover:underline" style={{ color: "#ff5722" }}>VER CALENDARIO →</a>
          </div>

          <div className="space-y-3">
            {[
              { num: "01", titulo: "FUERZA — TREN INFERIOR", duracion: "45 min", intensidad: "ALTA", proxima: "HOY · 18:00" },
              { num: "02", titulo: "CARDIO HIIT", duracion: "30 min", intensidad: "MUY ALTA", proxima: "MAR · 06:30" },
              { num: "03", titulo: "MOVILIDAD + CORE", duracion: "25 min", intensidad: "BAJA", proxima: "MIÉ · 18:00" },
              { num: "04", titulo: "FUERZA — TREN SUPERIOR", duracion: "50 min", intensidad: "ALTA", proxima: "JUE · 18:00" },
            ].map((w, i) => (
              <motion.div
                key={w.num}
                initial="enter"
                animate="rest"
                whileHover="hover"
                variants={{
                  enter: { opacity: 0, x: -10 },
                  rest: { opacity: 1, x: 0 },
                  hover: { x: 6 },
                }}
                transition={{ duration: 0.35, delay: i * 0.06, ease: [0.65, 0, 0.35, 1] }}
                className="relative grid grid-cols-12 gap-4 p-5 cursor-pointer overflow-hidden"
                style={{ backgroundColor: "#141414", border: "1px solid #2a2a2a" }}
              >
                {/* Banda lateral naranja que entra desde la izquierda */}
                <motion.div
                  aria-hidden
                  variants={{
                    enter: { scaleY: 0, originY: 0 },
                    rest: { scaleY: 0, originY: 0 },
                    hover: { scaleY: 1, originY: 0 },
                  }}
                  transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] }}
                  className="absolute inset-y-0 left-0 w-1.5 pointer-events-none"
                  style={{ backgroundColor: "#ff5722" }}
                />
                <motion.div
                  variants={{
                    enter: { scale: 1 },
                    rest: { scale: 1 },
                    hover: { scale: 1.18, x: 2 },
                  }}
                  transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] }}
                  className="col-span-1 font-bebas text-3xl tracking-wider self-center"
                  style={{ color: "#ff5722", transformOrigin: "left center" }}
                >
                  {w.num}
                </motion.div>
                <div className="col-span-7 sm:col-span-6">
                  <div className="font-bebas text-2xl sm:text-3xl tracking-wide leading-none mb-2">{w.titulo}</div>
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em]" style={{ color: "#a3a3a3" }}>
                    <span>{w.duracion}</span>
                    <span>·</span>
                    <span style={{ color: w.intensidad === "MUY ALTA" ? "#ff5722" : "inherit" }}>{w.intensidad}</span>
                  </div>
                </div>
                <div className="col-span-4 sm:col-span-5 self-center text-right relative">
                  {/* Estado fecha — visible en rest, fade out en hover */}
                  <motion.div
                    variants={{
                      enter: { opacity: 1, y: 0 },
                      rest: { opacity: 1, y: 0 },
                      hover: { opacity: 0, y: -8 },
                    }}
                    transition={{ duration: 0.18 }}
                    className="text-xs uppercase tracking-[0.2em] font-semibold"
                  >
                    {w.proxima}
                  </motion.div>
                  {/* CTA INICIAR → que slidea desde la derecha al hover */}
                  <motion.div
                    aria-hidden
                    variants={{
                      enter: { opacity: 0, x: 24 },
                      rest: { opacity: 0, x: 24 },
                      hover: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.28, ease: [0.65, 0, 0.35, 1] }}
                    className="absolute inset-0 flex items-center justify-end font-bebas text-xl sm:text-2xl tracking-wider"
                    style={{ color: "#ff5722" }}
                  >
                    INICIAR →
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quote */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-10 mb-12 px-6"
          style={{ borderTop: "1px solid #2a2a2a", borderBottom: "1px solid #2a2a2a" }}
        >
          <p className="font-bebas text-3xl sm:text-5xl tracking-wide leading-tight max-w-3xl mx-auto">
            EL CUERPO LOGRA LO QUE LA MENTE CREE.<br />
            <span style={{ color: "#ff5722" }}>NO PIENSES. EMPEZÁ.</span>
          </p>
        </motion.section>

        <StyleFooter estilo={e} textColor="#a3a3a3" borderColor="#2a2a2a" headingClass="font-bebas tracking-wide" />
      </main>
    </div>
  );
}
