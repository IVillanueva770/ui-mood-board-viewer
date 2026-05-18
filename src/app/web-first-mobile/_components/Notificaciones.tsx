"use client";

import { motion } from "motion/react";
import { palette, type Notif } from "../_data";
import { useWebMotion } from "./use-web-motion";

const COLOR: Record<Notif["tipo"], string> = {
  like: "#f91880",
  repost: "#00ba7c",
  follow: "#1d9bf0",
  reply: "#1d9bf0",
};

/** Pieza interna: notificaciones con tipos (like / repost / follow / reply). */
export function Notificaciones({ notifs }: { notifs: Notif[] }) {
  const { reduce, reveal } = useWebMotion();
  const { text, muted, border, card } = palette;

  return (
    <motion.section
      {...reveal(0)}
      className="rounded-2xl overflow-hidden"
      style={{ backgroundColor: card, border: `1px solid ${border}` }}
    >
      <div className="px-4 sm:px-5 py-3 flex items-center justify-between" style={{ borderBottom: `1px solid ${border}` }}>
        <h2 className="font-bold text-lg" style={{ color: text }}>Notificaciones</h2>
        <span className="text-xs" style={{ color: muted }}>Todas · Menciones</span>
      </div>
      {notifs.map((n, i) => (
        <motion.div
          key={i}
          initial={reduce ? false : { opacity: 0, x: -8 }}
          whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.32, delay: i * 0.04 }}
          className="px-4 sm:px-5 py-3.5 flex gap-3 items-start"
          style={{ borderBottom: i < notifs.length - 1 ? `1px solid ${border}` : "none" }}
        >
          <span className="text-lg mt-0.5 shrink-0" style={{ color: COLOR[n.tipo] }}>{n.icon}</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm" style={{ color: text }}>
              <span className="font-bold">{n.autor}</span>
              <span style={{ color: muted }}> {n.texto}</span>
            </p>
            {n.extracto && (
              <p className="text-xs mt-1 truncate" style={{ color: muted }}>{n.extracto}</p>
            )}
          </div>
          <span className="text-xs shrink-0" style={{ color: muted }}>{n.time}</span>
        </motion.div>
      ))}
    </motion.section>
  );
}
