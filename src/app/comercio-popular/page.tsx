"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";

export default function ComercioPopularPage() {
  const e = getEstilo("comercio-popular")!;
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
          <div className="flex-1 max-w-2xl">
            <input
              type="text"
              placeholder="¿Qué estás buscando? (yerba, fideos, leche...)"
              className="w-full px-4 py-2.5 rounded-lg border outline-none text-sm"
              style={{ borderColor: "#e5e7eb", backgroundColor: "#f8f9fa" }}
            />
          </div>
          <button className="text-sm font-medium" style={{ color: "#16a34a" }}>Mi cuenta</button>
          <button className="px-3 py-2 rounded-lg text-sm font-medium text-white" style={{ backgroundColor: "#16a34a" }}>
            🛒 Carrito (3)
          </button>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Categorías chips */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8">
          {["Todo", "Almacén", "Bebidas", "Limpieza", "Carnes", "Lácteos", "Frutas", "Panadería"].map((c, i) => (
            <button
              key={c}
              className="px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors"
              style={{
                backgroundColor: i === 0 ? "#16a34a" : "#f8f9fa",
                color: i === 0 ? "#fff" : "#171717",
                border: i === 0 ? "none" : "1px solid #e5e7eb",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Productos grid */}
        <h2 className="text-xl font-bold mb-5">Más vendidos esta semana</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { nombre: "Yerba Mate Cruz de Malta", precio: "$3.450", oferta: "$2.890" },
            { nombre: "Fideos Matarazzo Spaghetti", precio: "$1.250" },
            { nombre: "Leche La Serenísima 1L", precio: "$890" },
            { nombre: "Coca Cola 1.5L", precio: "$2.100", oferta: "$1.799" },
          ].map((p, i) => (
            <motion.div
              key={p.nombre}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ y: -3, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
              className="border rounded-lg p-3 bg-white"
              style={{ borderColor: "#e5e7eb" }}
            >
              <div
                className="aspect-square rounded mb-3 flex items-center justify-center text-3xl"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                🛒
              </div>
              <div className="text-sm font-medium mb-1 line-clamp-2" style={{ minHeight: "40px" }}>
                {p.nombre}
              </div>
              {p.oferta ? (
                <div className="mb-2">
                  <div className="text-xs line-through" style={{ color: "#737373" }}>{p.precio}</div>
                  <div className="font-bold text-base" style={{ color: "#dc2626" }}>{p.oferta}</div>
                </div>
              ) : (
                <div className="font-bold text-base mb-2">{p.precio}</div>
              )}
              <button
                className="w-full py-2 rounded-md text-sm font-medium text-white"
                style={{ backgroundColor: "#16a34a" }}
              >
                Agregar al carrito
              </button>
            </motion.div>
          ))}
        </div>

        {/* Divider de cambio de modo */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px" style={{ backgroundColor: "#e5e7eb" }} />
          <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: "#16a34a" }}>
            🔧 Panel del comerciante
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "#e5e7eb" }} />
        </div>

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
                whileHover={{ y: -2 }}
                className="border rounded-lg p-4 bg-white"
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
                <span className="text-xs font-semibold px-2 py-0.5 rounded text-white" style={{ backgroundColor: "#dc2626" }}>11</span>
              </div>
              <div className="divide-y" style={{ borderColor: "#f3f4f6" }}>
                {[
                  { num: "#1247", cliente: "Sra. Ramírez", items: "Yerba x2, Fideos x4, Leche x3", total: "$ 14.800", hora: "13:45", estado: "PARA ARMAR", chip: "#fef3c7", chipText: "#92400e" },
                  { num: "#1246", cliente: "Don Hugo", items: "Coca x6, Snacks variados", total: "$ 8.450", hora: "13:20", estado: "ARMADO", chip: "#dcfce7", chipText: "#166534" },
                  { num: "#1245", cliente: "Vecina del 12", items: "Almuerzo del día (lista)", total: "$ 5.200", hora: "12:55", estado: "ENVIADO", chip: "#dbeafe", chipText: "#1e40af" },
                  { num: "#1244", cliente: "Pizzería Marcelo", items: "Mozza x10, harina x4", total: "$ 32.100", hora: "12:30", estado: "PARA ARMAR", chip: "#fef3c7", chipText: "#92400e" },
                ].map((o) => (
                  <div key={o.num} className="px-5 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
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
                  </div>
                ))}
              </div>
              <button className="w-full py-3 text-sm font-semibold border-t hover:bg-gray-50" style={{ borderColor: "#e5e7eb", color: "#16a34a" }}>
                Ver todos los pedidos →
              </button>
            </div>

            {/* Stock crítico */}
            <div className="border rounded-lg bg-white" style={{ borderColor: "#e5e7eb" }}>
              <div className="px-4 py-3 flex items-center justify-between" style={{ borderBottom: "1px solid #e5e7eb" }}>
                <p className="font-bold text-sm">Reponer hoy</p>
                <span className="text-xs">⚠️</span>
              </div>
              <div className="p-4 space-y-3 text-sm">
                {[
                  { p: "Leche La Serenísima 1L", q: "2 quedan", urg: true },
                  { p: "Yerba Cruz de Malta 1kg", q: "5 quedan", urg: true },
                  { p: "Pan lactal grande", q: "Sin stock", urg: true },
                  { p: "Fideos Matarazzo", q: "8 quedan", urg: false },
                  { p: "Cervezas Quilmes", q: "12 quedan", urg: false },
                ].map((s) => (
                  <div key={s.p} className="flex items-center justify-between gap-2">
                    <span className="line-clamp-1 flex-1">{s.p}</span>
                    <span className={`text-xs font-semibold whitespace-nowrap ${s.urg ? "" : ""}`} style={{ color: s.urg ? "#dc2626" : "#737373" }}>
                      {s.q}
                    </span>
                  </div>
                ))}
                <button className="w-full py-2 mt-2 rounded-md text-xs font-semibold text-white" style={{ backgroundColor: "#16a34a" }}>
                  + Hacer pedido al mayorista
                </button>
              </div>
            </div>
          </div>
        </div>

        <StyleFooter estilo={e} textColor="#737373" borderColor="#e5e7eb" />
      </main>
    </div>
  );
}
