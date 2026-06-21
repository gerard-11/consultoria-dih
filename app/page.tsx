import Image from "next/image";
import Link from "next/link";
import { AppointmentButton } from "./components/AppointmentButton";
import { SiteHeader } from "./components/SiteHeader";
import { whatsappUrl } from "./seo";
import { servicePages } from "./servicios/services";

const featuredServices = servicePages;

const trustItems = [
  "Cédula profesional 6452371",
  "Más de 15 años de experiencia profesional",
  "Terapia presencial en San Andrés Cholula y atención en línea",
  "Enfoque humano, ético, confidencial e inclusivo",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <SiteHeader />

      <section id="inicio" className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
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
              <AppointmentButton>Agendar cita</AppointmentButton>
              <Link
                href="/servicios"
                className="inline-flex h-12 items-center justify-center rounded-full border border-key-yellow/70 bg-key-yellow px-6 text-base font-semibold text-footer-dark-blue shadow-sm transition-colors hover:bg-key-pink hover:text-background"
              >
                Ver servicios
              </Link>
            </div>
          </div>

          <aside className="rounded-[8px] border border-footer-blue/15 bg-surface p-6 shadow-sm">
            <Image
              src="/brand/consultoria-dih-logo.png"
              alt="Logo de Consultoría DIH"
              width={360}
              height={185}
              className="mx-auto h-auto w-full max-w-sm"
              sizes="(min-width: 1024px) 360px, 80vw"
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
            {featuredServices.map((service) => (
              <article
                key={service.slug}
                className="rounded-[8px] border border-footer-blue/10 bg-background p-5 shadow-sm"
              >
                <div className={[
                  "mb-5 h-2 w-16 rounded-full",
                  service.color,
                ].join(" ")} />
                <h3 className="text-xl font-semibold leading-tight text-foreground">
                  {service.shortTitle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {service.description}
                </p>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-footer-blue transition-colors hover:text-key-pink"
                >
                  Leer más
                </Link>
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
