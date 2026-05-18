"use client";

import { motion } from "motion/react";
import type { Asset } from "../_data";
import { palette } from "../_data";
import { useEtherealMotion, useCursorTilt } from "./use-ethereal-motion";
import { MaskHeading } from "./MaskHeading";

/** Pieza interna: galería de piezas/experimentos en grilla asimétrica. */
export function GaleriaAssets({ assets }: { assets: Asset[] }) {
  return (
    <section>
      <div className="mb-8">
        <p className="text-[10px] uppercase tracking-[0.4em] mb-3" style={{ color: palette.accent }}>
          galería / assets
        </p>
        <MaskHeading className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none">
          PIEZAS SUELTAS DEL ESTUDIO.
        </MaskHeading>
      </div>

      <div className="grid grid-cols-12 gap-4 sm:gap-6">
        {assets.map((a, i) => (
          <AssetCard key={a.id} a={a} index={i} />
        ))}
      </div>
    </section>
  );
}

function AssetCard({ a, index }: { a: Asset; index: number }) {
  const { reveal } = useEtherealMotion();
  const tilt = useCursorTilt(9);

  return (
    <motion.div {...reveal(index * 0.07)} className={`col-span-12 ${a.span}`}>
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="group relative h-full cursor-pointer transition-colors"
        style={{ border: `1px solid ${palette.border}` }}
      >
        <div className="aspect-[16/9] relative overflow-hidden" style={{ background: a.tono }}>
          <motion.span
            style={tilt.style}
            className="absolute right-5 bottom-3 font-bebas text-[5rem] leading-none select-none"
          >
            <span style={{ color: palette.fg, opacity: 0.07 }}>{a.codigo}</span>
          </motion.span>
          <span
            className="absolute left-5 top-4 text-[10px] uppercase tracking-[0.3em]"
            style={{ color: palette.accent }}
          >
            {a.tipo}
          </span>
        </div>
        <div
          className="flex items-baseline justify-between px-5 py-4"
          style={{ borderTop: `1px solid ${palette.border}` }}
        >
          <h3
            className="font-bebas text-xl sm:text-2xl tracking-wide leading-none transition-all group-hover:[font-style:italic]"
            style={{ color: palette.fg }}
          >
            {a.titulo}
          </h3>
          <span className="text-xs font-mono shrink-0 ml-4" style={{ color: palette.faint }}>
            {a.autor}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
