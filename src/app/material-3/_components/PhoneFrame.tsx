"use client";

import { type ReactNode } from "react";
import { m3, elevation } from "../_data";

/**
 * Shell de teléfono Android: status bar M3 + área de contenido de alto fijo
 * (cada vista scrollea adentro) + slots para FAB y nav. Presentacional: no
 * sabe qué vista se muestra, sólo la enmarca. Diferencia de ios-native: chrome
 * Material (status bar Android, esquinas y nav M3), no notch iOS.
 */
export function PhoneFrame({
  children,
  fab,
  nav,
}: {
  children: ReactNode;
  fab: ReactNode;
  nav: ReactNode;
}) {
  return (
    <div className="max-w-sm mx-auto py-6">
      <div
        className="rounded-[2.4rem] overflow-hidden"
        style={{ backgroundColor: m3.surface, border: `1px solid ${m3.outlineVariant}`, boxShadow: elevation(5) }}
      >
        {/* Status bar Android */}
        <div
          className="flex items-center justify-between px-6 py-2.5 text-xs font-medium"
          style={{ backgroundColor: m3.bg, color: m3.onSurface }}
        >
          <span>9:41</span>
          <span className="flex items-center gap-1.5 text-[11px]">
            <span>5G</span>
            <span>▾</span>
            <span>􀛨</span>
            <span>84%</span>
          </span>
        </div>

        {/* Área de app — alto fijo; la vista activa scrollea adentro. El FAB
            se posiciona y expande relativo a este contenedor. */}
        <div className="relative" style={{ height: 600, backgroundColor: m3.bg }}>
          <div className="absolute inset-0 overflow-hidden">{children}</div>
          {fab}
        </div>

        {/* Bottom nav M3 — parte del frame */}
        {nav}
      </div>
    </div>
  );
}
