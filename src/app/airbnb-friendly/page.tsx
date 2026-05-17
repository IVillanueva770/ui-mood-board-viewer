"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

const RAUSCH = "#ff5a5f";
const TEXT = "#222222";
const MUTED = "#717171";
const BORDER = "#ebebeb";
const SURFACE = "#fafafa";
const SOFT_PINK = "#ffe4e6";

/* ====== Microinteracciones firma — cálido/humano ====== */

// Pop del corazón: scale 1 → 1.28 → 1 con spring gentil al togglear.
function HeartButton({ defaultLiked = false }: { defaultLiked?: boolean }) {
  const reduce = useReducedMotion();
  const [liked, setLiked] = useState(defaultLiked);
  return (
    <motion.button
      type="button"
      aria-label={liked ? "Quitar de guardados" : "Guardar en tu wishlist"}
      aria-pressed={liked}
      onClick={(ev) => {
        ev.stopPropagation();
        setLiked((v) => !v);
      }}
      whileTap={reduce ? undefined : { scale: 0.82 }}
      className="w-9 h-9 rounded-full flex items-center justify-center text-lg leading-none shadow-sm"
      style={{ backgroundColor: "rgba(255,255,255,0.94)" }}
    >
      <motion.span
        initial={false}
        animate={reduce ? { scale: 1 } : { scale: liked ? [1, 1.28, 1] : 1 }}
        transition={{ type: "spring", stiffness: 360, damping: 13 }}
        style={{ color: liked ? RAUSCH : MUTED, display: "inline-block" }}
      >
        {liked ? "♥" : "♡"}
      </motion.span>
    </motion.button>
  );
}

function Stars({ rating, count }: { rating: number; count?: number }) {
  return (
    <span className="inline-flex items-baseline gap-1 text-sm shrink-0">
      <span style={{ color: RAUSCH }}>★</span>
      <span style={{ fontWeight: 600 }}>{rating.toFixed(2)}</span>
      {count != null && (
        <span style={{ color: MUTED }}>({count})</span>
      )}
    </span>
  );
}

// Typing indicator gentil para el inbox.
function TypingDots() {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <span className="text-sm" style={{ color: RAUSCH, fontWeight: 500 }}>
        escribiendo…
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-sm" style={{ color: RAUSCH, fontWeight: 500 }}>
      escribiendo
      <span className="inline-flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ backgroundColor: RAUSCH }}
            animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          />
        ))}
      </span>
    </span>
  );
}

