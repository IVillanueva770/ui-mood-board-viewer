"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

const VERDE = "#16a34a";
const VERDE_SOFT = "#dcfce7";
const NARANJA = "#f97316";
const NARANJA_SOFT = "#fed7aa";
const TEXT = "#171717";
const MUTED = "#737373";
const BORDER = "#e5e5e5";
const SURFACE = "#fafafa";

type Estado = "pendiente" | "preparando" | "entregado" | "cancelado";

const estadoColor: Record<Estado, { bg: string; fg: string }> = {
  pendiente: { bg: "#fef3c7", fg: "#92400e" },
  preparando: { bg: NARANJA_SOFT, fg: "#9a3412" },
  entregado: { bg: VERDE_SOFT, fg: "#166534" },
  cancelado: { bg: "#fee2e2", fg: "#991b1b" },
};

// pendiente → preparando → entregado. cancelado es terminal.
const flujo: Partial<Record<Estado, Estado>> = {
  pendiente: "preparando",
  preparando: "entregado",
};

const pesos = (n: number) => "$" + n.toLocaleString("es-AR");

type Pedido = {
  id: string;
  cli: string;
  total: number;
  estado: Estado;
  hora: string;
  items: string;
};

const PEDIDOS_INICIALES: Pedido[] = [
  { id: "#10487", cli: "Juan Pérez", total: 8420, estado: "pendiente", hora: "14:32", items: "Pan casero ×2 · Mermelada ×1" },
  { id: "#10486", cli: "María Soledad Aguirre", total: 3150, estado: "preparando", hora: "13:58", items: "Empanadas docena ×1" },
  { id: "#10483", cli: "Comercio La Esquina", total: 24300, estado: "preparando", hora: "11:30", items: "Pan casero ×6 · Yerba ×4" },
  { id: "#10485", cli: "Ramiro Suárez", total: 12700, estado: "entregado", hora: "13:12", items: "Yerba premium ×3 · Café ×1" },
  { id: "#10484", cli: "Lucía Martínez", total: 2890, estado: "entregado", hora: "12:48", items: "Alfajores caja ×1" },
  { id: "#10482", cli: "Gabriel R.", total: 1450, estado: "cancelado", hora: "10:15", items: "Mermelada ×1" },
];

