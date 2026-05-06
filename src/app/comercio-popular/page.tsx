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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { nombre: "Yerba Mate Cruz de Malta", precio: "$3.450", oferta: "$2.890" },
            { nombre: "Fideos Matarazzo Spaghetti", precio: "$1.250" },
            { nombre: "Leche La Serenísima 1L", precio: "$890" },
            { nombre: "Coca Cola 1.5L", precio: "$2.100", oferta: "$1.799" },
          ].map((p, i) => (
            <motion.div
              key={p.nombre}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

        <StyleFooter estilo={e} textColor="#737373" borderColor="#e5e7eb" />
      </main>
    </div>
  );
}
