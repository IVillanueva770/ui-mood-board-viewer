"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { tokens } from "../_data";
import { useStripeMotion } from "./use-stripe-motion";

/**
 * Chrome del console (NO cuenta como pieza): barra de workspace con switch
 * live/test — el detalle que hace que se sienta el dashboard real de Stripe.
 * Las 4 piezas del interno van VISIBLES en scroll debajo (benchmark dimes:
 * nada de InternalNav escondiendo sub-vistas en un viewer).
 */
export function ConsoleHeader() {
  const [env, setEnv] = useState<"live" | "test">("live");
  const { focusRing } = useStripeMotion();

  return (
    <header
      className="rounded-xl px-4 sm:px-5 py-3.5 flex items-center justify-between gap-4 flex-wrap"
      style={{ backgroundColor: tokens.surface, border: `1px solid ${tokens.border}` }}
    >
      <div className="flex items-center gap-3 min-w-0">
        <span
          className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold text-white shrink-0"
          style={{ backgroundColor: tokens.violet }}
        >
          S
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate" style={{ color: tokens.ink }}>Acme Inc.</p>
          <p className="text-[11px] truncate" style={{ fontFamily: "var(--font-roboto-mono)", color: tokens.muted }}>
            acct_1Mn8aDFGhJ
          </p>
        </div>
      </div>

      <div
        className="inline-flex p-0.5 rounded-md"
        style={{ backgroundColor: tokens.bg, border: `1px solid ${tokens.border}` }}
      >
        {(["live", "test"] as const).map((m) => {
          const a = env === m;
          return (
            <button
              key={m}
              onClick={() => setEnv(m)}
              className={`relative px-3 py-1 text-xs font-semibold rounded-[5px] ${focusRing}`}
              style={{ color: a ? "#ffffff" : tokens.muted }}
            >
              {a && (
                <motion.span
                  layoutId="stripe-env-pill"
                  transition={{ type: "spring", stiffness: 480, damping: 38 }}
                  className="absolute inset-0 rounded-[5px] -z-10"
                  style={{ backgroundColor: m === "live" ? tokens.violet : tokens.warn }}
                />
              )}
              <span className="relative">{m === "live" ? "Live" : "Test"}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
