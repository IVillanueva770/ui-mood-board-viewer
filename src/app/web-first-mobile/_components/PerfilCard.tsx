"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { palette, type PerfilUsuario } from "../_data";
import { useWebMotion } from "./use-web-motion";

/** Pieza interna: perfil — cover + stats + tabs (posts / respuestas). */
export function PerfilCard({ perfil }: { perfil: PerfilUsuario }) {
  const { reduce, reveal, tap } = useWebMotion();
  const { accent, text, muted, border, borderStrong, card } = palette;
  const [tab, setTab] = useState<"destacados" | "respuestas">("destacados");

  const lista = tab === "destacados" ? perfil.destacados : perfil.respuestas;

  return (
    <motion.section
      {...reveal(0)}
      className="rounded-2xl overflow-hidden"
      style={{ backgroundColor: card, border: `1px solid ${border}` }}
    >
      <div className="h-32 sm:h-40" style={{ background: perfil.cover }} />
      <div className="px-4 sm:px-6">
        <div className="flex items-end justify-between -mt-12 mb-3">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center font-bold text-2xl text-white"
            style={{ background: perfil.avatar, border: `4px solid ${card}` }}
          >
            {perfil.iniciales}
          </div>
          <motion.button
            {...tap}
            className="px-4 py-1.5 rounded-full text-sm font-bold mb-2"
            style={{ border: `1px solid ${borderStrong}`, color: text, backgroundColor: card }}
          >
            Editar perfil
          </motion.button>
        </div>

        <h2 className="font-bold text-xl" style={{ color: text }}>{perfil.nombre}</h2>
        <p className="text-sm mb-3" style={{ color: muted }}>{perfil.handle}</p>
        <p className="text-[15px] leading-snug mb-3" style={{ color: text }}>{perfil.bio}</p>
        <div className="flex items-center gap-4 text-xs flex-wrap mb-4" style={{ color: muted }}>
          <span>📍 {perfil.ubicacion}</span>
          <span>📅 {perfil.desde}</span>
        </div>
        <div className="flex items-center gap-5 text-sm pb-4" style={{ borderBottom: `1px solid ${border}` }}>
          <span><span className="font-bold" style={{ color: text }}>{perfil.siguiendo}</span> <span style={{ color: muted }}>siguiendo</span></span>
          <span><span className="font-bold" style={{ color: text }}>{perfil.seguidores}</span> <span style={{ color: muted }}>seguidores</span></span>
          <span><span className="font-bold" style={{ color: text }}>{perfil.posts}</span> <span style={{ color: muted }}>posts</span></span>
        </div>

        <div className="flex">
          {(["destacados", "respuestas"] as const).map((t) => {
            const a = tab === t;
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="relative flex-1 py-3 text-sm font-semibold capitalize"
                style={{ color: a ? text : muted }}
              >
                {t === "destacados" ? "Posts" : "Respuestas"}
                {a && (
                  <motion.span
                    layoutId="perfil-tab"
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 rounded-full"
                    style={{ width: 56, backgroundColor: accent }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={reduce ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          {lista.map((p, i) => (
            <div
              key={i}
              className="px-4 sm:px-6 py-4"
              style={{ borderTop: `1px solid ${border}` }}
            >
              <p className="text-[15px] leading-snug mb-2" style={{ color: text }}>{p.texto}</p>
              <div className="flex items-center gap-4 text-xs" style={{ color: muted }}>
                <span>{p.time}</span>
                <span>♥ {p.likes}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}
