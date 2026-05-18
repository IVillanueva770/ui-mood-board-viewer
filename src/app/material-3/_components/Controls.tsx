"use client";

import { motion } from "motion/react";
import { Ripple } from "@/components/ripple";
import { m3 } from "../_data";
import { useM3Motion } from "./use-m3-motion";

/**
 * Primitivas interactivas Material You: switch, slider y segmented button.
 * Cada una tipada y controlada (value + onChange) para que enchufar settings
 * reales sea trivial. Motion = emphasized; el slider usa un range nativo
 * invisible encima (accesible/teclado, WCAG) con chrome M3 dibujado debajo.
 */

export function M3Switch({
  checked,
  onChange,
  label,
  hint,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  hint?: string;
}) {
  const { stateLayer } = useM3Motion();
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className="w-full flex items-center gap-4 py-3 text-left"
    >
      <span className="flex-1 min-w-0">
        <span className="block text-sm font-medium" style={{ color: m3.onSurface }}>{label}</span>
        {hint && <span className="block text-xs mt-0.5" style={{ color: m3.onSurfaceVariant }}>{hint}</span>}
      </span>
      <motion.span
        className="relative shrink-0 rounded-full"
        animate={{ backgroundColor: checked ? m3.primary : m3.surfaceContainerHigh }}
        transition={{ duration: 0.2 }}
        style={{ width: 52, height: 32, border: `2px solid ${checked ? m3.primary : m3.outline}` }}
      >
        <motion.span
          className="absolute top-1/2 rounded-full flex items-center justify-center text-[10px]"
          animate={{
            left: checked ? 24 : 6,
            width: checked ? 22 : 16,
            height: checked ? 22 : 16,
            x: 0,
            y: "-50%",
            backgroundColor: checked ? m3.onPrimary : m3.outline,
            color: m3.primary,
          }}
          transition={stateLayer}
        >
          {checked ? "✓" : ""}
        </motion.span>
      </motion.span>
    </button>
  );
}

export function M3Slider({
  value,
  min,
  max,
  step = 1,
  onChange,
  label,
  format,
}: {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  label: string;
  format: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="py-3">
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-sm font-medium" style={{ color: m3.onSurface }}>{label}</span>
        <span className="text-sm font-semibold" style={{ color: m3.primary }}>{format(value)}</span>
      </div>
      <div className="relative h-6 flex items-center">
        {/* Track inactivo */}
        <div className="absolute left-0 right-0 h-1 rounded-full" style={{ backgroundColor: m3.surfaceVariant }} />
        {/* Track activo */}
        <div className="absolute left-0 h-1 rounded-full" style={{ width: `${pct}%`, backgroundColor: m3.primary }} />
        {/* Handle M3 */}
        <span
          className="absolute w-5 h-5 rounded-full"
          style={{ left: `calc(${pct}% - 10px)`, backgroundColor: m3.primary, boxShadow: `0 0 0 8px ${m3.primary}1f` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={label}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}

export function M3Segmented<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: { id: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div className="py-3">
      <p className="text-sm font-medium mb-2.5" style={{ color: m3.onSurface }}>{label}</p>
      <div className="flex rounded-full overflow-hidden" style={{ border: `1px solid ${m3.outline}` }}>
        {options.map((o, i) => {
          const sel = o.id === value;
          return (
            <Ripple
              key={o.id}
              as="button"
              color="rgba(103,80,164,0.18)"
              onClick={() => onChange(o.id)}
              className="flex-1 py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5"
              style={{
                backgroundColor: sel ? m3.secondaryContainer : "transparent",
                color: sel ? m3.onSecondaryContainer : m3.onSurfaceVariant,
                borderLeft: i > 0 ? `1px solid ${m3.outline}` : "none",
              }}
            >
              {sel && <span>✓</span>}
              {o.label}
            </Ripple>
          );
        })}
      </div>
    </div>
  );
}
