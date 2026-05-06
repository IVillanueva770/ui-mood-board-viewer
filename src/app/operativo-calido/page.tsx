"use client";
import { getEstilo } from "@/lib/estilos";
import { StubPage } from "@/components/stub-page";

export default function Page() {
  const e = getEstilo("operativo-calido")!;
  return (
    <StubPage
      estilo={e}
      bg="#fafafa"
      fg="#171717"
      cardBg="#ffffff"
      borderColor="#e5e7eb"
      mutedColor="#737373"
      accent="#16a34a"
      radius="8px"
    />
  );
}
