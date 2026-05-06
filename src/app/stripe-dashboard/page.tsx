"use client";
import { getEstilo } from "@/lib/estilos";
import { StubPage } from "@/components/stub-page";

export default function Page() {
  const e = getEstilo("stripe-dashboard")!;
  return (
    <StubPage
      estilo={e}
      bg="#ffffff"
      fg="#0a0a0a"
      cardBg="#ffffff"
      borderColor="#e3e8ee"
      mutedColor="#6b7280"
      accent="#635bff"
      radius="6px"
    />
  );
}
