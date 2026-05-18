"use client";

import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { palette, cursorData } from "./_data";
import { Hero } from "./_components/Hero";
import { Features } from "./_components/Features";
import { Showcase } from "./_components/Showcase";
import { Pricing } from "./_components/Pricing";
import { CtaFooter } from "./_components/CtaFooter";
import { WorkspaceBar } from "./_components/WorkspaceBar";
import { Editor } from "./_components/Editor";
import { AiChat } from "./_components/AiChat";
import { SettingsPanel } from "./_components/SettingsPanel";
import { CommandPalette } from "./_components/CommandPalette";

/**
 * cursor — composición delgada. Tokens REALES refero (Parchment #f7f7f4 /
 * Inkwell #262510 / accent #f54e00), estética "warm software studio".
 *
 * Externo = landing de dev-tool cálida (hero+editor · features · showcase ·
 * pricing · cta+changelog). Interno = el IDE con sus piezas VISIBLES y
 * APILADAS en scroll (editor · AI chat+diff · settings · command palette);
 * se eliminó el `InternalNav` que escondía 4 sub-vistas tras un sidebar
 * (regla dura: en un viewer el evaluador no clickea sub-nav). Datos en
 * `_data.ts` → swap a backend = tocar ese archivo. Firma de motion:
 * sombra multi-capa que se profundiza al levantar (`useStudioMotion`).
 */
export default function CursorPage() {
  const e = getEstilo("cursor")!;
  const d = cursorData;
  const { ink, bg, accent, muted, border, borderStrong } = palette;

  const landing = (
    <div className="space-y-16 sm:space-y-20 pt-4 pb-8">
      <Hero code={d.code} />
      <Features features={d.features} />
      <Showcase code={d.code} chat={d.chat} />
      <Pricing planes={d.planes} />
      <CtaFooter changelog={d.changelog} />
    </div>
  );

  const workspace = (
    <div className="space-y-10 pt-2 pb-8">
      <WorkspaceBar ws={d.workspace} />
      <Editor tree={d.fileTree} tabs={d.editorTabs} code={d.code} />
      <AiChat chat={d.chat} diff={d.diff} />
      <SettingsPanel sections={d.settings} />
      <CommandPalette commands={d.commands} />
    </div>
  );

  return (
    <div style={{ backgroundColor: bg, color: ink, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={border} navColor={muted} />

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <StyleTabs
          variant="ascii-bracket"
          accent={accent}
          textActive={bg}
          textInactive={muted}
          bgContainer={palette.card}
          borderColor={borderStrong}
          tabsClassName="mb-10"
          tabs={[
            { id: "landing", label: "Marketing", content: landing },
            { id: "workspace", label: "IDE", content: workspace },
          ]}
        />

        <DividerReveal
          variant="asym-scatter"
          lineColor={borderStrong}
          textColor={accent}
          accentColor={accent}
          className="mt-16 mb-10"
          textClassName="font-mono text-[10px] uppercase tracking-[0.3em] font-semibold"
        >
          _artifact
        </DividerReveal>

        <StyleFooter estilo={e} textColor={muted} borderColor={border} monoFont="var(--font-roboto-mono)" />
      </main>
    </div>
  );
}
