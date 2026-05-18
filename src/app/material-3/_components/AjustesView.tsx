"use client";

import { useState } from "react";
import { Ripple } from "@/components/ripple";
import { m3, pesos, type Ajustes } from "../_data";
import { M3Switch, M3Slider, M3Segmented } from "./Controls";

/**
 * Vista interna 4 — Ajustes. Controles Material You reales (switch, slider,
 * segmented) con estado local autocontenido a partir del mock por props.
 */
export function AjustesView({ ajustes }: { ajustes: Ajustes }) {
  const [s, setS] = useState<Ajustes>(ajustes);
  const set = <K extends keyof Ajustes>(k: K, v: Ajustes[K]) => setS((p) => ({ ...p, [k]: v }));

  return (
    <div className="h-full overflow-y-auto px-4 pt-5 pb-28">
      <h1 className="text-2xl font-medium tracking-tight mb-5" style={{ color: m3.onSurface }}>Ajustes</h1>

      {/* Perfil */}
      <div
        className="flex items-center gap-4 rounded-3xl p-5 mb-5"
        style={{ backgroundColor: m3.secondaryContainer, color: m3.onSecondaryContainer }}
      >
        <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-medium" style={{ backgroundColor: m3.primary, color: m3.onPrimary }}>N</div>
        <div className="flex-1 min-w-0">
          <p className="font-medium">Nacho Villanueva</p>
          <p className="text-xs opacity-80">nacho@example.com</p>
        </div>
        <span>›</span>
      </div>

      {/* Presupuesto — slider */}
      <div className="rounded-3xl px-5 py-2 mb-4" style={{ backgroundColor: m3.surface, border: `1px solid ${m3.outlineVariant}` }}>
        <M3Slider
          label="Presupuesto mensual"
          value={s.presupuesto}
          min={100000}
          max={800000}
          step={10000}
          onChange={(v) => set("presupuesto", v)}
          format={pesos}
        />
        <div style={{ borderTop: `1px solid ${m3.outlineVariant}` }}>
          <M3Segmented
            label="El mes empieza el"
            value={s.inicioMes}
            onChange={(v) => set("inicioMes", v)}
            options={[
              { id: "1", label: "Día 1" },
              { id: "15", label: "Día 15" },
            ]}
          />
        </div>
      </div>

      {/* Switches Material You */}
      <p className="text-xs font-semibold uppercase tracking-wider mb-1 px-1" style={{ color: m3.onSurfaceVariant }}>Notificaciones</p>
      <div className="rounded-3xl px-5 mb-4 divide-y" style={{ backgroundColor: m3.surface, border: `1px solid ${m3.outlineVariant}`, borderColor: m3.outlineVariant }}>
        <M3Switch label="Alerta de gastos" hint="Avisar cuando una categoría se pasa del límite" checked={s.alertaGastos} onChange={(v) => set("alertaGastos", v)} />
        <M3Switch label="Resumen semanal" hint="Cada lunes, un repaso de tu semana" checked={s.resumenSemanal} onChange={(v) => set("resumenSemanal", v)} />
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider mb-1 px-1" style={{ color: m3.onSurfaceVariant }}>Preferencias</p>
      <div className="rounded-3xl px-5 mb-5 divide-y" style={{ backgroundColor: m3.surface, border: `1px solid ${m3.outlineVariant}`, borderColor: m3.outlineVariant }}>
        <M3Switch label="Modo oscuro" hint="Seguir el tema del sistema" checked={s.modoOscuro} onChange={(v) => set("modoOscuro", v)} />
        <M3Switch label="Desbloqueo con biometría" hint="Pedir huella al abrir la app" checked={s.biometria} onChange={(v) => set("biometria", v)} />
      </div>

      {/* Filas Ripple */}
      <div className="space-y-1 mb-5">
        {[
          { label: "Cuenta y seguridad", icon: "👤" },
          { label: "Privacidad", icon: "🔒" },
          { label: "Exportar datos", icon: "📤" },
          { label: "Ayuda y soporte", icon: "❓" },
        ].map((it) => (
          <Ripple
            key={it.label}
            as="div"
            color="rgba(103,80,164,0.18)"
            className="rounded-2xl p-3.5 flex items-center gap-3 cursor-pointer"
            style={{ backgroundColor: m3.surface, border: `1px solid ${m3.outlineVariant}` }}
          >
            <span className="text-lg">{it.icon}</span>
            <span className="flex-1 text-sm font-medium" style={{ color: m3.onSurface }}>{it.label}</span>
            <span style={{ color: m3.onSurfaceVariant }}>›</span>
          </Ripple>
        ))}
      </div>

      <Ripple
        as="button"
        color="rgba(179,38,30,0.16)"
        className="w-full rounded-full py-3 text-sm font-semibold"
        style={{ color: m3.error, border: `1px solid ${m3.outline}` }}
      >
        Cerrar sesión
      </Ripple>
    </div>
  );
}
