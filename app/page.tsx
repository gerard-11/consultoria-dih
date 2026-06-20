import Image from "next/image";
import Link from "next/link";
import { ToggleTheme } from "./components/ToggleTheme";

const whatsappLink =
  "https://wa.me/522222031068?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20la%20Psic%C3%B3loga%20Karla%20Figueroa.";
const calendarLink = "https://calendar.app.google/ekuSLLvPNgWGGFhm8";

const services = [
  {
    title: "Ansiedad y estrés crónico",
    description:
      "Herramientas para recuperar la calma, manejar preocupación constante, pensamientos negativos, estrés y burnout.",
    color: "bg-humor",
  },
  {
    title: "Depresión y agotamiento emocional",
    description:
      "Acompañamiento respetuoso para recuperar motivación, energía y sentido de vida a tu ritmo.",
    color: "bg-tranquilo",
  },
  {
    title: "Terapia de pareja",
    description:
      "Trabajo terapéutico para mejorar comunicación, confianza, conflictos recurrentes y vida sexual.",
    color: "bg-declaracion",
  },
  {
    title: "Sexología y bienestar sexual",
    description:
      "Atención profesional para dificultades sexuales, deseo, culpa, vínculos de pareja y bloqueos emocionales.",
    color: "bg-dejarlo",
  },
  {
    title: "Duelo y separación",
    description:
      "Acompañamiento para pérdidas, rupturas de pareja, cambios importantes de vida y experiencias traumáticas.",
    color: "bg-disculparse",
  },
  {
    title: "Autoestima y habilidades emocionales",
    description:
      "Fortalece confianza, autoconocimiento, amor propio y herramientas para tomar mejores decisiones.",
    color: "bg-turnos",
  },
  {
    title: "Terapia para adolescentes y familias",
    description:
      "Apoyo ante ansiedad, depresión, autolesiones, duelos, problemas escolares y conflictos familiares.",
    color: "bg-humor",
  },
  {
    title: "Talleres para empresas e instituciones",
    description:
      "Habilidades emocionales, comunicación, liderazgo, trabajo en equipo, NOM-035 y desarrollo humano.",
    color: "bg-declaracion",
  },
];

const trustItems = [
  "Más de 15 años de experiencia profesional",
  "Más de 100 reseñas positivas en Google",
  "Terapia presencial en San Andrés Cholula y atención en línea",
  "Enfoque humano, ético, confidencial e inclusivo",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PsychologicalService",
  name: "Psicóloga Karla Figueroa | Consultoría DIH",
  description:
    "Atención psicológica presencial en San Andrés Cholula, Puebla, y terapia en línea para ansiedad, depresión, terapia de pareja, duelo, autoestima, adolescentes y familias.",
  areaServed: ["Puebla", "San Andrés Cholula", "Cholula", "Angelópolis"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Andrés Cholula",
    addressRegion: "Puebla",
    addressCountry: "MX",
  },
  telephone: "+52 222 203 1068",
  url: "https://consultoria-dih.com",
  founder: {
    "@type": "Person",
    name: "Karla Leticia Figueroa Hernández",
    jobTitle: "Psicóloga",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-footer-blue/15 bg-background/95 px-5 py-4 sm:px-8">
        <nav
          className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4"
          aria-label="Navegación principal"
        >
          <a href="#inicio" className="flex items-center gap-3">
            <Image
              src="/brand/consultoria-dih-logo.png"
              alt="Consultoría DIH Psicóloga Karla Figueroa"
              width={116}
              height={60}
              priority
              className="h-12 w-auto"
            />
            <span className="hidden text-sm font-semibold text-foreground sm:block">
              Psicóloga Karla Figueroa
            </span>
          </a>
          <div className="flex items-center gap-3">
            <Link
              href="/sobre-mi"
              className="inline-flex h-10 items-center justify-center rounded-full border border-footer-blue/25 bg-surface px-4 text-sm font-semibold text-footer-dark-blue transition-colors hover:bg-key-yellow"
            >
              Sobre mí
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

      <section id="inicio" className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-footer-blue">
              Psicóloga en Puebla y San Andrés Cholula
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
              Terapia psicológica para recuperar tu bienestar emocional y mental
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Soy Karla Leticia Figueroa Hernández, psicóloga con más de 15 años
              de experiencia acompañando adolescentes, adultos, parejas y
              familias en procesos de ansiedad, depresión, duelo, conflictos de
              pareja o familiares, autoestima, sexualidad y habilidades
              emocionales.
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

          <aside className="rounded-[8px] border border-footer-blue/15 bg-surface p-6 shadow-sm">
            <Image
              src="/brand/consultoria-dih-logo.png"
              alt="Logo de Consultoría DIH"
              width={360}
              height={185}
              className="mx-auto h-auto w-full max-w-sm"
              priority
            />
            <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
              <div className="rounded-[8px] bg-disculparse p-4 text-text-primary">
                <dt className="font-semibold">Modalidad</dt>
                <dd className="mt-1">Presencial y en línea</dd>
              </div>
              <div className="rounded-[8px] bg-declaracion p-4 text-text-primary">
                <dt className="font-semibold">Ubicación</dt>
                <dd className="mt-1">San Andrés Cholula, Puebla</dd>
              </div>
              <div className="rounded-[8px] bg-humor p-4 text-text-primary">
                <dt className="font-semibold">Experiencia</dt>
                <dd className="mt-1">Más de 15 años</dd>
              </div>
              <div className="rounded-[8px] bg-tranquilo p-4 text-text-primary">
                <dt className="font-semibold">Agenda</dt>
                <dd className="mt-1">WhatsApp 222 203 1068</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="bg-surface px-5 py-14 sm:px-8" aria-labelledby="servicios-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-footer-blue">
              Servicios psicológicos
            </p>
            <h2 id="servicios-title" className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Atención terapéutica para necesidades concretas
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Cada servicio está pensado para que encuentres ayuda profesional
              según lo que estás viviendo y puedas agendar fácilmente.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[8px] border border-footer-blue/10 bg-background p-5 shadow-sm"
              >
                <div className={[
                  "mb-5 h-2 w-16 rounded-full",
                  service.color,
                ].join(" ")} />
                <h3 className="text-xl font-semibold leading-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8" aria-labelledby="perfil-title">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-[8px] bg-footer-dark-blue p-6 text-bg-creamy">
            <p className="text-sm font-semibold uppercase tracking-wide text-key-yellow">
              Formación y experiencia
            </p>
            <h2 id="perfil-title" className="mt-3 text-3xl font-semibold leading-tight">
              Psicóloga Karla Figueroa
            </h2>
            <p className="mt-4 leading-7 text-bg-creamy/85">
              Licenciada en Psicología por la UPAEP, con Maestría en Pedagogía,
              formación en psicopedagogía, terapia emocional sistémica, terapia
              de pareja, terapia breve, adicciones y método Gottman.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div key={item} className="rounded-[8px] border border-footer-blue/15 bg-surface p-5">
                <p className="text-base font-semibold leading-7 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-footer-dark-blue px-5 py-14 text-bg-creamy sm:px-8" aria-labelledby="agenda-title">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-key-yellow">
              Terapia presencial y en línea
            </p>
            <h2 id="agenda-title" className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Agenda terapia en San Andrés Cholula, Puebla, o en línea
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-bg-creamy/85">
              Atención cerca de Angelópolis y sesiones en línea para México y el
              extranjero. Si buscas psicóloga en Puebla o Cholula, puedes
              escribir por WhatsApp o reservar directamente en el calendario.
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
