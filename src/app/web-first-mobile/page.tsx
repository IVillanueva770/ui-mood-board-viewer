"use client";

import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { webData, palette } from "./_data";
import { LandingHero } from "./_components/LandingHero";
import { FeatureTrio } from "./_components/FeatureTrio";
import { StatsBand } from "./_components/StatsBand";
import { WebFooter } from "./_components/WebFooter";
import { AppTopBar } from "./_components/AppTopBar";
import { Feed } from "./_components/Feed";
import { Explorar } from "./_components/Explorar";
import { Notificaciones } from "./_components/Notificaciones";
import { PerfilCard } from "./_components/PerfilCard";

/**
 * web-first-mobile — composición delgada.
 * Externo = sitio web responsive (no app). Interno = app de contenido tipo
 * red social, modelada como SITIO WEB multi-columna responsive (top bar, no
 * phone-frame ni bottom-tab nativo) — esa es la diferencia legible con
 * ios-native. Piezas VISIBLES en scroll. Swap a backend = tocar `_data.ts`.
 */
export default function WebFirstMobilePage() {
  const e = getEstilo("web-first-mobile")!;
  const { muted, border, surface, card, text } = palette;
  const d = webData;

  const web = (
    <div className="space-y-16 pt-2 pb-10">
      <LandingHero navLinks={d.navLinks} />
      <FeatureTrio features={d.features} />
      <StatsBand stats={d.stats} />
      <WebFooter footer={d.footer} />
    </div>
  );

  // App = sitio web responsive multi-columna (NO phone frame / NO bottom-nav).
  const app = (
    <div
      className="max-w-5xl mx-auto rounded-2xl overflow-hidden"
      style={{ backgroundColor: surface, border: `1px solid ${border}` }}
    >
      <AppTopBar />
      <div className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        <div className="lg:col-span-2">
          <Feed posts={d.feed} />
        </div>
        <aside className="lg:col-span-1 lg:sticky lg:top-20">
          <Explorar trends={d.trends} sugeridos={d.sugeridos} />
        </aside>
      </div>
      <div className="px-4 sm:px-5 pb-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Notificaciones notifs={d.notifs} />
        <PerfilCard perfil={d.perfil} />
      </div>
    </div>
  );

  return (
    <div style={{ backgroundColor: card, color: text, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={border} navColor={muted} />

      <main className="max-w-6xl mx-auto px-5 py-10 sm:py-14">
        <StyleTabs
          variant="tech-pill"
          accent={palette.accent}
          textActive="#ffffff"
          textInactive={muted}
          bgContainer={surface}
          borderColor={border}
          tabsClassName="mb-10 flex justify-center"
          tabs={[
            { id: "web", label: "Web", content: web },
            { id: "app", label: "App", content: app },
          ]}
        />

        <DividerReveal
          variant="soft-bounce"
          lineColor={border}
          textColor={muted}
          className="mt-16 mb-10"
          textClassName="text-xs uppercase tracking-[0.2em] font-bold"
        >
          Mismo sitio, cualquier pantalla
        </DividerReveal>

        <StyleFooter estilo={e} textColor={muted} borderColor={border} />
      </main>
    </div>
  );
}
