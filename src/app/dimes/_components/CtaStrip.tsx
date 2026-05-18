"use client";

import { palette } from "../_data";
import { HardButton } from "./HardButton";

/** Pieza externa: CTA agresivo de cierre (no se suaviza — polariza a propósito). */
export function CtaStrip() {
  const { ink, bg, lime } = palette;

  return (
    <section
      className="p-6 sm:p-10 text-center"
      style={{ backgroundColor: ink, color: bg, border: `3px solid ${ink}` }}
    >
      <h3 className="font-bebas text-4xl sm:text-6xl mb-4 tracking-wide">¿TE TIRA?</h3>
      <p className="mb-6 max-w-xl mx-auto font-medium">
        Coordinamos una llamada de 20 minutos sin compromiso. Te decimos qué se puede
        y qué no — sin vueltas.
      </p>
      <div className="flex justify-center">
        <HardButton variant="accent" accent={lime} className="text-2xl px-8 py-4">
          Agendar llamada
        </HardButton>
      </div>
    </section>
  );
}
