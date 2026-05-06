"use client";
import { getEstilo } from "@/lib/estilos";
import { StubPage } from "@/components/stub-page";

export default function Page() {
  const e = getEstilo("sport-dinamico")!;
  return (
    <StubPage
      estilo={e}
      bg="#0a0a0a"
      fg="#fafafa"
      cardBg="#1a1a1a"
      borderColor="#2a2a2a"
      mutedColor="#a3a3a3"
      accent="#ff5722"
      radius="2px"
      contraste="dark"
      headingClass="font-bebas tracking-wide"
    />
  );
}
