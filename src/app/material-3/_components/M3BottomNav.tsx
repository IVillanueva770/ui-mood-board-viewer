"use client";

import { motion } from "motion/react";
import { Ripple } from "@/components/ripple";
import { m3 } from "../_data";
import { useM3Motion } from "./use-m3-motion";

export type NavItem = { id: string; label: string; icon: string };

/**
 * Bottom navigation Material 3. Firma: el "active indicator" (state layer
 * pill) se desliza entre ítems con emphasized spring vía `layoutId`, el ícono
 * crece, y cada ítem responde con Ripple al tocar. Consolida el patrón
 * m3-bottom de la ola 1 dentro del frame (no flota sobre el viewport).
 */
export function M3BottomNav({
  items,
  active,
  onChange,
}: {
  items: NavItem[];
  active: string;
  onChange: (id: string) => void;
}) {
  const { stateLayer } = useM3Motion();

  return (
    <nav
      className="flex items-stretch justify-around px-2 py-2.5"
      style={{ backgroundColor: m3.surfaceContainer, borderTop: `1px solid ${m3.outlineVariant}` }}
    >
      {items.map((it) => {
        const a = active === it.id;
        return (
          <Ripple
            key={it.id}
            as="button"
            color="rgba(103,80,164,0.20)"
            onClick={() => onChange(it.id)}
            ariaLabel={it.label}
            className="flex-1 flex flex-col items-center gap-1 py-1 rounded-2xl"
          >
            <span className="relative flex items-center justify-center" style={{ width: 64, height: 32 }}>
              {a && (
                <motion.span
                  layoutId="m3-nav-pill"
                  transition={stateLayer}
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: m3.secondaryContainer }}
                />
              )}
              <motion.span
                animate={{ scale: a ? 1.05 : 1 }}
                transition={stateLayer}
                className="relative text-lg"
                style={{ color: a ? m3.onSecondaryContainer : m3.onSurfaceVariant }}
              >
                {it.icon}
              </motion.span>
            </span>
            <span
              className="text-[11px] font-medium"
              style={{ color: a ? m3.onSurface : m3.onSurfaceVariant }}
            >
              {it.label}
            </span>
          </Ripple>
        );
      })}
    </nav>
  );
}
