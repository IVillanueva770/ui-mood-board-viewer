import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Geist, Geist_Mono, Roboto_Mono, Cormorant_Garamond, Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const robotoMono = Roboto_Mono({ variable: "--font-roboto-mono", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const bebas = Bebas_Neue({ variable: "--font-bebas", subsets: ["latin"], weight: "400" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UI Mood Board — Viewer",
  description: "Previews en vivo de los estilos del mood board del usuario",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${robotoMono.variable} ${cormorant.variable} ${bebas.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen">
        <ViewTransition
          enter={{
            "nav-forward": "nav-forward",
            "nav-back": "nav-back",
            default: "page-fade",
          }}
          exit={{
            "nav-forward": "nav-forward",
            "nav-back": "nav-back",
            default: "page-fade",
          }}
          default="none"
        >
          {children}
        </ViewTransition>
      </body>
    </html>
  );
}
