"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { tokens, toneColor, type ApiKey, type Webhook, type LogLine } from "../_data";
import { useStripeMotion } from "./use-stripe-motion";
import { StatusDot } from "./StatusDot";

function codeColor(code: number) {
  if (code >= 500) return tokens.err;
  if (code >= 400) return tokens.warn;
  return tokens.ok;
}

/**
 * Pieza interna 4: developers. API keys (revelar la secret = estado local),
 * webhooks con estado, y logs recientes (mono). Lenguaje técnico preciso.
 */
export function DevelopersPanel({
  apiKeys,
  webhooks,
  logs,
}: {
  apiKeys: ApiKey[];
  webhooks: Webhook[];
  logs: LogLine[];
}) {
  const [revealed, setRevealed] = useState<string | null>(null);
  const { reveal, focusRing } = useStripeMotion();

  return (
    <motion.section {...reveal(0)}>
      <div className="mb-4">
        <p className="text-[11px] uppercase tracking-[0.18em] mb-1 font-semibold" style={{ color: tokens.muted }}>
          Developers
        </p>
        <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em]" style={{ color: tokens.ink }}>
          API keys, webhooks & logs
        </h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-3">
        <div className="rounded-xl overflow-hidden" style={{ backgroundColor: tokens.surface, border: `1px solid ${tokens.border}` }}>
          <div className="px-5 py-3" style={{ borderBottom: `1px solid ${tokens.border}`, backgroundColor: tokens.bg }}>
            <p className="font-semibold text-sm" style={{ color: tokens.ink }}>Claves de API</p>
          </div>
          {apiKeys.map((k, i) => {
            const isSecret = k.tipo === "Secret";
            const open = revealed === k.valor;
            return (
              <div
                key={k.valor}
                className="px-5 py-3.5 flex items-center justify-between gap-3"
                style={{ borderBottom: i < apiKeys.length - 1 ? `1px solid ${tokens.borderSoft}` : "none" }}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-semibold" style={{ color: tokens.ink }}>{k.label}</span>
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded font-semibold uppercase tracking-wide"
                      style={{
                        backgroundColor: k.entorno === "live" ? `${tokens.violet}14` : `${tokens.warn}1f`,
                        color: k.entorno === "live" ? tokens.violet : tokens.warn,
                      }}
                    >
                      {k.tipo}
                    </span>
                  </div>
                  <p className="text-[11px] truncate" style={{ fontFamily: "var(--font-roboto-mono)", color: tokens.muted }}>
                    {isSecret && !open ? "sk_••••••••••••••••••••••" : k.valor}
                  </p>
                </div>
                {isSecret ? (
                  <button
                    onClick={() => setRevealed(open ? null : k.valor)}
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-md shrink-0 ${focusRing}`}
                    style={{ color: tokens.violet, border: `1px solid ${tokens.border}` }}
                  >
                    {open ? "Ocultar" : "Revelar"}
                  </button>
                ) : (
                  <span className="text-[11px] shrink-0" style={{ color: tokens.muted }}>{k.creada}</span>
                )}
              </div>
            );
          })}
        </div>

        <div className="rounded-xl overflow-hidden" style={{ backgroundColor: tokens.surface, border: `1px solid ${tokens.border}` }}>
          <div className="px-5 py-3" style={{ borderBottom: `1px solid ${tokens.border}`, backgroundColor: tokens.bg }}>
            <p className="font-semibold text-sm" style={{ color: tokens.ink }}>Webhooks</p>
          </div>
          {webhooks.map((w, i) => (
            <div
              key={w.url}
              className="px-5 py-3.5"
              style={{ borderBottom: i < webhooks.length - 1 ? `1px solid ${tokens.borderSoft}` : "none" }}
            >
              <div className="flex items-center justify-between gap-3 mb-1">
                <span className="text-xs truncate" style={{ fontFamily: "var(--font-roboto-mono)", color: tokens.faint }}>
                  {w.url}
                </span>
                <StatusDot tone={w.estado} label={`${w.eventos} ev`} />
              </div>
              <p className="text-[11px]" style={{ color: tokens.muted }}>{w.ultimo}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="mt-3 rounded-xl overflow-hidden"
        style={{ backgroundColor: tokens.ink, border: `1px solid ${tokens.ink}` }}
      >
        <div className="px-5 py-2.5 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-xs font-semibold" style={{ color: "#cbd5e1" }}>Request logs</p>
          <span className="text-[11px]" style={{ fontFamily: "var(--font-roboto-mono)", color: "#64748b" }}>
            live tail
          </span>
        </div>
        <div className="px-5 py-3 space-y-1.5">
          {logs.map((l, i) => (
            <div key={i} className="flex items-center gap-3 text-[12px]" style={{ fontFamily: "var(--font-roboto-mono)" }}>
              <span style={{ color: "#64748b" }}>{l.ts}</span>
              <span className="w-12" style={{ color: "#94a3b8" }}>{l.metodo}</span>
              <span className="flex-1 truncate" style={{ color: "#cbd5e1" }}>{l.ruta}</span>
              <span style={{ color: codeColor(l.code) }}>{l.code}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
