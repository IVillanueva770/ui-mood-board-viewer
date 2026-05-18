"use client";

import { motion } from "motion/react";
import { Ripple } from "@/components/ripple";
import { m3, elevation, type ScreenSpec } from "../_data";
import { useM3Motion } from "./use-m3-motion";
import { ScreenMock } from "./ScreenMock";

/**
 * Pieza externa 1 — ficha de Play Store: ícono, nombre, claim, rating,
 * botón "Instalar" con Ripple (firma) y preview del teléfono Android.
 */
export function StoreHero({ preview }: { preview: ScreenSpec }) {
  const { surface } = useM3Motion();

  return (
    <section className="grid md:grid-cols-[1fr_auto] gap-10 items-center max-w-5xl mx-auto px-5 pt-8 pb-4">
      <div>
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            initial={{ scale: 0.7, rotate: -8, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={surface}
            className="w-20 h-20 rounded-[26px] flex items-center justify-center text-4xl"
            style={{
              background: `linear-gradient(135deg, ${m3.primary}, ${m3.tertiary})`,
              color: m3.onPrimary,
              boxShadow: elevation(3),
            }}
          >
            🥭
          </motion.div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight" style={{ color: m3.onSurface }}>Mango</h1>
            <p className="text-sm" style={{ color: m3.primary }}>Estudio Mango · Finanzas personales</p>
            <p className="text-xs mt-0.5" style={{ color: m3.onSurfaceVariant }}>Contiene anuncios · Compras en la app</p>
          </div>
        </div>

        <p className="text-2xl sm:text-3xl font-medium tracking-tight leading-snug mb-3" style={{ color: m3.onSurface }}>
          Tus gastos, <span style={{ color: m3.primary }}>claros como el agua.</span>
        </p>
        <p className="text-base leading-relaxed max-w-md mb-7" style={{ color: m3.onSurfaceVariant }}>
          Anotá lo que gastás en dos toques, ponele un límite a cada categoría y
          enterate a dónde se te va la plata. Hecha para Android.
        </p>

        {/* Rating row Play Store */}
        <div className="flex items-center gap-6 flex-wrap mb-7 text-sm" style={{ color: m3.onSurface }}>
          <div className="text-center">
            <div className="font-semibold flex items-center gap-1 justify-center">4,8 <span style={{ color: m3.primary }}>★</span></div>
            <div className="text-[11px]" style={{ color: m3.onSurfaceVariant }}>12 mil reseñas</div>
          </div>
          <div className="w-px h-8" style={{ backgroundColor: m3.outlineVariant }} />
          <div className="text-center">
            <div className="font-semibold">100 mil+</div>
            <div className="text-[11px]" style={{ color: m3.onSurfaceVariant }}>descargas</div>
          </div>
          <div className="w-px h-8" style={{ backgroundColor: m3.outlineVariant }} />
          <div className="text-center">
            <div className="font-semibold">#3</div>
            <div className="text-[11px]" style={{ color: m3.onSurfaceVariant }}>en Finanzas</div>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <Ripple
            color="rgba(255,255,255,0.4)"
            className="px-7 py-3 rounded-full text-sm font-semibold"
            style={{ backgroundColor: m3.primary, color: m3.onPrimary, boxShadow: elevation(1) }}
            ariaLabel="Instalar Mango"
          >
            Instalar
          </Ripple>
          <Ripple
            color="rgba(103,80,164,0.16)"
            className="px-6 py-3 rounded-full text-sm font-semibold"
            style={{ color: m3.primary, border: `1px solid ${m3.outline}` }}
            ariaLabel="Agregar a lista de deseos"
          >
            ＋ Lista de deseos
          </Ripple>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={surface}
        whileHover={{ y: -6 }}
        className="mx-auto"
      >
        <ScreenMock spec={preview} width={208} />
      </motion.div>
    </section>
  );
}
