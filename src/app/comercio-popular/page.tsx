"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";

const CATEGORIAS = ["Todo", "Almacén", "Bebidas", "Limpieza", "Carnes", "Lácteos", "Frutas", "Panadería"];

const PRODUCTOS = [
  { nombre: "Yerba Mate Cruz de Malta", precio: "$3.450", oferta: "$2.890" },
  { nombre: "Fideos Matarazzo Spaghetti", precio: "$1.250" },
  { nombre: "Leche La Serenísima 1L", precio: "$890" },
  { nombre: "Coca Cola 1.5L", precio: "$2.100", oferta: "$1.799" },
];

export default function ComercioPopularPage() {
  const e = getEstilo("comercio-popular")!;
  const [activeCat, setActiveCat] = useState("Todo");
  const [carrito, setCarrito] = useState(3);
  const [agregando, setAgregando] = useState<string | null>(null);
  const [searchFocused, setSearchFocused] = useState(false);

  const agregar = (nombre: string) => {
    setAgregando(nombre);
    setCarrito((c) => c + 1);
    setTimeout(() => setAgregando(null), 700);
  };

  return (
    <div style={{ backgroundColor: "#ffffff", color: "#171717", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e5e7eb" navColor="#737373" />

      {/* Banner oferta */}
      <motion.div
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center py-2 text-xs font-semibold text-white"
        style={{ backgroundColor: "#16a34a" }}
      >
        🎉 ENVÍO GRATIS en Salta capital por compras mayores a $30.000 · Hasta agotar stock
      </motion.div>

      {/* Search bar */}
      <div className="border-b" style={{ borderColor: "#e5e7eb" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <span className="font-bold text-xl">El Almacén</span>
          <motion.div
            animate={{
              borderColor: searchFocused ? "#16a34a" : "#e5e7eb",
              boxShadow: searchFocused ? "0 0 0 3px rgba(22,163,74,0.12)" : "0 0 0 0 rgba(22,163,74,0)",
            }}
            transition={{ duration: 0.2 }}
            className="flex-1 max-w-2xl rounded-lg flex items-center gap-2 px-4 py-2.5"
            style={{ borderWidth: "1px", borderStyle: "solid", backgroundColor: "#f8f9fa" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="¿Qué estás buscando? (yerba, fideos, leche...)"
              className="flex-1 outline-none text-sm bg-transparent"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </motion.div>
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="text-sm font-medium relative"
            style={{ color: "#16a34a" }}
          >
            Mi cuenta
            <motion.span
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 -bottom-0.5 h-0.5 origin-left"
              style={{ backgroundColor: "#16a34a" }}
            />
          </motion.button>
          <motion.button
            whileHover={{ y: -2, boxShadow: "0 6px 14px -4px rgba(22,163,74,0.4)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="px-3 py-2 rounded-lg text-sm font-medium text-white relative"
            style={{ backgroundColor: "#16a34a" }}
          >
            🛒 Carrito
            <motion.span
              key={carrito}
              initial={{ scale: 0.5, y: -8, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              className="ml-1 inline-block"
            >
              ({carrito})
            </motion.span>
          </motion.button>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Categorías chips con indicador animado */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8">
          {CATEGORIAS.map((c) => {
            const active = activeCat === c;
            return (
              <motion.button
                key={c}
                onClick={() => setActiveCat(c)}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="px-4 py-2 rounded-full text-sm whitespace-nowrap relative font-medium"
                style={{
                  color: active ? "#fff" : "#171717",
                  border: active ? "1px solid transparent" : "1px solid #e5e7eb",
                  backgroundColor: active ? "transparent" : "#f8f9fa",
                }}
              >
                {active && (
                  <motion.span
                    layoutId="cat-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: "#16a34a" }}
                  />
                )}
                <span className="relative">{c}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Productos grid — alineados con flex-col */}
        <div className="flex items-end justify-between mb-5 flex-wrap gap-2">
          <h2 className="text-xl font-bold">Más vendidos esta semana</h2>
          <motion.button
            whileHover={{ x: 3 }}
            transition={{ duration: 0.15 }}
            className="text-sm font-semibold flex items-center gap-1"
            style={{ color: "#16a34a" }}
          >
            Ver todos →
          </motion.button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {PRODUCTOS.map((p, i) => (
            <motion.div
              key={p.nombre}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ y: -4, boxShadow: "0 12px 28px rgba(0,0,0,0.08)" }}
              className="border rounded-lg p-3 bg-white flex flex-col relative overflow-hidden"
              style={{ borderColor: "#e5e7eb" }}
            >
              {/* Badge oferta */}
              {p.oferta && (
                <motion.span
                  initial={{ scale: 0, rotate: -12 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.2 + i * 0.05 }}
                  className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold text-white z-10"
                  style={{ backgroundColor: "#dc2626" }}
                >
                  OFERTA
                </motion.span>
              )}

              <div
                className="aspect-square rounded mb-3 flex items-center justify-center text-3xl"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                🛒
              </div>
              <div className="text-sm font-medium mb-2 line-clamp-2" style={{ minHeight: "40px" }}>
                {p.nombre}
              </div>

              {/* Precio: altura fija para que botones se alineen */}
              <div className="mb-3 min-h-[44px] flex flex-col justify-end">
                {p.oferta ? (
                  <>
                    <div className="text-xs line-through" style={{ color: "#737373" }}>{p.precio}</div>
                    <div className="font-bold text-base" style={{ color: "#dc2626" }}>{p.oferta}</div>
                  </>
                ) : (
                  <div className="font-bold text-base">{p.precio}</div>
                )}
              </div>

              {/* CTA con feedback de "agregado" */}
              <motion.button
                onClick={() => agregar(p.nombre)}
                whileHover={{ y: -1, boxShadow: "0 6px 14px -4px rgba(22,163,74,0.45)" }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="w-full py-2 rounded-md text-sm font-medium text-white relative overflow-hidden mt-auto"
                style={{ backgroundColor: "#16a34a" }}
              >
                <AnimatePresence mode="wait">
                  {agregando === p.nombre ? (
                    <motion.span
                      key="ok"
                      initial={{ y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -16, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="block"
                    >
                      ✓ Agregado
                    </motion.span>
                  ) : (
                    <motion.span
                      key="add"
                      initial={{ y: -16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 16, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="block"
                    >
                      Agregar al carrito
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Divider firma — soft bounce comerciante */}
        <DividerReveal
          variant="soft-bounce"
          lineColor="#e5e7eb"
          textColor="#16a34a"
          className="mb-6"
          textClassName="text-xs uppercase tracking-wider font-semibold"
        >
          🔧 Panel del comerciante
        </DividerReveal>

        {/* ====== VISTA OPERATIVA — panel admin del almacén ====== */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-1">Hola Don Ricardo, así viene el día</h2>
          <p className="text-sm mb-6" style={{ color: "#737373" }}>Miércoles 7 de mayo · 14:32 · El Almacén · Salta capital</p>

          {/* Stats del día */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { val: "$ 124.500", label: "Vendido hoy", trend: "+18% vs ayer", color: "#16a34a" },
              { val: "23", label: "Pedidos del día", trend: "11 pendientes", color: "#171717" },
              { val: "7", label: "Productos por agotarse", trend: "Reponer hoy", color: "#dc2626" },
              { val: "$ 18.300", label: "Cuenta corriente", trend: "5 clientes", color: "#737373" },
            ].map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -2, boxShadow: "0 6px 14px rgba(0,0,0,0.06)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="border rounded-lg p-4 bg-white cursor-pointer"
                style={{ borderColor: "#e5e7eb" }}
              >
                <p className="text-xs mb-1" style={{ color: "#737373" }}>{s.label}</p>
                <p className="text-2xl font-bold tracking-tight tabular-nums" style={{ color: s.color }}>{s.val}</p>
                <p className="text-[11px] mt-1" style={{ color: "#737373" }}>{s.trend}</p>
              </motion.div>
            ))}
          </div>

          {/* Pedidos pendientes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 border rounded-lg bg-white" style={{ borderColor: "#e5e7eb" }}>
              <div className="px-5 py-3 flex items-center justify-between" style={{ borderBottom: "1px solid #e5e7eb" }}>
                <p className="font-bold text-sm">Pedidos pendientes</p>
                <motion.span
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xs font-semibold px-2 py-0.5 rounded text-white"
                  style={{ backgroundColor: "#dc2626" }}
                >
                  11
                </motion.span>
              </div>
              <div className="divide-y" style={{ borderColor: "#f3f4f6" }}>
                {[
                  { num: "#1247", cliente: "Sra. Ramírez", items: "Yerba x2, Fideos x4, Leche x3", total: "$ 14.800", hora: "13:45", estado: "PARA ARMAR", chip: "#fef3c7", chipText: "#92400e" },
                  { num: "#1246", cliente: "Don Hugo", items: "Coca x6, Snacks variados", total: "$ 8.450", hora: "13:20", estado: "ARMADO", chip: "#dcfce7", chipText: "#166534" },
                  { num: "#1245", cliente: "Vecina del 12", items: "Almuerzo del día (lista)", total: "$ 5.200", hora: "12:55", estado: "ENVIADO", chip: "#dbeafe", chipText: "#1e40af" },
                  { num: "#1244", cliente: "Pizzería Marcelo", items: "Mozza x10, harina x4", total: "$ 32.100", hora: "12:30", estado: "PARA ARMAR", chip: "#fef3c7", chipText: "#92400e" },
                ].map((o) => (
                  <motion.div
                    key={o.num}
                    whileHover={{ backgroundColor: "#f9fafb", x: 2 }}
                    transition={{ duration: 0.12 }}
                    className="px-5 py-3 cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <div>
                        <p className="text-sm font-semibold">{o.cliente} <span className="font-normal text-xs" style={{ color: "#737373" }}>· {o.num}</span></p>
                        <p className="text-xs mt-0.5" style={{ color: "#737373" }}>{o.items}</p>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap" style={{ backgroundColor: o.chip, color: o.chipText }}>
                        {o.estado}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span style={{ color: "#737373" }}>Hora: {o.hora}</span>
                      <span className="font-bold tabular-nums">{o.total}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ backgroundColor: "#f9fafb" }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.12 }}
                className="w-full py-3 text-sm font-semibold border-t flex items-center justify-center gap-1 group"
                style={{ borderColor: "#e5e7eb", color: "#16a34a" }}
              >
                Ver todos los pedidos
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  className="inline-block"
                >
                  →
                </motion.span>
              </motion.button>
            </div>

            {/* Stock crítico */}
            <div className="border rounded-lg bg-white" style={{ borderColor: "#e5e7eb" }}>
              <div className="px-4 py-3 flex items-center justify-between" style={{ borderBottom: "1px solid #e5e7eb" }}>
                <p className="font-bold text-sm">Reponer hoy</p>
                <motion.span
                  animate={{ rotate: [0, -12, 12, -8, 8, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 3 }}
                  className="text-xs inline-block"
                >
                  ⚠️
                </motion.span>
              </div>
              <div className="p-4 space-y-3 text-sm">
                {[
                  { p: "Leche La Serenísima 1L", q: "2 quedan", urg: true },
                  { p: "Yerba Cruz de Malta 1kg", q: "5 quedan", urg: true },
                  { p: "Pan lactal grande", q: "Sin stock", urg: true },
                  { p: "Fideos Matarazzo", q: "8 quedan", urg: false },
                  { p: "Cervezas Quilmes", q: "12 quedan", urg: false },
                ].map((s) => (
                  <motion.div
                    key={s.p}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.12 }}
                    className="flex items-center justify-between gap-2 cursor-pointer"
                  >
                    <span className="line-clamp-1 flex-1">{s.p}</span>
                    <span className="text-xs font-semibold whitespace-nowrap" style={{ color: s.urg ? "#dc2626" : "#737373" }}>
                      {s.q}
                    </span>
                  </motion.div>
                ))}
                <motion.button
                  whileHover={{ y: -1, boxShadow: "0 6px 14px -4px rgba(22,163,74,0.45)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="w-full py-2 mt-2 rounded-md text-xs font-semibold text-white"
                  style={{ backgroundColor: "#16a34a" }}
                >
                  + Hacer pedido al mayorista
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <StyleFooter estilo={e} textColor="#737373" borderColor="#e5e7eb" />
      </main>
    </div>
  );
}
