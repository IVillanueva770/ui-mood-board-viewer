"use client";

import { palette, REST_SHADOW } from "../_data";

type Props = {
  ws: { repo: string; branch: string; ahead: number; file: string };
};

/** Interno · "hero" del IDE: barra de workspace (repo · branch · archivo). */
export function WorkspaceBar({ ws }: Props) {
  const { ink, bg, accent, muted, border, card } = palette;

  return (
    <div
      className="flex items-center gap-3 flex-wrap px-4 py-3 font-mono text-xs"
      style={{ backgroundColor: card, border: `1px solid ${border}`, borderRadius: "8px", boxShadow: REST_SHADOW }}
    >
      <span
        className="flex items-center justify-center w-6 h-6 font-semibold"
        style={{ backgroundColor: ink, color: bg, borderRadius: "5px" }}
      >
        {ws.repo[0].toUpperCase()}
      </span>
      <span className="font-semibold" style={{ color: ink }}>
        {ws.repo}
      </span>
      <span style={{ color: palette.faint }}>/</span>
      <span style={{ color: muted }}>{ws.file}</span>
      <span className="ml-auto flex items-center gap-2">
        <span
          className="px-2 py-0.5 flex items-center gap-1"
          style={{ backgroundColor: bg, border: `1px solid ${border}`, borderRadius: "4px", color: ink }}
        >
          <span style={{ color: accent }}>⎇</span> {ws.branch}
        </span>
        <span style={{ color: muted }}>↑ {ws.ahead}</span>
        <span style={{ color: "#3a7a3a" }}>● synced</span>
      </span>
    </div>
  );
}
