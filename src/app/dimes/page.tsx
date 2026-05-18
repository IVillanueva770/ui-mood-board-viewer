"use client";

import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { dimesData, palette } from "./_data";
import { Hero } from "./_components/Hero";
import { StatsBrutal } from "./_components/StatsBrutal";
import { ProjectsShowcase } from "./_components/ProjectsShowcase";
import { Manifiesto } from "./_components/Manifiesto";
import { CtaStrip } from "./_components/CtaStrip";
import { WorkspaceHeader } from "./_components/WorkspaceHeader";
import { Pipeline } from "./_components/Pipeline";
import { Horas } from "./_components/Horas";
import { Clientes } from "./_components/Clientes";
import { Facturas } from "./_components/Facturas";

/**
 * dimes — composición delgada. BENCHMARK del cluster.
 * Externo (ESTUDIO) = landing brutalist. Interno (ADENTRO) = workspace del
 * estudio con las piezas VISIBLES en scroll (se eliminó el `InternalNav` que
 * escondía 5 sub-vistas = 1 pieza oculta para un viewer). Datos en `_data.ts`;
 * swap a backend = tocar ese archivo. Firma de motion: hard-shadow-shift
 * snappy canónico (`useBrutalMotion`), consistente en cards/botones/tabs/filas.
 */
export default function DimesPage() {
  const e = getEstilo("dimes")!;
  const { ink } = palette;
  const d = dimesData;

  const estudio = (
    <div className="space-y-14 sm:space-y-20 pt-4 pb-8">
      <Hero />
      <StatsBrutal stats={d.stats} />
      <ProjectsShowcase proyectos={d.proyectos} />
      <Manifiesto lineas={d.manifiesto} />
      <CtaStrip />
    </div>
  );

  const adentro = (
    <div className="space-y-12 pt-2 pb-8">
      <WorkspaceHeader />
      <Pipeline columnas={d.pipeline} />
      <Horas horas={d.horas} total={d.horasTotal} actividad={d.actividad} nota={d.nota} />
      <Clientes clientes={d.clientes} />
      <Facturas stats={d.facturaStats} facturas={d.facturas} />
    </div>
  );

  return (
    <div style={{ backgroundColor: palette.bg, color: ink, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={ink} navColor={ink} />

      <main className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <StyleTabs
          variant="brutalist"
          accent={ink}
          textActive={palette.bg}
          textInactive={ink}
          bgContainer={palette.bg}
          tabsClassName="mb-10"
          tabs={[
            { id: "estudio", label: "ESTUDIO", content: estudio },
            { id: "adentro", label: "ADENTRO", content: adentro },
          ]}
        />

        <DividerReveal
          variant="brutalist-stamp"
          lineColor={ink}
          textColor={ink}
          accentColor={palette.lime}
          className="mt-16 mb-10"
          textClassName="font-bebas text-2xl tracking-wide"
        >
          SIN ASTERISCOS · SIN TEMPLATES
        </DividerReveal>

        <StyleFooter
          estilo={e}
          textColor={ink}
          borderColor={ink}
          headingClass="font-bebas text-xl tracking-wide"
        />
      </main>
    </div>
  );
}
