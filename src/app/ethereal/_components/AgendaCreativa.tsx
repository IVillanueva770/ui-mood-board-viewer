"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { Hito, TipoHito } from "../_data";
import { palette } from "../_data";
import { useEtherealMotion } from "./use-ethereal-motion";
import { MaskHeading } from "./MaskHeading";

const GLIFO: Record<TipoHito, string> = {
  inicio: "◷",
  review: "◑",
  entrega: "●",
};

/** Pieza interna: agenda creativa por hitos (no calendario corporativo). */
export function AgendaCreativa({ hitos }: { hitos: Hito[] }) {
  const { reduce, drift } = useEtherealMotion();
  const [hechos, setHechos] = useState<Set<string>>(
    () => new Set(hitos.filter((h) => h.hecho).map((h) => h.id)),
  );

  const toggle = (id: string) =>
    setHechos((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const restantes = hitos.length - hechos.size;

  return (
    <section>
      <div
        className="mb-10 flex items-end justify-between flex-wrap gap-3 pb-4"
        style={{ borderBottom: `1px solid ${palette.rule}` }}
      >
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] mb-2" style={{ color: palette.accent }}>
            agenda / hitos
          </p>
          <MaskHeading className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none">
            LO QUE VIENE, SIN GRILLA.
          </MaskHeading>
        </div>
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: palette.muted }}>
          {restantes} por cerrar
        </p>
      </div>

      <div className="relative pl-8">
        <span
          aria-hidden
          className="absolute left-[5px] top-2 bottom-2 w-px"
          style={{ backgroundColor: palette.border }}
        />
        {hitos.map((h, i) => {
          const done = hechos.has(h.id);
          return (
            <motion.button
              key={h.id}
              {...drift(i * 0.07)}
              onClick={() => toggle(h.id)}
              whileHover={reduce ? undefined : { x: 6 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative block w-full text-left grid grid-cols-12 gap-4 py-6 cursor-pointer"
              style={{ borderBottom: `1px solid ${palette.border}` }}
            >
              <span
                aria-hidden
                className="absolute -left-8 top-7 text-sm leading-none"
                style={{ color: done ? palette.accent : palette.faint }}
              >
                {GLIFO[h.tipo]}
              </span>
              <div className="col-span-3 md:col-span-2 text-xs font-mono self-center" style={{ color: palette.muted }}>
                {h.fecha}
              </div>
              <div className="col-span-9 md:col-span-7 self-center">
                <h3
                  className="font-bebas text-2xl sm:text-3xl tracking-wide leading-none transition-all"
                  style={{
                    color: done ? palette.faint : palette.fg,
                    textDecoration: done ? "line-through" : "none",
                  }}
                >
                  {h.titulo}
                </h3>
                <p className="text-xs mt-1.5 uppercase tracking-[0.2em]" style={{ color: palette.accent }}>
                  {h.tipo} · {h.proyecto}
                </p>
              </div>
              <div
                className="col-span-12 md:col-span-3 text-xs uppercase tracking-[0.2em] self-center md:text-right"
                style={{ color: done ? palette.accent : palette.muted }}
              >
                {done ? "cerrado ✓" : "marcar hecho"}
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
