"use client";
import { getEstilo } from "@/lib/estilos";
import { StubPage } from "@/components/stub-page";

export default function Page() {
  const e = getEstilo("material-3")!;
  return (
    <StubPage
      estilo={e}
      bg="#fef7ff"
      fg="#1d1b20"
      cardBg="#ffffff"
      borderColor="#e8def8"
      mutedColor="#79747e"
      accent="#6750a4"
      radius="20px"
    />
  );
}
