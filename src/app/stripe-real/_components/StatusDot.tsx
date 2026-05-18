"use client";

import { toneColor, type StatusTone } from "../_data";

/** Punto de estado + label. Lenguaje visual de estados de Stripe (sobrio). */
export function StatusDot({ tone, label }: { tone: StatusTone; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: toneColor[tone] }} />
      <span className="text-xs font-medium" style={{ color: "#3c4257" }}>{label}</span>
    </span>
  );
}
