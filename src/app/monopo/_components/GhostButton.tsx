"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { frost } from "../_data";
import { useFrostMotion } from "./use-frost-motion";

/**
 * Ghost button de marca: border-radius 75.024px EXACTO (token refero, no
 * redondear), frosted, con SWEEP de fill que cruza al hover + realce de
 * superficie. `solid` lleva el sweep; `text` es link con flecha glow.
 */
export function GhostButton({
  children,
  variant = "solid",
  className = "",
}: {
  children: ReactNode;
  variant?: "solid" | "text";
  className?: string;
}) {
  const { ghostHover } = useFrostMotion();

  if (variant === "text") {
    return (
      <motion.button
        whileHover={{ x: 4, color: frost.text }}
        className={`px-7 py-3 text-sm font-medium flex items-center gap-2 ${className}`}
        style={{ color: frost.textSoft }}
      >
        {children}
        <motion.span
          initial={{ filter: "drop-shadow(0 0 0px rgba(167,139,250,0))" }}
          whileHover={{ filter: "drop-shadow(0 0 6px rgba(167,139,250,0.8))" }}
          style={{ color: frost.violet }}
        >
          →
        </motion.span>
      </motion.button>
    );
  }

  return (
    <motion.button
      {...ghostHover}
      className={`relative px-7 py-3 text-sm font-medium overflow-hidden ${className}`}
      style={{
        border: `1px solid rgba(255,255,255,0.3)`,
        color: frost.text,
        borderRadius: frost.radius,
        backdropFilter: "blur(8px)",
        backgroundColor: frost.surface,
      }}
    >
      <motion.span
        aria-hidden
        variants={{ rest: { x: "-110%", opacity: 0 }, hover: { x: "110%", opacity: 1 } }}
        transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
        className="absolute inset-y-0 w-1/2 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.18) 45%, rgba(167,139,250,0.25) 55%, transparent 100%)",
        }}
      />
      <motion.span
        aria-hidden
        variants={{
          rest: { backgroundColor: frost.surface, borderColor: "rgba(255,255,255,0.3)" },
          hover: { backgroundColor: frost.surfaceHover, borderColor: "rgba(255,255,255,0.5)" },
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 pointer-events-none"
        style={{ borderRadius: frost.radius, borderWidth: "1px", borderStyle: "solid" }}
      />
      <span className="relative">{children}</span>
    </motion.button>
  );
}