export default function AirbnbFriendlyPage() {
  const e = getEstilo("airbnb-friendly")!;
  const [activeView, setActiveView] = useState("reservas");
  const reduce = useReducedMotion();

  // Scroll-reveal cálido (respeta reduced-motion).
  const reveal = (delay = 0) =>
    reduce
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.5, delay },
        };

  // Lift cálido suave + spring gentil para cards.
  const lift = reduce
    ? {}
    : { whileHover: { y: -4 }, transition: { type: "spring" as const, stiffness: 300, damping: 20 } };

  // Bounce gentil para CTAs.
  const bounce = reduce
    ? {}
    : {
        whileHover: { y: -2, scale: 1.03 },
        whileTap: { scale: 0.96 },
        transition: { type: "spring" as const, stiffness: 400, damping: 18 },
      };

  const listings = [
    { lugar: "Cabaña en Llao Llao", ciudad: "Bariloche, Río Negro", anfi: "Mariela", rating: 4.97, reviews: 128, precio: "$48.500", sup: true, grad: "linear-gradient(135deg,#dbeafe,#a7f3d0)", emoji: "🏔️", fav: true },
    { lugar: "Loft frente al mar", ciudad: "Punta Mogotes, Mar del Plata", anfi: "Diego", rating: 4.89, reviews: 94, precio: "$31.200", sup: false, grad: "linear-gradient(135deg,#fef3c7,#fde68a)", emoji: "🌊", fav: false },
    { lugar: "Casa con parrilla", ciudad: "Chacras de Coria, Mendoza", anfi: "Carolina", rating: 4.92, reviews: 76, precio: "$39.800", sup: true, grad: "linear-gradient(135deg,#fce7f3,#fbcfe8)", emoji: "🍇", fav: false },
    { lugar: "Domo geodésico en el bosque", ciudad: "El Bolsón, Río Negro", anfi: "Lourdes", rating: 4.99, reviews: 203, precio: "$54.200", sup: true, grad: "linear-gradient(135deg,#a7f3d0,#6ee7b7)", emoji: "🌲", fav: true },
    { lugar: "Casa de adobe con vista", ciudad: "Tafí del Valle, Tucumán", anfi: "Ramiro", rating: 4.85, reviews: 51, precio: "$28.900", sup: false, grad: "linear-gradient(135deg,#fed7aa,#fdba74)", emoji: "🏞️", fav: false },
    { lugar: "Cabaña con jacuzzi", ciudad: "Villa La Angostura, Neuquén", anfi: "Sofía", rating: 4.94, reviews: 167, precio: "$71.800", sup: true, grad: "linear-gradient(135deg,#dbeafe,#bfdbfe)", emoji: "♨️", fav: false },
  ];

  /* ============== TAB 1 — LANDING (BUSCAR) ============== */
  const landing = (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="max-w-5xl mx-auto px-2 sm:px-4 pt-6 pb-14"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] mb-4 max-w-3xl mx-auto">
          Lugares para quedarte<br />
          <span style={{ color: RAUSCH }}>donde quieras.</span>
        </h1>
        <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto" style={{ color: MUTED }}>
          Buscá un destino, elegí fechas y reservá en segundos. Hospedaje real, anfitriones reales.
        </p>
      </div>

      {/* Search bar mock — pill grande */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="bg-white rounded-full mx-auto max-w-3xl mb-5 flex items-center gap-1 p-2 shadow-sm" style={{ border: `1px solid ${BORDER}` }}>
        <div className="flex-1 px-5 py-2 cursor-pointer rounded-full hover:bg-neutral-50 transition">
          <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5">Dónde</p>
          <p className="text-sm" style={{ color: MUTED }}>Bariloche, Río Negro</p>
        </div>
        <div className="w-px h-8" style={{ backgroundColor: BORDER }} />
        <div className="flex-1 px-5 py-2 cursor-pointer rounded-full hover:bg-neutral-50 transition hidden sm:block">
          <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5">Llegada</p>
          <p className="text-sm" style={{ color: MUTED }}>14 jul</p>
        </div>
        <div className="w-px h-8 hidden sm:block" style={{ backgroundColor: BORDER }} />
        <div className="flex-1 px-5 py-2 cursor-pointer rounded-full hover:bg-neutral-50 transition hidden sm:block">
          <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5">Salida</p>
          <p className="text-sm" style={{ color: MUTED }}>21 jul</p>
        </div>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="rounded-full text-white text-sm font-semibold px-6 py-3 flex items-center gap-2 shrink-0" style={{ backgroundColor: RAUSCH }}><span>🔎</span><span>Buscar</span></motion.button>
      </motion.div>

      {/* Destinos rápidos — chips de búsqueda */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
        <span className="text-xs mr-1" style={{ color: MUTED }}>Buscados esta semana:</span>
        {["Bariloche", "Mar del Plata", "Mendoza", "Salta", "El Bolsón", "Villa La Angostura"].map((c) => (
          <motion.button
            key={c}
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="px-4 py-2 rounded-full text-sm bg-white"
            style={{ border: `1px solid ${BORDER}`, color: TEXT }}
          >
            📍 {c}
          </motion.button>
        ))}
      </div>

      {/* Alojamientos destacados */}
      <div className="flex items-end justify-between mb-1 flex-wrap gap-2">
        <h2 className="text-2xl font-semibold tracking-tight">Alojamientos destacados</h2>
        <a href="#" className="text-sm font-semibold" style={{ color: RAUSCH }}>Ver todos →</a>
      </div>
      <p className="text-sm mb-6" style={{ color: MUTED }}>Los que más eligieron otros huéspedes esta semana en Argentina.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {listings.map((l, i) => (
          <motion.div
            key={l.lugar}
            {...reveal(i * 0.05)}
            {...lift}
            className="cursor-pointer"
          >
            <div className="aspect-[4/3] rounded-2xl mb-3 flex items-start justify-between p-3 relative overflow-hidden" style={{ background: l.grad }}>
              <span className="text-4xl absolute bottom-3 left-4">{l.emoji}</span>
              {l.sup && (
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold" style={{ backgroundColor: "#ffffff", color: TEXT }}>
                  ⭐ Súper anfitrión
                </span>
              )}
              <div className="ml-auto">
                <HeartButton defaultLiked={l.fav} />
              </div>
            </div>
            <div className="flex items-start justify-between gap-2">
              <p className="font-semibold text-sm leading-snug">{l.lugar}</p>
              <Stars rating={l.rating} count={l.reviews} />
            </div>
            <p className="text-sm" style={{ color: MUTED }}>{l.ciudad}</p>
            <p className="text-xs mt-0.5" style={{ color: MUTED }}>Anfitrión/a: {l.anfi}</p>
            <p className="text-sm mt-1.5">
              <span style={{ fontWeight: 600 }}>{l.precio}</span>{" "}
              <span style={{ color: MUTED }}>la noche</span>
            </p>
          </motion.div>
        ))}
      </div>

      <DividerReveal variant="soft-bounce" lineColor={BORDER} textColor={MUTED} className="my-16">
        Reservar es así de simple
      </DividerReveal>

      {/* Cómo funciona */}
      <div className="text-center mb-9">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">¿Cómo funciona?</h2>
        <p className="text-base max-w-lg mx-auto" style={{ color: MUTED }}>
          Sin pasos raros ni letra chica. Te lo explicamos como se lo explicarías a un amigo.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
        {[
          { n: 1, icon: "🔎", titulo: "Buscás", desc: "Escribí a dónde querés ir y cuándo. Te mostramos lugares reales, con fotos de verdad y el precio final — sin sorpresas al pagar." },
          { n: 2, icon: "📅", titulo: "Reservás", desc: "Elegís el que más te gustó y reservás en dos toques. El anfitrión te confirma y te escribe para coordinar la llegada." },
          { n: 3, icon: "🧳", titulo: "Disfrutás", desc: "Llegás, te instalás y a descansar. Si algo no sale como esperabas, te damos una mano: personas reales, no un bot." },
        ].map((s, i) => (
          <motion.div
            key={s.n}
            {...reveal(i * 0.08)}
            {...lift}
            className="bg-white rounded-2xl p-6 text-center"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4" style={{ backgroundColor: SOFT_PINK }}>
              {s.icon}
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: RAUSCH }}>Paso {s.n}</p>
            <p className="text-lg font-semibold mb-2">{s.titulo}</p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonios */}
      <div className="text-center mt-16 mb-9">
        <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: RAUSCH }}>
          ❤️ Huéspedes que volvieron
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Lo que dicen los que ya viajaron</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { ini: "C", color: SOFT_PINK, nombre: "Carla González", ciudad: "La Plata", texto: "Reservamos una cabaña en Bariloche para toda la familia y fue tal cual las fotos. Mariela nos dejó hasta la heladera llena. Repetimos seguro." },
          { ini: "R", color: "#dbeafe", nombre: "Roberto Méndez", ciudad: "Córdoba", texto: "Nunca había usado una app así y me daba cosa. Terminó siendo tan fácil que reservé desde el celu arriba del colectivo." },
          { ini: "V", color: "#dcfce7", nombre: "Vanesa Torres", ciudad: "Rosario", texto: "Tuvimos un problema con el agua caliente y en media hora lo resolvieron. Te atiende una persona, no un robot. Eso se valora un montón." },
        ].map((t, i) => (
          <motion.div
            key={t.nombre}
            {...reveal(i * 0.08)}
            {...lift}
            className="bg-white rounded-2xl p-6 flex flex-col"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <div className="text-base mb-3" style={{ color: RAUSCH }}>★★★★★</div>
            <p className="text-sm leading-relaxed flex-1 mb-5">“{t.texto}”</p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-base font-semibold shrink-0" style={{ backgroundColor: t.color, color: TEXT }}>
                {t.ini}
              </div>
              <div>
                <p className="font-semibold text-sm">{t.nombre}</p>
                <p className="text-xs" style={{ color: MUTED }}>{t.ciudad}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Band de confianza + CTA final */}
      <motion.div
        {...reveal(0)}
        className="rounded-3xl p-8 sm:p-12 mt-16 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg,#ffe4e6 0%, #fef3c7 100%)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: RAUSCH }}>
          Reservá tranquilo
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3 max-w-2xl mx-auto">
          Tu próxima escapada está a un clic.
        </h2>
        <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: TEXT }}>
          Más de <span style={{ fontWeight: 600 }}>2.300 alojamientos</span> en todo el país, con cancelación flexible y gente real para ayudarte.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-9">
          {[
            { icon: "🏠", titulo: "2.300+ alojamientos", desc: "En toda Argentina, de norte a sur" },
            { icon: "🔄", titulo: "Cancelación flexible", desc: "Cambiá de planes sin drama" },
            { icon: "🤝", titulo: "Soporte humano 24 h", desc: "Te atiende una persona, no un bot" },
          ].map((b) => (
            <div key={b.titulo} className="bg-white/70 rounded-2xl p-4">
              <div className="text-2xl mb-1.5">{b.icon}</div>
              <p className="font-semibold text-sm">{b.titulo}</p>
              <p className="text-xs mt-0.5" style={{ color: MUTED }}>{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <motion.button
            {...bounce}
            className="px-7 py-3.5 rounded-full text-white text-sm font-semibold shadow-sm"
            style={{ backgroundColor: RAUSCH }}
          >
            Buscar alojamiento
          </motion.button>
          <motion.button
            {...bounce}
            className="px-7 py-3.5 rounded-full text-sm font-semibold bg-white"
            style={{ border: `1px solid ${BORDER}`, color: TEXT }}
          >
            ¿Cómo funciona?
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );

  /* ============== TAB 2 — TU CUENTA ============== */
  const ReservasView = (
    <div>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="rounded-2xl p-6 mb-4 flex items-center gap-5 overflow-hidden relative" style={{ background: "linear-gradient(135deg,#ffe4e6 0%, #fef3c7 100%)" }}>
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0" style={{ backgroundColor: "#ffffff" }}>🏔️</div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: RAUSCH }}>Tu próximo viaje · faltan 9 días</p>
          <h3 className="text-2xl font-semibold mb-1">Cabaña en Llao Llao, Bariloche</h3>
          <p className="text-sm" style={{ color: MUTED }}>14 al 21 de julio · 7 noches · Anfitriona: Mariela</p>
        </div>
        <motion.button whileHover={{ y: -2 }} className="px-4 py-2.5 rounded-xl text-sm font-semibold shrink-0 hidden sm:block" style={{ backgroundColor: "#ffffff", border: `1px solid ${BORDER}` }}>Ver detalles</motion.button>
      </motion.div>

      {/* Mini-timeline del próximo viaje */}
      <div className="bg-white rounded-2xl p-5 mb-6" style={{ border: `1px solid ${BORDER}` }}>
        <p className="text-sm font-semibold mb-5">Seguimiento de tu viaje a Bariloche</p>
        <div className="relative px-3">
          <div className="absolute left-3 right-3 top-4 h-0.5 rounded-full" style={{ backgroundColor: BORDER }} />
          <motion.div
            className="absolute left-3 top-4 h-0.5 rounded-full"
            style={{ backgroundColor: RAUSCH, maxWidth: "calc(100% - 1.5rem)" }}
            initial={reduce ? false : { width: "0%" }}
            whileInView={reduce ? undefined : { width: "62%" }}
            animate={reduce ? { width: "62%" } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          />
          <div className="relative flex justify-between">
            {[
              { label: "Reserva confirmada", done: true },
              { label: "Pago realizado", done: true },
              { label: "Faltan 9 días", active: true },
              { label: "Check-in · 14 jul", done: false },
            ].map((s, i) => (
              <div key={s.label} className="flex flex-col items-center flex-1">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 bg-white"
                  style={{
                    backgroundColor: s.done ? RAUSCH : s.active ? SOFT_PINK : "#ffffff",
                    color: s.done ? "#ffffff" : RAUSCH,
                    border: `1.5px solid ${s.done || s.active ? RAUSCH : BORDER}`,
                  }}
                >
                  {s.done ? "✓" : i + 1}
                </div>
                <span
                  className="text-[11px] text-center leading-tight px-1"
                  style={{ color: s.active ? TEXT : MUTED, fontWeight: s.active ? 600 : 400 }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-lg font-semibold mb-4">Próximos viajes</p>
      <div className="space-y-3">
        {[
          { lugar: "Cabaña en Llao Llao", ciudad: "Bariloche, Río Negro", fechas: "14 — 21 jul", anfi: "Mariela", total: "$339.500", noches: 7, emoji: "🏔️" },
          { lugar: "Loft frente al mar", ciudad: "Punta Mogotes, Mar del Plata", fechas: "12 — 15 ago", anfi: "Diego", total: "$93.600", noches: 3, emoji: "🌊" },
          { lugar: "Casa con parrilla", ciudad: "Chacras de Coria, Mendoza", fechas: "3 — 6 oct", anfi: "Carolina", total: "$119.400", noches: 3, emoji: "🍇" },
        ].map((r, i) => (
          <motion.div key={r.lugar} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: i * 0.06 }} whileHover={{ y: -2 }} className="bg-white rounded-2xl p-5 flex items-center gap-4 cursor-pointer" style={{ border: `1px solid ${BORDER}` }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ backgroundColor: SOFT_PINK }}>{r.emoji}</div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold">{r.lugar}</p>
              <p className="text-sm truncate" style={{ color: MUTED }}>{r.ciudad} · Anfitrión: {r.anfi}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm font-semibold">{r.fechas}</p>
              <p className="text-xs" style={{ color: MUTED }}>{r.noches} noches · {r.total}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const WishlistView = (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: RAUSCH }}>
            ❤️ Tu wishlist
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">Lugares guardados</h2>
        </div>
        <span className="text-sm" style={{ color: MUTED }}>8 alojamientos</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[
          { lugar: "Domo geodésico en el bosque", ciudad: "El Bolsón", precio: "$54.200", grad: "linear-gradient(135deg,#a7f3d0,#6ee7b7)", super: true, emoji: "🌲" },
          { lugar: "Casa de adobe con vista", ciudad: "Tafí del Valle", precio: "$28.900", grad: "linear-gradient(135deg,#fed7aa,#fdba74)", super: true, emoji: "🏞️" },
          { lugar: "Loft minimalista", ciudad: "Palermo, CABA", precio: "$42.000", grad: "linear-gradient(135deg,#e0e7ff,#c7d2fe)", super: false, emoji: "🏙️" },
          { lugar: "Cabaña con jacuzzi", ciudad: "Villa La Angostura", precio: "$71.800", grad: "linear-gradient(135deg,#dbeafe,#bfdbfe)", super: true, emoji: "♨️" },
        ].map((w, i) => (
          <motion.div key={w.lugar} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }} whileHover={reduce ? undefined : { y: -3 }} className="cursor-pointer">
            <div className="aspect-[4/3] rounded-2xl mb-3 flex items-end justify-between p-4 relative" style={{ background: w.grad }}>
              <span className="text-3xl">{w.emoji}</span>
              {w.super && <span className="px-2 py-1 rounded-full text-[10px] font-bold absolute top-3 left-3" style={{ backgroundColor: "#ffffff", color: TEXT }}>⭐ Súper anfitrión</span>}
              <span className="absolute top-3 right-3">
                <HeartButton defaultLiked />
              </span>
            </div>
            <p className="font-semibold text-sm">{w.lugar}</p>
            <p className="text-sm" style={{ color: MUTED }}>{w.ciudad}</p>
            <p className="text-sm mt-1"><span style={{ fontWeight: 600 }}>{w.precio}</span> <span style={{ color: MUTED }}>noche</span></p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const MensajesView = (
    <div>
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: RAUSCH }}>
          📨 Inbox
        </p>
        <h2 className="text-3xl font-semibold tracking-tight">Mensajes con anfitriones</h2>
      </div>

      <div className="space-y-2">
        {[
          { ini: "M", color: "#ffe4e6", nombre: "Mariela", lugar: "Cabaña Llao Llao", preview: "Hola Carla! Te esperamos el 14, llevá pilchas de abrigo que acá hace frío 🥶", hora: "10:42", unread: 2, typing: true },
          { ini: "D", color: "#dbeafe", nombre: "Diego", lugar: "Loft Mar del Plata", preview: "Confirmado el check-in a las 15hs. Cualquier cosa me escribís", hora: "Ayer", unread: 0, typing: false },
          { ini: "C", color: "#dcfce7", nombre: "Carolina", lugar: "Casa con parrilla", preview: "Te mando la dirección por acá una semana antes así no te perdés", hora: "Lun", unread: 0, typing: false },
          { ini: "F", color: "#fef3c7", nombre: "Fernando", lugar: "Estudio en Salta", preview: "Buenísimo. La reserva quedó confirmada, te llega el mail con detalles", hora: "Sáb", unread: 0, typing: false },
          { ini: "L", color: "#e9d5ff", nombre: "Lourdes", lugar: "Domo El Bolsón", preview: "Sí hay wifi pero anda lento. Si necesitás trabajar te paso el del vecino 😅", hora: "29/4", unread: 1, typing: false },
        ].map((m, i) => (
          <motion.div key={m.nombre} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.32, delay: i * 0.05 }} whileHover={{ y: -1 }} className="bg-white rounded-2xl p-4 flex items-center gap-3 cursor-pointer" style={{ border: `1px solid ${BORDER}` }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold shrink-0" style={{ backgroundColor: m.color }}>{m.ini}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <p className="font-semibold truncate">{m.nombre}</p>
                <span className="text-xs" style={{ color: MUTED }}>· {m.lugar}</span>
              </div>
              {m.typing ? (
                <div className="mt-0.5"><TypingDots /></div>
              ) : (
                <p className="text-sm truncate mt-0.5" style={{ color: m.unread > 0 ? TEXT : MUTED, fontWeight: m.unread > 0 ? 500 : 400 }}>{m.preview}</p>
              )}
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs mb-1" style={{ color: MUTED }}>{m.hora}</p>
              {m.unread > 0 && <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: RAUSCH }}>{m.unread}</span>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const CuentaView = (
    <div>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl p-6 mb-5 flex items-center gap-5" style={{ border: `1px solid ${BORDER}` }}>
        <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-semibold shrink-0" style={{ backgroundColor: SOFT_PINK, color: RAUSCH }}>C</div>
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl font-semibold mb-1">Carla González</h3>
          <p className="text-sm" style={{ color: MUTED }}>Huésped desde 2019 · 14 viajes hechos</p>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold" style={{ backgroundColor: "#dcfce7", color: "#166534" }}>✓ Identidad verificada</span>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold" style={{ backgroundColor: SOFT_PINK, color: RAUSCH }}>⭐ Huésped confiable</span>
          </div>
        </div>
      </motion.div>

      <div className="space-y-3">
        {[
          { icon: "👤", titulo: "Información personal", desc: "Nombre, foto, fecha de cumpleaños y datos de contacto" },
          { icon: "💳", titulo: "Pagos y cobros", desc: "Visa terminada en •• 4421 · 2 métodos guardados" },
          { icon: "✅", titulo: "Verificaciones", desc: "Email, teléfono e identidad verificados — falta documento" },
          { icon: "🔒", titulo: "Seguridad y acceso", desc: "Contraseña, sesiones activas y autenticación en dos pasos" },
          { icon: "🌍", titulo: "Idioma y región", desc: "Español (Argentina) · Pesos argentinos (ARS)" },
        ].map((s, i) => (
          <motion.div key={s.titulo} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.32, delay: 0.1 + i * 0.05 }} whileHover={{ y: -1 }} className="bg-white rounded-2xl p-5 flex items-center gap-4 cursor-pointer" style={{ border: `1px solid ${BORDER}` }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ backgroundColor: SURFACE }}>{s.icon}</div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold">{s.titulo}</p>
              <p className="text-sm mt-0.5" style={{ color: MUTED }}>{s.desc}</p>
            </div>
            <span style={{ color: MUTED }}>›</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const AyudaView = (
    <div>
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: RAUSCH }}>
          🤝 Estamos para ayudarte
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mb-2">¿En qué te damos una mano hoy?</h2>
        <p className="text-base" style={{ color: MUTED }}>
          Buscá tu tema o elegí una categoría. Si no encontrás lo que necesitás, escribinos, contestamos rápido.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {[
          { icon: "🧳", titulo: "Cancelar o cambiar una reserva", desc: "Si tus planes cambiaron, te explicamos cómo modificar fechas, cancelar o pedir reembolso. Cada alojamiento tiene su política." },
          { icon: "💸", titulo: "Pagos, reembolsos y comprobantes", desc: "Ver el detalle de lo que pagaste, descargar facturas o consultar por un cobro que no reconocés. Todo desde acá." },
          { icon: "🛏️", titulo: "Problemas durante tu estadía", desc: "Algo no es como esperabas? Te ayudamos a resolverlo con el anfitrión o, si hace falta, te buscamos otro lugar." },
          { icon: "🆘", titulo: "Emergencias y seguridad", desc: "Si pasa algo grave, llamanos al 0800. Estamos las 24 horas, todos los días del año, también en feriados." },
        ].map((c, i) => (
          <motion.div key={c.titulo} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }} whileHover={{ y: -3 }} className="bg-white rounded-2xl p-5 cursor-pointer" style={{ border: `1px solid ${BORDER}` }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-3" style={{ backgroundColor: SOFT_PINK }}>{c.icon}</div>
            <p className="font-semibold mb-1.5">{c.titulo}</p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{c.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }} className="bg-white rounded-2xl p-5 flex items-center gap-4" style={{ border: `1px dashed ${BORDER}` }}>
        <span className="text-2xl">💬</span>
        <div className="flex-1">
          <p className="font-semibold">¿Preferís que te llamemos?</p>
          <p className="text-sm" style={{ color: MUTED }}>Dejá tu número y un agente real (no bot) te llama en menos de 5 minutos.</p>
        </div>
        <motion.button whileHover={{ y: -2 }} className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white shrink-0" style={{ backgroundColor: RAUSCH }}>Pedir llamada</motion.button>
      </motion.div>
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    reservas: ReservasView,
    wishlist: WishlistView,
    mensajes: MensajesView,
    cuenta: CuentaView,
    ayuda: AyudaView,
  };

  const workspace = (
    <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: "#ffffff", border: `1px solid ${BORDER}`, minHeight: "640px" }}>
      <InternalNav
        variant="soft-sidebar"
        items={[
          { id: "reservas", label: "Reservas", icon: "🧳", badge: 1 },
          { id: "wishlist", label: "Wishlist", icon: "❤️" },
          { id: "mensajes", label: "Mensajes", icon: "📨", badge: 3 },
          { id: "cuenta", label: "Cuenta", icon: "👤" },
          { id: "ayuda", label: "Ayuda", icon: "🤝" },
        ]}
        active={activeView} onChange={setActiveView} accent={RAUSCH} bgContainer="#ffffff" bgActive={SOFT_PINK} textActive={TEXT} textInactive={MUTED} borderColor={BORDER} workspaceLabel="Hola, Carla" workspaceInitial="C"
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

  return (
    <div style={{ backgroundColor: SURFACE, color: TEXT, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={BORDER} navColor={MUTED} />

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <StyleTabs variant="soft-pill" accent={RAUSCH} bgContainer="#ffffff" textActive="#ffffff" textInactive={MUTED} borderColor={BORDER} tabsClassName="mb-8" tabs={[{ id: "buscar", label: "Buscar", content: landing }, { id: "cuenta", label: "Tu cuenta", content: workspace }]} />
        <DividerReveal variant="soft-bounce" lineColor={BORDER} textColor={MUTED} className="my-10">Donde sea que vayas</DividerReveal>
        <StyleFooter estilo={e} textColor={MUTED} borderColor={BORDER} />
      </main>
    </div>
  );
}
