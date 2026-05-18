"use client";

import { motion } from "motion/react";
import { tokens } from "../_data";
import { useSteepMotion } from "./use-steep-motion";
import { areaPath, linePath } from "./charts";

/**
 * Externo · pieza 1: hero de plataforma BI. Serif Cormorant (gravitas) en el
 * headline, claim analytics, dos CTAs (uno con mist en hover), y un visual =
 * mini-dashboard enmarcado con un chart de área que se dibuja al entrar.
 */
export function Hero() {
  const { reveal, press, mistBtn, draw, fill } = useSteepMotion();
  const W = 460;
  const H = 150;
  const serie = [42, 48, 46, 58, 64, 60, 74, 82, 88, 96, 104, 118];

  return (
    <section className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center pt-4">
      <div>
        <motion.p
          {...reveal(0)}
          className="text-xs uppercase tracking-[0.3em] mb-7"
          style={{ color: tokens.terracotta }}
        >
          analytics platform · beta abierta
        </motion.p>
        <motion.h1
          {...reveal(1)}
          className="font-cormorant text-5xl sm:text-7xl font-medium leading-[1.04] mb-7"
          style={{ letterSpacing: "-0.015em", color: tokens.ink }}
        >
          Steep — <em className="italic" style={{ color: tokens.terracotta }}>medí</em>
          <br />
          lo que importa.
        </motion.h1>
        <motion.p
          {...reveal(2)}
          className="text-lg leading-relaxed max-w-xl mb-10"
          style={{ color: tokens.slate }}
        >
          Una herramienta de BI que hace mejores preguntas. Conectá tu warehouse,
          definí una métrica una vez y compartila en todos lados — sin perder el
          contexto.
        </motion.p>
        <motion.div {...reveal(3)} className="flex items-center gap-4 flex-wrap">
          <motion.button
            {...press}
            className="px-7 py-3.5 text-sm font-medium rounded-md"
            style={{ backgroundColor: tokens.ink, color: tokens.canvas }}
          >
            Empezar gratis
          </motion.button>
          <motion.button
            {...mistBtn}
            className="px-7 py-3.5 text-sm font-medium rounded-md"
            style={{ color: tokens.ink, border: `1px solid ${tokens.border}` }}
          >
            Hablar con el equipo →
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        {...reveal(2)}
        className="p-6 rounded-2xl"
        style={{
          backgroundColor: tokens.canvas,
          border: `1px solid ${tokens.border}`,
          boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 18px 44px rgba(0,0,0,0.05)",
        }}
      >
        <div className="flex items-baseline justify-between mb-1">
          <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: tokens.terracotta }}>
            Ingresos · 30 días
          </p>
          <span className="text-[11px] font-mono" style={{ color: tokens.slate }}>
            +22,4%
          </span>
        </div>
        <p className="font-cormorant text-4xl mb-4" style={{ color: tokens.ink }}>
          $ 184,2k
        </p>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 150 }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="steep-hero-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={tokens.mist} stopOpacity="0.9" />
              <stop offset="100%" stopColor={tokens.mist} stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75].map((g) => (
            <line key={g} x1="0" y1={H * g} x2={W} y2={H * g} stroke={tokens.border} strokeWidth="1" />
          ))}
          <motion.path {...fill(1)} d={areaPath(serie, W, H, 8)} fill="url(#steep-hero-grad)" />
          <motion.path
            {...draw(0.25, 1.3)}
            d={linePath(serie, W, H, 8)}
            fill="none"
            stroke={tokens.terracotta}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="grid grid-cols-3 gap-3 mt-5">
          {[
            { k: "Activos", v: "12.481" },
            { k: "Conversión", v: "3,41%" },
            { k: "Retención", v: "62%" },
          ].map((m) => (
            <div
              key={m.k}
              className="px-3 py-3 rounded-lg"
              style={{ backgroundColor: tokens.surface }}
            >
              <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: tokens.terracotta }}>
                {m.k}
              </p>
              <p className="font-cormorant text-xl" style={{ color: tokens.ink }}>
                {m.v}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
