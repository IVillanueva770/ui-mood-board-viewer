"use client";

import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { medicoData, palette } from "./_data";
import { LandingHero } from "./_components/LandingHero";
import { ComoFunciona } from "./_components/ComoFunciona";
import { Credenciales } from "./_components/Credenciales";
import { Testimonios } from "./_components/Testimonios";
import { FaqCta } from "./_components/FaqCta";
import { HoyPlan } from "./_components/HoyPlan";
import { Biblioteca } from "./_components/Biblioteca";
import { Evolucion } from "./_components/Evolucion";
import { MiKine } from "./_components/MiKine";

/**
 * medico-amigable — composición delgada.
 * Externo = landing del programa de salud (paciente-facing). Interno = home
 * del paciente, piezas VISIBLES en scroll (no sub-nav que las esconda).
 * Datos desde `_data.ts`; cada pieza recibe lo suyo por props (swap a backend
 * = tocar `_data.ts`). Firma de motion: confianza gentil.
 */
export default function MedicoAmigablePage() {
  const e = getEstilo("medico-amigable")!;
  const { muted, border, surface, text } = palette;
  const d = medicoData;

  const programa = (
    <div className="space-y-16 pt-6 pb-12">
      <LandingHero />
      <ComoFunciona pasos={d.pasos} />
      <Credenciales metricas={d.metricas} avales={d.avales} />
      <Testimonios testimonios={d.testimonios} />
      <FaqCta faq={d.faq} />
    </div>
  );

  const miCuenta = (
    <div className="max-w-3xl mx-auto px-2 sm:px-4 pt-4 pb-12 space-y-14">
      <HoyPlan perfil={d.perfil} turno={d.proximoTurno} ejercicios={d.ejerciciosHoy} />
      <Biblioteca ejercicios={d.biblioteca} />
      <Evolucion evolucion={d.evolucion} logros={d.logros} />
      <MiKine perfil={d.perfil} chat={d.chat} notas={d.notasPlan} />
    </div>
  );

  return (
    <div style={{ backgroundColor: surface, color: text, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={border} navColor={muted} />

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <StyleTabs
          variant="soft-pill"
          accent={palette.accent}
          bgContainer={palette.card}
          textActive="#ffffff"
          textInactive={muted}
          borderColor={border}
          tabsClassName="mb-8 flex justify-center"
          tabs={[
            { id: "programa", label: "El programa", content: programa },
            { id: "cuenta", label: "Mi cuenta", content: miCuenta },
          ]}
        />
        <DividerReveal variant="soft-bounce" lineColor={border} textColor={muted} className="my-10">
          Salud sin sentirte en un hospital
        </DividerReveal>
        <StyleFooter estilo={e} textColor={muted} borderColor={border} />
      </main>
    </div>
  );
}
