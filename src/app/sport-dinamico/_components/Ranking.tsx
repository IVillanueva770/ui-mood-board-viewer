"use client";

import { motion } from "motion/react";
import { palette, type RankingAtleta } from "../_data";
import { useSportMotion } from "./use-sport-motion";
import { SectionHead } from "./SectionHead";
import { Counter } from "./Counter";

/** Pieza interna: leaderboard de comunidad tipo Strava, tu posición destacada. */
export function Ranking({ atletas }: { atletas: RankingAtleta[] }) {
  const { slideIn, charge } = useSportMotion();

  return (
    <section>
      <SectionHead
        kicker="Comunidad · esta semana"
        title="RANKING"
        right={
          <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: palette.muted }}>
            puntos = volumen + constancia
          </span>
        }
      />

      <div className="space-y-2">
        {atletas.map((a, i) => {
          const podio = a.pos <= 3;
          return (
            <motion.div
              key={a.pos}
              {...slideIn(i * 0.05, a.vos ? 60 : -45)}
              {...charge}
              className="grid grid-cols-12 gap-3 p-4 items-center cursor-pointer"
              style={{
                backgroundColor: a.vos ? palette.surfaceAlt : palette.surface,
                border: `1px solid ${a.vos ? palette.orange : palette.border}`,
              }}
            >
              <div
                className="col-span-2 sm:col-span-1 font-bebas text-3xl leading-none"
                style={{ color: podio ? palette.orange : palette.faint }}
              >
                {a.pos}
              </div>
              <div className="col-span-1 hidden sm:block">
                <span
                  className="w-9 h-9 flex items-center justify-center font-bebas text-xs tracking-wider"
                  style={{
                    backgroundColor: a.vos ? palette.orange : palette.bg,
                    color: a.vos ? palette.bg : palette.muted,
                    border: `1px solid ${a.vos ? palette.orange : palette.border}`,
                  }}
                >
                  {a.iniciales}
                </span>
              </div>
              <div className="col-span-5 sm:col-span-5 min-w-0">
                <p className="font-medium text-sm truncate" style={{ color: a.vos ? palette.orange : palette.ink }}>
                  {a.nombre} {podio && <span>{["🥇", "🥈", "🥉"][a.pos - 1]}</span>}
                </p>
                <p className="text-[10px] uppercase tracking-[0.15em]" style={{ color: palette.muted }}>
                  {a.ciudad}
                </p>
              </div>
              <div className="col-span-3 sm:col-span-3 text-right">
                <p className="font-bebas text-2xl tracking-wide leading-none">
                  <Counter to={a.puntos} />
                </p>
                <p className="text-[9px] uppercase tracking-widest" style={{ color: palette.faint }}>
                  puntos
                </p>
              </div>
              <div className="col-span-2 sm:col-span-2 text-right">
                <span
                  className="text-[11px] font-bold font-bebas tracking-wide"
                  style={{
                    color:
                      a.delta > 0 ? palette.green : a.delta < 0 ? palette.red : palette.faint,
                  }}
                >
                  {a.delta > 0 ? `▲ ${a.delta}` : a.delta < 0 ? `▼ ${Math.abs(a.delta)}` : "—"}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
