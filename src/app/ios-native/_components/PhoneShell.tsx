"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { palette, type IosData } from "../_data";
import { useIosMotion } from "./use-ios-motion";
import { TabBar, type TabId } from "./TabBar";
import { HoyTab } from "./HoyTab";
import { TurnosTab } from "./TurnosTab";
import { ProgresoTab } from "./ProgresoTab";
import { PerfilTab } from "./PerfilTab";

/**
 * Pieza interna (shell de la app): frame de iPhone + status bar + contenido
 * de la pestaña activa + TabBar abajo. Orquesta la navegación (la firma iOS:
 * tab bar anclado al frame, transición con spring entre vistas). El
 * `relative` hace que TabBar y los bottom-sheets se anclen al teléfono y no
 * al viewport. Inyecta los datos de `_data` a cada tab por props.
 */
export function PhoneShell({ data }: { data: IosData }) {
  const { reduce, tabSwitch } = useIosMotion();
  const { sep, groupBg, card } = palette;
  const [tab, setTab] = useState<TabId>("hoy");

  return (
    <div className="max-w-[400px] mx-auto py-6">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="relative rounded-[2.5rem] overflow-hidden"
        style={{
          backgroundColor: card,
          border: `1px solid ${sep}`,
          boxShadow: "0 30px 60px -20px rgba(0,0,0,0.28)",
        }}
      >
        {/* Status bar iOS */}
        <div
          className="flex items-center justify-between px-7 pt-3 pb-2 text-xs font-semibold relative z-10"
          style={{ backgroundColor: groupBg, color: palette.text }}
        >
          <span>9:41</span>
          <span
            className="absolute left-1/2 -translate-x-1/2 top-1.5 w-24 h-5 rounded-full"
            style={{ backgroundColor: "#000" }}
            aria-hidden
          />
          <span className="tracking-tight">􀙇 􀛨 􀛪</span>
        </div>

        {/* Contenido scrollable de la pestaña */}
        <div
          className="overflow-y-auto"
          style={{
            backgroundColor: groupBg,
            height: 620,
            paddingBottom: 76,
            overscrollBehavior: "contain",
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={tab} {...tabSwitch}>
              {tab === "hoy" && <HoyTab habitosIniciales={data.habitos} />}
              {tab === "turnos" && <TurnosTab turnos={data.turnos} />}
              {tab === "progreso" && (
                <ProgresoTab rings={data.rings} semana={data.semana} insights={data.insights} />
              )}
              {tab === "perfil" && <PerfilTab perfil={data.perfil} grupos={data.ajustes} />}
            </motion.div>
          </AnimatePresence>
        </div>

        <TabBar active={tab} onChange={setTab} />
      </motion.div>

      <p className="text-center text-[11px] mt-4" style={{ color: palette.muted }}>
        Tocá el tab bar para cambiar de vista · deslizá los detalles para cerrar
      </p>
    </div>
  );
}
