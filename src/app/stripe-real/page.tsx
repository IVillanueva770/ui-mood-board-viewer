"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";

export default function StripeRealPage() {
  const e = getEstilo("stripe-real")!;
  const [hoveredCh, setHoveredCh] = useState<string | null>(null);
  return (
    <div style={{ backgroundColor: "#ffffff", color: "#061b31", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e3e8ee" navColor="#425466" />

      <main className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        {/* Hero with subtle gradient */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 relative"
        >
          <div
            aria-hidden
            className="absolute inset-x-0 -top-20 h-80 -z-10 opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle at 20% 50%, #533afd, transparent 50%), radial-gradient(circle at 80% 30%, #00d4ff, transparent 50%)" }}
          />
          <p className="text-xs uppercase tracking-[0.2em] mb-5 font-semibold" style={{ color: "#533afd" }}>
            Pagos · Plataforma global
          </p>
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-[-0.02em] leading-[1.05] mb-7 max-w-4xl" style={{ color: "#061b31" }}>
            Infraestructura financiera <br />
            <span style={{ color: "#533afd" }}>para internet.</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mb-10" style={{ color: "#425466" }}>
            Millones de empresas de todos los tamaños usan Stripe online y en persona para aceptar pagos, enviar dinero y gestionar negocios en línea.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <motion.button
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              animate="rest"
              variants={{
                rest: {
                  y: 0,
                  boxShadow:
                    "0 1px 2px rgba(6,27,49,0.04), 0 2px 4px rgba(83,58,253,0.12)",
                },
                hover: {
                  y: -2,
                  boxShadow:
                    "0 4px 8px rgba(6,27,49,0.04), 0 8px 16px rgba(83,58,253,0.18), 0 16px 32px -8px rgba(83,58,253,0.32)",
                },
              }}
              transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="relative px-6 py-3 text-sm font-semibold rounded overflow-hidden"
              style={{ backgroundColor: "#533afd", color: "#fff" }}
            >
              <motion.span
                aria-hidden
                variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, #6c4dff 0%, #533afd 50%, #4023d4 100%)",
                }}
              />
              <span className="relative">Empezar ahora</span>
            </motion.button>
            <motion.button
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative px-3 py-3 text-sm font-semibold flex items-center gap-1"
              style={{ color: "#533afd" }}
            >
              <span>Contactar ventas</span>
              <motion.span
                variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
              >
                →
              </motion.span>
              <motion.span
                aria-hidden
                variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                className="absolute left-3 right-7 bottom-2 h-px pointer-events-none"
                style={{ backgroundColor: "#533afd", transformOrigin: "left center" }}
              />
            </motion.button>
          </div>
        </motion.section>

        {/* Stats grid */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 mb-20"
          style={{ borderTop: "1px solid #e3e8ee", borderBottom: "1px solid #e3e8ee" }}
        >
          {[
            { val: "$1T+", label: "Procesados anualmente" },
            { val: "135+", label: "Países y territorios" },
            { val: "47%", label: "Fortune 100 usan Stripe" },
            { val: "99.999%", label: "API uptime histórico" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight mb-1" style={{ color: "#061b31" }}>{s.val}</div>
              <div className="text-sm" style={{ color: "#425466" }}>{s.label}</div>
            </div>
          ))}
        </motion.section>

        {/* Products grid */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-2" style={{ color: "#533afd" }}>Productos</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12" style={{ color: "#061b31" }}>
            Todo lo que tu negocio necesita.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { titulo: "Payments", desc: "Acepta pagos online, en persona, y cross-border en 135+ monedas." },
              { titulo: "Billing", desc: "Suscripciones, facturación recurrente, y revenue automation." },
              { titulo: "Connect", desc: "Pagos para marketplaces y plataformas multilaterales." },
            ].map((f, i) => (
              <motion.div
                key={f.titulo}
                initial="enter"
                animate="rest"
                whileHover="hover"
                variants={{
                  enter: { opacity: 0, y: 16 },
                  rest: {
                    opacity: 1,
                    y: 0,
                    boxShadow:
                      "0 1px 2px rgba(6,27,49,0.03), 0 2px 4px rgba(6,27,49,0.04)",
                    borderColor: "#e3e8ee",
                  },
                  hover: {
                    y: -6,
                    boxShadow:
                      "0 4px 8px rgba(6,27,49,0.04), 0 12px 24px rgba(6,27,49,0.06), 0 24px 48px -12px rgba(83,58,253,0.18)",
                    borderColor: "#d6d6ff",
                  },
                }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                className="relative p-6 rounded-md bg-white cursor-pointer overflow-hidden"
                style={{ border: "1px solid #e3e8ee" }}
              >
                {/* Sutil gradient accent que aparece arriba del card al hover */}
                <motion.div
                  aria-hidden
                  variants={{
                    enter: { scaleX: 0 },
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-x-0 top-0 h-0.5 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, #533afd, #00d4ff)",
                    transformOrigin: "left center",
                  }}
                />
                <motion.div
                  variants={{
                    enter: { rotate: 0, scale: 1 },
                    rest: { rotate: 0, scale: 1 },
                    hover: { rotate: 6, scale: 1.05 },
                  }}
                  transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                  className="w-12 h-12 rounded-md mb-5 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #533afd, #00d4ff)" }}
                >
                  <span className="text-white text-xl">◆</span>
                </motion.div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#061b31" }}>{f.titulo}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#425466" }}>{f.desc}</p>
                <span className="relative text-sm font-semibold inline-flex items-center gap-1" style={{ color: "#533afd" }}>
                  <span>Conocer más</span>
                  <motion.span
                    variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                    transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
                  >
                    →
                  </motion.span>
                  <motion.span
                    aria-hidden
                    variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                    transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute left-0 right-5 -bottom-0.5 h-px pointer-events-none"
                    style={{ backgroundColor: "#533afd", transformOrigin: "left center" }}
                  />
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Divider firma — tech line draw stripe */}
        <DividerReveal
          variant="tech-line-draw"
          lineColor="#e3e8ee"
          textColor="#533afd"
          className="mb-12"
          textClassName="text-xs uppercase tracking-[0.2em] font-semibold"
        >
          Dashboard del producto
        </DividerReveal>

        {/* ====== VISTA OPERATIVA — workspace de un comerciante en Stripe ====== */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-2" style={{ color: "#533afd" }}>Workspace</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3" style={{ color: "#061b31" }}>
              Lo que ves cuando entrás a operar.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#425466" }}>
              El balance disponible, los próximos pagos a la cuenta, y la actividad de las últimas 24 horas. Sin gráficos de feria, sin métricas de vanidad.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden bg-white" style={{ border: "1px solid #e3e8ee", boxShadow: "0 1px 3px rgba(6,27,49,0.04), 0 12px 32px rgba(83,58,253,0.06)" }}>
            <div className="px-5 py-3 flex items-center gap-3 text-sm" style={{ borderBottom: "1px solid #e3e8ee", backgroundColor: "#fafbff" }}>
              <div className="w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg, #533afd, #00d4ff)" }}>S</div>
              <span className="font-semibold">Acme Co · Live mode</span>
              <span className="ml-auto text-xs px-2 py-0.5 rounded font-medium" style={{ backgroundColor: "#d1fae5", color: "#065f46" }}>● activo</span>
            </div>

            <div className="grid grid-cols-12">
              <aside className="col-span-3 hidden md:block py-5 text-sm" style={{ borderRight: "1px solid #e3e8ee" }}>
                {[
                  { l: "Inicio", active: true },
                  { l: "Pagos" },
                  { l: "Suscripciones" },
                  { l: "Facturas" },
                  { l: "Clientes" },
                  { l: "Productos" },
                  { l: "Reportes" },
                  { l: "Connect" },
                  { l: "Developers" },
                ].map((it) => (
                  <motion.button
                    key={it.l}
                    whileHover={{ x: 2, backgroundColor: it.active ? "#f5f3ff" : "#f8fafc" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.12 }}
                    className="w-full text-left px-5 py-1.5"
                    style={{
                      backgroundColor: it.active ? "#f5f3ff" : "transparent",
                      color: it.active ? "#533afd" : "#425466",
                      fontWeight: it.active ? 600 : 400,
                      borderLeft: it.active ? "2px solid #533afd" : "2px solid transparent",
                    }}
                  >
                    {it.l}
                  </motion.button>
                ))}
              </aside>

              <div className="col-span-12 md:col-span-9 p-6">
                {/* Balance principal */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {[
                    { l: "Saldo disponible", v: "$ 18.420,50", sub: "USD · transferible" },
                    { l: "En tránsito", v: "$ 3.120,00", sub: "Llega 12 may" },
                    { l: "Próximo payout", v: "$ 14.200,00", sub: "10 may · BBVA ····2487" },
                  ].map((s, i) => (
                    <div key={s.l} className="rounded-md p-4" style={{ border: "1px solid #e3e8ee", backgroundColor: i === 0 ? "#f5f3ff" : "#ffffff" }}>
                      <p className="text-xs mb-1" style={{ color: "#425466" }}>{s.l}</p>
                      <p className="text-2xl font-semibold tracking-tight tabular-nums" style={{ color: i === 0 ? "#533afd" : "#061b31" }}>{s.v}</p>
                      <p className="text-[11px] mt-1" style={{ color: "#425466" }}>{s.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Pagos recientes */}
                <div className="rounded-md mb-5" style={{ border: "1px solid #e3e8ee" }}>
                  <div className="px-4 py-2.5 flex items-center justify-between text-sm" style={{ borderBottom: "1px solid #e3e8ee" }}>
                    <p className="font-semibold">Últimos pagos</p>
                    <motion.button
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.15 }}
                      className="text-xs hover:underline"
                      style={{ color: "#533afd" }}
                    >
                      Ver todos →
                    </motion.button>
                  </div>
                  <div
                    className="relative"
                    onMouseLeave={() => setHoveredCh(null)}
                  >
                    {[
                      { id: "ch_3OL...", cliente: "guadalupe@inmob.com", monto: "USD 1.250,00", estado: "Exitoso", color: "#d1fae5", colorFg: "#065f46", time: "12 min" },
                      { id: "ch_3OK...", cliente: "fatima@tienda.com", monto: "USD 340,50", estado: "Exitoso", color: "#d1fae5", colorFg: "#065f46", time: "1h" },
                      { id: "ch_3OJ...", cliente: "buenboy@gmail.com", monto: "USD 89,00", estado: "Pending", color: "#fef3c7", colorFg: "#92400e", time: "2h" },
                      { id: "ch_3OI...", cliente: "kine@galland.ar", monto: "USD 540,00", estado: "Disputado", color: "#fee2e2", colorFg: "#991b1b", time: "Ayer" },
                    ].map((p, i) => {
                      const active = hoveredCh === p.id;
                      return (
                      <div
                        key={p.id}
                        onMouseEnter={() => setHoveredCh(p.id)}
                        className="relative px-4 py-2.5 grid grid-cols-12 gap-2 items-center text-sm cursor-pointer"
                        style={{ borderTop: i > 0 ? "1px solid #f1f5f9" : "none" }}
                      >
                        {active && (
                          <motion.div
                            layoutId="ch-highlight"
                            transition={{ type: "spring", stiffness: 500, damping: 38 }}
                            className="absolute inset-0 pointer-events-none"
                            style={{ backgroundColor: "#f5f3ff" }}
                          />
                        )}
                        <span className="col-span-3 hidden md:block text-[11px] font-mono relative" style={{ color: "#425466" }}>{p.id}</span>
                        <span className="col-span-6 md:col-span-4 truncate relative">{p.cliente}</span>
                        <span className="col-span-3 md:col-span-2 text-[11px] px-2 py-0.5 rounded font-medium justify-self-start whitespace-nowrap relative" style={{ backgroundColor: p.color, color: p.colorFg }}>{p.estado}</span>
                        <span className="col-span-2 md:col-span-2 text-xs text-right relative" style={{ color: "#425466" }}>{p.time}</span>
                        <span className="col-span-1 md:col-span-1 text-right font-semibold tabular-nums relative">{p.monto.split(" ")[1]}</span>
                      </div>
                      );
                    })}
                  </div>
                </div>

                {/* Actions row */}
                <div className="flex items-center gap-2 flex-wrap text-sm">
                  <motion.button
                    whileHover={{ y: -1, boxShadow: "0 6px 16px -4px rgba(83,58,253,0.4)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="px-4 py-2 rounded text-white font-semibold"
                    style={{ backgroundColor: "#533afd", boxShadow: "0 1px 2px rgba(83,58,253,0.2)" }}
                  >
                    + Nueva factura
                  </motion.button>
                  <motion.button
                    whileHover={{ borderColor: "#533afd", color: "#533afd" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="px-4 py-2 rounded font-semibold"
                    style={{ border: "1px solid #e3e8ee", color: "#061b31" }}
                  >
                    Crear payment link
                  </motion.button>
                  <motion.button
                    whileHover={{ borderColor: "#533afd", color: "#533afd" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="px-4 py-2 rounded font-semibold"
                    style={{ border: "1px solid #e3e8ee", color: "#061b31" }}
                  >
                    Refund
                  </motion.button>
                  <span className="ml-auto text-xs" style={{ color: "#425466", fontFamily: "var(--font-geist-mono)" }}>API: 99.998% uptime · 30d</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <StyleFooter estilo={e} textColor="#425466" borderColor="#e3e8ee" />
      </main>
    </div>
  );
}
