"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

const VERDE = "#16a34a";
const VERDE_SOFT = "#dcfce7";
const TEXT = "#171717";
const MUTED = "#737373";
const BORDER = "#e5e5e5";
const SURFACE = "#f8f9fa";

const CATEGORIAS = ["Todo", "Almacén", "Bebidas", "Limpieza", "Carnes", "Lácteos", "Frutas", "Panadería"];

export default function ComercioPopularPage() {
  const e = getEstilo("comercio-popular")!;
  const [activeView, setActiveView] = useState("pedidos");
  const [activeCat, setActiveCat] = useState("Todo");

  /* ============== TAB 1 — TIENDA PÚBLICA ============== */
  const tienda = (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-2 sm:px-4 pt-6 pb-14"
    >
      <div className="flex items-center justify-between mb-2 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
            style={{ backgroundColor: VERDE_SOFT }}
          >
            🏪
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Almacén Don Pedro</h1>
            <p className="text-xs" style={{ color: MUTED }}>Av. Belgrano 1242 · Abierto hasta 21hs · Envíos al barrio</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{ backgroundColor: VERDE_SOFT, color: VERDE }}
          >
            ● Abierto ahora
          </span>
        </div>
      </div>

      {/* Search bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="bg-white rounded-xl mt-5 mb-5 flex items-center gap-2 px-4 py-3"
        style={{ border: `1px solid ${BORDER}` }}
      >
        <span style={{ color: MUTED }}>🔎</span>
        <input
          className="flex-1 bg-transparent outline-none text-sm"
          placeholder="Buscar productos… ej. yerba, leche, fideos"
          readOnly
        />
        <motion.button
          whileTap={{ scale: 0.96 }}
          className="text-sm font-semibold px-3 py-1 rounded-lg text-white"
          style={{ backgroundColor: VERDE }}
        >
          Buscar
        </motion.button>
      </motion.div>

      {/* Categorías chips */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 -mx-2 px-2">
        {CATEGORIAS.map((cat) => {
          const a = activeCat === cat;
          return (
            <motion.button key={cat} onClick={() => setActiveCat(cat)} whileTap={{ scale: 0.96 }} className="text-sm px-4 py-2 rounded-full whitespace-nowrap shrink-0" style={{ backgroundColor: a ? VERDE : "#ffffff", color: a ? "#ffffff" : TEXT, border: a ? `1px solid ${VERDE}` : `1px solid ${BORDER}`, fontWeight: a ? 600 : 500 }}>{cat}</motion.button>
          );
        })}
      </div>

      {/* Productos grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {[
          { nombre: "Yerba Playadito 1kg", precio: "$3.200", grad: "linear-gradient(135deg,#dcfce7,#bbf7d0)", emoji: "🌿" },
          { nombre: "Leche La Serenísima 1L", precio: "$1.450", grad: "linear-gradient(135deg,#dbeafe,#bfdbfe)", emoji: "🥛" },
          { nombre: "Fideos Matarazzo 500g", precio: "$890", grad: "linear-gradient(135deg,#fef3c7,#fde68a)", emoji: "🍝" },
          { nombre: "Aceite Cocinero 900ml", precio: "$2.700", grad: "linear-gradient(135deg,#fef3c7,#fcd34d)", emoji: "🫒" },
          { nombre: "Pan francés 1kg", precio: "$1.200", grad: "linear-gradient(135deg,#fed7aa,#fdba74)", emoji: "🍞" },
          { nombre: "Coca Cola 2.25L", precio: "$2.490", grad: "linear-gradient(135deg,#fee2e2,#fecaca)", emoji: "🥤" },
        ].map((p, i) => (
          <motion.div key={p.nombre} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32, delay: i * 0.04 }} whileHover={{ y: -3 }} className="bg-white rounded-xl overflow-hidden flex flex-col" style={{ border: `1px solid ${BORDER}` }}>
            <div className="aspect-square flex items-center justify-center text-4xl" style={{ background: p.grad }}>{p.emoji}</div>
            <div className="p-3 flex-1 flex flex-col">
              <p className="text-sm font-medium leading-snug mb-1 line-clamp-2">{p.nombre}</p>
              <p className="text-lg font-semibold mb-2">{p.precio}</p>
              <motion.button whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }} className="mt-auto py-2 rounded-lg text-xs font-semibold text-white w-full" style={{ backgroundColor: VERDE }}>+ Agregar al carrito</motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm" style={{ color: MUTED }}>
          Envíos a Belgrano, Recoleta y Palermo desde <span style={{ color: VERDE, fontWeight: 600 }}>$650</span> · Pago con efectivo, transferencia o MP
        </p>
      </div>
    </motion.section>
  );

  /* ============== SUB-VISTAS ADMIN ============== */

  const PedidosView = (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold tracking-tight">Pedidos</h2>
        <span
          className="text-xs font-semibold px-3 py-1.5 rounded-full"
          style={{ backgroundColor: VERDE_SOFT, color: VERDE }}
        >
          12 hoy · $86.450
        </span>
      </div>

      <div className="bg-white rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
        <div
          className="grid grid-cols-12 gap-2 px-4 py-2.5 text-[11px] uppercase tracking-wider font-semibold"
          style={{ backgroundColor: SURFACE, color: MUTED, borderBottom: `1px solid ${BORDER}` }}
        >
          <div className="col-span-2">Pedido</div>
          <div className="col-span-3">Cliente</div>
          <div className="col-span-2">Total</div>
          <div className="col-span-2">Pago</div>
          <div className="col-span-2">Estado</div>
          <div className="col-span-1 text-right">Hora</div>
        </div>
        {[
          { id: "#5217", cli: "Vecina del 4°B", total: "$4.320", pago: "Efectivo", estado: "Listo", hora: "14:42" },
          { id: "#5216", cli: "Don Eduardo", total: "$2.890", pago: "MP", estado: "Preparando", hora: "14:18" },
          { id: "#5215", cli: "Sra. González", total: "$8.150", pago: "Transferencia", estado: "Listo", hora: "13:50" },
          { id: "#5214", cli: "Joven del kiosco", total: "$1.450", pago: "MP", estado: "Entregado", hora: "13:32" },
          { id: "#5213", cli: "Roxana B.", total: "$12.780", pago: "Efectivo", estado: "Entregado", hora: "12:48" },
          { id: "#5212", cli: "Familia Pérez", total: "$3.620", pago: "MP", estado: "Entregado", hora: "11:55" },
          { id: "#5211", cli: "Marta del 2°", total: "$5.100", pago: "Transferencia", estado: "Entregado", hora: "10:30" },
        ].map((p, i, arr) => (
          <motion.div key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: i * 0.04 }} whileHover={{ backgroundColor: SURFACE }} className="grid grid-cols-12 gap-2 px-4 py-2.5 items-center text-sm cursor-pointer" style={{ borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : "none" }}>
            <div className="col-span-2 font-mono text-xs font-semibold">{p.id}</div>
            <div className="col-span-3 truncate">{p.cli}</div>
            <div className="col-span-2 font-semibold">{p.total}</div>
            <div className="col-span-2 text-xs" style={{ color: MUTED }}>{p.pago}</div>
            <div className="col-span-2">
              <span className="text-[11px] uppercase tracking-wider font-bold px-2 py-1 rounded-full" style={{ backgroundColor: p.estado === "Listo" ? "#fef3c7" : p.estado === "Preparando" ? "#fed7aa" : VERDE_SOFT, color: p.estado === "Listo" ? "#92400e" : p.estado === "Preparando" ? "#9a3412" : "#166534" }}>{p.estado}</span>
            </div>
            <div className="col-span-1 text-right text-xs" style={{ color: MUTED }}>{p.hora}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const ProductosView = (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: VERDE }}>
            114 productos · 8 categorías
          </p>
          <h2 className="text-2xl font-semibold tracking-tight mt-0.5">Productos</h2>
        </div>
        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
          style={{ backgroundColor: VERDE }}
        >
          + Nuevo producto
        </motion.button>
      </div>

      <div className="bg-white rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
        <div
          className="grid grid-cols-12 gap-2 px-4 py-2.5 text-[11px] uppercase tracking-wider font-semibold"
          style={{ backgroundColor: SURFACE, color: MUTED, borderBottom: `1px solid ${BORDER}` }}
        >
          <div className="col-span-1"></div>
          <div className="col-span-4">Nombre</div>
          <div className="col-span-2">Categoría</div>
          <div className="col-span-2">Precio</div>
          <div className="col-span-2">Stock</div>
          <div className="col-span-1 text-right">On</div>
        </div>
        {[
          { nombre: "Yerba Playadito 1kg", cat: "Almacén", precio: "$3.200", stock: 24, on: true, grad: "linear-gradient(135deg,#dcfce7,#bbf7d0)", emoji: "🌿" },
          { nombre: "Leche La Serenísima 1L", cat: "Lácteos", precio: "$1.450", stock: 36, on: true, grad: "linear-gradient(135deg,#dbeafe,#bfdbfe)", emoji: "🥛" },
          { nombre: "Fideos Matarazzo 500g", cat: "Almacén", precio: "$890", stock: 4, on: true, grad: "linear-gradient(135deg,#fef3c7,#fde68a)", emoji: "🍝" },
          { nombre: "Pan francés 1kg", cat: "Panadería", precio: "$1.200", stock: 0, on: false, grad: "linear-gradient(135deg,#fed7aa,#fdba74)", emoji: "🍞" },
          { nombre: "Coca Cola 2.25L", cat: "Bebidas", precio: "$2.490", stock: 18, on: true, grad: "linear-gradient(135deg,#fee2e2,#fecaca)", emoji: "🥤" },
          { nombre: "Manteca Sancor 200g", cat: "Lácteos", precio: "$1.380", stock: 9, on: true, grad: "linear-gradient(135deg,#fef9c3,#fef08a)", emoji: "🧈" },
          { nombre: "Arroz Gallo 1kg", cat: "Almacén", precio: "$1.650", stock: 3, on: true, grad: "linear-gradient(135deg,#f5f5f4,#e7e5e4)", emoji: "🍚" },
        ].map((p, i, arr) => (
          <motion.div key={p.nombre} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.28, delay: i * 0.04 }} whileHover={{ backgroundColor: SURFACE }} className="grid grid-cols-12 gap-2 px-4 py-2.5 items-center text-sm cursor-pointer" style={{ borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : "none" }}>
            <div className="col-span-1">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base" style={{ background: p.grad }}>{p.emoji}</div>
            </div>
            <div className="col-span-4 truncate font-medium">{p.nombre}</div>
            <div className="col-span-2 text-xs" style={{ color: MUTED }}>{p.cat}</div>
            <div className="col-span-2 font-semibold">{p.precio}</div>
            <div className="col-span-2">
              <span className="text-xs font-semibold" style={{ color: p.stock < 5 ? "#dc2626" : TEXT }}>
                {p.stock === 0 ? "Sin stock" : `${p.stock} u.`}
              </span>
            </div>
            <div className="col-span-1 flex justify-end">
              <div className="w-9 h-5 rounded-full relative transition-colors" style={{ backgroundColor: p.on ? VERDE : "#d4d4d4" }}>
                <motion.div initial={false} animate={{ x: p.on ? 18 : 2 }} transition={{ type: "spring", stiffness: 500, damping: 28 }} className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm" />
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
        <h2 className="text-2xl font-semibold tracking-tight">Clientes</h2>
        <span className="text-xs" style={{ color: MUTED }}>418 registrados · 67 activos este mes</span>
      </div>

      <div className="bg-white rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
        <div
          className="grid grid-cols-12 gap-2 px-4 py-2.5 text-[11px] uppercase tracking-wider font-semibold"
          style={{ backgroundColor: SURFACE, color: MUTED, borderBottom: `1px solid ${BORDER}` }}
        >
          <div className="col-span-4">Nombre</div>
          <div className="col-span-3">Teléfono</div>
          <div className="col-span-2 text-right">Compras</div>
          <div className="col-span-3 text-right">Total gastado</div>
        </div>
        {[
          { nombre: "Roxana Blanco", tel: "11 5841-2204", compras: 23, total: "$184.300", frec: true },
          { nombre: "Don Eduardo Pereyra", tel: "11 4429-7733", compras: 41, total: "$298.400", frec: true },
          { nombre: "Sra. González (4°B)", tel: "11 6234-1182", compras: 18, total: "$132.700", frec: true },
          { nombre: "Familia Pérez", tel: "11 3387-9921", compras: 9, total: "$74.220", frec: true },
          { nombre: "Marta del 2°A", tel: "11 5500-2310", compras: 7, total: "$48.900", frec: true },
          { nombre: "Vecina del 4°B", tel: "11 6177-3490", compras: 2, total: "$8.640", frec: false },
          { nombre: "Joven del kiosco", tel: "11 4711-0028", compras: 1, total: "$1.450", frec: false },
        ].map((c, i, arr) => (
          <motion.div key={c.nombre} initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.28, delay: i * 0.04 }} whileHover={{ backgroundColor: SURFACE }} className="grid grid-cols-12 gap-2 px-4 py-2.5 items-center text-sm cursor-pointer" style={{ borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : "none" }}>
            <div className="col-span-4 flex items-center gap-2 min-w-0">
              <span className="truncate font-medium">{c.nombre}</span>
              {c.frec && <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full shrink-0" style={{ backgroundColor: VERDE_SOFT, color: VERDE }}>Frecuente</span>}
            </div>
            <div className="col-span-3 text-xs font-mono" style={{ color: MUTED }}>{c.tel}</div>
            <div className="col-span-2 text-right">{c.compras}</div>
            <div className="col-span-3 text-right font-semibold">{c.total}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const MiTiendaView = (
    <div>
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: VERDE }}>Configuración del comercio</p>
        <h2 className="text-2xl font-semibold tracking-tight mt-0.5">Mi tienda</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { icon: "🏪", titulo: "Datos del comercio", campos: [["Nombre", "Almacén Don Pedro"], ["Dirección", "Av. Belgrano 1242, CABA"], ["CUIT", "20-12345678-9"]] },
          { icon: "💳", titulo: "Métodos de pago", campos: [["Efectivo", "Habilitado"], ["Mercado Pago", "Conectado ✓"], ["Transferencia", "CBU configurado"]] },
          { icon: "🚚", titulo: "Envíos", campos: [["Zona", "Belgrano, Recoleta, Palermo"], ["Costo base", "$650"], ["Tiempo", "30 a 90 minutos"]] },
          { icon: "🕐", titulo: "Horario", campos: [["Lun a Vie", "8:00 — 21:00"], ["Sábados", "8:00 — 14:00"], ["Domingos", "Cerrado"]] },
        ].map((s, i) => (
          <motion.div
            key={s.titulo}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            whileHover={{ y: -2 }}
            className="bg-white rounded-xl p-5"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg" style={{ backgroundColor: VERDE_SOFT }}>{s.icon}</div>
              <p className="font-semibold">{s.titulo}</p>
            </div>
            <div className="space-y-2 mb-4">
              {s.campos.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-2 text-sm">
                  <span className="text-xs" style={{ color: MUTED }}>{k}</span>
                  <span className="font-medium text-right truncate">{v}</span>
                </div>
              ))}
            </div>
            <motion.button whileHover={{ y: -1 }} className="text-xs font-semibold px-3 py-1.5 rounded-lg w-full" style={{ backgroundColor: SURFACE, color: TEXT, border: `1px solid ${BORDER}` }}>Editar</motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const MetricasView = (
    <div>
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: VERDE }}>
          Resumen del comercio · Mayo 2026
        </p>
        <h2 className="text-2xl font-semibold tracking-tight mt-0.5">Métricas</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {[
          { v: "$86.450", l: "Ventas hoy", trend: "+12%", up: true },
          { v: "12", l: "Pedidos hoy", trend: "+3", up: true },
          { v: "$7.204", l: "Ticket promedio", trend: "—", up: false },
          { v: "67", l: "Clientes únicos / mes", trend: "+8", up: true },
        ].map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="bg-white rounded-xl p-4"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <p className="text-xl sm:text-2xl font-semibold tracking-tight">{s.v}</p>
            <div className="flex items-baseline justify-between mt-1.5">
              <p className="text-xs" style={{ color: MUTED }}>{s.l}</p>
              <span
                className="text-[10px] font-semibold"
                style={{ color: s.up ? VERDE : MUTED }}
              >
                {s.trend}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-5" style={{ border: `1px solid ${BORDER}` }}>
        <div className="flex items-baseline justify-between mb-4">
          <p className="font-semibold">Ventas por día · esta semana</p>
          <span className="text-xs" style={{ color: MUTED }}>Total: $487.300</span>
        </div>
        <div className="flex items-end justify-between gap-2 h-40">
          {[
            { dia: "L", val: 65 }, { dia: "M", val: 78 }, { dia: "X", val: 52 },
            { dia: "J", val: 88 }, { dia: "V", val: 95 }, { dia: "S", val: 100 }, { dia: "D", val: 30 },
          ].map((b, i) => (
            <div key={b.dia} className="flex-1 flex flex-col items-center gap-1.5">
              <motion.div initial={{ height: 0 }} animate={{ height: `${b.val}%` }} transition={{ duration: 0.7, delay: 0.15 + i * 0.06, ease: [0.32, 0.72, 0, 1] }} className="w-full rounded-t-md" style={{ backgroundColor: b.val === 100 ? VERDE : VERDE_SOFT, minHeight: "8px" }} />
              <span className="text-xs font-mono" style={{ color: MUTED }}>{b.dia}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    pedidos: PedidosView,
    productos: ProductosView,
    clientes: ClientesView,
    "mi-tienda": MiTiendaView,
    metricas: MetricasView,
  };

  const workspace = (
    <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#ffffff", border: `1px solid ${BORDER}`, minHeight: "640px" }}>
      <InternalNav
        variant="soft-sidebar"
        items={[
          { id: "pedidos", label: "Pedidos", icon: "📦", badge: 3 },
          { id: "productos", label: "Productos", icon: "🛍️" },
          { id: "clientes", label: "Clientes", icon: "👥" },
          { id: "mi-tienda", label: "Mi tienda", icon: "🏪" },
          { id: "metricas", label: "Métricas", icon: "📊" },
        ]}
        active={activeView} onChange={setActiveView} accent={VERDE} bgContainer="#ffffff" bgActive={VERDE_SOFT} textActive={TEXT} textInactive={MUTED} borderColor={BORDER} workspaceLabel="Don Pedro" workspaceInitial="P"
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

  return (
    <div style={{ backgroundColor: SURFACE, color: TEXT, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={BORDER} navColor={MUTED} />
      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <StyleTabs variant="soft-pill" accent={VERDE} bgContainer="#ffffff" textActive="#ffffff" textInactive={MUTED} borderColor={BORDER} tabsClassName="mb-8" tabs={[{ id: "tienda", label: "Tienda", content: tienda }, { id: "admin", label: "Admin", content: workspace }]} />
        <DividerReveal variant="soft-bounce" lineColor={BORDER} textColor={MUTED} className="my-10">Tu comercio, online</DividerReveal>

        <StyleFooter estilo={e} textColor={MUTED} borderColor={BORDER} />
      </main>
    </div>
  );
}
