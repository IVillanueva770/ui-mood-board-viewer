"use client";
import { getEstilo } from "@/lib/estilos";
import { StubPage } from "@/components/stub-page";

export default function Page() {
  const e = getEstilo("clinico-calmado")!;
  return (
    <StubPage
      estilo={e}
      bg="#ffffff"
      fg="#0f172a"
      cardBg="#f8fafc"
      borderColor="#e2e8f0"
      mutedColor="#64748b"
      accent="#0ea5e9"
      radius="8px"
    />
  );
}
