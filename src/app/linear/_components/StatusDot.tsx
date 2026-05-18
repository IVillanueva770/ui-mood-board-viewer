import { statusColor, type IssueStatus } from "../_data";

/** Punto de estado consistente (DRY): lista, board y detalle usan el mismo mapa. */
export function StatusDot({ status, size = 8 }: { status: IssueStatus; size?: number }) {
  return (
    <span
      aria-hidden
      className="inline-block rounded-full flex-shrink-0"
      style={{ width: size, height: size, backgroundColor: statusColor[status] }}
    />
  );
}
