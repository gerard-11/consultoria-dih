import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import {
  buildMetadata,
  localBusinessJsonLd,
  organizationJsonLd,
  siteUrl,
} from "./seo";
import { ThemeProvider } from "./theme/ThemeProvider";
import "./globals.css";
import "./theme/theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...buildMetadata({
    title: "Psicóloga en Puebla y Cholula | Karla Figueroa | Consultoría DIH",
    description:
      "Terapia psicológica presencial en San Andrés Cholula, Puebla, y atención en línea. Psicóloga Karla Figueroa: ansiedad, depresión, terapia de pareja, duelo, autoestima y familia.",
    path: "/",
    keywords: [
      "psicóloga en Puebla",
      "psicóloga en Cholula",
      "psicólogo en Puebla",
      "psicólogo en Cholula",
      "terapia en Puebla",
      "terapia en Cholula",
      "terapia de pareja Puebla",
      "terapia para ansiedad Puebla",
      "psicóloga cerca de Angelópolis",
    ],
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={[
        geistSans.variable,
        geistMono.variable,
        "h-full antialiased",
      ].join(" ")}
    >
      <head>
        <Script
          id="organization-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="local-business-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
