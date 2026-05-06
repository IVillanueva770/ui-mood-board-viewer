"use client";
import { getEstilo } from "@/lib/estilos";
import { StubPage } from "@/components/stub-page";

export default function Page() {
  const e = getEstilo("medico-amigable")!;
  return (
    <StubPage
      estilo={e}
      bg="#ffffff"
      fg="#0f172a"
      cardBg="#f8fafc"
      borderColor="#e2e8f0"
      mutedColor="#64748b"
      accent="#3b82f6"
      radius="12px"
    />
  );
}
