"use client";

import { motion } from "motion/react";
import { frost, type ClientAccount } from "../_data";
import { useFrostMotion } from "./use-frost-motion";
import { GhostButton } from "./GhostButton";

/** Pieza interna: cuentas de clientes en cards frosted con glow del accent. */
export function ClientsGrid({ clientes }: { clientes: ClientAccount[] }) {
  const { sectionReveal, frostLift } = useFrostMotion();

  return (
    <motion.section {...sectionReveal}>
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] mb-3" style={{ color: frost.textMute }}>
            Clients
          </p>
          <h2 className="text-3xl sm:text-4xl font-light leading-tight" style={{ letterSpacing: "-0.02em" }}>
            <em className="italic" style={{ color: frost.violet }}>Long-term</em> partners.
          </h2>
        </div>
        <GhostButton>+ Add client</GhostButton>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {clientes.map((c) => (
          <motion.div
            key={c.nombre}
            {...frostLift(c.glow)}
            className="p-5 rounded-2xl cursor-pointer relative overflow-hidden"
            style={{
              backgroundColor: frost.surface,
              backdropFilter: frost.blur,
              border: `1px solid ${frost.border}`,
            }}
          >
            <div
              aria-hidden
              className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-30 blur-3xl pointer-events-none"
              style={{ backgroundColor: c.glow }}
            />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] mb-2" style={{ color: frost.textMute }}>
                {c.year}
              </p>
              <h3 className="text-2xl font-light mb-1">{c.nombre}</h3>
              <p className="text-xs" style={{ color: frost.textMute }}>{c.sector}</p>

              <div
                className="mt-6 pt-4 grid grid-cols-2 gap-3"
                style={{ borderTop: `1px solid ${frost.border}` }}
              >
                <div>
                  <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: frost.textFaint }}>
                    Projects
                  </p>
                  <p className="text-2xl font-light tabular-nums">{String(c.deals).padStart(2, "0")}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: frost.textFaint }}>
                    Total billed
                  </p>
                  <p className="text-2xl font-light tabular-nums" style={{ fontFamily: frost.mono }}>
                    {c.total}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
