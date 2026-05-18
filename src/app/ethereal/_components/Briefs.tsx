"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Brief, EstadoBrief } from "../_data";
import { palette } from "../_data";
import { useEtherealMotion } from "./use-ethereal-motion";
import { MaskHeading } from "./MaskHeading";

type Filtro = EstadoBrief | "todos";
const FILTROS: Filtro[] = ["todos", "abierto", "en revisión", "aprobado"];

/** Pieza interna: briefs de cliente con filtro por estado y nota expandible. */
export function Briefs({ briefs }: { briefs: Brief[] }) {
  const { reduce, drift } = useEtherealMotion();
  const [filtro, setFiltro] = useState<Filtro>("todos");
  const [abierto, setAbierto] = useState<string | null>(briefs[0]?.id ?? null);

  const visibles = filtro === "todos" ? briefs : briefs.filter((b) => b.estado === filtro);

  return (
    <section>
      <div className="mb-8 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4">
          <p className="text-[10px] uppercase tracking-[0.4em] mb-3" style={{ color: palette.accent }}>
            briefs / del cliente
          </p>
        </div>
        <div className="col-span-12 md:col-span-8 max-w-2xl">
          <MaskHeading className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none">
            LO QUE PIDIERON, ANTES DE LA OBRA.
          </MaskHeading>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
        {FILTROS.map((f) => {
          const activo = f === filtro;
          return (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className="text-xs uppercase tracking-[0.25em] pb-1 transition-colors"
              style={{
                color: activo ? palette.accent : palette.muted,
                borderBottom: `1px solid ${activo ? palette.accent : "transparent"}`,
                fontStyle: activo ? "italic" : "normal",
              }}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="space-y-0">
        <AnimatePresence initial={false} mode="popLayout">
          {visibles.map((b, i) => {
            const open = abierto === b.id;
            return (
              <motion.div
                key={b.id}
                layout
                {...drift(i * 0.06)}
                exit={{ opacity: 0 }}
                onClick={() => setAbierto(open ? null : b.id)}
                className="grid grid-cols-12 gap-4 py-6 cursor-pointer"
                style={{ borderBottom: `1px solid ${palette.border}` }}
              >
                <div className="col-span-2 md:col-span-1 text-xs font-mono" style={{ color: palette.faint }}>
                  {b.codigo}
                </div>
                <div className="col-span-10 md:col-span-7">
                  <h3
                    className="font-bebas text-2xl sm:text-3xl tracking-wide leading-none"
                    style={{ color: palette.fg, fontStyle: open ? "italic" : "normal" }}
                  >
                    {b.cliente}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: palette.soft }}>{b.pedido}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {b.mood.map((m) => (
                      <span
                        key={m}
                        className="text-[10px] uppercase tracking-[0.2em] px-2 py-1"
                        style={{ color: palette.muted, border: `1px solid ${palette.border}` }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: reduce ? 0.2 : 0.55, ease: [0.16, 1, 0.3, 1] }}
                        className="text-sm leading-relaxed mt-4 overflow-hidden"
                        style={{ color: palette.soft, fontStyle: "italic" }}
                      >
                        {b.nota}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div className="col-span-7 md:col-span-2 text-xs self-start" style={{ color: palette.muted }}>
                  due {b.deadline}
                </div>
                <div
                  className="col-span-5 md:col-span-2 text-xs uppercase tracking-[0.2em] text-right self-start"
                  style={{ color: b.estado === "aprobado" ? palette.accent : palette.muted }}
                >
                  {b.estado}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {visibles.length === 0 && (
        <p className="text-sm py-12 text-center" style={{ color: palette.muted }}>
          Ningún brief en ese estado todavía.
        </p>
      )}
    </section>
  );
}
