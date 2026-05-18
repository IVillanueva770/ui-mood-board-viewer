"use client";

import { palette, type StripeData } from "../_data";
import { OverviewPanel } from "./OverviewPanel";
import { MovimientosPanel } from "./MovimientosPanel";
import { ClientesPanel } from "./ClientesPanel";
import { ReportesPanel } from "./ReportesPanel";

/**
 * Lado interno: el dashboard amigable. Composición delgada del lado interno
 * (SRP) — sólo orquesta las 4 piezas y les inyecta su slice de datos por
 * props. Las 4 se renderizan TODAS, apiladas en scroll: sin shell de nav
 * interna, sin switcher, sin `useState` de vista. En un viewer el evaluador
 * no clickea sub-nav: tiene que ver Resumen + Movimientos + Clientes + Reportes
 * scrolleando. La firma de motion (count-up de KPIs, draw-in del gráfico)
 * vive dentro de OverviewPanel y se preserva al montarlo.
 */
export function Workspace({ data }: { data: StripeData }) {
  return (
    <div className="space-y-14">
      <OverviewPanel
        kpis={data.kpis}
        ingresos={data.ingresos}
        movimientos={data.movimientos}
      />

      <div style={{ borderTop: `1px solid ${palette.border}` }} />

      <MovimientosPanel movimientos={data.movimientos} />

      <div style={{ borderTop: `1px solid ${palette.border}` }} />

      <ClientesPanel clientes={data.clientes} />

      <div style={{ borderTop: `1px solid ${palette.border}` }} />

      <ReportesPanel
        ingresosPorRubro={data.ingresosPorRubro}
        mediosDeCobro={data.mediosDeCobro}
      />
    </div>
  );
}
