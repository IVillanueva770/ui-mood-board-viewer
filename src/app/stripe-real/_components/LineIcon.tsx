"use client";

import { type Feature } from "../_data";

/**
 * Iconos line (stroke, no fill) — vocabulario de docs de Stripe: preciso,
 * 1.5 de stroke, sin relleno. Mapea el `icon` tipado de cada Feature.
 */
export function LineIcon({ name, color }: { name: Feature["icon"]; color: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "card":
      return (
        <svg {...common}><rect x="2.5" y="5" width="19" height="14" rx="2.5" /><path d="M2.5 9.5h19" /><path d="M6 14.5h4" /></svg>
      );
    case "split":
      return (
        <svg {...common}><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><circle cx="18" cy="6" r="2.5" /><path d="M8 7.5 16 16.5M8 6h7.5M18 8.5v7" /></svg>
      );
    case "shield":
      return (
        <svg {...common}><path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>
      );
    case "globe":
      return (
        <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" /></svg>
      );
    case "bolt":
      return (
        <svg {...common}><path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" /></svg>
      );
    case "ledger":
      return (
        <svg {...common}><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>
      );
  }
}
