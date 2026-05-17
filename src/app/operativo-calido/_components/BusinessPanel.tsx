"use client";

import { type ClienteOp, type Cobro } from "../_data";
import { useOrdersBoard } from "./use-orders-board";
import { DaySummary } from "./DaySummary";
import { OrdersTable } from "./OrdersTable";
import { Payments } from "./Payments";
import { Customers } from "./Customers";
import { Toast } from "./Toast";

type Props = { cobros: Cobro[]; clientes: ClienteOp[] };

/**
 * Lado interno (el protagonista): panel del negocio scrolleable con los 4
 * módulos a la vista (sin sub-nav que los esconda). El estado de pedidos
 * vive en `useOrdersBoard` y alimenta Resumen + Pedidos + Cobros + el toast.
 */
export function BusinessPanel({ cobros, clientes }: Props) {
  const b = useOrdersBoard();

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4 pt-4 pb-12 space-y-12">
      <DaySummary
        pedidos={b.pedidos}
        avanzar={b.avanzar}
        pedidosHoy={b.pedidosHoy}
        aCobrar={b.aCobrar}
        entregasPendientes={b.entregasPendientes}
        nuevosPendientes={b.nuevosPendientes}
      />
      <OrdersTable pedidos={b.pedidos} avanzar={b.avanzar} />
      <Payments cobros={cobros} aCobrar={b.aCobrar} />
      <Customers clientes={clientes} />
      <Toast toast={b.toast} />
    </div>
  );
}
