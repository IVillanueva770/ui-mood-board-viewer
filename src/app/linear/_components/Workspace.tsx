"use client";

import { tokens, type LinearData } from "../_data";
import { useCommandCenter } from "./use-command-center";
import { WorkspaceBar } from "./WorkspaceBar";
import { CycleOverview } from "./CycleOverview";
import { IssuesList } from "./IssuesList";
import { KanbanBoard } from "./KanbanBoard";
import { IssueDetail } from "./IssueDetail";
import { CommandPalette } from "./CommandPalette";

/**
 * Lado interno: command center scrolleable con las piezas VISIBLES de un
 * vistazo (se eliminó el `InternalNav tech-sidebar` que escondía 5 sub-vistas =
 * 1 pieza oculta — decisión de arquitectura del cluster, manda sobre el texto
 * viejo del per-page). Orquesta `useCommandCenter` (SRP) y lo inyecta a las
 * piezas: cada una es tonta y swappable.
 */
export function Workspace({ data }: { data: LinearData }) {
  const cc = useCommandCenter(data.issues);
  const t = tokens;

  return (
    <div
      className="relative rounded-xl overflow-hidden"
      style={{ border: `1px solid ${t.line}`, backgroundColor: t.bg, minHeight: 640 }}
    >
      <div className="p-4 sm:p-6 space-y-10">
        <WorkspaceBar onOpenPalette={cc.openPalette} />
        <CycleOverview cycle={data.cycle} metrics={data.metrics} />
        <div className="h-px" style={{ backgroundColor: t.line }} />
        <IssuesList issues={data.issues} onSelect={cc.selectIssue} />
        <div className="h-px" style={{ backgroundColor: t.line }} />
        <KanbanBoard issues={data.issues} onSelect={cc.selectIssue} />
      </div>

      {/* Overlays anclados al contenedor (no al viewport → no flotan sobre el footer) */}
      <IssueDetail issue={cc.selected} onClose={cc.closeDetail} />
      <CommandPalette open={cc.paletteOpen} commands={data.commands} onClose={cc.closePalette} />
    </div>
  );
}
