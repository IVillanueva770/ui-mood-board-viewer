"use client";
import { getEstilo } from "@/lib/estilos";
import { StubPage } from "@/components/stub-page";

export default function Page() {
  const e = getEstilo("web-first-mobile")!;
  return (
    <StubPage
      estilo={e}
      bg="#ffffff"
      fg="#0f1419"
      cardBg="#ffffff"
      borderColor="#eff3f4"
      mutedColor="#536471"
      accent="#1d9bf0"
      radius="9999px"
    />
  );
}
