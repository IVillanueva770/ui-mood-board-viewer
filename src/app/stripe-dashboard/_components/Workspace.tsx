"use client";

import { useState } from "react";
import { InternalNav } from "@/components/internal-nav";
import { palette, type StripeData } from "../_data";
import { OverviewPanel } from "./OverviewPanel";
import { MovimientosPanel } from "./MovimientosPanel";
import { ClientesPanel } from "./ClientesPanel";
import { ReportesPanel } from "./ReportesPanel";

/**
 * Lado interno: el dashboard amigable. Posee el estado de la vista activa
 * y monta `InternalNav` (sidebar prominente, siempre visible) con los 4
 * paneles. La vista por defecto "Resumen" ya es densa y se ve en scroll,
 * así que la riqueza no queda escondida tras la navegación.
 */
export function Workspace({ data }: { data: StripeData }) {
  const [view, setView] = useState("resumen");

  const paneles: Record<string, React.ReactNode> = {
    resumen: (
      <OverviewPanel kpis={data.kpis} ingresos={data.ingresos} movimientos={data.movimientos} />
    ),
    movimientos: <MovimientosPanel movimientos={data.movimientos} />,
    clientes: <ClientesPanel clientes={data.clientes} />,
    reportes: (
      <ReportesPanel
        ingresosPorRubro={data.ingresosPorRubro}
        mediosDeCobro={data.mediosDeCobro}
      />
    ),
  };

  const pendientes = data.movimientos.filter((m) => m.estado === "Pendiente").length;

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${palette.border}`, backgroundColor: palette.card, minHeight: "640px" }}
    >
      <InternalNav
        variant="tech-sidebar"
        items={[
          { id: "resumen", label: "Resumen", icon: "◇" },
          { id: "movimientos", label: "Movimientos", icon: "↗", badge: pendientes || undefined },
          { id: "clientes", label: "Clientes", icon: "♦" },
          { id: "reportes", label: "Reportes", icon: "▤" },
        ]}
        active={view}
        onChange={setView}
        accent={palette.accent}
        bgContainer={palette.surface}
        bgActive={palette.accentSoft}
        textActive={palette.text}
        textInactive={palette.muted}
        borderColor={palette.border}
        workspaceLabel="Inmobiliaria Norte"
        workspaceInitial="N"
      >
        {paneles[view]}
      </InternalNav>
    </div>
  );
}
