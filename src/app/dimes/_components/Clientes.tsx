"use client";

import { motion } from "motion/react";
import { palette, type Cliente } from "../_data";
import { useBrutalMotion } from "./use-brutal-motion";
import { HardButton } from "./HardButton";
import { StatusChip } from "./StatusChip";

/** Pieza interna: cartera de clientes en cards brutalist con hard-shadow. */
export function Clientes({ clientes }: { clientes: Cliente[] }) {
  const { hardShadow } = useBrutalMotion();
  const { ink, bg, orange } = palette;

  return (
    <section>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <h3 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none mb-1">CLIENTES</h3>
          <p className="text-xs uppercase tracking-widest font-bold opacity-70">
            14 activos · 8 dormidos · 47 totales
          </p>
        </div>
        <HardButton variant="solid" accent={orange} className="text-lg px-5 py-3">
          + Nuevo cliente
        </HardButton>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {clientes.map((c) => (
          <motion.div
            key={c.nombre}
            {...hardShadow(5, 10, ink)}
            className="p-5 cursor-pointer"
            style={{ border: `3px solid ${ink}`, backgroundColor: bg }}
          >
            <div className="flex items-start justify-between mb-3 gap-3">
              <div className="min-w-0">
                <div className="font-bebas text-2xl leading-tight tracking-wide mb-1">
                  {c.nombre.toUpperCase()}
                </div>
                <div className="text-xs uppercase tracking-wider opacity-70">{c.sector}</div>
              </div>
              <StatusChip label={c.estado} fill={c.chip} className="shrink-0" />
            </div>
            <div className="flex items-baseline justify-between pt-3" style={{ borderTop: `2px solid ${ink}` }}>
              <div>
                <div className="font-mono text-xs uppercase tracking-wider opacity-70">Proyectos</div>
                <div className="font-bebas text-3xl tracking-wide leading-none">
                  {String(c.proyectos).padStart(2, "0")}
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-xs uppercase tracking-wider opacity-70">Facturado</div>
                <div className="font-bebas text-2xl tracking-wide leading-none">{c.monto}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
