"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

const SPARK = [12, 18, 14, 22, 28, 24, 35, 30, 42, 38, 48, 52, 49, 58, 64, 62, 70];

export default function StripeDashboardPage() {
  const e = getEstilo("stripe-dashboard")!;
  const [activeView, setActiveView] = useState("inicio");
  const max = Math.max(...SPARK);

  /* ============== TAB 1 — LANDING COMERCIAL ============== */
  const landing = (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="relative max-w-5xl mx-auto px-5 sm:px-8 pt-8 pb-14 sm:pt-12 sm:pb-20 text-center overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 -top-12 h-96 -z-0 opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle at 30% 50%, rgba(99,91,255,0.4), transparent 60%)" }}
      />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.2em] mb-5 font-semibold" style={{ color: "#635bff" }}>
          Panel de pagos
        </p>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.02em] leading-[1.05] mb-5 max-w-3xl mx-auto">
          Tu negocio en pagos,<br />
          <span style={{ color: "#635bff" }}>en una sola pantalla.</span>
        </h1>
        <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-9" style={{ color: "#52545a" }}>
          Volumen, clientes, fallos, refunds, suscripciones. Todo lo que necesitás para gestionar tu plata sin armar planillas aparte.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
          <motion.button
            whileHover={{ y: -2, boxShadow: "0 12px 28px -6px rgba(99,91,255,0.5)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="px-6 py-3 text-sm font-semibold rounded-md text-white"
            style={{ backgroundColor: "#635bff", boxShadow: "0 4px 12px rgba(99,91,255,0.3)" }}
          >
            Crear cuenta
          </motion.button>
          <motion.button
            whileHover={{ borderColor: "#635bff", color: "#635bff", x: 2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="px-6 py-3 text-sm font-semibold rounded-md"
            style={{ border: "1px solid #e3e8ee", color: "#0a0a0a" }}
          >
            Ver demo →
          </motion.button>
        </div>

        <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap mb-14 opacity-70">
          {["KAVAK", "MercadoPago", "Tiendanube", "Rappi", "PedidosYa"].map((b) => (
            <span key={b} className="text-sm font-semibold tracking-tight" style={{ color: "#6b7280" }}>{b}</span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
          {[
            { tit: "Métricas en vivo", desc: "Volumen y fallos minuto a minuto. Sin caché de 24h.", icon: "◆" },
            { tit: "Pagos con contexto", desc: "Por qué falló cada pago. Si reintentar. Si avisar al cliente.", icon: "◇" },
            { tit: "Reportes contables", desc: "Conciliación con el banco. Export a tu contador o ERP.", icon: "↗" },
          ].map((f, i) => (
            <motion.div
              key={f.tit}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-md p-5"
              style={{ border: "1px solid #e3e8ee" }}
            >
              <div className="w-9 h-9 rounded-md mb-3 flex items-center justify-center text-white" style={{ backgroundColor: "#635bff" }}>{f.icon}</div>
              <h4 className="font-semibold mb-1.5">{f.tit}</h4>
              <p className="text-sm leading-relaxed" style={{ color: "#52545a" }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );

  /* ============== SUB-VISTAS WORKSPACE ============== */

  const InicioView = (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#6b7280" }}>Resumen · hoy</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Hola, Nacho</h2>
        </div>
        <motion.button
          whileHover={{ y: -1, boxShadow: "0 6px 14px -2px rgba(99,91,255,0.4)" }}
          whileTap={{ scale: 0.97 }}
          className="px-3 py-2 text-sm font-medium rounded-md text-white"
          style={{ backgroundColor: "#635bff", boxShadow: "0 2px 5px rgba(99,91,255,0.25)" }}
        >
          + Nueva factura
        </motion.button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Ingresos hoy", val: "$12,450", delta: "+8.2%", up: true },
          { label: "Volumen 24h", val: "$48,219", delta: "+12.4%", up: true },
          { label: "Pagos completos", val: "284", delta: "+3.1%", up: true },
          { label: "Tasa éxito", val: "98.2%", delta: "+0.4%", up: true },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white rounded-md p-4"
            style={{ border: "1px solid #e3e8ee" }}
          >
            <p className="text-xs mb-2" style={{ color: "#6b7280" }}>{m.label}</p>
            <p className="text-xl font-semibold tracking-tight mb-1">{m.val}</p>
            <span
              className="text-[11px] px-1.5 py-0.5 rounded font-medium"
              style={{ backgroundColor: m.up ? "#d1fae5" : "#fee2e2", color: m.up ? "#065f46" : "#991b1b" }}
            >
              {m.delta}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-md p-5 mb-6" style={{ border: "1px solid #e3e8ee" }}>
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-xs mb-1" style={{ color: "#6b7280" }}>Volumen neto</p>
            <p className="text-xl font-semibold tracking-tight">$48,219.50</p>
          </div>
          <span className="flex items-center gap-1.5 text-xs" style={{ color: "#6b7280" }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#635bff" }} /> Últimos 17 días
          </span>
        </div>
        <svg viewBox="0 0 340 100" className="w-full h-28">
          <defs>
            <linearGradient id="grad-stripe" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#635bff" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#635bff" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[20, 50, 80].map((y) => (
            <line key={y} x1="0" y1={y} x2="340" y2={y} stroke="#f0f1f3" strokeWidth="1" />
          ))}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            d={SPARK.map((v, i) => {
              const x = (i / (SPARK.length - 1)) * 340;
              const y = 95 - (v / max) * 80;
              return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
            }).join(" ")}
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
            d={SPARK.map((v, i) => {
              const x = (i / (SPARK.length - 1)) * 340;
              const y = 95 - (v / max) * 80;
              return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
            }).join(" ") + " L 340 100 L 0 100 Z"}
            fill="url(#grad-stripe)"
          />
        </svg>
      </div>

      <div className="bg-white rounded-md" style={{ border: "1px solid #e3e8ee" }}>
        <div className="px-5 py-3 flex items-center justify-between" style={{ borderBottom: "1px solid #e3e8ee" }}>
          <p className="font-semibold text-sm">Pagos recientes</p>
          <span className="text-xs" style={{ color: "#6b7280" }}>5 últimos</span>
        </div>
        <div className="divide-y" style={{ borderColor: "#e3e8ee" }}>
          {[
            { id: "ch_3O8a2dF7gK", cliente: "G. Alanís", monto: "$1,250.00", metodo: "Visa ••4242", estado: "Succeeded", color: "#10b981" },
            { id: "ch_2N7b1cE6hL", cliente: "F. Vergara", monto: "$340.50", metodo: "Mastercard ••8810", estado: "Succeeded", color: "#10b981" },
            { id: "ch_4P9d3eG8iM", cliente: "Buen Boy SRL", monto: "$890.00", metodo: "Amex ••3001", estado: "Pending", color: "#f59e0b" },
            { id: "ch_5Q1e4fH9jN", cliente: "N. Galland", monto: "$520.00", metodo: "Visa ••0099", estado: "Succeeded", color: "#10b981" },
            { id: "ch_6R2f5gI0kO", cliente: "Sec. Cultura", monto: "$2,100.00", metodo: "Visa ••7711", estado: "Failed", color: "#ef4444" },
          ].map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.04 }}
              className="px-5 py-3 flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                <div className="min-w-0">
                  <p className="font-medium truncate">{p.cliente}</p>
                  <p className="text-[11px] font-mono mt-0.5" style={{ color: "#6b7280" }}>{p.id}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-xs hidden sm:inline" style={{ color: "#6b7280" }}>{p.metodo}</span>
                <span className="font-semibold tabular-nums">{p.monto}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  const PagosView = (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#6b7280" }}>Movimientos · últimos 7 días</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Pagos</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-xs font-medium rounded-md" style={{ border: "1px solid #e3e8ee", color: "#3a4555" }}>Filtrar</button>
          <button className="px-3 py-1.5 text-xs font-medium rounded-md" style={{ border: "1px solid #e3e8ee", color: "#3a4555" }}>Exportar CSV</button>
        </div>
      </div>

      <div className="bg-white rounded-md overflow-hidden" style={{ border: "1px solid #e3e8ee" }}>
        <div className="grid grid-cols-12 px-5 py-2.5 text-[11px] uppercase tracking-wider font-semibold" style={{ borderBottom: "1px solid #e3e8ee", color: "#6b7280", backgroundColor: "#fafbfc" }}>
          <div className="col-span-3">ID</div>
          <div className="col-span-3">Cliente</div>
          <div className="col-span-2">Monto</div>
          <div className="col-span-2">Método</div>
          <div className="col-span-2 text-right">Estado</div>
        </div>
        {[
          { id: "ch_3O8a2dF7gK", cliente: "G. Alanís", email: "g@alanis.com", monto: "$1,250.00", metodo: "Visa ••4242", estado: "Succeeded", color: "#10b981", hora: "12:04" },
          { id: "ch_2N7b1cE6hL", cliente: "F. Vergara", email: "fv@studio.ar", monto: "$340.50", metodo: "MC ••8810", estado: "Succeeded", color: "#10b981", hora: "11:48" },
          { id: "ch_4P9d3eG8iM", cliente: "Buen Boy SRL", email: "ops@buenboy.co", monto: "$890.00", metodo: "Amex ••3001", estado: "Pending", color: "#f59e0b", hora: "11:12" },
          { id: "ch_5Q1e4fH9jN", cliente: "N. Galland", email: "n.galland@ki.ne", monto: "$520.00", metodo: "Visa ••0099", estado: "Succeeded", color: "#10b981", hora: "10:55" },
          { id: "ch_6R2f5gI0kO", cliente: "Sec. Cultura", email: "pagos@sc.gov.ar", monto: "$2,100.00", metodo: "Visa ••7711", estado: "Failed", color: "#ef4444", hora: "10:31" },
          { id: "ch_7S3g6hJ1lP", cliente: "Estudio Lobo", email: "hola@lobo.dev", monto: "$1,840.00", metodo: "MC ••4498", estado: "Succeeded", color: "#10b981", hora: "09:58" },
          { id: "ch_8T4h7iK2mQ", cliente: "M. Falcón", email: "mf@gmail.com", monto: "$120.00", metodo: "Visa ••1108", estado: "Succeeded", color: "#10b981", hora: "09:14" },
        ].map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ backgroundColor: "#fafbfc" }}
            className="grid grid-cols-12 px-5 py-3 text-sm items-center"
            style={{ borderBottom: i < 6 ? "1px solid #f0f1f3" : "none" }}
          >
            <div className="col-span-3 font-mono text-xs truncate" style={{ color: "#3a4555" }}>{p.id}</div>
            <div className="col-span-3 min-w-0">
              <p className="font-medium truncate">{p.cliente}</p>
              <p className="text-[11px] truncate" style={{ color: "#6b7280" }}>{p.email}</p>
            </div>
            <div className="col-span-2 font-semibold tabular-nums">{p.monto}</div>
            <div className="col-span-2 text-xs" style={{ color: "#6b7280" }}>{p.metodo}</div>
            <div className="col-span-2 flex items-center justify-end gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.color }} />
              <span className="text-xs font-medium">{p.estado}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const ClientesView = (
    <div>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#6b7280" }}>284 clientes activos</p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Top clientes</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { nombre: "G. Alanís", iniciales: "GA", ltv: "$8,420.00", pagos: 14, ultimo: "Hace 12 min", trend: "+18%" },
          { nombre: "Buen Boy SRL", iniciales: "BB", ltv: "$5,210.00", pagos: 9, ultimo: "Ayer", trend: "+22%" },
          { nombre: "F. Vergara Studio", iniciales: "FV", ltv: "$3,150.00", pagos: 7, ultimo: "Hace 1 h", trend: "+5%" },
          { nombre: "N. Galland", iniciales: "NG", ltv: "$1,890.00", pagos: 5, ultimo: "Hace 3 h", trend: "+12%" },
        ].map((c, i) => (
          <motion.div
            key={c.nombre}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -3, boxShadow: "0 8px 20px -8px rgba(15,23,42,0.15)" }}
            className="bg-white rounded-md p-5 cursor-pointer"
            style={{ border: "1px solid #e3e8ee" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold" style={{ backgroundColor: "#635bff" }}>
                {c.iniciales}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate">{c.nombre}</p>
                <p className="text-xs" style={{ color: "#6b7280" }}>{c.ultimo}</p>
              </div>
              <span className="text-[11px] px-1.5 py-0.5 rounded font-medium" style={{ backgroundColor: "#d1fae5", color: "#065f46" }}>{c.trend}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-[11px] mb-0.5" style={{ color: "#6b7280" }}>LTV</p>
                <p className="font-semibold tabular-nums">{c.ltv}</p>
              </div>
              <div>
                <p className="text-[11px] mb-0.5" style={{ color: "#6b7280" }}># pagos</p>
                <p className="font-semibold tabular-nums">{c.pagos}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const ProductosView = (
    <div>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#6b7280" }}>12 productos publicados</p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Productos</h2>
      </div>

      <div className="bg-white rounded-md overflow-hidden" style={{ border: "1px solid #e3e8ee" }}>
        {[
          { nombre: "Plan Pro Mensual", precio: "$29.00", suscripciones: 142, mensual: "$4,118.00" },
          { nombre: "Plan Team Anual", precio: "$290.00", suscripciones: 38, mensual: "$11,020.00" },
          { nombre: "Add-on Storage 100GB", precio: "$9.00", suscripciones: 84, mensual: "$756.00" },
          { nombre: "Setup fee one-time", precio: "$249.00", suscripciones: 12, mensual: "$2,988.00" },
          { nombre: "Plan Starter Mensual", precio: "$9.00", suscripciones: 311, mensual: "$2,799.00" },
        ].map((p, i) => (
          <motion.div
            key={p.nombre}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ backgroundColor: "#fafbfc" }}
            className="grid grid-cols-12 px-5 py-4 items-center"
            style={{ borderBottom: i < 4 ? "1px solid #f0f1f3" : "none" }}
          >
            <div className="col-span-12 sm:col-span-5 mb-2 sm:mb-0">
              <p className="font-semibold">{p.nombre}</p>
              <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>price_1{Math.random().toString(36).slice(2, 8).toUpperCase()}</p>
            </div>
            <div className="col-span-4 sm:col-span-2 text-sm font-semibold tabular-nums">{p.precio}</div>
            <div className="col-span-4 sm:col-span-2 text-sm" style={{ color: "#6b7280" }}>{p.suscripciones} subs</div>
            <div className="col-span-4 sm:col-span-3 text-sm font-semibold tabular-nums text-right" style={{ color: "#635bff" }}>{p.mensual}/mes</div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const ReportesView = (
    <div>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#6b7280" }}>Crecimiento · este mes</p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Reportes</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {[
          { label: "MRR", val: "$21,693", delta: "+14.2%" },
          { label: "Churn", val: "2.4%", delta: "-0.6%" },
          { label: "ARPU", val: "$48.20", delta: "+3.1%" },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white rounded-md p-5"
            style={{ border: "1px solid #e3e8ee" }}
          >
            <p className="text-xs mb-2" style={{ color: "#6b7280" }}>{m.label}</p>
            <p className="text-3xl font-semibold tracking-tight mb-2">{m.val}</p>
            <span className="text-[11px] px-1.5 py-0.5 rounded font-medium" style={{ backgroundColor: "#d1fae5", color: "#065f46" }}>{m.delta}</span>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-md p-5" style={{ border: "1px solid #e3e8ee" }}>
        <p className="font-semibold text-sm mb-4">Breakdown por plan</p>
        <div className="space-y-3">
          {[
            { plan: "Plan Pro Mensual", val: "$4,118", pct: 88 },
            { plan: "Plan Team Anual", val: "$11,020", pct: 100 },
            { plan: "Plan Starter", val: "$2,799", pct: 60 },
            { plan: "Add-ons", val: "$3,756", pct: 78 },
          ].map((c, i) => (
            <div key={c.plan}>
              <div className="flex items-center justify-between text-sm mb-1.5">
                <span className="font-medium">{c.plan}</span>
                <span className="tabular-nums" style={{ color: "#6b7280" }}>{c.val}</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#f0f1f3" }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${c.pct}%` }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: "#635bff" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    inicio: InicioView,
    pagos: PagosView,
    clientes: ClientesView,
    productos: ProductosView,
    reportes: ReportesView,
  };

  /* ============== TAB 2 — WORKSPACE ============== */
  const workspace = (
    <div style={{ border: "1px solid #e3e8ee", borderRadius: "8px", minHeight: "640px", backgroundColor: "#ffffff", overflow: "hidden" }}>
      <InternalNav
        variant="tech-sidebar"
        items={[
          { id: "inicio", label: "Inicio", icon: "◇" },
          { id: "pagos", label: "Pagos", icon: "↗", badge: 12 },
          { id: "clientes", label: "Clientes", icon: "◆" },
          { id: "productos", label: "Productos", icon: "≡" },
          { id: "reportes", label: "Reportes", icon: "ƒ" },
        ]}
        active={activeView}
        onChange={setActiveView}
        accent="#635bff"
        bgContainer="#fafbfc"
        bgActive="#eef0fb"
        textActive="#0a0a0a"
        textInactive="#52545a"
        borderColor="#e3e8ee"
        workspaceLabel="store_acme"
        workspaceInitial="S"
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#f7f7f7", color: "#0a0a0a", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e3e8ee" navColor="#6b7280" />

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <StyleTabs
          variant="tech-pill"
          accent="#635bff"
          textActive="#ffffff"
          textInactive="#52545a"
          bgContainer="#ffffff"
          borderColor="#e3e8ee"
          tabsClassName="mb-8"
          tabs={[
            { id: "landing", label: "Marketing", content: landing },
            { id: "workspace", label: "Workspace", content: workspace },
          ]}
        />

        <DividerReveal
          variant="tech-line-draw"
          lineColor="#e3e8ee"
          textColor="#635bff"
          className="mt-16 mb-10"
          textClassName="text-xs uppercase tracking-[0.2em] font-semibold"
        >
          Engineered for trust
        </DividerReveal>

        <StyleFooter estilo={e} textColor="#6b7280" borderColor="#e3e8ee" />
      </main>
    </div>
  );
}