export default function OperativoCalidoPage() {
  const e = getEstilo("operativo-calido")!;
  const reduce = useReducedMotion();
  const [activeView, setActiveView] = useState("resumen");
  const [pedidos, setPedidos] = useState<Pedido[]>(PEDIDOS_INICIALES);
  const [filtroEstado, setFiltroEstado] = useState<"todos" | Estado>("todos");
  const [toast, setToast] = useState<{ id: number; msg: string } | null>(null);

  // Toast cálido y rápido: aparece, se va solo. Snappy, sin vueltas.
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(t);
  }, [toast?.id]);

  // Avanzar estado con un toque. React 19: leer del scope, no del updater.
  const avanzar = (id: string) => {
    const p = pedidos.find((x) => x.id === id);
    if (!p) return;
    const sig = flujo[p.estado];
    if (!sig) return;
    setPedidos((prev) => prev.map((x) => (x.id === id ? { ...x, estado: sig } : x)));
    setToast({
      id: Date.now(),
      msg: sig === "entregado" ? `Pedido ${id} entregado` : `Pedido ${id} pasó a ${sig}`,
    });
  };

  const pedidosHoy = pedidos.length;
  const entregasPendientes = pedidos.filter((p) => p.estado === "pendiente" || p.estado === "preparando").length;
  const aCobrar = pedidos
    .filter((p) => p.estado === "pendiente" || p.estado === "preparando")
    .reduce((acc, p) => acc + p.total, 0);
  const nuevosPendientes = pedidos.filter((p) => p.estado === "pendiente").length;

  /* ============== TAB 1 — LANDING ============== */
  const landing = (
    <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-5xl mx-auto px-2 sm:px-4 pt-8 pb-14">
      <div className="text-center mb-9">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5" style={{ backgroundColor: VERDE_SOFT, color: VERDE }}>
          <span>●</span>
          <span className="text-xs font-semibold">Para comerciantes y kioscos · sin tecnicismos</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-4 max-w-3xl mx-auto">Tu negocio, ordenado<br />en una sola pantalla.</h1>
        <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8" style={{ color: MUTED }}>Pedidos, productos, clientes y cobros: todo junto, sin abrir mil pestañas. Pensado para que entres y lo entiendas al toque.</p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <motion.button whileHover={{ y: -2, boxShadow: "0 10px 24px -8px rgba(22,163,74,0.4)" }} whileTap={{ scale: 0.97 }} className="px-6 py-3 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: VERDE }}>Entrar al panel</motion.button>
          <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="px-5 py-3 rounded-lg text-sm font-semibold" style={{ backgroundColor: "#ffffff", color: TEXT, border: `1px solid ${BORDER}` }}>Ver cómo se usa →</motion.button>
        </div>
      </div>

      {/* Preview del panel — captura mock de "qué te vas a encontrar adentro" */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        animate={reduce ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl overflow-hidden mb-12 mx-auto max-w-3xl"
        style={{ border: `1px solid ${BORDER}`, boxShadow: "0 24px 48px -24px rgba(0,0,0,0.16)" }}
      >
        <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ backgroundColor: SURFACE, borderBottom: `1px solid ${BORDER}` }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#fca5a5" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#fcd34d" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#86efac" }} />
          <span className="text-[11px] ml-3" style={{ color: MUTED }}>Tienda de Fátima — Resumen del día</span>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { v: "6", l: "Pedidos hoy", c: VERDE, bg: VERDE_SOFT },
              { v: "$35.870", l: "A cobrar", c: NARANJA, bg: NARANJA_SOFT },
              { v: "3", l: "Entregas pendientes", c: "#dc2626", bg: "#fee2e2" },
            ].map((k) => (
              <div key={k.l} className="rounded-xl p-3.5" style={{ backgroundColor: k.bg }}>
                <p className="text-xl sm:text-2xl font-semibold tracking-tight" style={{ color: k.c }}>{k.v}</p>
                <p className="text-[11px] mt-0.5" style={{ color: MUTED }}>{k.l}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
            {[
              { id: "#10487", cli: "Juan Pérez", total: "$8.420", est: "pendiente" as Estado },
              { id: "#10486", cli: "María Soledad", total: "$3.150", est: "preparando" as Estado },
              { id: "#10485", cli: "Ramiro Suárez", total: "$12.700", est: "entregado" as Estado },
            ].map((r, i, arr) => (
              <div key={r.id} className="flex items-center gap-3 px-4 py-2.5 text-sm" style={{ borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                <span className="font-mono text-xs font-semibold w-16">{r.id}</span>
                <span className="flex-1 truncate">{r.cli}</span>
                <span className="font-semibold">{r.total}</span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold capitalize" style={{ backgroundColor: estadoColor[r.est].bg, color: estadoColor[r.est].fg }}>{r.est}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {[
          { num: "01", titulo: "Mirá los pedidos del día", desc: "Quién compró, qué falta entregar y qué ya cerró. Cambiás el estado con un toque, sin perderte en menúes.", color: VERDE },
          { num: "02", titulo: "Cobrá y facturá fácil", desc: "Conectado con Mercado Pago. Ves lo que entró hoy, lo del mes y lo que todavía falta cobrar.", color: NARANJA },
          { num: "03", titulo: "Sin instalar nada", desc: "Entrás desde el celular o la compu y ya está. No hace falta ser técnico ni configurar servidores.", color: VERDE },
        ].map((c, i) => (
          <motion.div key={c.num} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }} whileHover={{ y: -3 }} className="bg-white rounded-xl p-5" style={{ border: `1px solid ${BORDER}` }}>
            <p className="text-xs font-mono font-semibold mb-2" style={{ color: c.color }}>{c.num}</p>
            <p className="font-semibold text-lg mb-1.5">{c.titulo}</p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{c.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-white rounded-xl p-6 flex items-center justify-between gap-4 flex-wrap mb-12" style={{ border: `1px solid ${BORDER}` }}>
        <div>
          <p className="font-semibold mb-1">Más de 8.400 negocios chicos en Argentina ya lo usan.</p>
          <p className="text-sm" style={{ color: MUTED }}>Almacenes, kioscos, ferreterías y panaderías. Soporte en castellano, gente real.</p>
        </div>
        <div className="flex items-center gap-3">
          {["F", "P", "M", "L"].map((l, i) => (
            <div key={l} className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border-2 border-white -ml-3 first:ml-0" style={{ backgroundColor: [VERDE_SOFT, NARANJA_SOFT, "#dbeafe", "#fce7f3"][i], color: TEXT }}>{l}</div>
          ))}
        </div>
      </motion.div>

      {/* Band CTA final — el cierre del pitch, sin jerga */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        animate={reduce ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl p-8 sm:p-12 text-center"
        style={{ background: "linear-gradient(135deg,#dcfce7 0%, #fef3c7 100%)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: VERDE }}>Pensado para vos</p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3 max-w-2xl mx-auto">Hecho para el comerciante,<br />no para el ingeniero.</h2>
        <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: TEXT }}>Si sabés usar WhatsApp, sabés usar esto. Sin manuales, sin curso, sin llamar a un técnico cada vez.</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <motion.button whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }} className="px-7 py-3.5 rounded-lg text-sm font-semibold text-white shadow-sm" style={{ backgroundColor: VERDE }}>Entrar al panel</motion.button>
          <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="px-7 py-3.5 rounded-lg text-sm font-semibold bg-white" style={{ border: `1px solid ${BORDER}`, color: TEXT }}>Hablar con alguien</motion.button>
        </div>
      </motion.div>
    </motion.section>
  );

  /* ============== SUB-VISTAS ============== */

  const ResumenView = (
    <div>
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: VERDE }}>Hoy · sábado 17 de mayo</p>
        <h2 className="text-2xl font-semibold tracking-tight mt-0.5">Resumen del día</h2>
      </div>

      {/* KPIs grandes, legibles de un golpe */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {[
          { v: String(pedidosHoy), l: "Pedidos hoy", color: VERDE, bg: VERDE_SOFT },
          { v: pesos(aCobrar), l: "A cobrar hoy", color: NARANJA, bg: NARANJA_SOFT },
          { v: String(entregasPendientes), l: "Entregas pendientes", color: "#dc2626", bg: "#fee2e2" },
        ].map((k, i) => (
          <motion.div key={k.l} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.06 }} className="rounded-xl p-5" style={{ backgroundColor: k.bg }}>
            <motion.p key={k.v} initial={reduce ? false : { scale: 0.92, opacity: 0.6 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 420, damping: 24 }} className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: k.color }}>{k.v}</motion.p>
            <p className="text-sm mt-1" style={{ color: MUTED }}>{k.l}</p>
          </motion.div>
        ))}
      </div>

      {nuevosPendientes > 0 && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="rounded-xl p-4 mb-5 flex items-center gap-3" style={{ backgroundColor: VERDE_SOFT, border: `1px solid #86efac` }}>
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0" style={{ backgroundColor: "#ffffff" }}>🛍️</div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold" style={{ color: "#166534" }}>{nuevosPendientes} {nuevosPendientes === 1 ? "pedido nuevo esperando" : "pedidos nuevos esperando"}</p>
            <p className="text-xs" style={{ color: "#15803d" }}>Tocá &quot;Avanzar&quot; cuando lo empieces a preparar.</p>
          </div>
        </motion.div>
      )}

      <p className="font-semibold mb-3">Pedidos de hoy</p>
      <div className="space-y-2">
        {pedidos.map((p, i) => {
          const c = estadoColor[p.estado];
          const sig = flujo[p.estado];
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="bg-white rounded-xl p-4 flex items-center gap-4"
              style={{ border: `1px solid ${BORDER}` }}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs font-semibold">{p.id}</span>
                  <span className="font-semibold truncate">{p.cli}</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold capitalize" style={{ backgroundColor: c.bg, color: c.fg }}>{p.estado}</span>
                </div>
                <p className="text-xs mt-1 truncate" style={{ color: MUTED }}>{p.items} · {p.hora}</p>
              </div>
              <p className="font-semibold shrink-0">{pesos(p.total)}</p>
              {sig ? (
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                  onClick={() => avanzar(p.id)}
                  className="text-xs font-semibold px-3.5 py-2 rounded-lg shrink-0 text-white"
                  style={{ backgroundColor: VERDE }}
                >
                  {sig === "preparando" ? "Empezar" : "Entregar"} →
                </motion.button>
              ) : (
                <span className="text-xs font-semibold px-3.5 py-2 shrink-0" style={{ color: MUTED }}>
                  {p.estado === "entregado" ? "Listo ✓" : "Cancelado"}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  const filtros: { id: "todos" | Estado; label: string }[] = [
    { id: "todos", label: "Todos" },
    { id: "pendiente", label: "Pendientes" },
    { id: "preparando", label: "Preparando" },
    { id: "entregado", label: "Entregados" },
  ];
  const pedidosFiltrados = filtroEstado === "todos" ? pedidos : pedidos.filter((p) => p.estado === filtroEstado);

  const PedidosView = (
    <div>
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">Pedidos</h2>
        <div className="flex items-center gap-2 text-xs flex-wrap">
          {filtros.map((f) => {
            const a = filtroEstado === f.id;
            return (
              <motion.button
                key={f.id}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.1 }}
                onClick={() => setFiltroEstado(f.id)}
                className="px-3 py-1.5 rounded-full font-semibold"
                style={{ backgroundColor: a ? VERDE_SOFT : "transparent", color: a ? VERDE : MUTED }}
              >
                {f.label}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
        <div className="grid grid-cols-12 gap-3 px-4 py-2.5 text-[11px] uppercase tracking-wider font-semibold" style={{ backgroundColor: SURFACE, color: MUTED, borderBottom: `1px solid ${BORDER}` }}>
          <div className="col-span-2">Pedido</div>
          <div className="col-span-3">Cliente</div>
          <div className="col-span-2">Total</div>
          <div className="col-span-2">Estado</div>
          <div className="col-span-3 text-right">Acción</div>
        </div>
        <AnimatePresence initial={false} mode="popLayout">
          {pedidosFiltrados.map((p, i, arr) => {
            const c = estadoColor[p.estado];
            const sig = flujo[p.estado];
            return (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 6 }}
                transition={{ duration: 0.2 }}
                whileHover={{ backgroundColor: SURFACE }}
                className="grid grid-cols-12 gap-3 px-4 py-3 items-center text-sm"
                style={{ borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : "none" }}
              >
                <div className="col-span-2 font-mono text-xs font-semibold">{p.id}</div>
                <div className="col-span-3 truncate">{p.cli}</div>
                <div className="col-span-2 font-semibold">{pesos(p.total)}</div>
                <div className="col-span-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold capitalize" style={{ backgroundColor: c.bg, color: c.fg }}>{p.estado}</span>
                </div>
                <div className="col-span-3 text-right">
                  {sig ? (
                    <motion.button
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.1 }}
                      onClick={() => avanzar(p.id)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white"
                      style={{ backgroundColor: VERDE }}
                    >
                      {sig === "preparando" ? "Empezar" : "Entregar"} →
                    </motion.button>
                  ) : (
                    <span className="text-xs" style={{ color: MUTED }}>{p.estado === "entregado" ? "Listo ✓" : "—"}</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        {pedidosFiltrados.length === 0 && (
          <div className="px-4 py-10 text-center text-sm" style={{ color: MUTED }}>No hay pedidos en este estado.</div>
        )}
      </div>
    </div>
  );

  const CatalogoView = (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: VERDE }}>42 productos · 38 publicados</p>
          <h2 className="text-2xl font-semibold tracking-tight mt-0.5">Catálogo</h2>
        </div>
        <motion.button whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }} className="px-4 py-2 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: VERDE }}>+ Agregar producto</motion.button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { nombre: "Pan casero × 1kg", precio: "$2.400", stock: 18, on: true, grad: "linear-gradient(135deg,#fed7aa,#fdba74)", emoji: "🍞" },
          { nombre: "Empanadas docena", precio: "$4.800", stock: 6, on: true, grad: "linear-gradient(135deg,#fef3c7,#fde68a)", emoji: "🥟" },
          { nombre: "Mermelada artesanal", precio: "$1.950", stock: 23, on: true, grad: "linear-gradient(135deg,#fce7f3,#fbcfe8)", emoji: "🍓" },
          { nombre: "Café molido 500g", precio: "$3.700", stock: 0, on: false, grad: "linear-gradient(135deg,#d6d3d1,#a8a29e)", emoji: "☕" },
          { nombre: "Yerba premium 1kg", precio: "$2.100", stock: 41, on: true, grad: "linear-gradient(135deg,#dcfce7,#bbf7d0)", emoji: "🌿" },
          { nombre: "Alfajores caja × 6", precio: "$3.200", stock: 12, on: true, grad: "linear-gradient(135deg,#fef3c7,#fcd34d)", emoji: "🍪" },
        ].map((p, i) => (
          <motion.div key={p.nombre} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.06 }} whileHover={{ y: -3 }} className="bg-white rounded-xl overflow-hidden cursor-pointer" style={{ border: `1px solid ${BORDER}` }}>
            <div className="aspect-[4/3] flex items-center justify-center text-4xl" style={{ background: p.grad }}>{p.emoji}</div>
            <div className="p-3">
              <p className="text-sm font-semibold truncate">{p.nombre}</p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-base font-semibold">{p.precio}</p>
                <p className="text-xs" style={{ color: p.stock < 5 ? "#dc2626" : MUTED }}>{p.stock === 0 ? "Sin stock" : `${p.stock} disp.`}</p>
              </div>
              <div className="mt-2 flex items-center justify-between rounded-lg p-1.5" style={{ backgroundColor: SURFACE }}>
                <span className="text-[11px] font-semibold" style={{ color: MUTED }}>{p.on ? "Publicado" : "Apagado"}</span>
                <div className="w-8 h-4 rounded-full relative transition-colors" style={{ backgroundColor: p.on ? VERDE : "#d4d4d4" }}>
                  <motion.div initial={false} animate={{ x: p.on ? 16 : 2 }} transition={{ type: "spring", stiffness: 500, damping: 28 }} className="absolute top-0.5 w-3 h-3 rounded-full bg-white shadow-sm" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const ClientesView = (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: NARANJA }}>172 clientes registrados</p>
          <h2 className="text-2xl font-semibold tracking-tight mt-0.5">Clientes</h2>
        </div>
        <motion.button whileHover={{ y: -1 }} className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ backgroundColor: "#ffffff", color: TEXT, border: `1px solid ${BORDER}` }}>Exportar CSV</motion.button>
      </div>

      <div className="bg-white rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
        <div className="grid grid-cols-12 gap-3 px-4 py-2.5 text-[11px] uppercase tracking-wider font-semibold" style={{ backgroundColor: SURFACE, color: MUTED, borderBottom: `1px solid ${BORDER}` }}>
          <div className="col-span-4">Nombre</div>
          <div className="col-span-2">WhatsApp</div>
          <div className="col-span-3">Último pedido</div>
          <div className="col-span-3 text-right">Total gastado</div>
        </div>
        {[
          { nombre: "María Soledad Aguirre", wpp: "11 5512-4480", ultimo: "Hoy 13:58", total: "$48.230", frec: true },
          { nombre: "Comercio La Esquina", wpp: "11 4467-9021", ultimo: "Hoy 11:30", total: "$184.700", frec: true },
          { nombre: "Juan Pérez", wpp: "11 6690-1187", ultimo: "Hoy 14:32", total: "$12.840", frec: false },
          { nombre: "Lucía Martínez", wpp: "11 3308-7754", ultimo: "Hoy 12:48", total: "$23.460", frec: true },
          { nombre: "Ramiro Suárez", wpp: "11 5829-3340", ultimo: "Hoy 13:12", total: "$36.900", frec: true },
          { nombre: "Pedro Quiroga", wpp: "11 4471-2266", ultimo: "Lun 03/05", total: "$54.120", frec: true },
          { nombre: "Estela Romero", wpp: "11 6033-5519", ultimo: "Sáb 27/04", total: "$9.300", frec: false },
        ].map((c, i, arr) => (
          <motion.div key={c.nombre} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: i * 0.04 }} whileHover={{ backgroundColor: SURFACE }} className="grid grid-cols-12 gap-3 px-4 py-3 items-center text-sm cursor-pointer" style={{ borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : "none" }}>
            <div className="col-span-4 flex items-center gap-2 min-w-0">
              <span className="truncate font-medium">{c.nombre}</span>
              {c.frec && <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full shrink-0" style={{ backgroundColor: NARANJA_SOFT, color: "#9a3412" }}>Frecuente</span>}
            </div>
            <div className="col-span-2 text-xs flex items-center gap-1" style={{ color: "#15803d" }}>
              <span>💬</span>
              <span className="truncate">{c.wpp}</span>
            </div>
            <div className="col-span-3 text-xs" style={{ color: MUTED }}>{c.ultimo}</div>
            <div className="col-span-3 text-right font-semibold">{c.total}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const MensajesView = (
    <div>
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: VERDE }}>WhatsApp Business · sincronizado</p>
        <h2 className="text-2xl font-semibold tracking-tight mt-0.5">Mensajes de clientes</h2>
      </div>

      <div className="space-y-2">
        {[
          { ini: "M", color: VERDE_SOFT, fg: VERDE, nombre: "María Soledad", preview: "Hola! El pedido 10486 ya está pago. Cuándo me lo entregás?", hora: "14:35", unread: 2 },
          { ini: "C", color: NARANJA_SOFT, fg: "#9a3412", nombre: "Comercio La Esquina", preview: "Necesito agregar 2 cajas de alfajores al pedido si tenés stock", hora: "13:48", unread: 1 },
          { ini: "J", color: "#dbeafe", fg: "#1e40af", nombre: "Juan Pérez", preview: "Listo, te transferí. Te paso comprobante en un toque", hora: "14:30", unread: 0 },
          { ini: "L", color: "#fce7f3", fg: "#be185d", nombre: "Lucía Martínez", preview: "Llegó todo perfecto, mil gracias 🙌", hora: "13:05", unread: 0 },
          { ini: "P", color: "#dcfce7", fg: VERDE, nombre: "Pedro Quiroga", preview: "Hola Fátima, tenés huevos de campo esta semana?", hora: "Ayer", unread: 0 },
        ].map((m, i) => (
          <motion.div key={m.nombre} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} whileHover={{ x: 2 }} className="bg-white rounded-xl p-3 flex items-center gap-3 cursor-pointer" style={{ border: `1px solid ${BORDER}` }}>
            <div className="w-11 h-11 rounded-full flex items-center justify-center text-base font-semibold shrink-0" style={{ backgroundColor: m.color, color: m.fg }}>{m.ini}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-2">
                <p className="font-semibold truncate">{m.nombre}</p>
                <p className="text-xs shrink-0" style={{ color: MUTED }}>{m.hora}</p>
              </div>
              <p className="text-sm truncate mt-0.5" style={{ color: m.unread > 0 ? TEXT : MUTED, fontWeight: m.unread > 0 ? 500 : 400 }}>{m.preview}</p>
            </div>
            {m.unread > 0 && <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold text-white shrink-0" style={{ backgroundColor: VERDE }}>{m.unread}</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );

  const CobrosView = (
    <div>
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: VERDE }}>Mercado Pago · cuenta verificada ✓</p>
        <h2 className="text-2xl font-semibold tracking-tight mt-0.5">Cobros</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {[
          { v: "$48.270", l: "Cobrado hoy", color: VERDE, bg: VERDE_SOFT },
          { v: "$1.284.500", l: "Mes en curso", color: NARANJA, bg: NARANJA_SOFT },
          { v: pesos(aCobrar), l: "Pendiente cobrar", color: "#dc2626", bg: "#fee2e2" },
        ].map((s, i) => (
          <motion.div key={s.l} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.06 }} className="rounded-xl p-4" style={{ backgroundColor: s.bg }}>
            <p className="text-xl sm:text-2xl font-semibold tracking-tight" style={{ color: s.color }}>{s.v}</p>
            <p className="text-xs mt-1" style={{ color: MUTED }}>{s.l}</p>
          </motion.div>
        ))}
      </div>

      <p className="font-semibold mb-3">Últimos pagos recibidos</p>
      <div className="bg-white rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
        {[
          { quien: "María Soledad Aguirre", monto: "$3.150", metodo: "MP — Tarjeta", estado: "Acreditado", hora: "14:02" },
          { quien: "Ramiro Suárez", monto: "$12.700", metodo: "MP — Saldo en cuenta", estado: "Acreditado", hora: "13:18" },
          { quien: "Lucía Martínez", monto: "$2.890", metodo: "MP — QR", estado: "Acreditado", hora: "12:50" },
          { quien: "Comercio La Esquina", monto: "$24.300", metodo: "Transferencia", estado: "Pendiente", hora: "11:30" },
          { quien: "Juan Pérez", monto: "$8.420", metodo: "MP — Tarjeta", estado: "Pendiente", hora: "14:32" },
        ].map((p, i, arr) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: i * 0.04 }} className="grid grid-cols-12 gap-3 items-center px-4 py-3 text-sm" style={{ borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : "none" }}>
            <div className="col-span-4 truncate">{p.quien}</div>
            <div className="col-span-3 font-semibold">{p.monto}</div>
            <div className="col-span-3 text-xs" style={{ color: MUTED }}>{p.metodo}</div>
            <div className="col-span-2 text-right">
              <span className="text-[11px] uppercase tracking-wider font-bold px-2 py-1 rounded-full" style={{ backgroundColor: p.estado === "Acreditado" ? VERDE_SOFT : "#fef3c7", color: p.estado === "Acreditado" ? VERDE : "#92400e" }}>{p.estado}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    resumen: ResumenView,
    pedidos: PedidosView,
    catalogo: CatalogoView,
    clientes: ClientesView,
    mensajes: MensajesView,
    cobros: CobrosView,
  };

  const workspace = (
    <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#ffffff", border: `1px solid ${BORDER}`, minHeight: "640px" }}>
      <InternalNav
        variant="soft-sidebar"
        items={[
          { id: "resumen", label: "Resumen", icon: "📊" },
          { id: "pedidos", label: "Pedidos", icon: "📦", badge: entregasPendientes },
          { id: "catalogo", label: "Catálogo", icon: "🛒" },
          { id: "clientes", label: "Clientes", icon: "👥" },
          { id: "mensajes", label: "Mensajes", icon: "💬", badge: 3 },
          { id: "cobros", label: "Cobros", icon: "💵" },
        ]}
        active={activeView} onChange={setActiveView} accent={VERDE} bgContainer="#ffffff" bgActive={VERDE_SOFT} textActive={TEXT} textInactive={MUTED} borderColor={BORDER} workspaceLabel="Tienda de Fátima" workspaceInitial="F"
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

  return (
    <div style={{ backgroundColor: SURFACE, color: TEXT, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={BORDER} navColor={MUTED} />
      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <StyleTabs variant="soft-pill" accent={VERDE} bgContainer="#ffffff" textActive="#ffffff" textInactive={MUTED} borderColor={BORDER} tabsClassName="mb-8" tabs={[{ id: "inicio", label: "Inicio", content: landing }, { id: "negocio", label: "Tu negocio", content: workspace }]} />
        <DividerReveal variant="soft-bounce" lineColor={BORDER} textColor={MUTED} className="my-10">Tu negocio en orden</DividerReveal>
        <StyleFooter estilo={e} textColor={MUTED} borderColor={BORDER} />
      </main>

      {/* Toast cálido — firma de motion del estilo: rápido, sin vueltas */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 480, damping: 30 }}
            className="fixed left-1/2 -translate-x-1/2 bottom-6 flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-lg"
            style={{ backgroundColor: "#166534", color: "#ffffff", zIndex: 60 }}
          >
            <span className="text-base">✓</span>
            <span className="text-sm font-semibold">{toast.msg}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
