"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { palette, type Cliente } from "../_data";
import { ClienteDrawer, ESTADO_COLOR } from "./ClienteDrawer";

type SortKey = "empresa" | "plan" | "mrr" | "asientos";
type SortDir = "asc" | "desc";

const COLS: { key: SortKey; label: string; align: "left" | "right" }[] = [
  { key: "empresa", label: "Empresa", align: "left" },
  { key: "plan", label: "Plan", align: "left" },
  { key: "mrr", label: "MRR", align: "right" },
  { key: "asientos", label: "Asientos", align: "right" },
];

/**
 * Pieza interna (tabla de cuentas): ordenable por columna + filtro por plan,
 * fila clickeable que abre el drawer de detalle. Tabla + detalle = dos
 * escenarios reales del negocio, visibles directo en el scroll del panel.
 */
export function ClientesTabla({ clientes }: { clientes: Cliente[] }) {
  const { accent, text, muted, mutedSoft, border, borderSoft, card, surface } = palette;
  const [sortKey, setSortKey] = useState<SortKey>("mrr");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [filtro, setFiltro] = useState<string>("Todos");
  const [sel, setSel] = useState<Cliente | null>(null);

  const planes = useMemo(
    () => ["Todos", ...Array.from(new Set(clientes.map((c) => c.plan)))],
    [clientes],
  );

  const rows = useMemo(() => {
    const filtrados = filtro === "Todos" ? clientes : clientes.filter((c) => c.plan === filtro);
    const dir = sortDir === "asc" ? 1 : -1;
    return [...filtrados].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (typeof av === "number" && typeof bv === "number") return (av - bv) * dir;
      return String(av).localeCompare(String(bv)) * dir;
    });
  }, [clientes, filtro, sortKey, sortDir]);

  const toggleSort = (k: SortKey) => {
    if (k === sortKey) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(k);
      setSortDir(k === "empresa" || k === "plan" ? "asc" : "desc");
    }
  };

  return (
    <div className="p-5 sm:p-6" style={{ borderTop: `1px solid ${border}` }}>
      <div className="flex items-end justify-between mb-4 flex-wrap gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-1" style={{ color: accent }}>
            {rows.length} cuentas
          </p>
          <h2 className="text-2xl font-semibold tracking-tight" style={{ color: text }}>
            Clientes
          </h2>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {planes.map((p) => {
            const activo = filtro === p;
            return (
              <button
                key={p}
                onClick={() => setFiltro(p)}
                className="px-3 py-1.5 text-xs font-medium rounded-full transition-colors"
                style={{
                  backgroundColor: activo ? text : surface,
                  color: activo ? "#fff" : muted,
                  border: `1px solid ${activo ? text : border}`,
                }}
              >
                {p}
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${border}` }}>
        <div
          className="grid grid-cols-12 gap-3 px-4 py-2.5 text-[11px] uppercase tracking-wider font-semibold"
          style={{ backgroundColor: surface, color: mutedSoft, borderBottom: `1px solid ${border}` }}
        >
          {COLS.map((c) => (
            <button
              key={c.key}
              onClick={() => toggleSort(c.key)}
              className={`flex items-center gap-1 ${c.align === "right" ? "justify-end" : ""} ${
                c.key === "empresa" ? "col-span-4" : c.key === "plan" ? "col-span-3" : "col-span-2"
              }`}
              style={{ color: sortKey === c.key ? accent : mutedSoft }}
            >
              {c.label}
              <span className="text-[9px]">
                {sortKey === c.key ? (sortDir === "asc" ? "▲" : "▼") : "↕"}
              </span>
            </button>
          ))}
          <span className="col-span-1 text-right">Estado</span>
        </div>

        {rows.map((c, i) => {
          const chip = ESTADO_COLOR[c.estado];
          return (
            <motion.button
              key={c.id}
              onClick={() => setSel(c)}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.03 }}
              whileHover={{ backgroundColor: surface }}
              className="w-full grid grid-cols-12 gap-3 px-4 py-3 items-center text-sm text-left"
              style={{
                backgroundColor: card,
                borderTop: i > 0 ? `1px solid ${borderSoft}` : "none",
              }}
            >
              <div className="col-span-4 min-w-0">
                <p className="font-medium truncate" style={{ color: text }}>
                  {c.empresa}
                </p>
                <p className="text-[11px] truncate" style={{ color: mutedSoft }}>
                  {c.contacto}
                </p>
              </div>
              <span className="col-span-3" style={{ color: muted }}>
                {c.plan}
              </span>
              <span
                className="col-span-2 text-right tabular-nums font-medium"
                style={{ color: text }}
              >
                {c.mrr === 0 ? "—" : `$ ${c.mrr.toLocaleString("es-AR")}`}
              </span>
              <span className="col-span-2 text-right tabular-nums" style={{ color: muted }}>
                {c.asientos}
              </span>
              <span className="col-span-1 flex justify-end">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: chip.fg }}
                  title={c.estado}
                />
              </span>
            </motion.button>
          );
        })}
      </div>
      <p className="text-[11px] mt-3" style={{ color: mutedSoft }}>
        Tocá una fila para ver el detalle · ordená por cualquier columna
      </p>

      <ClienteDrawer cliente={sel} onClose={() => setSel(null)} />
    </div>
  );
}
