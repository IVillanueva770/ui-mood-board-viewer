"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

const ELEVATION = "0 1px 2px rgba(15,23,42,0.04), 0 8px 32px rgba(83,58,253,0.06)";

export default function StripeRealPage() {
  const e = getEstilo("stripe-real")!;
  const [activeView, setActiveView] = useState("home");

  /* ============== TAB 1 — MARKETING ============== */
  const landing = (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative max-w-5xl mx-auto px-5 sm:px-8 pt-12 pb-20 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 -top-20 h-80 -z-10 opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle at 20% 50%, #533afd, transparent 50%), radial-gradient(circle at 80% 30%, #00d4ff, transparent 50%)" }}
      />
      <p className="text-xs uppercase tracking-[0.2em] mb-5 font-semibold" style={{ color: "#533afd" }}>
        Pagos · Plataforma global
      </p>
      <h1 className="text-5xl sm:text-7xl font-semibold tracking-[-0.025em] leading-[0.95] mb-6 max-w-3xl" style={{ color: "#061b31" }}>
        Financial infrastructure<br />
        <span style={{ color: "#533afd" }}>for the internet.</span>
      </h1>
      <p className="text-base sm:text-lg leading-relaxed max-w-xl mb-9" style={{ color: "#425466" }}>
        Millones de empresas usan esta capa para aceptar pagos, mover dinero y construir productos financieros. APIs simples, infra que escala.
      </p>

      <div className="flex items-center gap-3 flex-wrap mb-16">
        <motion.button
          whileHover={{ y: -2, boxShadow: "0 12px 28px -6px rgba(83,58,253,0.5)" }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.18 }}
          className="px-6 py-3 text-sm font-semibold rounded-md text-white"
          style={{ backgroundColor: "#533afd", boxShadow: "0 4px 12px rgba(83,58,253,0.3)" }}
        >
          Empezar ahora →
        </motion.button>
        <motion.button
          whileHover={{ borderColor: "#533afd", color: "#533afd" }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.18 }}
          className="px-6 py-3 text-sm font-semibold rounded-md"
          style={{ border: "1px solid #cfd7df", color: "#061b31" }}
        >
          Hablar con ventas
        </motion.button>
      </div>

      <p className="text-[11px] uppercase tracking-[0.25em] font-semibold mb-5" style={{ color: "#697386" }}>
        Empresas que confían
      </p>
      <div className="flex items-center gap-8 sm:gap-14 flex-wrap mb-16 opacity-60">
        {["Shopify", "Amazon", "Google", "Lyft", "Salesforce", "Slack"].map((b) => (
          <span key={b} className="text-base font-semibold tracking-tight" style={{ color: "#425466" }}>{b}</span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { tit: "Payments", desc: "Aceptá pagos online y presenciales en 135+ monedas." },
          { tit: "Connect", desc: "Marketplaces y plataformas con cuentas conectadas." },
          { tit: "Radar", desc: "Machine learning para frenar fraude antes de que cobre." },
        ].map((f, i) => (
          <motion.div
            key={f.tit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            whileHover={{ y: -4 }}
            className="p-5 rounded-lg bg-white"
            style={{ border: "1px solid #e6ebf1", boxShadow: ELEVATION }}
          >
            <div className="w-9 h-9 rounded-md mb-4 flex items-center justify-center text-white text-base" style={{ backgroundColor: "#533afd" }}>◆</div>
            <h4 className="font-semibold mb-1.5" style={{ color: "#061b31" }}>{f.tit}</h4>
            <p className="text-sm leading-relaxed" style={{ color: "#425466" }}>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );

  /* ============== SUB-VISTAS CONSOLE ============== */

  const HomeView = (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] mb-1 font-semibold" style={{ color: "#697386" }}>Overview · this month</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "#061b31" }}>Home</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Volumen mes", val: "$248,920", sub: "+18% MoM" },
          { label: "Tasa éxito", val: "99.4%", sub: "+0.2 pp" },
          { label: "Disputas", val: "3", sub: "0.04% rate" },
          { label: "Saldo disponible", val: "$48,219", sub: "USD" },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white rounded-lg p-4"
            style={{ border: "1px solid #e6ebf1", boxShadow: ELEVATION }}
          >
            <p className="text-[11px] uppercase tracking-[0.15em] mb-2 font-semibold" style={{ color: "#697386" }}>{m.label}</p>
            <p className="text-xl font-semibold tracking-tight mb-1" style={{ color: "#061b31" }}>{m.val}</p>
            <p className="text-xs" style={{ color: "#533afd" }}>{m.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-lg p-5 mb-6" style={{ border: "1px solid #e6ebf1", boxShadow: ELEVATION }}>
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1 font-semibold" style={{ color: "#697386" }}>Net volume</p>
            <p className="text-xl font-semibold tracking-tight" style={{ color: "#061b31" }}>$248,920.42</p>
          </div>
          <span className="text-xs font-mono" style={{ color: "#697386" }}>last 30d</span>
        </div>
        <svg viewBox="0 0 340 100" className="w-full h-28">
          <defs>
            <linearGradient id="grad-real" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#533afd" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#533afd" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[20, 50, 80].map((y) => (
            <line key={y} x1="0" y1={y} x2="340" y2={y} stroke="#f0f1f3" strokeWidth="1" />
          ))}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 0.3 }}
            d="M0,82 L20,76 L40,72 L60,68 L80,58 L100,62 L120,52 L140,48 L160,42 L180,38 L200,32 L220,28 L240,32 L260,22 L280,18 L300,14 L320,10 L340,8"
            fill="none"
            stroke="#533afd"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            d="M0,82 L20,76 L40,72 L60,68 L80,58 L100,62 L120,52 L140,48 L160,42 L180,38 L200,32 L220,28 L240,32 L260,22 L280,18 L300,14 L320,10 L340,8 L340,100 L0,100 Z"
            fill="url(#grad-real)"
          />
        </svg>
      </div>

      <div className="bg-white rounded-lg" style={{ border: "1px solid #e6ebf1", boxShadow: ELEVATION }}>
        <div className="px-5 py-3 flex items-center justify-between" style={{ borderBottom: "1px solid #e6ebf1" }}>
          <p className="font-semibold text-sm" style={{ color: "#061b31" }}>Latest payments</p>
          <span className="text-[11px] uppercase tracking-[0.15em] font-semibold" style={{ color: "#697386" }}>3 last</span>
        </div>
        {[
          { id: "pi_3O8a2dF7gK4xLp", monto: "$1,250.00", currency: "USD", email: "g@alanis.com", status: "Succeeded", color: "#10b981" },
          { id: "pi_2N7b1cE6hL3wMq", monto: "€340.50", currency: "EUR", email: "fv@studio.fr", status: "Succeeded", color: "#10b981" },
          { id: "pi_4P9d3eG8iM5yNr", monto: "$890.00", currency: "USD", email: "ops@buenboy.co", status: "Pending", color: "#f59e0b" },
        ].map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="px-5 py-3 flex items-center justify-between text-sm"
            style={{ borderBottom: i < 2 ? "1px solid #f4f6f9" : "none", fontFamily: "var(--font-inter)" }}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
              <div className="min-w-0">
                <p className="text-[11px] truncate" style={{ fontFamily: "var(--font-roboto-mono)", color: "#3c4257" }}>{p.id}</p>
                <p className="text-xs truncate mt-0.5" style={{ color: "#697386" }}>{p.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs" style={{ color: "#697386" }}>{p.status}</span>
              <span className="font-semibold tabular-nums" style={{ color: "#061b31" }}>{p.monto}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const PaymentsView = (
    <div>
      <div className="mb-6">
        <p className="text-[11px] uppercase tracking-[0.18em] mb-1 font-semibold" style={{ color: "#697386" }}>1,284 succeeded · last 7 days</p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "#061b31" }}>Payments</h2>
      </div>

      <div className="bg-white rounded-lg overflow-hidden" style={{ border: "1px solid #e6ebf1", boxShadow: ELEVATION }}>
        <div className="grid grid-cols-12 px-5 py-2.5 text-[10px] uppercase tracking-[0.15em] font-semibold" style={{ borderBottom: "1px solid #e6ebf1", color: "#697386", backgroundColor: "#f6f9fc" }}>
          <div className="col-span-3">Amount</div>
          <div className="col-span-3">Customer</div>
          <div className="col-span-3">Method</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-1 text-right">Status</div>
        </div>
        {[
          { monto: "$1,250.00", cur: "USD", email: "g@alanis.com", id: "pi_3O8a2dF7gK", metodo: "•• 4242 visa", fecha: "May 8 12:04", status: "Succeeded", color: "#10b981" },
          { monto: "€340.50", cur: "EUR", email: "fv@studio.fr", id: "pi_2N7b1cE6hL", metodo: "•• 8810 mc", fecha: "May 8 11:48", status: "Succeeded", color: "#10b981" },
          { monto: "$890.00", cur: "USD", email: "ops@buenboy.co", id: "pi_4P9d3eG8iM", metodo: "•• 3001 amex", fecha: "May 8 11:12", status: "Pending", color: "#f59e0b" },
          { monto: "$520.00", cur: "USD", email: "n.galland@ki.ne", id: "pi_5Q1e4fH9jN", metodo: "•• 0099 visa", fecha: "May 8 10:55", status: "Succeeded", color: "#10b981" },
          { monto: "$2,100.00", cur: "USD", email: "pagos@sc.gov.ar", id: "pi_6R2f5gI0kO", metodo: "•• 7711 visa", fecha: "May 8 10:31", status: "Failed", color: "#ef4444" },
          { monto: "$1,840.00", cur: "USD", email: "hola@lobo.dev", id: "pi_7S3g6hJ1lP", metodo: "•• 4498 mc", fecha: "May 8 09:58", status: "Succeeded", color: "#10b981" },
          { monto: "£120.00", cur: "GBP", email: "mf@studio.uk", id: "pi_8T4h7iK2mQ", metodo: "•• 1108 visa", fecha: "May 8 09:14", status: "Succeeded", color: "#10b981" },
        ].map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ backgroundColor: "#f6f9fc" }}
            className="grid grid-cols-12 px-5 py-3 text-sm items-center"
            style={{ borderBottom: i < 6 ? "1px solid #f4f6f9" : "none" }}
          >
            <div className="col-span-3 min-w-0">
              <p className="font-semibold tabular-nums truncate" style={{ color: "#061b31" }}>{p.monto}</p>
              <p className="text-[11px] truncate" style={{ fontFamily: "var(--font-roboto-mono)", color: "#697386" }}>{p.id}</p>
            </div>
            <div className="col-span-3 text-xs truncate" style={{ color: "#3c4257" }}>{p.email}</div>
            <div className="col-span-3 text-xs truncate" style={{ color: "#697386", fontFamily: "var(--font-roboto-mono)" }}>{p.metodo}</div>
            <div className="col-span-2 text-xs" style={{ color: "#697386" }}>{p.fecha}</div>
            <div className="col-span-1 flex items-center justify-end gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.color }} />
              <span className="text-[11px] font-medium hidden sm:inline" style={{ color: "#3c4257" }}>{p.status.slice(0, 4)}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const CustomersView = (
    <div>
      <div className="mb-6">
        <p className="text-[11px] uppercase tracking-[0.18em] mb-1 font-semibold" style={{ color: "#697386" }}>3,420 customers · 18 active today</p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "#061b31" }}>Customers</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { name: "Guadalupe Alanís", iniciales: "GA", email: "g@alanis.com", ltv: "$8,420.00", ultimo: "12 min ago", country: "AR" },
          { name: "Buen Boy SRL", iniciales: "BB", email: "ops@buenboy.co", ltv: "$5,210.00", ultimo: "1 day ago", country: "MX" },
          { name: "F. Vergara Studio", iniciales: "FV", email: "fv@studio.fr", ltv: "$3,150.00", ultimo: "1 h ago", country: "FR" },
          { name: "N. Galland", iniciales: "NG", email: "n.galland@ki.ne", ltv: "$1,890.00", ultimo: "3 h ago", country: "AR" },
        ].map((c, i) => (
          <motion.div
            key={c.email}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -3, boxShadow: "0 12px 28px -8px rgba(83,58,253,0.18)" }}
            className="bg-white rounded-lg p-5 cursor-pointer"
            style={{ border: "1px solid #e6ebf1", boxShadow: ELEVATION }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold" style={{ backgroundColor: "#533afd" }}>
                {c.iniciales}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate" style={{ color: "#061b31" }}>{c.name}</p>
                <p className="text-xs truncate" style={{ color: "#697386", fontFamily: "var(--font-roboto-mono)" }}>{c.email}</p>
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-semibold" style={{ backgroundColor: "#eef0fb", color: "#533afd" }}>{c.country}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-0.5 font-semibold" style={{ color: "#697386" }}>Lifetime</p>
                <p className="font-semibold tabular-nums" style={{ color: "#061b31" }}>{c.ltv}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-0.5 font-semibold" style={{ color: "#697386" }}>Last seen</p>
                <p className="text-xs" style={{ color: "#3c4257" }}>{c.ultimo}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const ConnectView = (
    <div>
      <div className="mb-6">
        <p className="text-[11px] uppercase tracking-[0.18em] mb-1 font-semibold" style={{ color: "#697386" }}>14 connected accounts</p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "#061b31" }}>Connect</h2>
      </div>

      <div className="bg-white rounded-lg overflow-hidden" style={{ border: "1px solid #e6ebf1", boxShadow: ELEVATION }}>
        {[
          { id: "acct_1Mn8aDFGhJ", name: "Estudio Lobo", country: "AR", balance: "$8,420.00", status: "Active", color: "#10b981" },
          { id: "acct_2Pl7bEHKnM", name: "Wave Coffee", country: "BR", balance: "R$3,150.00", status: "Active", color: "#10b981" },
          { id: "acct_3Qm6cFIJoN", name: "Little Books", country: "MX", balance: "MX$12,800", status: "Restricted", color: "#f59e0b" },
          { id: "acct_4Rn5dGJKpO", name: "Sur Atelier", country: "CL", balance: "$1,890.00", status: "Active", color: "#10b981" },
          { id: "acct_5So4eHKLqP", name: "Pampa Goods", country: "UY", balance: "$0.00", status: "Pending", color: "#697386" },
        ].map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ backgroundColor: "#f6f9fc" }}
            className="grid grid-cols-12 px-5 py-4 items-center"
            style={{ borderBottom: i < 4 ? "1px solid #f4f6f9" : "none" }}
          >
            <div className="col-span-12 sm:col-span-5 mb-2 sm:mb-0">
              <p className="font-semibold" style={{ color: "#061b31" }}>{a.name}</p>
              <p className="text-[11px]" style={{ fontFamily: "var(--font-roboto-mono)", color: "#697386" }}>{a.id}</p>
            </div>
            <div className="col-span-3 sm:col-span-2">
              <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-semibold" style={{ backgroundColor: "#f6f9fc", color: "#3c4257", border: "1px solid #e6ebf1" }}>{a.country}</span>
            </div>
            <div className="col-span-5 sm:col-span-3 text-sm font-semibold tabular-nums" style={{ color: "#061b31" }}>{a.balance}</div>
            <div className="col-span-4 sm:col-span-2 flex items-center justify-end gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: a.color }} />
              <span className="text-xs" style={{ color: "#3c4257" }}>{a.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const RadarView = (
    <div>
      <div className="mb-6">
        <p className="text-[11px] uppercase tracking-[0.18em] mb-1 font-semibold" style={{ color: "#697386" }}>Fraud detection · last 24h</p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "#061b31" }}>Radar</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {[
          { tit: "Block 3DS bypass", desc: "if :card_funding: == 'prepaid'", count: 12, on: true },
          { tit: "Velocity check", desc: "> 5 charges per email / 1h", count: 4, on: true },
          { tit: "Geo mismatch", desc: ":ip_country: != :card_country:", count: 7, on: true },
          { tit: "High-risk mcc", desc: "block 6051, 7995", count: 0, on: false },
        ].map((r, i) => (
          <motion.div
            key={r.tit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white rounded-lg p-4"
            style={{ border: "1px solid #e6ebf1", boxShadow: ELEVATION }}
          >
            <div className="flex items-start justify-between mb-2">
              <p className="font-semibold text-sm" style={{ color: "#061b31" }}>{r.tit}</p>
              <span
                className="text-[10px] uppercase tracking-[0.15em] px-1.5 py-0.5 rounded font-semibold"
                style={{ backgroundColor: r.on ? "#d1fae5" : "#f6f9fc", color: r.on ? "#065f46" : "#697386" }}
              >
                {r.on ? "ON" : "OFF"}
              </span>
            </div>
            <p className="text-[11px] mb-3" style={{ fontFamily: "var(--font-roboto-mono)", color: "#697386" }}>{r.desc}</p>
            <p className="text-xs" style={{ color: "#533afd" }}>{r.count} blocked today</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-lg" style={{ border: "1px solid #e6ebf1", boxShadow: ELEVATION }}>
        <div className="px-5 py-3" style={{ borderBottom: "1px solid #e6ebf1" }}>
          <p className="font-semibold text-sm" style={{ color: "#061b31" }}>Eventos sospechosos bloqueados</p>
        </div>
        {[
          { hora: "12:04", motivo: "Velocity check", email: "spam01@temp.io", risk: "92" },
          { hora: "11:48", motivo: "Geo mismatch", email: "user@badmail.ru", risk: "88" },
          { hora: "11:21", motivo: "3DS bypass", email: "test@temp-mail.org", risk: "95" },
          { hora: "10:45", motivo: "Velocity check", email: "spam01@temp.io", risk: "92" },
        ].map((ev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="px-5 py-3 flex items-center justify-between text-sm"
            style={{ borderBottom: i < 3 ? "1px solid #f4f6f9" : "none" }}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono" style={{ color: "#697386" }}>{ev.hora}</span>
              <span className="font-medium" style={{ color: "#061b31" }}>{ev.motivo}</span>
              <span className="text-xs" style={{ color: "#697386", fontFamily: "var(--font-roboto-mono)" }}>{ev.email}</span>
            </div>
            <span className="text-xs px-2 py-0.5 rounded font-semibold" style={{ backgroundColor: "#fee2e2", color: "#991b1b" }}>risk {ev.risk}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    home: HomeView,
    payments: PaymentsView,
    customers: CustomersView,
    connect: ConnectView,
    radar: RadarView,
  };

  /* ============== TAB 2 — CONSOLE ============== */
  const workspace = (
    <div style={{ border: "1px solid #e6ebf1", borderRadius: "10px", minHeight: "660px", backgroundColor: "#ffffff", overflow: "hidden", boxShadow: ELEVATION }}>
      <InternalNav
        variant="tech-sidebar"
        items={[
          { id: "home", label: "Home", icon: "◇" },
          { id: "payments", label: "Payments", icon: "↗", badge: 7 },
          { id: "customers", label: "Customers", icon: "◆" },
          { id: "connect", label: "Connect", icon: "≡" },
          { id: "radar", label: "Radar", icon: "ƒ", badge: 4 },
        ]}
        active={activeView}
        onChange={setActiveView}
        accent="#533afd"
        bgContainer="#f6f9fc"
        bgActive="#eef0fb"
        textActive="#061b31"
        textInactive="#425466"
        borderColor="#e6ebf1"
        workspaceLabel="stripe.acme.io"
        workspaceInitial="S"
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#ffffff", color: "#061b31", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e6ebf1" navColor="#425466" />

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <StyleTabs
          variant="tech-pill"
          accent="#533afd"
          textActive="#ffffff"
          textInactive="#425466"
          bgContainer="#ffffff"
          borderColor="#e6ebf1"
          tabsClassName="mb-10"
          tabs={[
            { id: "landing", label: "Marketing", content: landing },
            { id: "workspace", label: "Console", content: workspace },
          ]}
        />

        <DividerReveal
          variant="tech-line-draw"
          lineColor="#e6ebf1"
          textColor="#533afd"
          className="mt-16 mb-10"
          textClassName="text-xs uppercase tracking-[0.25em] font-semibold"
        >
          Built on infrastructure
        </DividerReveal>

        <StyleFooter estilo={e} textColor="#425466" borderColor="#e6ebf1" monoFont="var(--font-roboto-mono)" />
      </main>
    </div>
  );
}
