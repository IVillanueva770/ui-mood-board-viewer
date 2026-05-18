"use client";

import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { etherealData, palette } from "./_data";
import { HeroEthereal } from "./_components/HeroEthereal";
import { ProyectosGrid } from "./_components/ProyectosGrid";
import { ManifiestoBlock } from "./_components/ManifiestoBlock";
import { IndiceProyectos } from "./_components/IndiceProyectos";
import { ContactoGestual } from "./_components/ContactoGestual";
import { ObrasEnTaller } from "./_components/ObrasEnTaller";
import { Briefs } from "./_components/Briefs";
import { GaleriaAssets } from "./_components/GaleriaAssets";
import { AgendaCreativa } from "./_components/AgendaCreativa";

/**
 * ethereal — composición delgada.
 * Cada lado = piezas funcionales DISTINTAS y VISIBLES en scroll (sin
 * sub-nav que las esconda). Datos desde `_data.ts`; cada pieza recibe lo
 * suyo por props (swap a backend = tocar `_data.ts`). Motion = firma
 * ethereal: mask reveal, parallax leve, cursor-aware, easings lentos.
 */
export default function EtherealPage() {
  const e = getEstilo("ethereal")!;
  const d = etherealData;

  // Externo — la experiencia / portfolio de autor.
  const editorial = (
    <>
      <HeroEthereal meta={d.manifiesto} />
      <ProyectosGrid proyectos={d.proyectos} />
      <ManifiestoBlock data={d.manifiesto} />
      <IndiceProyectos
        titulo={d.indice.titulo}
        rango={d.indice.rango}
        total={d.indice.total}
        entradas={d.indice.entradas}
      />
      <ContactoGestual data={d.contacto} />
    </>
  );

  // Interno — backstage del estudio (coherente con el mood, no admin).
  const atelier = (
    <div style={{ border: `1px solid ${palette.border}`, backgroundColor: palette.panel }}>
      <div
        className="px-6 sm:px-10 py-7 flex items-baseline justify-between flex-wrap gap-3"
        style={{ borderBottom: `1px solid ${palette.border}` }}
      >
        <span className="font-bebas text-2xl tracking-wide italic" style={{ color: palette.fg }}>
          Atelier
        </span>
        <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: palette.muted }}>
          backstage · {d.manifiesto.vol}
        </span>
      </div>

      <div className="px-6 sm:px-10 py-12 space-y-20">
        <ObrasEnTaller obras={d.obras} capacidad={d.capacidad} />
        <DividerReveal variant="asym-scatter" lineColor={palette.rule} textColor={palette.faint} accentColor={palette.accent} textClassName="text-[10px] uppercase tracking-[0.4em]">
          briefs
        </DividerReveal>
        <Briefs briefs={d.briefs} />
        <DividerReveal variant="asym-scatter" lineColor={palette.rule} textColor={palette.faint} accentColor={palette.accent} textClassName="text-[10px] uppercase tracking-[0.4em]">
          galería
        </DividerReveal>
        <GaleriaAssets assets={d.assets} />
        <DividerReveal variant="asym-scatter" lineColor={palette.rule} textColor={palette.faint} accentColor={palette.accent} textClassName="text-[10px] uppercase tracking-[0.4em]">
          agenda
        </DividerReveal>
        <AgendaCreativa hitos={d.agenda} />
      </div>
    </div>
  );

  return (
    <div style={{ backgroundColor: palette.bg, color: palette.fg, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={palette.border} navColor={palette.muted} />

      <main className="max-w-7xl mx-auto px-6 py-12 sm:py-16 overflow-x-hidden">
        <StyleTabs
          variant="editorial-underline"
          accent={palette.accent}
          textActive={palette.fg}
          textInactive={palette.faint}
          tabsClassName="mb-12 sm:mb-16"
          tabs={[
            { id: "editorial", label: "Editorial", content: editorial },
            { id: "atelier", label: "Atelier", content: atelier },
          ]}
        />

        <DividerReveal
          variant="asym-scatter"
          lineColor={palette.rule}
          textColor={palette.faint}
          accentColor={palette.accent}
          className="mt-24 mb-12"
          textClassName="text-[10px] uppercase tracking-[0.4em]"
        >
          fin / {d.manifiesto.vol}
        </DividerReveal>

        <StyleFooter estilo={e} textColor={palette.soft} borderColor={palette.rule} />
      </main>
    </div>
  );
}
