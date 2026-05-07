"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";

const SPARK = [12, 18, 14, 22, 28, 24, 35, 30, 42, 38, 48, 52, 49, 58, 64, 62, 70];

export default function StripeDashboardPage() {
  const e = getEstilo("stripe-dashboard")!;
  const max = Math.max(...SPARK);

  return (
    <div style={{ backgroundColor: "#f7f7f7", color: "#0a0a0a", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e3e8ee" navColor="#6b7280" />

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        {/* ====== HERO COMERCIAL — landing del Dashboard ====== */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 sm:mb-20 text-center py-12 sm:py-16 relative"
        >
          <div
            aria-hidden
            className="absolute inset-x-0 -top-6 h-72 -z-0 opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle at 30% 50%, rgba(99,91,255,0.4), transparent 60%)" }}
          />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.2em] mb-5 font-semibold" style={{ color: "#635bff" }}>
              Dashboard
            </p>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.02em] leading-[1.05] mb-5 max-w-3xl mx-auto">
              Tu negocio en pagos,<br />
              <span style={{ color: "#635bff" }}>en una sola pantalla.</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-9" style={{ color: "#52545a" }}>
              Volumen, clientes, fallos, refunds, suscripciones. Todo lo que necesitás para gestionar tu plata, sin leer logs ni armar dashboards aparte.
            </p>

            <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
              <button
                className="px-6 py-3 text-sm font-semibold rounded-md text-white"
                style={{ backgroundColor: "#635bff", boxShadow: "0 4px 12px rgba(99,91,255,0.3)" }}
              >
                Crear cuenta
              </button>
              <button
                className="px-6 py-3 text-sm font-semibold rounded-md"
                style={{ border: "1px solid #e3e8ee", color: "#0a0a0a" }}
              >
                Ver pricing →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
              {[
                { tit: "Métricas en vivo", desc: "Volumen y fallos minuto a minuto. Sin caché de 24h." },
                { tit: "Pagos recientes con contexto", desc: "Por qué falló cada pago. Si reintentar. Si avisar al cliente." },
                { tit: "Reportes contables", desc: "Conciliación con el banco. Export a tu contador o ERP." },
              ].map((f) => (
                <motion.div
                  key={f.tit}
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-md p-5"
                  style={{ border: "1px solid #e3e8ee" }}
                >
                  <div className="w-9 h-9 rounded-md mb-3 flex items-center justify-center text-white" style={{ backgroundColor: "#635bff" }}>◆</div>
                  <h4 className="font-semibold mb-1.5">{f.tit}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#52545a" }}>{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Divider firma — tech line draw stripe */}
        <DividerReveal
          variant="tech-line-draw"
          lineColor="#e3e8ee"
          textColor="#635bff"
          className="mb-8"
          textClassName="text-xs uppercase tracking-[0.15em] font-semibold"
        >
          Login → Dashboard
        </DividerReveal>

        {/* ====== VISTA OPERATIVA ====== */}
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "#6b7280" }}>Resumen · últimos 30 días</p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Hola, Nacho</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="px-3 py-2 text-sm font-medium rounded-md flex items-center gap-2 transition-colors hover:bg-gray-50"
              style={{ border: "1px solid #e3e8ee", color: "#3a4555" }}
            >
              <span>📅</span> Últimos 30 días
            </button>
            <button
              className="px-3 py-2 text-sm font-medium rounded-md text-white"
              style={{ backgroundColor: "#635bff", boxShadow: "0 2px 5px rgba(99,91,255,0.25)" }}
            >
              + Nueva factura
            </button>
          </div>
        </motion.section>

        {/* Metrics row */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: "Volumen bruto", val: "$48,219.50", delta: "+12.4%", trend: "up" },
            { label: "Pagos exitosos", val: "1,284", delta: "+8.1%", trend: "up" },
            { label: "Ticket promedio", val: "$37.55", delta: "+2.3%", trend: "up" },
            { label: "Tasa de fallo", val: "1.8%", delta: "-0.4%", trend: "down" },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              className="bg-white rounded-md p-5"
              style={{ border: "1px solid #e3e8ee" }}
            >
              <p className="text-xs mb-2" style={{ color: "#6b7280" }}>{m.label}</p>
              <p className="text-2xl font-semibold tracking-tight mb-1">{m.val}</p>
              <div className="flex items-center gap-1 text-xs">
                <span
                  className="px-1.5 py-0.5 rounded font-medium"
                  style={{
                    backgroundColor: m.trend === "up" ? "#d1fae5" : "#fee2e2",
                    color: m.trend === "up" ? "#065f46" : "#991b1b",
                  }}
                >
                  {m.delta}
                </span>
                <span style={{ color: "#6b7280" }}>vs período anterior</span>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Chart card */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-md p-6 mb-8"
          style={{ border: "1px solid #e3e8ee" }}
        >
          <div className="flex items-end justify-between mb-6 flex-wrap gap-2">
            <div>
              <p className="text-xs mb-1" style={{ color: "#6b7280" }}>Volumen neto</p>
              <p className="text-2xl font-semibold tracking-tight">$48,219.50</p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5" style={{ color: "#6b7280" }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#635bff" }} /> Este período
              </span>
              <span className="flex items-center gap-1.5" style={{ color: "#6b7280" }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#cbd5e1" }} /> Anterior
              </span>
            </div>
          </div>

          <svg viewBox="0 0 340 120" className="w-full h-32 sm:h-40">
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#635bff" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#635bff" stopOpacity="0" />
              </linearGradient>
            </defs>

            {[20, 50, 80, 110].map((y) => (
              <line key={y} x1="0" y1={y} x2="340" y2={y} stroke="#f0f1f3" strokeWidth="1" />
            ))}

            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              d={(() => {
                const pts = SPARK.map((v, i) => {
                  const x = (i / (SPARK.length - 1)) * 340;
                  const y = 110 - (v / max) * 95;
                  return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
                });
                return pts.join(" ");
              })()}
              fill="none"
              stroke="#635bff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              d={(() => {
                const pts = SPARK.map((v, i) => {
                  const x = (i / (SPARK.length - 1)) * 340;
                  const y = 110 - (v / max) * 95;
                  return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
                });
                return pts.join(" ") + ` L 340 110 L 0 110 Z`;
              })()}
              fill="url(#grad)"
            />
          </svg>
        </motion.section>

        {/* Two-column: transactions + customer list */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-2 bg-white rounded-md"
            style={{ border: "1px solid #e3e8ee" }}
          >
            <div className="px-5 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid #e3e8ee" }}>
              <p className="font-semibold text-sm">Pagos recientes</p>
              <button className="text-xs hover:underline" style={{ color: "#635bff" }}>Ver todos →</button>
            </div>
            <div className="divide-y" style={{ borderColor: "#e3e8ee" }}>
              {[
                { cliente: "G. Alanís", monto: "$1,250.00", estado: "exitoso", fecha: "Hace 12 min" },
                { cliente: "F. Vergara", monto: "$340.50", estado: "exitoso", fecha: "Hace 1 h" },
                { cliente: "N. Galland", monto: "$890.00", estado: "pendiente", fecha: "Hace 3 h" },
                { cliente: "Buen Boy", monto: "$520.00", estado: "exitoso", fecha: "Hoy 09:14" },
                { cliente: "Sec. Cultura", monto: "$2,100.00", estado: "fallido", fecha: "Ayer" },
              ].map((p) => (
                <div key={p.cliente + p.fecha} className="px-5 py-3 flex items-center justify-between text-sm hover:bg-gray-50 transition-colors">
                  <div>
                    <p className="font-medium">{p.cliente}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>{p.fecha}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[11px] px-2 py-0.5 rounded font-medium"
                      style={{
                        backgroundColor: p.estado === "exitoso" ? "#d1fae5" : p.estado === "pendiente" ? "#fef3c7" : "#fee2e2",
                        color: p.estado === "exitoso" ? "#065f46" : p.estado === "pendiente" ? "#92400e" : "#991b1b",
                      }}
                    >
                      {p.estado}
                    </span>
                    <span className="font-semibold tabular-nums">{p.monto}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-md p-5"
            style={{ border: "1px solid #e3e8ee" }}
          >
            <p className="font-semibold text-sm mb-4">Top clientes</p>
            <div className="space-y-3">
              {[
                { nombre: "G. Alanís", val: "$8,420", pct: "92%" },
                { nombre: "Buen Boy", val: "$5,210", pct: "57%" },
                { nombre: "F. Vergara", val: "$3,150", pct: "34%" },
                { nombre: "N. Galland", val: "$1,890", pct: "21%" },
              ].map((c) => (
                <div key={c.nombre}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="font-medium">{c.nombre}</span>
                    <span className="tabular-nums" style={{ color: "#6b7280" }}>{c.val}</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "#f0f1f3" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: c.pct }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: "#635bff" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <StyleFooter estilo={e} textColor="#6b7280" borderColor="#e3e8ee" />
      </main>
    </div>
  );
}
