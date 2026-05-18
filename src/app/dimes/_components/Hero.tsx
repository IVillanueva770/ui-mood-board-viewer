"use client";

import { motion } from "motion/react";
import { palette } from "../_data";
import { useBrutalMotion } from "./use-brutal-motion";
import { HardButton } from "./HardButton";

/** Pieza externa (hero): bloque brutalist gigante, tipografía protagonista. */
export function Hero() {
  const { hardShadow } = useBrutalMotion();
  const { ink, bg, orange } = palette;

  return (
    <section>
      <motion.div
        {...hardShadow(8, 14, ink)}
        className="p-6 sm:p-10 mb-8"
        style={{ border: `3px solid ${ink}`, backgroundColor: bg }}
      >
        <p className="text-xs uppercase tracking-[0.3em] mb-4 font-bold">Estudio · diseño · marca</p>
        <h1 className="font-bebas text-6xl sm:text-9xl leading-[0.9] tracking-wide mb-6">
          MARCAS <br />
          <span style={{ color: orange }}>QUE NO PASAN</span>
          <br />
          DESAPERCIBIDAS.
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl leading-snug font-medium">
          Hacemos branding crudo, sin filtros y sin frases hechas. Si querés un sitio
          que parezca otro más, no llames.
        </p>
      </motion.div>

      <div className="flex flex-wrap items-center gap-4">
        <HardButton variant="solid" accent={orange} className="text-2xl px-8 py-4">
          Ver proyectos
        </HardButton>
        <HardButton variant="outline" className="text-2xl px-8 py-4">
          Escribinos →
        </HardButton>
      </div>
    </section>
  );
}
