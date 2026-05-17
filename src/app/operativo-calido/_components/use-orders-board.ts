"use client";

import { useEffect, useState } from "react";
import { PEDIDOS_INICIALES, flujo, type Pedido } from "../_data";

export type Toast = { id: number; msg: string } | null;

/**
 * Núcleo del panel: estado de pedidos, avanzar de estado con un toque,
 * KPIs derivados y el toast cálido (firma del estilo). Una responsabilidad:
 * la operación de pedidos del día.
 */
export function useOrdersBoard() {
  const [pedidos, setPedidos] = useState<Pedido[]>(PEDIDOS_INICIALES);
  const [toast, setToast] = useState<Toast>(null);

  // Toast snappy: aparece y se va solo. Sin vueltas.
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(t);
  }, [toast?.id]);

  // React 19: leer del scope, no del updater de setState.
  const avanzar = (id: string) => {
    const p = pedidos.find((x) => x.id === id);
    if (!p) return;
    const sig = flujo[p.estado];
    if (!sig) return;
    setPedidos((prev) => prev.map((x) => (x.id === id ? { ...x, estado: sig } : x)));
    setToast({
      id: Date.now(),
      msg: sig === "entregado" ? `Pedido ${id} entregado` : `Pedido ${id} pasó a ${sig}`,
    });
  };

  const pedidosHoy = pedidos.length;
  const entregasPendientes = pedidos.filter(
    (p) => p.estado === "pendiente" || p.estado === "preparando",
  ).length;
  const aCobrar = pedidos
    .filter((p) => p.estado === "pendiente" || p.estado === "preparando")
    .reduce((acc, p) => acc + p.total, 0);
  const nuevosPendientes = pedidos.filter((p) => p.estado === "pendiente").length;

  return {
    pedidos,
    avanzar,
    toast,
    pedidosHoy,
    entregasPendientes,
    aCobrar,
    nuevosPendientes,
  };
}
