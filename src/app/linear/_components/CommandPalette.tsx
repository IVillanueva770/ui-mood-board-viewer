"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { tokens, mono, type Command } from "../_data";
import { useLinearMotion } from "./use-linear-motion";

/**
 * Pieza interna / FIRMA power-user: ⌘K command palette. Fade+scale instantáneo,
 * navegable 100% por teclado (escribir filtra, ↑/↓ mueve, ⏎ ejecuta, Esc
 * cierra). Anclado al contenedor del workspace (`absolute`), no al viewport.
 */
export function CommandPalette({
  open,
  commands,
  onClose,
}: {
  open: boolean;
  commands: Command[];
  onClose: () => void;
}) {
  const { overlay, palettePanel } = useLinearMotion();
  const t = tokens;
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(
    () => commands.filter((c) => c.label.toLowerCase().includes(query.trim().toLowerCase())),
    [commands, query],
  );

  // Al abrir: reset + foco. Al cerrar: limpiar para la próxima.
  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      const id = requestAnimationFrame(() => inputRef.current?.focus());
      return () => cancelAnimationFrame(id);
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, Math.max(filtered.length - 1, 0)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[active]) onClose();
    }
  };

  // Agrupar respetando el orden de aparición de los grupos.
  const groups = useMemo(() => {
    const order: Command["group"][] = [];
    const map = new Map<Command["group"], Command[]>();
    for (const c of filtered) {
      if (!map.has(c.group)) {
        map.set(c.group, []);
        order.push(c.group);
      }
      map.get(c.group)!.push(c);
    }
    return order.map((g) => ({ group: g, items: map.get(g)! }));
  }, [filtered]);

  let flatIndex = -1;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          {...overlay}
          className="absolute inset-0 z-40 flex items-start justify-center pt-[12vh] px-4"
          style={{ backgroundColor: "rgba(8,9,10,0.7)" }}
          onClick={onClose}
        >
          <motion.div
            {...palettePanel}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={onKeyDown}
            className="w-full max-w-lg rounded-xl overflow-hidden"
            style={{ backgroundColor: t.surface, border: `1px solid ${t.lineStrong}`, boxShadow: "0 32px 80px -24px rgba(0,0,0,0.85)" }}
          >
            <div className="px-4 py-3 flex items-center gap-3" style={{ borderBottom: `1px solid ${t.line}` }}>
              <span className="text-xs" style={{ color: t.faint, fontFamily: mono }}>
                ⌘ K
              </span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar o ejecutar un comando…"
                className="flex-1 bg-transparent text-sm focus:outline-none"
                style={{ color: t.fg }}
              />
              <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ backgroundColor: t.line, color: t.faint, fontFamily: mono }}>
                Esc
              </span>
            </div>

            <div className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <p className="px-4 py-6 text-center text-sm" style={{ color: t.faint }}>
                  Sin resultados para “{query}”
                </p>
              )}
              {groups.map((g) => (
                <div key={g.group} className="mb-1">
                  <p className="px-4 py-1.5 text-[10px] uppercase tracking-wider" style={{ color: t.faint }}>
                    {g.group}
                  </p>
                  {g.items.map((c) => {
                    flatIndex += 1;
                    const isActive = flatIndex === active;
                    const idx = flatIndex;
                    return (
                      <button
                        key={c.id}
                        onMouseEnter={() => setActive(idx)}
                        onClick={onClose}
                        className="w-full flex items-center justify-between gap-3 px-4 py-2 text-sm text-left transition-colors"
                        style={{
                          backgroundColor: isActive ? t.elevated : "transparent",
                          color: isActive ? t.fg : t.fg2,
                          boxShadow: isActive ? `inset 2px 0 0 0 ${t.lime}` : "none",
                        }}
                      >
                        <span>{c.label}</span>
                        {c.shortcut && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ backgroundColor: t.line, color: t.muted, fontFamily: mono }}>
                            {c.shortcut}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
