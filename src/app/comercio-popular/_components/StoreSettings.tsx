"use client";

import { motion } from "motion/react";
import { palette, type SeccionTienda } from "../_data";

/** Pieza interna: configuración del comercio (datos, pagos, envíos, horario). */
export function StoreSettings({ secciones }: { secciones: SeccionTienda[] }) {
  const { verde, verdeSoft, text, muted, border, surface } = palette;

  return (
    <section>
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: verde }}>
          Configuración del comercio
        </p>
        <h2 className="text-2xl font-semibold tracking-tight mt-0.5">Mi tienda</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {secciones.map((s, i) => (
          <motion.div
            key={s.titulo}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.32, delay: i * 0.06 }}
            whileHover={{ y: -2 }}
            className="bg-white rounded-xl p-5"
            style={{ border: `1px solid ${border}` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                style={{ backgroundColor: verdeSoft }}
              >
                {s.icon}
              </div>
              <p className="font-semibold">{s.titulo}</p>
            </div>
            <div className="space-y-2 mb-4">
              {s.campos.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-2 text-sm">
                  <span className="text-xs" style={{ color: muted }}>{k}</span>
                  <span className="font-medium text-right truncate">{v}</span>
                </div>
              ))}
            </div>
            <motion.button
              whileHover={{ y: -1 }}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg w-full"
              style={{ backgroundColor: surface, color: text, border: `1px solid ${border}` }}
            >
              Editar
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
