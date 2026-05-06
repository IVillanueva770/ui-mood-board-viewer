"use client";
import { getEstilo } from "@/lib/estilos";
import { StubPage } from "@/components/stub-page";

export default function Page() {
  const e = getEstilo("airbnb-friendly")!;
  return (
    <StubPage
      estilo={e}
      bg="#ffffff"
      fg="#222222"
      cardBg="#ffffff"
      borderColor="#dddddd"
      mutedColor="#717171"
      accent="#ff5a5f"
      radius="14px"
    />
  );
}
