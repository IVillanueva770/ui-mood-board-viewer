"use client";

import { motion } from "motion/react";
import type { Proyecto } from "../_data";
import { palette } from "../_data";
import { useEtherealMotion, useCursorTilt } from "./use-ethereal-motion";
import { MaskHeading } from "./MaskHeading";

/** Pieza externa: showcase de trabajos en grilla asimétrica con hover reveal experimental. */
export function ProyectosGrid({ proyectos }: { proyectos: Proyecto[] }) {
  return (
    <section className="mb-32">
      <div
        className="flex items-end justify-between mb-10 pb-4"
        style={{ borderBottom: `1px solid ${palette.rule}` }}
      >
        <MaskHeading className="font-bebas text-4xl sm:text-6xl tracking-wide leading-none">
          OBRA <em className="italic" style={{ color: palette.accent }}>reciente</em>
        </MaskHeading>
        <p className="text-xs uppercase tracking-[0.3em] hidden sm:block" style={{ color: palette.muted }}>
          pasá el cursor
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 sm:gap-6">
        {proyectos.map((p, i) => (
          <ProyectoCard key={p.id} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProyectoCard({ p, index }: { p: Proyecto; index: number }) {
  const { reveal } = useEtherealMotion();
  const tilt = useCursorTilt(10);

  return (
    <motion.article
      {...reveal(index * 0.08)}
      className={`col-span-12 ${p.span} ${p.offset ?? ""}`}
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="group relative w-full overflow-hidden cursor-pointer"
        style={{ border: `1px solid ${palette.border}` }}
      >
        <div className={`relative ${p.ratio}`} style={{ background: p.tono }}>
          <motion.span
            style={tilt.style}
            className="absolute left-5 bottom-4 font-bebas leading-none select-none"
          >
            <span className="block text-[12vw] md:text-[5rem]" style={{ color: palette.fg, opacity: 0.08 }}>
              {p.num}
            </span>
          </motion.span>

          {/* Velo + ficha que se revela en hover (clip wipe lateral) */}
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileHover={{}}
            className="absolute inset-0 origin-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-x-0 group-hover:scale-x-100"
            style={{ backgroundColor: "rgba(10,10,10,0.78)" }}
          />
          <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end opacity-0 translate-y-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0">
            <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: palette.accent }}>
              {p.formato}
            </p>
            <p className="font-bebas text-3xl sm:text-5xl tracking-wide leading-none" style={{ color: palette.fg }}>
              {p.titulo}
            </p>
            <p className="text-sm mt-3" style={{ color: palette.soft }}>
              {p.cliente} · {p.tipo}
            </p>
          </div>
        </div>

        <div
          className="flex items-baseline justify-between px-4 py-3"
          style={{ borderTop: `1px solid ${palette.border}` }}
        >
          <span className="font-bebas text-xl tracking-wide" style={{ color: palette.fg }}>
            {p.titulo}
          </span>
          <span className="text-xs font-mono" style={{ color: palette.faint }}>
            &apos;{p.year} · {p.tipo}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
