"use client";

import { motion } from "motion/react";
import { palette, type Perfil, type SeccionCuenta } from "../_data";
import { useWarmMotion } from "./use-warm-motion";

/** Pieza interna: perfil verificado + accesos de configuración de la cuenta. */
export function AccountSettings({
  perfil,
  secciones,
}: {
  perfil: Perfil;
  secciones: SeccionCuenta[];
}) {
  const { reduce } = useWarmMotion();
  const { rausch, muted, border, surface, softPink } = palette;

  return (
    <section>
      <p className="text-lg font-semibold mb-4">Tu perfil y configuración</p>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 8 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-6 mb-5 flex items-center gap-5"
        style={{ border: `1px solid ${border}` }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-semibold shrink-0"
          style={{ backgroundColor: softPink, color: rausch }}
        >
          {perfil.inicial}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl font-semibold mb-1">{perfil.nombre}</h3>
          <p className="text-sm" style={{ color: muted }}>
            Huésped desde {perfil.desde} · {perfil.viajes} viajes hechos
          </p>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            {perfil.badges.map((b) => (
              <span
                key={b.label}
                className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                style={{ backgroundColor: b.bg, color: b.fg }}
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="space-y-3">
        {secciones.map((s, i) => (
          <motion.div
            key={s.titulo}
            initial={reduce ? false : { opacity: 0, x: -8 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.32, delay: i * 0.05 }}
            whileHover={reduce ? undefined : { y: -1 }}
            className="bg-white rounded-2xl p-5 flex items-center gap-4 cursor-pointer"
            style={{ border: `1px solid ${border}` }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0"
              style={{ backgroundColor: surface }}
            >
              {s.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold">{s.titulo}</p>
              <p className="text-sm mt-0.5" style={{ color: muted }}>{s.desc}</p>
            </div>
            <span style={{ color: muted }}>›</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
