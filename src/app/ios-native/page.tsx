"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";

const HABITS_INITIAL = [
  { id: "h1", titulo: "Movilidad lumbar", duracion: "8 min", done: true, emoji: "🧘" },
  { id: "h2", titulo: "Caminata", duracion: "20 min", done: true, emoji: "🚶" },
  { id: "h3", titulo: "Tomar agua", duracion: "2 vasos", done: false, emoji: "💧" },
  { id: "h4", titulo: "Estiramientos", duracion: "5 min", done: false, emoji: "🤸" },
];

const TABS = [
  { id: "hoy", icon: "🏠", label: "Hoy" },
  { id: "stats", icon: "📊", label: "Stats" },
  { id: "team", icon: "👥", label: "Equipo" },
  { id: "settings", icon: "⚙️", label: "Ajustes" },
];

export default function IOSPage() {
  const e = getEstilo("ios-native")!;
  const [habits, setHabits] = useState(HABITS_INITIAL);
  const [activeTab, setActiveTab] = useState("hoy");

  const toggle = (id: string) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, done: !h.done } : h))
    );
  };

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
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl p-5 mb-5 cursor-pointer"
              style={{ background: "linear-gradient(135deg, #007aff, #5856d6)", color: "#fff" }}
            >
              <p className="text-xs uppercase tracking-wider opacity-80 mb-1">Racha actual</p>
              <p className="text-4xl font-bold tracking-tight mb-1">12 días</p>
              <p className="text-xs opacity-80">Tu mejor racha: 28 días</p>
            </motion.div>

            {/* Habits list */}
            <p className="text-xs uppercase tracking-wider font-semibold mb-3" style={{ color: "#8e8e93" }}>Hoy</p>
            <div className="space-y-3">
              {habits.map((h, i) => (
                <motion.div
                  key={h.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => toggle(h.id)}
                  className="flex items-center gap-3 p-3 rounded-xl cursor-pointer"
                  style={{ backgroundColor: "#f2f2f7" }}
                >
                  <motion.div
                    animate={{
                      backgroundColor: h.done ? "#34c759" : "#ffffff",
                      scale: h.done ? [1, 1.18, 1] : 1,
                    }}
                    transition={{
                      backgroundColor: { duration: 0.18 },
                      scale: { type: "spring", stiffness: 500, damping: 14 },
                    }}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0"
                    style={{
                      color: h.done ? "#fff" : "inherit",
                      border: h.done ? "none" : "1px solid #d1d1d6",
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={h.done ? "check" : "emoji"}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 600, damping: 20 }}
                      >
                        {h.done ? "✓" : h.emoji}
                      </motion.span>
                    </AnimatePresence>
                  </motion.div>
                  <div className="flex-1">
                    <motion.div
                      animate={{
                        textDecorationLine: h.done ? "line-through" : "none",
                        color: h.done ? "#8e8e93" : "#000",
                      }}
                      transition={{ duration: 0.2 }}
                      className="font-medium text-sm"
                    >
                      {h.titulo}
                    </motion.div>
                    <div className="text-xs" style={{ color: "#8e8e93" }}>{h.duracion}</div>
                  </div>
                  {!h.done && (
                    <motion.button
                      initial={{ opacity: 1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggle(h.id);
                      }}
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: "#007aff" }}
                    >
                      Marcar
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tab bar with spring indicator */}
          <div
            className="absolute bottom-0 left-0 right-0 px-6 py-3 flex items-center justify-around"
            style={{ backgroundColor: "rgba(255,255,255,0.92)", backdropFilter: "blur(20px)", borderTop: "1px solid #d1d1d6" }}
          >
            {TABS.map((t) => {
              const active = activeTab === t.id;
              return (
                <motion.button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  whileTap={{ scale: 0.85 }}
                  transition={{ type: "spring", stiffness: 600, damping: 18 }}
                  className="flex flex-col items-center gap-0.5 relative"
                >
                  <motion.span
                    animate={{
                      scale: active ? 1.1 : 1,
                      y: active ? -1 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    className="text-xl"
                  >
                    {t.icon}
                  </motion.span>
                  <motion.span
                    animate={{ color: active ? "#007aff" : "#8e8e93" }}
                    className="text-[10px] font-medium"
                  >
                    {t.label}
                  </motion.span>
                  {active && (
                    <motion.span
                      layoutId="ios-tab-dot"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="absolute -bottom-1 w-1 h-1 rounded-full"
                      style={{ backgroundColor: "#007aff" }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-12">
          <StyleFooter estilo={e} textColor="#3a3a3c" borderColor="#d1d1d6" />
        </div>
      </main>
    </div>
  );
}
