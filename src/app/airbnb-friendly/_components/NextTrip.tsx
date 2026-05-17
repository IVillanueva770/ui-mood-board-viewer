"use client";

import { motion } from "motion/react";
import { palette, type Perfil, type ProximoViaje } from "../_data";
import { useWarmMotion } from "./use-warm-motion";

/**
 * Pieza interna (hero de "Tu cuenta"): saludo + perfil del huésped +
 * tarjeta del próximo viaje + mini-timeline de seguimiento.
 */
export function NextTrip({ perfil, viaje }: { perfil: Perfil; viaje: ProximoViaje }) {
  const { reduce } = useWarmMotion();
  const { rausch, text, muted, border, softPink } = palette;

  // % de la línea de progreso hasta el paso "activo".
  const idxActivo = viaje.timeline.findIndex((p) => p.estado === "activo");
  const progreso = idxActivo <= 0 ? 0 : (idxActivo / (viaje.timeline.length - 1)) * 100;

  return (
    <section>
      <div className="flex items-center gap-4 mb-5">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-semibold shrink-0"
          style={{ backgroundColor: softPink, color: rausch }}
        >
          {perfil.inicial}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: rausch }}>
            Hola, {perfil.nombre.split(" ")[0]} 👋
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">Tu cuenta</h2>
        </div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl p-6 mb-4 flex items-center gap-5 overflow-hidden relative"
        style={{ background: "linear-gradient(135deg,#ffe4e6 0%, #fef3c7 100%)" }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0"
          style={{ backgroundColor: "#ffffff" }}
        >
          {viaje.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: rausch }}>
            Tu próximo viaje · faltan {viaje.diasRestantes} días
          </p>
          <h3 className="text-2xl font-semibold mb-1">{viaje.titulo}</h3>
          <p className="text-sm" style={{ color: muted }}>{viaje.detalle}</p>
        </div>
        <motion.button
          whileHover={reduce ? undefined : { y: -2 }}
          className="px-4 py-2.5 rounded-xl text-sm font-semibold shrink-0 hidden sm:block"
          style={{ backgroundColor: "#ffffff", border: `1px solid ${border}` }}
        >
          Ver detalles
        </motion.button>
      </motion.div>

      <div className="bg-white rounded-2xl p-5" style={{ border: `1px solid ${border}` }}>
        <p className="text-sm font-semibold mb-5">Seguimiento de tu viaje a Bariloche</p>
        <div className="relative px-3">
          <div
            className="absolute left-3 right-3 top-4 h-0.5 rounded-full"
            style={{ backgroundColor: border }}
          />
          <motion.div
            className="absolute left-3 top-4 h-0.5 rounded-full"
            style={{ backgroundColor: rausch, maxWidth: "calc(100% - 1.5rem)" }}
            initial={reduce ? false : { width: "0%" }}
            whileInView={reduce ? undefined : { width: `${progreso}%` }}
            animate={reduce ? { width: `${progreso}%` } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          />
          <div className="relative flex justify-between">
            {viaje.timeline.map((s, i) => {
              const hecho = s.estado === "hecho";
              const activo = s.estado === "activo";
              return (
                <div key={s.label} className="flex flex-col items-center flex-1">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2"
                    style={{
                      backgroundColor: hecho ? rausch : activo ? softPink : "#ffffff",
                      color: hecho ? "#ffffff" : rausch,
                      border: `1.5px solid ${hecho || activo ? rausch : border}`,
                    }}
                  >
                    {hecho ? "✓" : i + 1}
                  </div>
                  <span
                    className="text-[11px] text-center leading-tight px-1"
                    style={{ color: activo ? text : muted, fontWeight: activo ? 600 : 400 }}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
