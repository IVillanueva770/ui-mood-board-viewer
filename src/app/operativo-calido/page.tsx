"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";

export default function OperativoCalidoPage() {
  const e = getEstilo("operativo-calido")!;

  return (
    <div style={{ backgroundColor: "#fafafa", color: "#171717", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e5e7eb" navColor="#737373" />

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-8 sm:py-10">
        {/* ====== HERO COMERCIAL — landing del producto e-commerce ====== */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 sm:mb-20 text-center py-8 sm:py-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5" style={{ backgroundColor: "#dcfce7", color: "#166534" }}>
            <span className="text-sm">🌞</span>
            <span className="text-xs font-semibold">Vendé sin volverte loca</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] mb-5 max-w-3xl mx-auto">
            Tu negocio,<br />
            <span style={{ color: "#16a34a" }}>en una sola pantalla.</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-9" style={{ color: "#525252" }}>
            Pedidos, WhatsApp, envíos, cobros: todo junto. Sin abrir 4 apps. Sin perder mensajes en el río de chats.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
            <button
              className="px-6 py-3 rounded-lg text-sm font-semibold text-white"
              style={{ backgroundColor: "#16a34a" }}
            >
              Probar gratis 30 días
            </button>
            <button
              className="px-6 py-3 rounded-lg text-sm font-semibold"
              style={{ border: "1px solid #e5e7eb", color: "#171717" }}
            >
              Hablar con ventas →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
            {[
              { icon: "💬", tit: "WhatsApp adentro", desc: "Cada mensaje del cliente queda atado a su pedido. No te perdés ninguno." },
              { icon: "🛵", tit: "Envíos con un toque", desc: "Marcás el pedido como listo y se asigna al cadete. Te avisa cuando llega." },
              { icon: "📊", tit: "Ves cómo va el día", desc: "Pedidos, ventas, deudas. Sin Excel, sin contar pesos a mano de noche." },
            ].map((p) => (
              <motion.div
                key={p.tit}
                whileHover={{ y: -3 }}
                className="bg-white rounded-lg p-5"
                style={{ border: "1px solid #e5e7eb" }}
              >
                <div className="text-2xl mb-3">{p.icon}</div>
                <h4 className="font-semibold mb-1.5">{p.tit}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 flex-wrap mt-10 text-sm" style={{ color: "#737373" }}>
            <span><span className="font-semibold" style={{ color: "#171717" }}>3.400+</span> negocios en Argentina</span>
            <span>·</span>
            <span><span className="font-semibold" style={{ color: "#171717" }}>4.8/5</span> en Google Play</span>
            <span>·</span>
            <span>Soporte por WhatsApp</span>
          </div>
        </motion.section>

        {/* Divider firma — soft bounce cálido */}
        <DividerReveal
          variant="soft-bounce"
          lineColor="#e5e7eb"
          textColor="#16a34a"
          className="mb-10"
          textClassName="text-xs uppercase tracking-wider font-semibold"
        >
          🌞 panel del negocio
        </DividerReveal>

        {/* ====== VISTA OPERATIVA ====== */}
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex items-end justify-between flex-wrap gap-3"
        >
          <div>
            <p className="text-xs uppercase tracking-wider mb-1.5" style={{ color: "#737373" }}>Tu negocio · Hoy</p>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Hola Fátima 🌞</h1>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="px-2.5 py-1 rounded-md font-medium" style={{ backgroundColor: "#dcfce7", color: "#166534" }}>
              Tienda abierta
            </span>
            <button
              className="px-3 py-1.5 rounded-md text-white font-medium"
              style={{ backgroundColor: "#16a34a" }}
            >
              + Nuevo pedido
            </button>
          </div>
        </motion.section>

        {/* Stats simples */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8"
        >
          {[
            { label: "Pedidos hoy", val: "12", icono: "📦", bg: "#dcfce7", fg: "#166534" },
            { label: "Ventas hoy", val: "$42.300", icono: "💰", bg: "#fef3c7", fg: "#92400e" },
            { label: "Por entregar", val: "5", icono: "🛵", bg: "#ffedd5", fg: "#9a3412" },
            { label: "WhatsApp sin leer", val: "8", icono: "💬", bg: "#e0e7ff", fg: "#3730a3" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
              className="bg-white rounded-lg p-4 flex items-center gap-3"
              style={{ border: "1px solid #e5e7eb" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
                style={{ backgroundColor: s.bg }}
              >
                {s.icono}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs" style={{ color: "#737373" }}>{s.label}</p>
                <p className="text-xl font-semibold tabular-nums" style={{ color: s.fg }}>{s.val}</p>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Tabla simple de pedidos */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-lg overflow-hidden mb-6"
          style={{ border: "1px solid #e5e7eb" }}
        >
          <div className="px-5 py-3 flex items-center justify-between flex-wrap gap-2" style={{ borderBottom: "1px solid #e5e7eb" }}>
            <p className="font-semibold text-sm">Pedidos del día</p>
            <div className="flex items-center gap-1.5 text-xs">
              {["Todos", "Pendientes", "En camino", "Entregados"].map((t, i) => (
                <button
                  key={t}
                  className="px-2.5 py-1 rounded-md font-medium transition-colors"
                  style={{
                    backgroundColor: i === 1 ? "#fef3c7" : "transparent",
                    color: i === 1 ? "#92400e" : "#737373",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y" style={{ borderColor: "#e5e7eb" }}>
            {[
              { id: "#1284", cliente: "Marta G.", productos: "2 productos", monto: "$3.450", estado: "pendiente", color: "#fef3c7", colorFg: "#92400e", hora: "10:14" },
              { id: "#1283", cliente: "Roberto P.", productos: "5 productos", monto: "$8.900", estado: "en camino", color: "#ffedd5", colorFg: "#9a3412", hora: "09:42" },
              { id: "#1282", cliente: "Lucía F.", productos: "1 producto", monto: "$1.250", estado: "entregado", color: "#dcfce7", colorFg: "#166534", hora: "09:18" },
              { id: "#1281", cliente: "Ana M.", productos: "3 productos", monto: "$5.620", estado: "entregado", color: "#dcfce7", colorFg: "#166534", hora: "08:50" },
              { id: "#1280", cliente: "Diego S.", productos: "7 productos", monto: "$12.180", estado: "pendiente", color: "#fef3c7", colorFg: "#92400e", hora: "08:21" },
            ].map((p) => (
              <div key={p.id} className="px-5 py-3 flex items-center justify-between text-sm hover:bg-neutral-50 transition-colors">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <span className="font-mono text-xs" style={{ color: "#737373" }}>{p.id}</span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium truncate">{p.cliente}</p>
                    <p className="text-xs" style={{ color: "#737373" }}>{p.productos} · {p.hora}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="text-[11px] px-2 py-0.5 rounded-md font-medium whitespace-nowrap"
                    style={{ backgroundColor: p.color, color: p.colorFg }}
                  >
                    {p.estado}
                  </span>
                  <span className="font-semibold tabular-nums whitespace-nowrap">{p.monto}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Helper banner */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-lg p-4 mb-10 flex items-start gap-3"
          style={{ backgroundColor: "#fef3c7", border: "1px solid #fde68a" }}
        >
          <span className="text-xl shrink-0">📌</span>
          <div className="flex-1">
            <p className="text-sm font-semibold mb-0.5" style={{ color: "#78350f" }}>5 pedidos pendientes esperan respuesta</p>
            <p className="text-xs" style={{ color: "#92400e" }}>
              Si necesitás ayuda con alguno, tocá el pedido y te abrimos WhatsApp directo con el cliente.
            </p>
          </div>
          <button
            className="px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap"
            style={{ backgroundColor: "#92400e", color: "#fff" }}
          >
            Ver pendientes
          </button>
        </motion.section>

        <StyleFooter estilo={e} textColor="#737373" borderColor="#e5e7eb" />
      </main>
    </div>
  );
}
