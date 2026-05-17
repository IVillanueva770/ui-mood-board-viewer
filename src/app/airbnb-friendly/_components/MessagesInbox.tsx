"use client";

import { motion } from "motion/react";
import { palette, type Mensaje } from "../_data";
import { useWarmMotion } from "./use-warm-motion";
import { TypingDots } from "./TypingDots";

/** Pieza interna: inbox de mensajes con anfitriones (typing indicator en vivo). */
export function MessagesInbox({ mensajes }: { mensajes: Mensaje[] }) {
  const { reduce } = useWarmMotion();
  const { rausch, text, muted, border } = palette;

  return (
    <section>
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: rausch }}>
          📨 Inbox
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">Mensajes con anfitriones</h2>
      </div>

      <div className="space-y-2">
        {mensajes.map((m, i) => (
          <motion.div
            key={m.id}
            initial={reduce ? false : { opacity: 0, x: -8 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.32, delay: i * 0.05 }}
            whileHover={reduce ? undefined : { y: -1 }}
            className="bg-white rounded-2xl p-4 flex items-center gap-3 cursor-pointer"
            style={{ border: `1px solid ${border}` }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold shrink-0"
              style={{ backgroundColor: m.color }}
            >
              {m.inicial}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <p className="font-semibold truncate">{m.nombre}</p>
                <span className="text-xs" style={{ color: muted }}>· {m.lugar}</span>
              </div>
              {m.typing ? (
                <div className="mt-0.5"><TypingDots /></div>
              ) : (
                <p
                  className="text-sm truncate mt-0.5"
                  style={{ color: m.unread > 0 ? text : muted, fontWeight: m.unread > 0 ? 500 : 400 }}
                >
                  {m.preview}
                </p>
              )}
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs mb-1" style={{ color: muted }}>{m.hora}</p>
              {m.unread > 0 && (
                <span
                  className="inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold text-white"
                  style={{ backgroundColor: rausch }}
                >
                  {m.unread}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
