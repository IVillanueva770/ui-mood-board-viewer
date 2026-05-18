"use client";

import { useState, type ReactNode } from "react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { m3, mangoData } from "./_data";
import { StoreHero } from "./_components/StoreHero";
import { FeatureCards } from "./_components/FeatureCards";
import { ScreenshotCarousel } from "./_components/ScreenshotCarousel";
import { StoreReviews } from "./_components/StoreReviews";
import { PhoneFrame } from "./_components/PhoneFrame";
import { M3BottomNav, type NavItem } from "./_components/M3BottomNav";
import { Fab } from "./_components/Fab";
import { InicioView } from "./_components/InicioView";
import { MovimientosView } from "./_components/MovimientosView";
import { DetalleView } from "./_components/DetalleView";
import { AjustesView } from "./_components/AjustesView";

/**
 * material-3 — composición delgada. Externo = ficha Play Store de "Mango"
 * (app de gastos Android, datos argentinos). Interno = app Material dentro de
 * un phone frame: bottom nav con state-layer pill, FAB con morph, ripple en
 * todo lo táctil, elevación tonal. Datos en `_data.ts` (swap a backend = ese
 * archivo). Firma de motion: ripple + emphasized easing + elevación M3.
 */
const NAV_ITEMS: NavItem[] = [
  { id: "inicio", label: "Inicio", icon: "⌂" },
  { id: "movimientos", label: "Movim.", icon: "≣" },
  { id: "detalle", label: "Categorías", icon: "◔" },
  { id: "ajustes", label: "Ajustes", icon: "⚙" },
];

export default function Material3Page() {
  const e = getEstilo("material-3")!;
  const d = mangoData;
  const [activeView, setActiveView] = useState("inicio");

  const subViews: Record<string, ReactNode> = {
    inicio: (
      <InicioView
        resumen={d.resumen}
        categorias={d.categorias}
        movimientos={d.movimientos}
        onVerTodos={() => setActiveView("movimientos")}
        onVerCategoria={() => setActiveView("detalle")}
      />
    ),
    movimientos: <MovimientosView movimientos={d.movimientos} />,
    detalle: <DetalleView detalle={d.detalle} />,
    ajustes: <AjustesView ajustes={d.ajustes} />,
  };

  const landing = (
    <div className="space-y-14 sm:space-y-20 pt-4 pb-8">
      <StoreHero preview={d.capturas[0]} />
      <FeatureCards features={d.features} />
      <ScreenshotCarousel capturas={d.capturas} />
      <StoreReviews score={d.ratingScore} total={d.ratingTotal} dist={d.ratingDist} reviews={d.reviews} />
    </div>
  );

  const app = (
    <PhoneFrame nav={<M3BottomNav items={NAV_ITEMS} active={activeView} onChange={setActiveView} />} fab={<Fab />}>
      {subViews[activeView]}
    </PhoneFrame>
  );

  return (
    <div style={{ backgroundColor: m3.bg, color: m3.onSurface, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={m3.outlineVariant} navColor={m3.onSurfaceVariant} />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-12">
        <StyleTabs
          variant="soft-pill"
          accent={m3.primary}
          textActive={m3.onPrimary}
          textInactive={m3.onSurfaceVariant}
          bgContainer={m3.secondaryContainer}
          tabsClassName="mb-8 flex justify-center"
          tabs={[
            { id: "landing", label: "Play Store", content: landing },
            { id: "app", label: "App", content: app },
          ]}
        />

        <DividerReveal
          variant="soft-bounce"
          lineColor={m3.outlineVariant}
          textColor={m3.onSurfaceVariant}
          className="max-w-md mx-auto px-4 mt-12 mb-4"
          textClassName="text-[10px] uppercase tracking-[0.2em] font-medium"
        >
          fin del recorrido
        </DividerReveal>

        <StyleFooter estilo={e} textColor={m3.onSurfaceVariant} borderColor={m3.outlineVariant} />
      </main>
    </div>
  );
}
