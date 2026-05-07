"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";

export default function Material3Page() {
  const e = getEstilo("material-3")!;

  return (
    <div style={{ backgroundColor: "#fef7ff", color: "#1d1b20", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e8def8" navColor="#79747e" />

      <main className="max-w-md mx-auto px-4 py-6">
        {/* Phone mock contenedor */}
        <div className="relative pb-32">
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
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#e8def8" }}
              aria-label="Notificaciones"
            >
              <span style={{ color: "#21005d" }}>🔔</span>
            </button>
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
              { label: "Hoy", active: true },
              { label: "Ejercicios" },
              { label: "Citas" },
              { label: "Progreso" },
            ].map((c) => (
              <motion.button
                key={c.label}
                whileTap={{ scale: 0.96 }}
                className="px-4 py-2 rounded-full text-sm whitespace-nowrap font-medium"
                style={{
                  backgroundColor: c.active ? "#6750a4" : "#e8def8",
                  color: c.active ? "#ffffff" : "#21005d",
                }}
              >
                {c.label}
              </motion.button>
            ))}
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
                whileTap={{ scale: 0.98 }}
                className="rounded-2xl p-4 flex items-center gap-3"
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
              </motion.div>
            ))}
          </div>

          {/* Stats elevated card */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="rounded-3xl p-5 mb-6"
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

          {/* Floating Action Button (M3 signature) — absolute respecto al phone mock */}
          <motion.button
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            className="absolute bottom-20 right-4 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
            style={{
              backgroundColor: "#6750a4",
              color: "#ffffff",
              boxShadow: "0 6px 16px rgba(103,80,164,0.35), 0 1px 3px rgba(0,0,0,0.12)",
            }}
            aria-label="Nueva sesión"
          >
            +
          </motion.button>

          {/* Bottom navigation bar (M3) — absolute respecto al phone mock */}
          <motion.nav
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="absolute bottom-0 left-0 right-0 rounded-b-3xl"
            style={{ backgroundColor: "#f7f2fa", borderTop: "1px solid #e8def8" }}
          >
            <div className="flex items-center justify-around py-2 px-2">
              {[
                { icon: "⌂", label: "Inicio", active: true },
                { icon: "📅", label: "Agenda" },
                { icon: "📊", label: "Progreso" },
                { icon: "👤", label: "Perfil" },
              ].map((t) => (
                <button key={t.label} className="flex flex-col items-center gap-0.5 px-3 py-2 relative">
                  <div
                    className="px-4 py-1 rounded-full transition-colors"
                    style={{ backgroundColor: t.active ? "#e8def8" : "transparent" }}
                  >
                    <span className="text-xl">{t.icon}</span>
                  </div>
                  <span className="text-[10px] font-medium" style={{ color: t.active ? "#21005d" : "#49454f" }}>
                    {t.label}
                  </span>
                </button>
              ))}
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
