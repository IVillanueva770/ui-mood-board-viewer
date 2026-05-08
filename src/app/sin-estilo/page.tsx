"use client";

import { useState } from "react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

export default function SinEstiloPage() {
  const e = getEstilo("sin-estilo")!;
  const [activeView, setActiveView] = useState("home");

  /* ============== TAB 1 — LANDING (placeholder crudo) ============== */
  const landing = (
    <section className="max-w-4xl mx-auto px-5 sm:px-8 pt-10 pb-16 font-roboto-mono">
      <div
        className="p-4 mb-12 text-xs"
        style={{ border: "1px solid #000000", borderRadius: 0 }}
      >
        [AVISO] Esta pantalla NO es un estilo terminado. Es el default que se usa cuando NO hay mood board elegido.
      </div>

      <h1
        className="text-3xl sm:text-5xl mb-6 leading-tight"
        style={{ borderRadius: 0 }}
      >
        [ NO STYLE DECISIONS YET ]
      </h1>
      <p className="text-sm mb-10 leading-relaxed max-w-2xl" style={{ color: "#666666" }}>
        Default placeholder — visible para evitar confundir un mockup con un producto terminado. Sirve también para forzar la conversación: si esto se ve crudo, es porque falta decidir algo.
      </p>

      <div className="flex gap-3 flex-wrap mb-14">
        <button
          className="px-4 py-2 text-xs"
          style={{
            border: "1px solid #000000",
            backgroundColor: "#000000",
            color: "#ffffff",
            borderRadius: 0,
          }}
        >
          [ HACER UN MOOD BOARD ]
        </button>
        <button
          className="px-4 py-2 text-xs"
          style={{
            border: "1px solid #000000",
            backgroundColor: "#ffffff",
            color: "#000000",
            borderRadius: 0,
          }}
        >
          [ VER ESTILOS ]
        </button>
      </div>

      <div className="text-xs mb-3" style={{ color: "#666666" }}>
        [ FALTA DECIDIR ]
      </div>
      <div
        className="p-4 mb-12"
        style={{ border: "1px solid #000000", borderRadius: 0 }}
      >
        <ul className="text-xs leading-loose space-y-1">
          <li>[01] paleta — al menos bg / fg / accent</li>
          <li>[02] tipografía — display + body</li>
          <li>[03] tono — voz, registro, persona</li>
          <li>[04] vocabulario — qué palabras sí, qué palabras no</li>
          <li>[05] densidad — cuánta información por pantalla</li>
          <li>[06] componentes base — botones, cards, tablas</li>
        </ul>
      </div>

      <div className="text-xs mb-3" style={{ color: "#666666" }}>
        [ STATS DE PLACEHOLDER ]
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 mb-12">
        {[
          { label: "MÉTRICA 1", value: "00" },
          { label: "MÉTRICA 2", value: "00" },
          { label: "MÉTRICA 3", value: "00" },
          { label: "MÉTRICA 4", value: "00" },
        ].map((s, i) => (
          <div
            key={s.label}
            className="p-4"
            style={{
              border: "1px solid #000000",
              borderLeft: i === 0 ? "1px solid #000000" : "none",
              borderRadius: 0,
            }}
          >
            <div className="text-xs mb-1" style={{ color: "#666666" }}>
              {s.label}
            </div>
            <div className="text-2xl">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="text-xs mb-3" style={{ color: "#666666" }}>
        [ CARDS PLACEHOLDER ]
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="p-5"
            style={{ border: "1px solid #000000", borderRadius: 0 }}
          >
            <div className="text-xs mb-3" style={{ color: "#666666" }}>
              [CARD {n}]
            </div>
            <div className="text-base mb-2">Título card.</div>
            <div className="text-xs leading-relaxed mb-4" style={{ color: "#666666" }}>
              Descripción placeholder. Cuando se elija estilo del mood board, esto va a tener tipografía, color y layout reales.
            </div>
            <a href="#" className="text-xs underline">
              [VER MÁS]
            </a>
          </div>
        ))}
      </div>
    </section>
  );

  /* ============== SUB-VISTAS DEL APP CRUDO ============== */

  const HomeView = (
    <div>
      <h2 className="text-base mb-4">[ HOME ]</h2>
      <p className="text-xs mb-6" style={{ color: "#666666" }}>
        Listado de items genéricos. Cuando se elija estilo, esto va a tener jerarquía visual real.
      </p>
      <div className="space-y-1 text-xs">
        {[
          "Item de ejemplo uno",
          "Item de ejemplo dos",
          "Item de ejemplo tres",
          "Item de ejemplo cuatro",
          "Item de ejemplo cinco",
          "Item de ejemplo seis",
          "Item de ejemplo siete",
          "Item de ejemplo ocho",
        ].map((it, i) => (
          <div
            key={i}
            className="px-3 py-2"
            style={{ border: "1px solid #000000", borderRadius: 0 }}
          >
            [{String(i + 1).padStart(2, "0")}] {it}
          </div>
        ))}
      </div>
    </div>
  );

  const ItemsView = (
    <div>
      <h2 className="text-base mb-4">[ ITEMS ]</h2>
      <p className="text-xs mb-6" style={{ color: "#666666" }}>
        Tabla pelada. Sin sorting visual, sin paginación bonita, sin cards. Tabla.
      </p>
      <table className="w-full text-xs" style={{ border: "1px solid #000000", borderRadius: 0 }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #000000" }}>
            <th className="px-3 py-2 text-left" style={{ borderRight: "1px solid #000000" }}>
              ID
            </th>
            <th className="px-3 py-2 text-left" style={{ borderRight: "1px solid #000000" }}>
              NOMBRE
            </th>
            <th className="px-3 py-2 text-left">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: "I-0001", n: "Item alpha", s: "activo" },
            { id: "I-0002", n: "Item beta", s: "activo" },
            { id: "I-0003", n: "Item gamma", s: "borrador" },
            { id: "I-0004", n: "Item delta", s: "activo" },
            { id: "I-0005", n: "Item epsilon", s: "archivado" },
            { id: "I-0006", n: "Item zeta", s: "activo" },
            { id: "I-0007", n: "Item eta", s: "borrador" },
            { id: "I-0008", n: "Item theta", s: "activo" },
          ].map((row, i) => (
            <tr key={row.id} style={{ borderBottom: i < 7 ? "1px solid #000000" : "none" }}>
              <td className="px-3 py-2 font-mono" style={{ borderRight: "1px solid #000000" }}>
                {row.id}
              </td>
              <td className="px-3 py-2" style={{ borderRight: "1px solid #000000" }}>
                {row.n}
              </td>
              <td className="px-3 py-2" style={{ color: "#666666" }}>
                {row.s}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const GenteView = (
    <div>
      <h2 className="text-base mb-4">[ GENTE ]</h2>
      <p className="text-xs mb-6" style={{ color: "#666666" }}>
        Lista de personas. Sin avatares, sin colores de rol, sin estados visuales.
      </p>
      <table className="w-full text-xs" style={{ border: "1px solid #000000", borderRadius: 0 }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #000000" }}>
            <th className="px-3 py-2 text-left" style={{ borderRight: "1px solid #000000" }}>
              ID
            </th>
            <th className="px-3 py-2 text-left" style={{ borderRight: "1px solid #000000" }}>
              NOMBRE
            </th>
            <th className="px-3 py-2 text-left">ROL</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: "U-0001", n: "Persona uno", r: "admin" },
            { id: "U-0002", n: "Persona dos", r: "editor" },
            { id: "U-0003", n: "Persona tres", r: "editor" },
            { id: "U-0004", n: "Persona cuatro", r: "viewer" },
            { id: "U-0005", n: "Persona cinco", r: "viewer" },
            { id: "U-0006", n: "Persona seis", r: "viewer" },
          ].map((row, i) => (
            <tr key={row.id} style={{ borderBottom: i < 5 ? "1px solid #000000" : "none" }}>
              <td className="px-3 py-2 font-mono" style={{ borderRight: "1px solid #000000" }}>
                {row.id}
              </td>
              <td className="px-3 py-2" style={{ borderRight: "1px solid #000000" }}>
                {row.n}
              </td>
              <td className="px-3 py-2" style={{ color: "#666666" }}>
                {row.r}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const NotasView = (
    <div>
      <h2 className="text-base mb-4">[ NOTAS ]</h2>
      <p className="text-xs mb-6" style={{ color: "#666666" }}>
        Notas crudas, monoespaciadas, sin estilos de markdown renderizado.
      </p>
      <div className="space-y-3 text-xs">
        {[
          { fecha: "2026-05-08", txt: "Definir paleta antes del jueves." },
          { fecha: "2026-05-07", txt: "Probar otra display font, esta no convence." },
          { fecha: "2026-05-05", txt: "Decisión: dos tabs por página, no tres." },
          { fecha: "2026-05-03", txt: "El usuario rechazó la opción A. Volver a basics." },
          { fecha: "2026-05-01", txt: "Empezar el mood board mañana sin falta." },
          { fecha: "2026-04-29", txt: "Brief inicial — mucho material crudo, poco filtro." },
        ].map((n, i) => (
          <div
            key={i}
            className="px-3 py-2 leading-relaxed"
            style={{ border: "1px solid #000000", borderRadius: 0 }}
          >
            <span className="font-mono mr-3" style={{ color: "#666666" }}>
              [{n.fecha}]
            </span>
            {n.txt}
          </div>
        ))}
      </div>
    </div>
  );

  const AjustesView = (
    <div>
      <h2 className="text-base mb-4">[ AJUSTES ]</h2>
      <p className="text-xs mb-6" style={{ color: "#666666" }}>
        Settings sin switches, sin colores. Checkboxes ASCII deliberadamente crudos.
      </p>
      <div className="space-y-2 text-xs">
        {[
          "Mostrar avisos de placeholder",
          "Permitir compartir sin estilo aplicado",
          "Recordatorio diario para elegir paleta",
          "Bloquear export hasta tener mood board",
          "Mostrar marcas [TODO] en producción",
          "Activar modo strict — fail si falta estilo",
          "Loggear interacciones a archivo plano",
          "Notificar cuando alguien edite el placeholder",
        ].map((s, i) => (
          <div
            key={i}
            className="px-3 py-2"
            style={{ border: "1px solid #000000", borderRadius: 0 }}
          >
            [ ] {s}
          </div>
        ))}
      </div>
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    home: HomeView,
    items: ItemsView,
    gente: GenteView,
    notas: NotasView,
    ajustes: AjustesView,
  };

  /* ============== TAB 2 — APP (workspace crudo) ============== */
  const workspace = (
    <div
      className="font-roboto-mono"
      style={{ border: "1px solid #000000", borderRadius: 0, padding: "16px", minHeight: "640px" }}
    >
      <InternalNav
        variant="ascii-list"
        items={[
          { id: "home", label: "Home" },
          { id: "items", label: "Items", shortcut: "i" },
          { id: "gente", label: "Gente", shortcut: "g" },
          { id: "notas", label: "Notas", shortcut: "n" },
          { id: "ajustes", label: "Ajustes", shortcut: "a" },
        ]}
        active={activeView}
        onChange={setActiveView}
        accent="#000000"
        textActive="#000000"
        textInactive="#666666"
        borderColor="#000000"
        workspaceLabel=""
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

  return (
    <div
      style={{ backgroundColor: "#ffffff", color: "#000000", minHeight: "100vh" }}
      className="font-roboto-mono"
    >
      <StyleHeader estilo={e} borderColor="#000000" navColor="#666666" />

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-10">
        <StyleTabs
          variant="ascii-bracket"
          accent="#000000"
          textActive="#ffffff"
          textInactive="#000000"
          borderColor="#000000"
          tabsClassName="mb-10"
          tabs={[
            { id: "landing", label: "Landing", content: landing },
            { id: "app", label: "App", content: workspace },
          ]}
        />

        <DividerReveal
          variant="tech-line-draw"
          lineColor="#000000"
          textColor="#000000"
          className="mb-10"
          textClassName="font-roboto-mono text-xs"
        >
          _END_
        </DividerReveal>

        <StyleFooter estilo={e} textColor="#666666" borderColor="#000000" monoFont="var(--font-roboto-mono)" />
      </main>
    </div>
  );
}
