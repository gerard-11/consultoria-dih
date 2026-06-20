import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ToggleTheme } from "../components/ToggleTheme";

const whatsappLink =
  "https://wa.me/522222031068?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20la%20Psic%C3%B3loga%20Karla%20Figueroa.";
const calendarLink = "https://calendar.app.google/ekuSLLvPNgWGGFhm8";

const credentials = [
  "Licenciada en Psicología por la UPAEP, titulada por promedio.",
  "Maestría en Pedagogía por la Universidad Popular Autónoma del Estado de Puebla.",
  "Formación en psicopedagogía y terapia emocional sistémica.",
  "Diplomado Internacional en Psicoterapia de Pareja, Universidad Autónoma de Tlaxcala / feelink, 120 horas.",
  "Diplomado en Terapia Emocional Sistémica, feelink, 120 horas.",
  "Diplomado en Terapia de Pareja Sexual y Familiar.",
  "Diplomado en Modelos Psicológicos de Terapia Breve.",
  "Diplomado Internacional en Adicciones.",
  "Diplomado en Modelo Gottman para parejas e infidelidades.",
  "Certificación en impartición de cursos de formación del capital humano, estándar CONOCER EC0217.",
];

const approaches = [
  "Terapia cognitivo conductual",
  "Terapia breve",
  "Terapia sistémica",
  "Tanatología",
  "Método Gottman para parejas",
  "Acompañamiento emocional personalizado",
];

const experience = [
  "Ansiedad, estrés crónico y burnout",
  "Depresión y agotamiento emocional",
  "Procesos de duelo, pérdidas y separación",
  "Conflictos de pareja, familiares y relacionales",
  "Autoestima, sexualidad y habilidades emocionales",
  "Adolescentes, adultos, parejas y familias",
];

export const metadata: Metadata = {
  title: "Sobre mí | Psicóloga Karla Figueroa en Puebla y Cholula",
  description:
    "Conoce a la Psicóloga Karla Leticia Figueroa Hernández: formación, certificaciones, experiencia clínica y enfoque terapéutico en San Andrés Cholula, Puebla.",
  keywords: [
    "Psicóloga Karla Figueroa",
    "Karla Leticia Figueroa Hernández",
    "psicóloga en Puebla",
    "psicóloga en Cholula",
    "curriculum psicóloga Puebla",
    "terapia en San Andrés Cholula",
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <header className="border-b border-footer-blue/15 bg-background/95 px-5 py-4 sm:px-8">
        <nav
          className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4"
          aria-label="Navegación principal"
        >
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand/consultoria-dih-logo.png"
              alt="Consultoría DIH Psicóloga Karla Figueroa"
              width={116}
              height={60}
              priority
              className="h-12 w-auto"
            />
            <span className="hidden text-sm font-semibold text-foreground sm:block">
              Consultoría DIH
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden text-sm font-semibold text-muted transition-colors hover:text-footer-blue sm:inline-flex"
            >
              Inicio
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 items-center justify-center rounded-full bg-key-pink px-5 text-sm font-semibold text-background transition-colors hover:bg-footer-blue sm:inline-flex"
            >
              WhatsApp
            </a>
            <ToggleTheme />
          </div>
        </nav>
      </header>

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[8px] border border-footer-blue/15 bg-surface shadow-sm lg:mx-0">
            <Image
              src="/brand/foto-karla.jpeg"
              alt="Psicóloga Karla Leticia Figueroa Hernández en Consultoría DIH"
              width={690}
              height={1117}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-footer-blue">
              Sobre mí
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
              Psicóloga Karla Leticia Figueroa Hernández
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Soy psicóloga con más de 15 años de experiencia acompañando
              adolescentes, adultos, parejas y familias en procesos de ansiedad,
              depresión, duelo, conflictos de pareja o familiares, autoestima,
              sexualidad, adicciones y habilidades emocionales.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
              En Consultoría DIH brindo un espacio profesional, humano,
              confidencial, ético e inclusivo para comprender lo que estás
              viviendo y desarrollar herramientas prácticas para recuperar tu
              bienestar emocional y mental.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={calendarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-key-pink px-6 text-base font-semibold text-background transition-colors hover:bg-footer-blue"
              >
                Agendar cita
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-footer-blue/35 bg-surface px-6 text-base font-semibold text-footer-dark-blue transition-colors hover:bg-key-yellow"
              >
                Enviar WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-14 sm:px-8" aria-labelledby="curriculum-title">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-footer-blue">
              Currículum y certificaciones
            </p>
            <h2 id="curriculum-title" className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Formación profesional y actualización continua
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Su formación integra psicología, pedagogía, terapia de pareja,
              terapia sistémica, terapia breve, adicciones y desarrollo humano.
            </p>
          </div>

          <div className="grid gap-3">
            {credentials.map((credential) => (
              <article
                key={credential}
                className="rounded-[8px] border border-footer-blue/15 bg-background p-4 shadow-sm"
              >
                <p className="text-base leading-7 text-foreground">{credential}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8" aria-labelledby="enfoque-title">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[8px] bg-footer-dark-blue p-6 text-bg-creamy">
            <p className="text-sm font-semibold uppercase tracking-wide text-key-yellow">
              Enfoque terapéutico
            </p>
            <h2 id="enfoque-title" className="mt-3 text-3xl font-semibold leading-tight">
              Atención basada en evidencia y trato humano
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {approaches.map((approach) => (
                <p key={approach} className="rounded-[8px] bg-bg-creamy/10 p-3 text-sm font-semibold text-bg-creamy">
                  {approach}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-[8px] border border-footer-blue/15 bg-surface p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-footer-blue">
              Experiencia clínica
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight">
              Procesos que acompaña
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {experience.map((item) => (
                <p key={item} className="rounded-[8px] bg-declaracion p-3 text-sm font-semibold text-text-primary">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-footer-dark-blue px-5 py-14 text-bg-creamy sm:px-8" aria-labelledby="contacto-title">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-key-yellow">
              Consultoría DIH
            </p>
            <h2 id="contacto-title" className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Terapia presencial en San Andrés Cholula y atención en línea
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-bg-creamy/85">
              Atención cerca de Angelópolis, Puebla, y sesiones en línea para
              México y el extranjero. Si estás buscando psicóloga en Puebla o
              Cholula, puedes agendar directamente o escribir por WhatsApp.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-key-yellow px-6 text-base font-semibold text-footer-dark-blue transition-colors hover:bg-disculparse"
            >
              Agendar cita en línea
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-bg-creamy/35 px-6 text-base font-semibold text-bg-creamy transition-colors hover:bg-bg-creamy hover:text-footer-dark-blue"
            >
              WhatsApp 222 203 1068
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
