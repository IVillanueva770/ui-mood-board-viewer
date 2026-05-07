"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";

export default function AirbnbFriendlyPage() {
  const e = getEstilo("airbnb-friendly")!;

  return (
    <div style={{ backgroundColor: "#fafafa", color: "#222222", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#dddddd" navColor="#717171" />

      <main className="max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        {/* ====== HERO COMERCIAL — landing del producto ====== */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{ backgroundColor: "#ffe4e6" }}>
              <span className="text-sm">🌱</span>
              <span className="text-xs font-semibold" style={{ color: "#ff5a5f" }}>Producto en beta · sumate a la lista</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] mb-5 max-w-3xl mx-auto">
              Tu día sin ansiedad,<br />
              <span style={{ color: "#ff5a5f" }}>una tarea a la vez.</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8" style={{ color: "#484848" }}>
              Suave es un asistente personal que te ordena la mañana sin que tengas que pensar por dónde arrancar. Sin checklists infinitas, sin gamificación de aeropuerto.
            </p>

            <div className="flex items-center justify-center flex-wrap gap-3">
              <motion.button
                whileHover={{ y: -2, boxShadow: "0 12px 24px -8px rgba(255,90,95,0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl text-sm font-semibold"
                style={{ backgroundColor: "#ff5a5f", color: "#ffffff" }}
              >
                Probar gratis 14 días
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                className="px-5 py-3 rounded-xl text-sm font-semibold"
                style={{ backgroundColor: "#ffffff", color: "#222222", border: "1px solid #dddddd" }}
              >
                Ver demo →
              </motion.button>
            </div>
          </div>

          {/* Mini social proof + features cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "🌅", titulo: "Empieza tranquilo", desc: "Te muestra solo lo que importa hoy. El resto, mañana." },
              { icon: "🎯", titulo: "Foco real", desc: "Una tarea a la vez. Cuando terminás, aparece la próxima." },
              { icon: "🫶", titulo: "Sin presión", desc: "No te juzga si saltás un día. Te recibe igual al volver." },
            ].map((f, i) => (
              <motion.div
                key={f.titulo}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-5"
                style={{ border: "1px solid #ebebeb" }}
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h4 className="font-semibold mb-1.5">{f.titulo}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "#717171" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
            <div className="flex -space-x-2">
              {["#ffe4e6", "#fef3c7", "#dbeafe", "#dcfce7"].map((c) => (
                <div key={c} className="w-8 h-8 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
              ))}
            </div>
            <p className="text-sm" style={{ color: "#717171" }}>
              <span className="font-semibold" style={{ color: "#222222" }}>1.847 personas</span> arrancaron mejor el día con Suave esta semana.
            </p>
          </div>
        </motion.section>

        {/* Divider firma — soft bounce friendly */}
        <DividerReveal
          variant="soft-bounce"
          lineColor="#ebebeb"
          textColor="#717171"
          className="mb-12"
        >
          Así se ve adentro
        </DividerReveal>

        {/* ====== VISTA OPERATIVA — panel del usuario ====== */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
              style={{ backgroundColor: "#ffe4e6" }}
            >
              👋
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "#717171" }}>Buen día, Nacho</p>
              <p className="text-base font-medium">Lunes 6 de mayo</p>
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight mb-4 max-w-2xl">
            Tenés <span style={{ color: "#ff5a5f" }}>3 cosas</span> que hacer hoy. Vamos paso a paso.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-xl" style={{ color: "#484848" }}>
            Sin apuros. Te ordeno la mañana así no te quema la cabeza pensar por dónde arrancar.
          </p>
        </motion.section>

        {/* Friendly task cards */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-4 mb-12"
        >
          {[
            {
              num: "1",
              icono: "📞",
              titulo: "Llamar a Guadalupe",
              desc: "Confirmar la reunión del lunes. Si no atiende, mandale un WhatsApp y listo.",
              tiempo: "~5 min",
              color: "#ffe4e6",
              accent: "#ff5a5f",
            },
            {
              num: "2",
              icono: "✉️",
              titulo: "Responder mail de Fátima",
              desc: "Ya tenés el draft armado, solo lo revisás una vez y enviás. No es para mañana, es para hoy.",
              tiempo: "~10 min",
              color: "#fef3c7",
              accent: "#f59e0b",
            },
            {
              num: "3",
              icono: "📐",
              titulo: "Ajustar el sitio del kine",
              desc: "Cambiar los colores del header. Tomá un café antes, es la tarea más larga del día.",
              tiempo: "~45 min",
              color: "#dbeafe",
              accent: "#3b82f6",
            },
          ].map((t, i) => (
            <motion.div
              key={t.num}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -2 }}
              className="bg-white rounded-2xl p-5 sm:p-6 flex items-start gap-4 cursor-pointer transition-shadow hover:shadow-md"
              style={{ border: "1px solid #ebebeb" }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0"
                style={{ backgroundColor: t.color }}
              >
                {t.icono}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold" style={{ color: t.accent }}>Paso {t.num}</span>
                  <span className="text-xs" style={{ color: "#717171" }}>·</span>
                  <span className="text-xs" style={{ color: "#717171" }}>{t.tiempo}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1.5">{t.titulo}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#484848" }}>{t.desc}</p>
              </div>
              <button
                className="mt-1 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors hover:opacity-90"
                style={{ backgroundColor: "#222222", color: "#ffffff" }}
              >
                Hacer
              </button>
            </motion.div>
          ))}
        </motion.section>

        {/* Helpful tip card */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-6 mb-10 flex items-start gap-4"
          style={{ border: "1px solid #ebebeb" }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: "#dcfce7" }}
          >
            <span className="text-lg">💡</span>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-1.5">Tip del día</h4>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#484848" }}>
              Si una tarea te lleva menos de 2 minutos, hacela ya. No la anotes, no la mandés a mañana. Solo hacela. Es la regla que más pendientes te saca de encima en una semana.
            </p>
            <button className="text-xs font-semibold hover:underline" style={{ color: "#ff5a5f" }}>
              Ver más tips →
            </button>
          </div>
        </motion.section>

        {/* Stats friendly */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-6 mb-10"
          style={{ border: "1px solid #ebebeb" }}
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="text-lg">🎉</span>
            <h4 className="font-semibold">Cómo venís esta semana</h4>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { val: "12", label: "Tareas hechas", icon: "✅" },
              { val: "3 días", label: "En racha", icon: "🔥" },
              { val: "85%", label: "A tiempo", icon: "⏰" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-2xl font-semibold tracking-tight">{s.val}</div>
                <div className="text-xs mt-1" style={{ color: "#717171" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        <StyleFooter estilo={e} textColor="#717171" borderColor="#ebebeb" />
      </main>
    </div>
  );
}
