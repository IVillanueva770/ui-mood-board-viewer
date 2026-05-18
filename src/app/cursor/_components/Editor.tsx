"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { palette, syn, REST_SHADOW, type FileNode, type EditorTab, type CodeLine } from "../_data";
import { useStudioMotion } from "./use-studio-motion";

const STATUS_COLOR = { M: "#9d6b1f", A: "#3a7a3a" } as const;

/** File-tree recursivo con expand/collapse suave (firma: height animada). */
function Tree({ nodes, depth }: { nodes: FileNode[]; depth: number }) {
  const { collapse, reduce } = useStudioMotion();
  const { ink, accent, muted, faint } = palette;

  const [open, setOpen] = useState<Set<string>>(
    () => new Set(collectOpen(nodes)),
  );

  return (
    <div className="space-y-0.5">
      {nodes.map((node) => {
        if (node.kind === "file") {
          return (
            <div
              key={node.id}
              className="flex items-center gap-2 py-0.5 cursor-default"
              style={{ paddingLeft: depth * 12, color: node.active ? accent : ink }}
            >
              <span style={{ color: faint }}>─</span>
              <span className={node.active ? "font-semibold" : ""}>{node.name}</span>
              {node.status && (
                <span style={{ color: STATUS_COLOR[node.status], marginLeft: "auto" }}>{node.status}</span>
              )}
            </div>
          );
        }
        const isOpen = open.has(node.id);
        return (
          <div key={node.id}>
            <button
              onClick={() =>
                setOpen((prev) => {
                  const next = new Set(prev);
                  if (next.has(node.id)) next.delete(node.id);
                  else next.add(node.id);
                  return next;
                })
              }
              className="flex items-center gap-2 py-0.5 w-full text-left"
              style={{ paddingLeft: depth * 12, color: muted }}
            >
              <motion.span
                animate={reduce ? undefined : { rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.18 }}
                style={{ display: "inline-block", color: faint }}
              >
                ▸
              </motion.span>
              <span style={{ color: ink }}>{node.name}</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div {...collapse} style={{ overflow: "hidden" }}>
                  <Tree nodes={node.children} depth={depth + 1} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function collectOpen(nodes: FileNode[]): string[] {
  const ids: string[] = [];
  for (const n of nodes) {
    if (n.kind === "dir") {
      if (n.defaultOpen) ids.push(n.id);
      ids.push(...collectOpen(n.children));
    }
  }
  return ids;
}

type Props = { tree: FileNode[]; tabs: EditorTab[]; code: CodeLine[] };

/** Interno · pieza 1: el editor (file-tree + tabs + área de código). */
export function Editor({ tree, tabs, code }: Props) {
  const { ink, bg, accent, muted, border, faint, card } = palette;

  return (
    <section>
      <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] mb-3" style={{ color: muted }}>
        Editor
      </h3>
      <div
        className="grid grid-cols-12 gap-0 bg-white overflow-hidden"
        style={{ border: `1px solid ${border}`, borderRadius: "8px", boxShadow: REST_SHADOW }}
      >
        {/* Explorer */}
        <div
          className="col-span-12 md:col-span-3 p-3 font-mono text-xs"
          style={{ borderRight: `1px solid ${border}`, backgroundColor: bg, color: ink }}
        >
          <p className="text-[10px] uppercase tracking-[0.18em] mb-2 font-semibold" style={{ color: faint }}>
            Explorer
          </p>
          <Tree nodes={tree} depth={0} />
        </div>

        {/* Code */}
        <div className="col-span-12 md:col-span-9" style={{ backgroundColor: card }}>
          <div
            className="px-3 py-2 flex items-center gap-1.5 font-mono text-[11px]"
            style={{ borderBottom: `1px solid ${border}`, backgroundColor: bg }}
          >
            {tabs.map((t) => (
              <span
                key={t.name}
                className="px-2.5 py-1 flex items-center gap-1.5"
                style={{
                  backgroundColor: t.active ? card : "transparent",
                  border: `1px solid ${t.active ? border : "transparent"}`,
                  borderRadius: "4px",
                  color: t.active ? accent : muted,
                }}
              >
                {t.name}
                {t.dirty && <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />}
              </span>
            ))}
          </div>
          <div className="p-4 font-mono text-xs leading-relaxed" style={{ color: ink }}>
            {code.map((l) => (
              <div
                key={l.n}
                className="flex gap-3"
                style={l.mark === "add" ? { backgroundColor: "rgba(58,122,58,0.08)" } : undefined}
              >
                <span className="select-none text-right" style={{ color: faint, width: "22px" }}>
                  {l.n}
                </span>
                <span className="whitespace-pre">
                  {l.segs.map((s, i) => (
                    <span key={i} style={s.k ? { color: syn[s.k] } : undefined}>
                      {s.x}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
