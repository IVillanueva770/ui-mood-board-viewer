"use client";

import { m3, elevation, type ScreenSpec } from "../_data";

/**
 * Mini-pantalla estilizada para el lado externo (Play Store): la usa el hero
 * como preview y el carrusel de capturas. Presentacional puro — recibe un
 * `ScreenSpec` por props, no conoce datos del dominio.
 */
export function ScreenMock({ spec, width = 168 }: { spec: ScreenSpec; width?: number }) {
  return (
    <div
      className="shrink-0 rounded-[28px] overflow-hidden"
      style={{
        width,
        backgroundColor: m3.surface,
        border: `1px solid ${m3.outlineVariant}`,
        boxShadow: elevation(3),
      }}
    >
      {/* Status bar Android */}
      <div className="flex items-center justify-between px-4 pt-2.5 pb-1 text-[9px] font-medium" style={{ color: m3.onSurfaceVariant }}>
        <span>9:41</span>
        <span className="tracking-tighter">▾ 􀙇 ▮</span>
      </div>

      {/* App bar */}
      <div className="px-4 pb-3 pt-1">
        <div className="text-[10px]" style={{ color: m3.onSurfaceVariant }}>Mango</div>
        <div className="text-sm font-semibold tracking-tight" style={{ color: m3.onSurface }}>{spec.titulo}</div>
      </div>

      {/* Cuerpo: bloque tonal + placeholders */}
      <div className="px-4 space-y-2.5 pb-4">
        <div
          className="rounded-2xl p-3 flex items-center gap-2"
          style={{ backgroundColor: spec.accentBg, color: spec.accent }}
        >
          <span className="text-lg">{spec.glyph}</span>
          <span className="text-[10px] font-semibold leading-tight">{spec.bullet}</span>
        </div>
        {[0.9, 0.7, 0.82].map((w, i) => (
          <div key={i} className="rounded-xl p-2.5 flex items-center gap-2" style={{ backgroundColor: m3.surfaceContainer }}>
            <span className="w-6 h-6 rounded-full shrink-0" style={{ backgroundColor: spec.accentBg }} />
            <span className="flex-1">
              <span className="block h-1.5 rounded-full mb-1.5" style={{ width: `${w * 100}%`, backgroundColor: m3.outlineVariant }} />
              <span className="block h-1.5 rounded-full" style={{ width: "40%", backgroundColor: m3.outlineVariant }} />
            </span>
          </div>
        ))}
      </div>

      {/* FAB + nav hint */}
      <div className="relative px-4 pb-3">
        <div
          className="absolute right-4 -top-1 w-9 h-9 rounded-2xl flex items-center justify-center text-base"
          style={{ backgroundColor: spec.accent, color: m3.onPrimary, boxShadow: elevation(3) }}
        >
          +
        </div>
        <div className="h-9 rounded-full mt-3 flex items-center justify-around px-3" style={{ backgroundColor: m3.surfaceContainerHigh }}>
          {["▣", "≣", "◴", "☰"].map((g, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-0.5 rounded-full"
              style={{
                color: i === 0 ? spec.accent : m3.onSurfaceVariant,
                backgroundColor: i === 0 ? spec.accentBg : "transparent",
              }}
            >
              {g}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
