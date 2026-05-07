"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { Ripple } from "@/components/ripple";
import { DividerReveal } from "@/components/divider-reveal";

export default function Material3Page() {
  const e = getEstilo("material-3")!;
  const [activeChip, setActiveChip] = useState("Hoy");
  const [activeTab, setActiveTab] = useState("Inicio");

  return (
    <div style={{ backgroundColor: "#fef7ff", color: "#1d1b20", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e8def8" navColor="#79747e" />

      {/* ====== HERO COMERCIAL — landing del producto SaaS ====== */}
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="max-w-4xl mx-auto px-5 pt-14 pb-12 sm:pt-20 sm:pb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-7" style={{ backgroundColor: "#eaddff", color: "#21005d" }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#6750a4" }} />
          <span className="text-xs font-semibold tracking-wide">Material 3 · Salud y rehabilitación</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-medium tracking-tight leading-[1.05] mb-5 max-w-3xl mx-auto" style={{ color: "#1d1b20" }}>
          La rehabilitación,<br />
          <span style={{ color: "#6750a4" }}>diseñada como debe ser.</span>
        </h1>
        <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-9" style={{ color: "#49454f" }}>
          Tu kine te asigna sesiones, vos las hacés desde tu celular. Sin papeles, sin recordatorios torpes. Acompañamiento real entre visitas.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(103,80,164,0.35)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="px-6 py-3 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: "#6750a4" }}
          >
            Descargar gratis
          </motion.button>
          <motion.button
            whileHover={{ backgroundColor: "#eaddff" }}
            className="px-6 py-3 rounded-full text-sm font-semibold transition-colors"
            style={{ color: "#21005d", border: "1px solid #cac4d0" }}
          >
            Para profesionales →
          </motion.button>
        </div>

        {/* Highlights tarjetas tonal */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
          {[
            { tit: "Tu plan, en tu bolsillo", desc: "Cada sesión asignada por tu kine, lista para hacer.", color: "#6750a4", bg: "#eaddff" },
            { tit: "Recordatorios que no molestan", desc: "Material 3 motion: suaves, oportunos, sin spam.", color: "#7d5260", bg: "#ffd8e4" },
            { tit: "Tu kine ve tu progreso", desc: "Si saltás sesiones, lo sabe. Si avanzás, también.", color: "#386a20", bg: "#d7eac7" },
          ].map((h) => (
            <motion.div
              key={h.tit}
              whileHover={{ y: -3 }}
              className="rounded-2xl p-5"
              style={{ backgroundColor: h.bg }}
            >
              <div className="w-9 h-9 rounded-xl mb-3 flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: h.color }}>
                ◆
              </div>
              <h4 className="font-medium mb-1" style={{ color: h.color }}>{h.tit}</h4>
              <p className="text-xs leading-relaxed" style={{ color: "#49454f" }}>{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Divider firma — soft bounce M3 tonal */}
      <DividerReveal
        variant="soft-bounce"
        lineColor="#e8def8"
        textColor="#79747e"
        className="max-w-md mx-auto px-4 mb-2"
        textClassName="text-[10px] uppercase tracking-[0.2em] font-medium"
      >
        Así se ve la app
      </DividerReveal>

      <main className="max-w-md mx-auto px-4 py-6">
        {/* Phone mock contenedor */}
        <div className="relative pb-40">
          {/* Top app bar Material 3 */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between mb-6 px-2"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-medium text-base"
                style={{ backgroundColor: "#eaddff", color: "#21005d" }}
              >
                N
              </div>
              <div>
                <p className="text-xs" style={{ color: "#79747e" }}>Buen día</p>
                <p className="text-base font-medium">Nacho</p>
              </div>
            </div>
            <Ripple
              color="rgba(33, 0, 93, 0.18)"
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#e8def8" }}
              ariaLabel="Notificaciones"
            >
              <span style={{ color: "#21005d" }}>🔔</span>
            </Ripple>
          </motion.div>

          {/* Hero card filled (M3) */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl p-6 mb-5"
            style={{ backgroundColor: "#6750a4", color: "#ffffff" }}
          >
            <p className="text-xs uppercase tracking-wider opacity-80 mb-2">Progreso semanal</p>
            <p className="text-5xl font-medium tracking-tight mb-1">68%</p>
            <p className="text-sm opacity-90 mb-4">Vas mejor que la semana pasada</p>

            <div className="h-2 rounded-full mb-2 overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "68%" }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="h-full rounded-full"
                style={{ backgroundColor: "#d0bcff" }}
              />
            </div>
            <p className="text-xs opacity-70">8 sesiones de 12 esta semana</p>
          </motion.section>

          {/* Quick actions tonal chips */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex gap-2 mb-6 overflow-x-auto pb-1"
          >
            {[
              { label: "Hoy" },
              { label: "Ejercicios" },
              { label: "Citas" },
              { label: "Progreso" },
            ].map((c) => {
              const active = activeChip === c.label;
              return (
                <Ripple
                  key={c.label}
                  color={active ? "rgba(255,255,255,0.4)" : "rgba(33,0,93,0.18)"}
                  className="px-4 py-2 rounded-full text-sm whitespace-nowrap font-medium"
                  style={{
                    backgroundColor: active ? "#6750a4" : "#e8def8",
                    color: active ? "#ffffff" : "#21005d",
                  }}
                  onClick={() => setActiveChip(c.label)}
                >
                  {c.label}
                </Ripple>
              );
            })}
          </motion.section>

          {/* Outlined cards (M3) */}
          <p className="text-sm font-medium mb-3 px-1" style={{ color: "#49454f" }}>Próximas sesiones</p>
          <div className="space-y-3 mb-6">
            {[
              { titulo: "Movilidad lumbar", hora: "10:00", duracion: "30 min", tipo: "Online", color: "#6750a4" },
              { titulo: "Fortalecimiento core", hora: "16:30", duracion: "45 min", tipo: "Presencial", color: "#7d5260" },
              { titulo: "Estiramientos guiados", hora: "20:00", duracion: "15 min", tipo: "Online", color: "#386a20" },
            ].map((s, i) => (
              <motion.div
                key={s.titulo}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
              >
                <Ripple
                  as="div"
                  color={`${s.color}26`}
                  className="rounded-2xl p-4 flex items-center gap-3 cursor-pointer"
                  style={{ backgroundColor: "#ffffff", border: "1px solid #cac4d0" }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${s.color}1a` }}
                  >
                    <span className="text-lg" style={{ color: s.color }}>●</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{s.titulo}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#79747e" }}>
                      {s.hora} · {s.duracion} · {s.tipo}
                    </p>
                  </div>
                  <span style={{ color: "#79747e" }}>›</span>
                </Ripple>
              </motion.div>
            ))}
          </div>

          {/* Stats elevated card */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="rounded-3xl p-5 mb-12"
            style={{ backgroundColor: "#ffffff", boxShadow: "0 1px 2px rgba(0,0,0,0.06), 0 2px 6px rgba(103,80,164,0.08)" }}
          >
            <p className="text-sm font-medium mb-4" style={{ color: "#49454f" }}>Esta semana</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: "8", label: "Sesiones" },
                { val: "4h 20m", label: "Tiempo" },
                { val: "12", label: "Días seguidos" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-medium tracking-tight" style={{ color: "#21005d" }}>{s.val}</div>
                  <div className="text-xs mt-1" style={{ color: "#79747e" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Floating Action Button (M3 signature) — elevated sobre el card stats, separado del bottom nav */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.7 }}
            whileHover={{ scale: 1.05, boxShadow: "0 14px 30px rgba(103,80,164,0.5), 0 4px 10px rgba(0,0,0,0.2)" }}
            className="absolute bottom-28 right-4"
            style={{
              borderRadius: "1rem",
              boxShadow: "0 10px 24px rgba(103,80,164,0.42), 0 2px 6px rgba(0,0,0,0.16)",
              zIndex: 5,
            }}
          >
            <Ripple
              color="rgba(255,255,255,0.4)"
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
              style={{
                backgroundColor: "#6750a4",
                color: "#ffffff",
              }}
              ariaLabel="Nueva sesión"
            >
              +
            </Ripple>
          </motion.div>

          {/* Bottom navigation bar (M3) — más alto, separado del FAB con z-index propio */}
          <motion.nav
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="absolute bottom-0 left-0 right-0 rounded-b-3xl"
            style={{ backgroundColor: "#f7f2fa", borderTop: "1px solid #e8def8", zIndex: 4 }}
          >
            <div className="flex items-center justify-around py-3 px-2">
              {[
                { icon: "⌂", label: "Inicio" },
                { icon: "📅", label: "Agenda" },
                { icon: "📊", label: "Progreso" },
                { icon: "👤", label: "Perfil" },
              ].map((t) => {
                const active = activeTab === t.label;
                return (
                  <motion.button
                    key={t.label}
                    onClick={() => setActiveTab(t.label)}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 500, damping: 22 }}
                    className="flex flex-col items-center gap-0.5 px-3 py-2 relative"
                  >
                    <motion.div
                      animate={{
                        backgroundColor: active ? "#e8def8" : "rgba(232,222,248,0)",
                        scaleX: active ? 1 : 0.6,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="px-4 py-1 rounded-full"
                    >
                      <span className="text-xl">{t.icon}</span>
                    </motion.div>
                    <span
                      className="text-[10px] font-medium transition-colors"
                      style={{ color: active ? "#21005d" : "#49454f" }}
                    >
                      {t.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.nav>
        </div>

        <div className="mt-10">
          <StyleFooter estilo={e} textColor="#49454f" borderColor="#e8def8" />
        </div>
      </main>
    </div>
  );
}
