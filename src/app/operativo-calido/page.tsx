"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import {
  palette,
  BENEFICIOS,
  PREVIEW_KPIS,
  PREVIEW_ROWS,
  SOCIAL_AVATARES,
  COBROS,
  CLIENTES,
} from "./_data";
import { LandingHero } from "./_components/LandingHero";
import { PanelPreview } from "./_components/PanelPreview";
import { Benefits } from "./_components/Benefits";
import { SocialProof } from "./_components/SocialProof";
import { FinalCta } from "./_components/FinalCta";
import { BusinessPanel } from "./_components/BusinessPanel";

/**
 * operativo-calido — composición delgada. Estilo interno-first:
 * externo = pitch mínimo (hero + preview + beneficios + prueba + CTA),
 * interno = panel del negocio scrolleable con 4 módulos a la vista
 * (sin sub-nav que los esconda). Datos desde `_data.ts`.
 */
export default function OperativoCalidoPage() {
  const e = getEstilo("operativo-calido")!;
  const { text, surface, muted, border, verde } = palette;

  const inicio = (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-2 sm:px-4 pt-8 pb-14"
    >
      <LandingHero />
      <PanelPreview kpis={PREVIEW_KPIS} rows={PREVIEW_ROWS} />
      <Benefits beneficios={BENEFICIOS} />
      <SocialProof avatares={SOCIAL_AVATARES} />
      <FinalCta />
    </motion.section>
  );

  const negocio = <BusinessPanel cobros={COBROS} clientes={CLIENTES} />;

  return (
    <div style={{ backgroundColor: surface, color: text, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={border} navColor={muted} />
      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <StyleTabs
          variant="soft-pill"
          accent={verde}
          bgContainer="#ffffff"
          textActive="#ffffff"
          textInactive={muted}
          borderColor={border}
          tabsClassName="mb-8"
          tabs={[
            { id: "inicio", label: "Inicio", content: inicio },
            { id: "negocio", label: "Tu negocio", content: negocio },
          ]}
        />
        <DividerReveal variant="soft-bounce" lineColor={border} textColor={muted} className="my-10">
          Tu negocio en orden
        </DividerReveal>
        <StyleFooter estilo={e} textColor={muted} borderColor={border} />
      </main>
    </div>
  );
}
