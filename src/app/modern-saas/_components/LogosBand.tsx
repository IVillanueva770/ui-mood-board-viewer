"use client";

import { motion } from "motion/react";
import { palette, type Logo } from "../_data";
import { useSaasMotion } from "./use-saas-motion";

/**
 * Pieza externa (social proof): banda de logos wordmark + un stat de prueba.
 * Reveal escalonado al entrar — refuerza la firma de scroll del mood.
 */
export function LogosBand({
  logos,
  proofStat,
}: {
  logos: Logo[];
  proofStat: { valor: string; label: string };
}) {
  const { reveal, groupProps, groupItem } = useSaasMotion();
  const { text, muted, mutedSoft, border, surface } = palette;

  return (
    <motion.section
      {...reveal()}
      className="rounded-2xl px-6 py-8 sm:px-10"
      style={{ backgroundColor: surface, border: `1px solid ${border}` }}
    >
      <div className="flex flex-wrap items-center justify-between gap-6">
        <p className="text-xs uppercase tracking-[0.2em]" style={{ color: mutedSoft }}>
          Equipos que ya migraron su stack
        </p>
        <p className="text-sm" style={{ color: muted }}>
          <span className="font-semibold tabular-nums" style={{ color: text }}>
            {proofStat.valor}
          </span>{" "}
          {proofStat.label}
        </p>
      </div>

      <motion.div
        {...groupProps}
        className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-5"
      >
        {logos.map((l) => (
          <motion.div key={l.nombre} variants={groupItem} className="flex flex-col">
            <span
              className="text-base font-semibold tracking-tight"
              style={{ color: text }}
            >
              {l.nombre}
            </span>
            <span className="text-[11px]" style={{ color: mutedSoft }}>
              {l.rubro}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
