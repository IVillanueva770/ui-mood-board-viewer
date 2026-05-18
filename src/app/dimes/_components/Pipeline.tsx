"use client";

import { motion } from "motion/react";
import { palette, inkOn, type KanbanColumna } from "../_data";
import { useBrutalMotion } from "./use-brutal-motion";

/** Pieza interna: pipeline kanban del estudio (4 columnas, cards arrastrables). */
export function Pipeline({ columnas }: { columnas: KanbanColumna[] }) {
  const { hardShadow, colorFlip } = useBrutalMotion();
  const { ink, bg, lime } = palette;

  return (
    <section>
      <div className="mb-6 flex items-end justify-between flex-wrap gap-3">
        <div>
          <h3 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none mb-1">PIPELINE</h3>
          <p className="text-xs uppercase tracking-widest font-bold opacity-70">
            06 proyectos activos · arrastrá entre columnas
          </p>
        </div>
        <div className="flex gap-0" style={{ border: `2px solid ${ink}` }}>
          {["TODO", "ESTA SEMANA", "ATRASADO"].map((f, i) => (
            <motion.button
              key={f}
              {...colorFlip(i === 0 ? ink : lime, ink)}
              className="px-3.5 py-2 text-xs uppercase tracking-widest font-bold"
              style={{
                backgroundColor: i === 0 ? ink : "transparent",
                color: i === 0 ? bg : ink,
                borderRight: i < 2 ? `2px solid ${ink}` : "none",
              }}
            >
              {f}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {columnas.map((column) => (
          <div key={column.col} className="p-3" style={{ border: `3px solid ${ink}`, backgroundColor: bg }}>
            <div className="flex items-center justify-between mb-4 pb-2" style={{ borderBottom: `2px solid ${ink}` }}>
              <div className="flex items-center gap-2">
                <span className="block w-3.5 h-3.5" style={{ backgroundColor: column.accent, border: `1.5px solid ${ink}` }} />
                <span className="font-bebas text-2xl tracking-wider">{column.col}</span>
              </div>
              <span className="font-mono text-xs px-2 py-0.5" style={{ backgroundColor: ink, color: bg }}>
                {String(column.cards.length).padStart(2, "0")}
              </span>
            </div>

            <div className="space-y-3">
              {column.cards.map((card) => (
                <motion.div
                  key={card.cliente}
                  {...hardShadow(4, 8, ink)}
                  className="p-3 cursor-grab"
                  style={{ border: `2px solid ${ink}`, backgroundColor: bg }}
                >
                  <div className="font-bebas text-2xl leading-tight tracking-wide mb-1">
                    {card.cliente.toUpperCase()}
                  </div>
                  <div className="text-sm uppercase tracking-wider mb-3 leading-snug">{card.proyecto}</div>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-bebas text-sm flex items-center justify-center w-9 h-9"
                      style={{ backgroundColor: column.accent, color: inkOn(column.accent), border: `1.5px solid ${ink}` }}
                    >
                      {card.avatar}
                    </span>
                    <span
                      className="font-mono text-xs px-2 py-1"
                      style={{
                        backgroundColor: column.col === "REVISIÓN" || column.col === "ENTREGADO" ? lime : "transparent",
                        border: `1.5px solid ${ink}`,
                      }}
                    >
                      {card.deadline}
                    </span>
                  </div>
                </motion.div>
              ))}
              <motion.button
                {...colorFlip(ink, bg)}
                className="w-full py-2.5 font-bebas text-base tracking-widest"
                style={{ border: `2px dashed ${ink}`, color: ink, backgroundColor: "transparent" }}
              >
                + SUMAR
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
