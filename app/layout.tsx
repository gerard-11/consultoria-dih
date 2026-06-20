import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeScript = [
  "(function () {",
  "  try {",
  "    var storedTheme = window.localStorage.getItem(\"consultoria-dih-theme\");",
  "    var systemTheme = window.matchMedia(\"(prefers-color-scheme: dark)\").matches ? \"dark\" : \"light\";",
  "    var theme = storedTheme === \"light\" || storedTheme === \"dark\" ? storedTheme : systemTheme;",
  "    document.documentElement.dataset.theme = theme;",
  "    document.documentElement.style.colorScheme = theme;",
  "  } catch (_) {}",
  "})();",
].join("\n");

export const metadata: Metadata = {
  title: "Psicóloga en Puebla y Cholula | Karla Figueroa | Consultoría DIH",
  description:
    "Terapia psicológica presencial en San Andrés Cholula, Puebla, y atención en línea. Psicóloga Karla Figueroa: ansiedad, depresión, terapia de pareja, duelo, autoestima y familia.",
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
  openGraph: {
    title: "Psicóloga Karla Figueroa | Consultoría DIH",
    description:
      "Terapia psicológica presencial en San Andrés Cholula, Puebla, y atención en línea para ansiedad, depresión, pareja, duelo, autoestima y familia.",
    locale: "es_MX",
    type: "website",
  },
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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
