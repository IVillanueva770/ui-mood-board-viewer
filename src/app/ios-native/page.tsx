"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";

export default function IOSPage() {
  const e = getEstilo("ios-native")!;
  return (
    <div style={{ backgroundColor: "#f2f2f7", color: "#000000", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#d1d1d6" navColor="#8e8e93" />

      <main className="max-w-md mx-auto px-4 py-8">
        {/* Phone frame */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[2rem] overflow-hidden shadow-2xl"
          style={{ backgroundColor: "#ffffff", border: "1px solid #d1d1d6" }}
        >
          {/* Status bar */}
          <div className="px-6 py-3 flex items-center justify-between text-xs font-semibold" style={{ backgroundColor: "#f2f2f7" }}>
            <span>9:41</span>
            <span>📶 📡 🔋</span>
          </div>

          {/* App content */}
          <div className="p-5 pb-24">
            <h1 className="text-3xl font-bold tracking-tight mb-1">Hola, Nacho</h1>
            <p className="text-sm mb-7" style={{ color: "#8e8e93" }}>Hoy tenés 3 hábitos pendientes</p>

            {/* Stats card */}
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="rounded-2xl p-5 mb-5"
              style={{ background: "linear-gradient(135deg, #007aff, #5856d6)", color: "#fff" }}
            >
              <p className="text-xs uppercase tracking-wider opacity-80 mb-1">Racha actual</p>
              <p className="text-4xl font-bold tracking-tight mb-1">12 días</p>
              <p className="text-xs opacity-80">Tu mejor racha: 28 días</p>
            </motion.div>

            {/* Habits list */}
            <p className="text-xs uppercase tracking-wider font-semibold mb-3" style={{ color: "#8e8e93" }}>Hoy</p>
            <div className="space-y-3">
              {[
                { titulo: "Movilidad lumbar", duracion: "8 min", done: true, emoji: "🧘" },
                { titulo: "Caminata", duracion: "20 min", done: true, emoji: "🚶" },
                { titulo: "Tomar agua", duracion: "2 vasos", done: false, emoji: "💧" },
                { titulo: "Estiramientos", duracion: "5 min", done: false, emoji: "🤸" },
              ].map((h, i) => (
                <motion.div
                  key={h.titulo}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ backgroundColor: "#f2f2f7" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                    style={{ backgroundColor: h.done ? "#34c759" : "#fff", color: h.done ? "#fff" : "inherit", border: h.done ? "none" : "1px solid #d1d1d6" }}
                  >
                    {h.done ? "✓" : h.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm" style={{ textDecoration: h.done ? "line-through" : "none", color: h.done ? "#8e8e93" : "#000" }}>
                      {h.titulo}
                    </div>
                    <div className="text-xs" style={{ color: "#8e8e93" }}>{h.duracion}</div>
                  </div>
                  {!h.done && (
                    <button className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#007aff" }}>
                      Marcar
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tab bar */}
          <div
            className="absolute bottom-0 left-0 right-0 px-6 py-3 flex items-center justify-around"
            style={{ backgroundColor: "rgba(255,255,255,0.92)", backdropFilter: "blur(20px)", borderTop: "1px solid #d1d1d6" }}
          >
            {[
              { icon: "🏠", label: "Hoy", active: true },
              { icon: "📊", label: "Stats" },
              { icon: "👥", label: "Equipo" },
              { icon: "⚙️", label: "Ajustes" },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-0.5">
                <span className="text-xl">{t.icon}</span>
                <span className="text-[10px] font-medium" style={{ color: t.active ? "#007aff" : "#8e8e93" }}>{t.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12">
          <StyleFooter estilo={e} textColor="#3a3a3c" borderColor="#d1d1d6" />
        </div>
      </main>
    </div>
  );
}
