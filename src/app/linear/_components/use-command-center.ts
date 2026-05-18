"use client";

import { useEffect, useMemo, useState } from "react";
import type { Issue } from "../_data";

/**
 * Estado de interacción del command center (SRP): issue seleccionada para el
 * detalle + apertura del ⌘K palette + atajos globales (⌘K toggle, Esc cierra).
 * Lo instancia `Workspace` una vez y lo inyecta a las piezas → cada pieza es
 * tonta y swappable (no sabe de dónde viene el estado).
 */
export function useCommandCenter(issues: Issue[]) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const selected = useMemo(
    () => issues.find((i) => i.id === selectedId) ?? null,
    [issues, selectedId],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((open) => !open);
      } else if (e.key === "Escape") {
        setPaletteOpen(false);
        setSelectedId(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return {
    selected,
    selectIssue: (id: string) => setSelectedId(id),
    closeDetail: () => setSelectedId(null),
    paletteOpen,
    openPalette: () => setPaletteOpen(true),
    closePalette: () => setPaletteOpen(false),
  };
}
