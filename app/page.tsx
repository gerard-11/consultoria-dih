import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/brand/consultoria-dih-logo.png";
import { AppointmentButton } from "./components/AppointmentButton";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { whatsappUrl } from "./seo";
import { servicePages } from "./servicios/services";

const featuredServices = servicePages.slice(0, 3);

const trustItems = [
  "Cédula profesional 6452371",
  "Más de 15 años de experiencia profesional",
  "Terapia presencial en San Andrés Cholula y atención en línea",
  "Enfoque humano, ético, confidencial e inclusivo",
];

const serviceAccentClasses = ["bg-primary", "bg-secondary", "bg-emphasis-mid"];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-primary">
      <SiteHeader />

      <section id="inicio" className="px-6 py-12 sm:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Consultoría DIH
            </p>
            <h1 className="text-brand-gradient mt-4 max-w-5xl text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              Terapia psicológica para recuperar tu bienestar emocional y mental
            </h1>
            <p className="mt-6 max-w-2xl text-2xl font-semibold leading-9 text-primary">
              Un espacio profesional para comprender lo que sientes, ordenar lo que estás viviendo y avanzar con herramientas claras.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-primary/70">
              Soy Karla Leticia Figueroa Hernández, psicóloga con más de 15 años de experiencia acompañando adolescentes, adultos, parejas y familias en procesos de ansiedad, depresión, duelo, autoestima y habilidades emocionales.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <AppointmentButton>Agendar cita</AppointmentButton>
              <Link
                href="/servicios"
                className="inline-flex h-12 items-center justify-center rounded-full border border-primary/15 bg-white px-6 text-sm sm:text-base font-semibold text-primary shadow-sm transition-colors hover:bg-white"
              >
                Ver servicios
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border p-6 shadow-md" style={{ borderColor: 'var(--color-sidebar-border)', backgroundColor: 'var(--color-sidebar-bg)', boxShadow: '0 4px 6px var(--color-sidebar-border)' }}>
            <div className="flex justify-center mb-6">
              <Image
                src={logoImage}
                alt="Consultoría DIH Logo"
                width={200}
                height={140}
                className="h-auto w-auto max-w-48 sm:max-w-xs"
              />
            </div>

            <div className="rounded-3xl p-4" style={{ backgroundColor: 'var(--color-primary-light)' }}>
              <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                Atención presencial y en línea
              </p>
              <h2 className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-tight text-primary">
                Acompañamiento humano, confidencial y ético
              </h2>
              <dl className="mt-6 grid gap-4 text-sm md:grid-cols-2">
                {trustItems.map((item, index) => (
                  <div
                    key={item}
                    className="border border-primary/15 p-4 py-3 text-primary"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wide text-primary/70">
                      {index === 0 ? "Confianza" : "Proceso"}
                    </dt>
                    <dd className="mt-2 leading-6">{item}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className=" px-6 py-20 sm:px-8" aria-labelledby="servicios-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Servicios psicológicos
            </p>
            <h2 id="servicios-title" className="mt-3 text-base sm:text-lg md:text-xl lg:text-3xl font-semibold leading-tight text-primary">
              Tres rutas de acompañamiento psicológico
            </h2>
            <p className="mt-4 text-lg leading-8 text-primary/70">
              Servicios presentados con estructura clara para elegir el tipo de apoyo que necesitas y agendar sin fricción.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featuredServices.map((service, index) => (
              <article
                key={service.slug}
                className="rounded-3xl border border-primary/10 bg-surface p-6 shadow-md shadow-primary/10"
              >
                <div
                  className={[
                    "mb-6 h-2 w-16 rounded-full",
                    serviceAccentClasses[index] ?? "bg-accent",
                  ].join(" ")}
                />
                <h3 className="text-xl font-semibold leading-tight text-primary">
                  {service.shortTitle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-primary/70">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-light px-6 py-20 text-primary sm:px-8" aria-labelledby="agenda-title">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Terapia presencial y en línea
            </p>
            <h2 id="agenda-title" className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-primary">
              Agenda terapia en San Andrés Cholula, Puebla, o en línea
            </h2>
            <p className="mt-4 max-w-3xl text-base sm:text-lg leading-8 text-primary/75">
              Atención cerca de Angelópolis y sesiones en línea para México y el extranjero. Puedes escribir por WhatsApp o reservar directamente en el calendario.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <AppointmentButton variant="yellow">Agendar cita en línea</AppointmentButton>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-gradient inline-flex h-12 items-center justify-center rounded-full px-6 text-sm sm:text-base font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            >
              WhatsApp 222 203 1068
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
