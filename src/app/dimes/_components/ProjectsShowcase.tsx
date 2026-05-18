"use client";

import { motion } from "motion/react";
import { palette, inkOn, type Proyecto } from "../_data";
import { useBrutalMotion } from "./use-brutal-motion";

/** Pieza externa: showcase de trabajo — grid de proyectos con hard-shadow. */
export function ProjectsShowcase({ proyectos }: { proyectos: Proyecto[] }) {
  const { reduce, hardShadow } = useBrutalMotion();
  const { ink, bg } = palette;

  return (
    <section>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide">PROYECTOS RECIENTES</h2>
        <a href="#" className="text-sm uppercase tracking-wider underline font-bold">
          Ver todos →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {proyectos.map((p) => (
          <motion.div
            key={p.titulo}
            {...hardShadow(6, 12, ink)}
            className="overflow-hidden cursor-pointer"
            style={{ border: `3px solid ${ink}` }}
          >
            <div className="h-44 sm:h-56 flex items-center justify-center" style={{ backgroundColor: p.color }}>
              <span
                className="font-bebas text-5xl sm:text-7xl tracking-wider"
                style={{ color: inkOn(p.color) }}
              >
                {p.titulo.split(" ")[0].toUpperCase()}
              </span>
            </div>
            <div
              className="p-5 flex items-center justify-between"
              style={{ borderTop: `3px solid ${ink}`, backgroundColor: bg }}
            >
              <div>
                <div className="font-bebas text-2xl tracking-wide leading-none mb-1">
                  {p.titulo.toUpperCase()}
                </div>
                <div className="text-xs uppercase tracking-widest font-bold">{p.tag}</div>
              </div>
              <motion.span
                initial={{ x: 0 }}
                whileHover={reduce ? undefined : { x: 4 }}
                className="font-bebas text-3xl"
              >
                →
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
