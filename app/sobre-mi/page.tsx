import type { Metadata } from "next";
import Image from "next/image";
import { AppointmentButton } from "../components/AppointmentButton";
import { SiteHeader } from "../components/SiteHeader";
import { buildMetadata, whatsappUrl } from "../seo";

const credentials = [
  {
    category: "Base profesional",
    color: "bg-disculparse",
    items: [
      "Licenciada en Psicología por la UPAEP, titulada por promedio.",
      "Maestría en Pedagogía por la Universidad Popular Autónoma del Estado de Puebla.",
      "Formación en psicopedagogía.",
    ],
  },
  {
    category: "Psicoterapia y pareja",
    color: "bg-declaracion",
    items: [
      "Diplomado Internacional en Psicoterapia de Pareja, Universidad Autónoma de Tlaxcala / feelink, 120 horas.",
      "Diplomado en Terapia de Pareja Sexual y Familiar.",
      "Diplomado en Modelo Gottman para parejas e infidelidades.",
    ],
  },
  {
    category: "Enfoques clínicos",
    color: "bg-humor",
    items: [
      "Diplomado en Terapia Emocional Sistémica, feelink, 120 horas.",
      "Diplomado en Modelos Psicológicos de Terapia Breve.",
      "Diplomado Internacional en Adicciones.",
    ],
  },
  {
    category: "Capacitación y desarrollo humano",
    color: "bg-tranquilo",
    items: [
      "Certificación en impartición de cursos de formación del capital humano, estándar CONOCER EC0217.",
    ],
  },
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

export const metadata: Metadata = buildMetadata({
  title: "Sobre mí | Psicóloga Karla Figueroa en Puebla y Cholula",
  description:
    "Psicóloga Karla Leticia Figueroa Hernández: formación, certificaciones, experiencia clínica y enfoque terapéutico en San Andrés Cholula, Puebla.",
  path: "/sobre-mi",
  keywords: [
    "Psicóloga Karla Figueroa",
    "Karla Leticia Figueroa Hernández",
    "psicóloga en Puebla",
    "psicóloga en Cholula",
    "curriculum psicóloga Puebla",
    "terapia en San Andrés Cholula",
  ],
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <SiteHeader />

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="absolute -inset-3 rounded-[8px] bg-key-yellow" />
            <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-[8px] bg-humor" />
            <figure className="relative overflow-hidden rounded-[8px] border border-footer-blue/15 bg-surface p-2 shadow-sm">
              <Image
                src="/brand/foto-karla.jpeg"
                alt="Psicóloga Karla Leticia Figueroa Hernández en Consultoría DIH"
                width={690}
                height={1117}
                priority
                className="aspect-[4/5] w-full object-cover object-[center_10px]"
              />
            </figure>
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
              <AppointmentButton>Agendar cita</AppointmentButton>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-key-yellow/70 bg-key-yellow px-6 text-base font-semibold text-footer-dark-blue shadow-sm transition-colors hover:bg-key-pink hover:text-background"
              >
                Enviar WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-14 sm:px-8" aria-labelledby="curriculum-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-4xl">
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

          <div className="mt-8 max-h-[26rem] overflow-y-auto pr-2 sm:max-h-none sm:overflow-visible sm:pr-0">
            <div className="grid gap-4">
              {credentials.map((group) => (
                <article
                  key={group.category}
                  className="rounded-[8px] border border-footer-blue/15 bg-background p-4 shadow-sm"
                >
                  <div
                    className={[
                      "mb-4 inline-flex rounded-full px-3 py-1 text-sm font-semibold text-text-primary",
                      group.color,
                    ].join(" ")}
                  >
                    {group.category}
                  </div>
                  <ul className="grid gap-3">
                    {group.items.map((credential) => (
                      <li key={credential} className="text-base leading-7 text-foreground">
                        {credential}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
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
            <AppointmentButton variant="yellow">Agendar cita en línea</AppointmentButton>
            <a
              href={whatsappUrl}
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
