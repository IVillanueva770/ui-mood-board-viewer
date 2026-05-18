"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { palette, type Plan } from "../_data";
import { useSaasMotion } from "./use-saas-motion";

type Ciclo = "mensual" | "anual";

function precioLabel(plan: Plan, ciclo: Ciclo) {
  if (plan.precioMensual === 0) return { monto: "Gratis", sufijo: "para siempre" };
  if (plan.precioMensual < 0) return { monto: "A medida", sufijo: "según volumen" };
  const mensual = plan.precioMensual;
  const anualMes = Math.round(mensual * 10 / 12); // 2 meses gratis al pagar anual
  return ciclo === "mensual"
    ? { monto: `$ ${mensual}`, sufijo: "por usuario / mes" }
    : { monto: `$ ${anualMes}`, sufijo: "por usuario / mes, anual" };
}

/**
 * Pieza externa (pricing): 3 tiers con toggle mensual/anual REAL (estado) y
 * plan destacado. El anual aplica "2 meses gratis" calculado, no hardcodeado.
 */
export function Pricing({ planes }: { planes: Plan[] }) {
  const { reduce, reveal, groupProps, groupItem, tap } = useSaasMotion();
  const { accent, text, muted, mutedSoft, border, card, surface, ok } = palette;
  const [ciclo, setCiclo] = useState<Ciclo>("anual");

  return (
    <section>
      <motion.div {...reveal()} className="text-center max-w-xl mx-auto mb-9">
        <h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3"
          style={{ color: text }}
        >
          Precio que escala con vos.
        </h2>
        <p className="text-base mb-7" style={{ color: muted }}>
          Empezás gratis. Pagás cuando el producto ya te está dando plata.
        </p>

        <div
          className="inline-flex items-center p-1 rounded-full"
          style={{ backgroundColor: surface, border: `1px solid ${border}` }}
        >
          {(["mensual", "anual"] as Ciclo[]).map((c) => {
            const activo = ciclo === c;
            return (
              <button
                key={c}
                onClick={() => setCiclo(c)}
                className="relative px-4 py-1.5 text-sm font-medium rounded-full"
                style={{ color: activo ? "#fff" : muted }}
              >
                {activo && (
                  <motion.span
                    layoutId={reduce ? undefined : "pricing-toggle"}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full -z-10"
                    style={{ backgroundColor: text }}
                  />
                )}
                {c === "mensual" ? "Mensual" : "Anual"}
                {c === "anual" && (
                  <span
                    className="ml-1.5 text-[11px] font-semibold"
                    style={{ color: activo ? "#a5f3c4" : ok }}
                  >
                    −17%
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        {...groupProps}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch"
      >
        {planes.map((p) => {
          const { monto, sufijo } = precioLabel(p, ciclo);
          return (
            <motion.div
              key={p.id}
              variants={groupItem}
              className="relative rounded-2xl p-6 flex flex-col"
              style={{
                backgroundColor: p.destacado ? text : card,
                border: p.destacado ? `1px solid ${text}` : `1px solid ${border}`,
                boxShadow: p.destacado
                  ? "0 24px 50px -26px rgba(94,106,210,0.55)"
                  : "none",
              }}
            >
              {p.destacado && (
                <span
                  className="absolute -top-3 left-6 px-2.5 py-0.5 text-[11px] font-semibold rounded-full"
                  style={{ background: palette.gradient, color: "#fff" }}
                >
                  Más elegido
                </span>
              )}
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: p.destacado ? "#fff" : text }}
              >
                {p.nombre}
              </p>
              <p
                className="text-xs mb-5"
                style={{ color: p.destacado ? "#cbd5e1" : muted }}
              >
                {p.desc}
              </p>
              <div className="mb-6">
                <span
                  className="text-3xl font-semibold tracking-tight"
                  style={{ color: p.destacado ? "#fff" : text }}
                >
                  {monto}
                </span>
                <span
                  className="block text-[11px] mt-1"
                  style={{ color: p.destacado ? "#94a3b8" : mutedSoft }}
                >
                  {sufijo}
                </span>
              </div>
              <ul className="space-y-2.5 mb-7 flex-1">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: p.destacado ? "#e2e8f0" : muted }}
                  >
                    <span style={{ color: p.destacado ? "#a5b4fc" : accent }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.button
                {...tap}
                whileHover={reduce ? undefined : { y: -2 }}
                className="w-full py-2.5 rounded-lg text-sm font-medium"
                style={
                  p.destacado
                    ? { background: palette.gradient, color: "#fff" }
                    : { backgroundColor: text, color: "#fff" }
                }
              >
                {p.cta}
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
