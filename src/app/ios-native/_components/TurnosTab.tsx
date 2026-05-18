"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { palette, type Turno, type TurnoEstado } from "../_data";
import { useIosMotion } from "./use-ios-motion";
import { BottomSheet } from "./BottomSheet";

const ESTADO: Record<TurnoEstado, { label: string; bg: string; fg: string }> = {
  hoy: { label: "Hoy", bg: "#007aff", fg: "#ffffff" },
  confirmado: { label: "Confirmado", bg: "#e3f7e8", fg: "#1f8a3b" },
  pendiente: { label: "Por confirmar", bg: "#fff3e0", fg: "#b25e00" },
};

/**
 * Pieza interna (tab Turnos): próximos turnos con kine/médico. El de hoy va
 * destacado arriba. Tocar un turno abre el bottom-sheet con detalle y acciones
 * (confirmar / reprogramar / cancelar) — slide-up nativo, firma del mood.
 */
export function TurnosTab({ turnos }: { turnos: Turno[] }) {
  const { tap, enter, reduce } = useIosMotion();
  const { text, muted, secondary, groupBg, card, accent, red } = palette;
  const [sel, setSel] = useState<Turno | null>(null);

  const hoy = turnos.find((t) => t.estado === "hoy");
  const resto = turnos.filter((t) => t.estado !== "hoy");

  return (
    <div className="p-5">
      <h1 className="text-[28px] font-bold tracking-tight mb-0.5" style={{ color: text }}>
        Turnos
      </h1>
      <p className="text-sm mb-6" style={{ color: muted }}>
        {turnos.length} próximos · 1 hoy
      </p>

      {hoy && (
        <motion.div
          {...enter(0)}
          onClick={() => setSel(hoy)}
          whileTap={reduce ? undefined : { scale: 0.98 }}
          className="rounded-2xl p-5 mb-5 cursor-pointer"
          style={{ background: "linear-gradient(135deg,#007aff,#5856d6)", color: "#fff" }}
        >
          <p className="text-[11px] uppercase tracking-wider opacity-80 mb-2">
            Tu próximo turno · hoy {hoy.hora}
          </p>
          <p className="text-xl font-bold">{hoy.profesional}</p>
          <p className="text-sm opacity-90 mb-3">
            {hoy.especialidad} · {hoy.lugar}
          </p>
          {hoy.nota && (
            <p
              className="text-xs rounded-lg px-3 py-2"
              style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
            >
              💡 {hoy.nota}
            </p>
          )}
        </motion.div>
      )}

      <p className="text-[11px] uppercase tracking-wider font-semibold mb-3" style={{ color: muted }}>
        Próximos
      </p>
      <div className="space-y-3">
        {resto.map((t, i) => {
          const est = ESTADO[t.estado];
          return (
            <motion.div
              key={t.id}
              {...enter(i + 1)}
              onClick={() => setSel(t)}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="flex items-center gap-3 p-3 rounded-2xl cursor-pointer"
              style={{ backgroundColor: groupBg }}
            >
              <span
                className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                style={{ backgroundColor: t.color }}
              >
                {t.inicial}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold leading-tight" style={{ color: text }}>
                  {t.profesional}
                </p>
                <p className="text-xs mt-0.5" style={{ color: muted }}>
                  {t.dia} · {t.hora} · {t.lugar}
                </p>
              </div>
              <span
                className="text-[10px] font-semibold px-2 py-1 rounded-full shrink-0"
                style={{ backgroundColor: est.bg, color: est.fg }}
              >
                {est.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      <BottomSheet open={!!sel} onClose={() => setSel(null)} title={sel?.profesional}>
        {sel && (
          <div>
            <div className="rounded-2xl p-4 mb-4" style={{ backgroundColor: groupBg }}>
              {[
                ["Especialidad", sel.especialidad],
                ["Cuándo", `${sel.dia} · ${sel.hora}`],
                ["Dónde", sel.lugar],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  className="flex items-center justify-between py-2 text-sm"
                  style={{ borderTop: i > 0 ? `0.5px solid ${palette.sep}` : "none" }}
                >
                  <span style={{ color: muted }}>{k}</span>
                  <span className="font-semibold" style={{ color: text }}>{v}</span>
                </div>
              ))}
            </div>

            {sel.nota && (
              <p
                className="text-xs rounded-xl px-3 py-2.5 mb-4"
                style={{ backgroundColor: "#fff3e0", color: "#b25e00" }}
              >
                💡 {sel.nota}
              </p>
            )}

            <div className="space-y-2.5">
              <motion.button
                {...tap}
                onClick={() => setSel(null)}
                className="w-full py-3 rounded-xl text-sm font-semibold text-white"
                style={{ backgroundColor: accent }}
              >
                {sel.estado === "pendiente" ? "Confirmar turno" : "Agregar al calendario"}
              </motion.button>
              <motion.button
                {...tap}
                onClick={() => setSel(null)}
                className="w-full py-3 rounded-xl text-sm font-semibold"
                style={{ backgroundColor: groupBg, color: secondary }}
              >
                Reprogramar
              </motion.button>
              <motion.button
                {...tap}
                onClick={() => setSel(null)}
                className="w-full py-3 rounded-xl text-sm font-semibold"
                style={{ backgroundColor: card, color: red }}
              >
                Cancelar turno
              </motion.button>
            </div>
          </div>
        )}
      </BottomSheet>
    </div>
  );
}
