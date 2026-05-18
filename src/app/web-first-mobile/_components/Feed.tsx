"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { palette, type Post } from "../_data";
import { LikeButton } from "./LikeButton";

function PostSkeleton() {
  const { border, surface } = palette;
  return (
    <div className="px-4 sm:px-5 py-4 flex gap-3" style={{ borderBottom: `1px solid ${border}` }}>
      <div className="w-11 h-11 rounded-full shrink-0 animate-pulse" style={{ backgroundColor: surface }} />
      <div className="flex-1 space-y-2.5 pt-1">
        <div className="h-3 w-40 rounded animate-pulse" style={{ backgroundColor: surface }} />
        <div className="h-3 w-full rounded animate-pulse" style={{ backgroundColor: surface }} />
        <div className="h-3 w-2/3 rounded animate-pulse" style={{ backgroundColor: surface }} />
      </div>
    </div>
  );
}

/**
 * Pieza interna (principal): feed cronológico — composer + timeline con
 * media, contadores y like-pop. Skeleton al cargar (firma "se siente web").
 */
export function Feed({ posts }: { posts: Post[] }) {
  const reduce = useReducedMotion();
  const [loading, setLoading] = useState(true);
  const { accent, text, muted, border, surface, card, repost } = palette;

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), reduce ? 0 : 750);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: card, border: `1px solid ${border}` }}>
      <div className="px-4 sm:px-5 py-3" style={{ borderBottom: `1px solid ${border}` }}>
        <h2 className="font-bold text-lg" style={{ color: text }}>Inicio</h2>
      </div>

      {/* Composer */}
      <div className="px-4 sm:px-5 py-4 flex gap-3" style={{ borderBottom: `1px solid ${border}` }}>
        <div className="w-11 h-11 rounded-full shrink-0" style={{ background: "linear-gradient(135deg,#1d9bf0,#8b5cf6)" }} />
        <div className="flex-1">
          <input
            readOnly
            placeholder="¿Qué está pasando?"
            className="w-full bg-transparent outline-none text-base py-2"
            style={{ color: text }}
          />
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-3 text-base" style={{ color: accent }}>
              <span>🖼️</span><span>📊</span><span>😊</span><span>📅</span>
            </div>
            <button
              className="px-4 py-1.5 rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: accent, opacity: 0.5 }}
            >
              Postear
            </button>
          </div>
        </div>
      </div>

      {loading
        ? Array.from({ length: 4 }).map((_, i) => <PostSkeleton key={i} />)
        : posts.map((p, i) => (
            <motion.article
              key={p.id}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: i * 0.05, ease: [0.4, 0, 0.2, 1] }}
              whileHover={reduce ? undefined : { backgroundColor: surface }}
              className="px-4 sm:px-5 py-4 flex gap-3 cursor-pointer"
              style={{ borderBottom: i < posts.length - 1 ? `1px solid ${border}` : "none" }}
            >
              <div className="w-11 h-11 rounded-full shrink-0" style={{ background: p.avatar }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-sm flex-wrap mb-0.5">
                  <span className="font-bold" style={{ color: text }}>{p.autor}</span>
                  <span style={{ color: muted }}>{p.handle} · {p.time}</span>
                </div>
                <p className="text-[15px] leading-snug mb-3" style={{ color: text }}>{p.texto}</p>
                {p.media && (
                  <div
                    className="rounded-2xl mb-3 aspect-[16/9]"
                    style={{ background: p.mediaGradient, border: `1px solid ${border}` }}
                  />
                )}
                <div className="flex items-center justify-between max-w-md text-xs" style={{ color: muted }}>
                  <span className="flex items-center gap-1.5">💬 {p.replies}</span>
                  <span className="flex items-center gap-1.5" style={{ color: p.reposts > 50 ? repost : muted }}>
                    🔁 {p.reposts}
                  </span>
                  <LikeButton count={p.likes} liked={p.liked} />
                  <span className="flex items-center gap-1.5">📊 {p.views}</span>
                </div>
              </div>
            </motion.article>
          ))}
    </div>
  );
}
