"use client";

import { motion } from "motion/react";
import { palette, inkOn, type HoraRow, type Actividad } from "../_data";
import { useBrutalMotion } from "./use-brutal-motion";
import { StatusChip } from "./StatusChip";

/** Pieza interna: parte de horas facturables + feed de actividad + nota. */
export function Horas({
  horas,
  total,
  actividad,
  nota,
}: {
  horas: HoraRow[];
  total: { hs: string; monto: string };
  actividad: Actividad[];
  nota: { texto: string; firma: string };
}) {
  const { colorFlip, nudge } = useBrutalMotion();
  const { ink, bg, lime } = palette;

  return (
    <section>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <h3 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none mb-1">HORAS · SEMANA 19</h3>
          <p className="text-xs uppercase tracking-widest font-bold opacity-70">06 al 12 de mayo · 4 personas</p>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="font-bebas text-2xl tracking-wide">{total.hs} H</span>
          <span className="text-xs uppercase tracking-widest font-bold">facturables</span>
        </div>
      </div>

      <div className="mb-10" style={{ border: `3px solid ${ink}` }}>
        <div className="grid grid-cols-12 text-xs uppercase tracking-widest font-bold" style={{ backgroundColor: ink, color: bg }}>
          <div className="col-span-4 px-4 py-3.5" style={{ borderRight: `2px solid ${bg}` }}>Cliente / proyecto</div>
          <div className="col-span-2 px-4 py-3.5 text-right" style={{ borderRight: `2px solid ${bg}` }}>HS</div>
          <div className="col-span-3 px-4 py-3.5 text-right hidden sm:block" style={{ borderRight: `2px solid ${bg}` }}>Tarifa</div>
          <div className="col-span-3 px-4 py-3.5">Estado</div>
        </div>

        {horas.map((r, i) => (
          <motion.div
            key={r.cliente}
            {...colorFlip(lime, ink)}
            className="grid grid-cols-12 cursor-pointer"
            style={{ borderTop: i > 0 ? `2px solid ${ink}` : "none", backgroundColor: bg }}
          >
            <div className="col-span-4 px-4 py-4" style={{ borderRight: `2px solid ${ink}` }}>
              <div className="font-bebas text-xl leading-tight tracking-wide">{r.cliente}</div>
              <div className="text-sm uppercase tracking-wider opacity-70 mt-0.5">{r.proyecto}</div>
            </div>
            <div className="col-span-2 px-4 py-4 text-right font-mono font-bold text-base" style={{ borderRight: `2px solid ${ink}` }}>{r.hs}</div>
            <div className="col-span-3 px-4 py-4 text-right font-mono text-base hidden sm:block" style={{ borderRight: `2px solid ${ink}` }}>{r.tarifa}</div>
            <div className="col-span-3 px-4 py-4 flex items-center">
              <StatusChip label={r.estado} fill={r.chip} />
            </div>
          </motion.div>
        ))}

        <div className="grid grid-cols-12 font-bold" style={{ borderTop: `3px solid ${ink}`, backgroundColor: bg }}>
          <div className="col-span-4 px-4 py-4 font-bebas text-2xl tracking-wide" style={{ borderRight: `2px solid ${ink}` }}>TOTAL</div>
          <div className="col-span-2 px-4 py-4 text-right font-mono text-base" style={{ borderRight: `2px solid ${ink}` }}>{total.hs}</div>
          <div className="col-span-3 px-4 py-4 text-right font-mono text-base hidden sm:block" style={{ borderRight: `2px solid ${ink}` }}>{total.monto}</div>
          <div className="col-span-3 px-4 py-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 p-5" style={{ border: `3px solid ${ink}`, backgroundColor: bg }}>
          <div className="flex items-center justify-between mb-4 pb-2" style={{ borderBottom: `2px solid ${ink}` }}>
            <span className="font-bebas text-3xl tracking-wide">ACTIVIDAD</span>
            <span className="font-mono text-xs uppercase opacity-70">en vivo</span>
          </div>
          <ul className="space-y-3.5">
            {actividad.map((a, i) => (
              <motion.li key={i} {...nudge} className="flex items-center gap-3 cursor-pointer">
                <span
                  className="font-bebas text-sm flex items-center justify-center w-9 h-9 flex-shrink-0"
                  style={{ backgroundColor: a.color, color: inkOn(a.color), border: `1.5px solid ${ink}` }}
                >
                  {a.iniciales}
                </span>
                <span className="text-base flex-1 leading-snug">
                  <span className="opacity-70">{a.texto} </span>
                  <span className="font-bebas text-xl tracking-wide">{a.target}</span>
                  <span className="opacity-70"> → </span>
                  <span className="font-mono text-sm">{a.a}</span>
                </span>
                <span className="font-mono text-xs uppercase opacity-50 flex-shrink-0">{a.time}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="p-5 flex flex-col justify-between" style={{ backgroundColor: lime, border: `3px solid ${ink}` }}>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] mb-3 font-bold">Nota al estudio</div>
            <p className="font-bebas text-3xl tracking-wide leading-[0.95]">{nota.texto}</p>
          </div>
          <div className="flex items-center justify-between mt-5">
            <span className="font-mono text-xs uppercase opacity-80">{nota.firma}</span>
            <motion.button
              {...colorFlip(ink, lime)}
              className="px-3.5 py-2 font-bebas text-base tracking-widest"
              style={{ border: `2px solid ${ink}`, backgroundColor: "transparent", color: ink }}
            >
              HECHO ✓
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
