import type { Metadata } from "next";
import Link from "next/link";
import { AppointmentButton } from "../components/AppointmentButton";
import { SiteHeader } from "../components/SiteHeader";
import { buildMetadata, whatsappUrl } from "../seo";
import { servicePages } from "./services";

export const metadata: Metadata = buildMetadata({
  title: "Servicios de terapia psicológica | Consultoría DIH",
  description:
    "Servicios de terapia psicológica presencial en San Andrés Cholula, Puebla, y en línea: ansiedad, depresión, pareja, adolescentes, duelo y terapia online.",
  path: "/servicios",
  keywords: [
    "terapia psicológica Puebla",
    "servicios psicológicos Cholula",
    "psicóloga en San Andrés Cholula",
  ],
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-purple transition-colors">
      <SiteHeader />

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">
            Servicios psicológicos
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            Terapia psicológica presencial en Cholula y atención en línea
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-purple/70">
            Cada servicio cuenta con una ruta de atención enfocada en una
            necesidad concreta, con acompañamiento profesional, confidencial y
            adaptado al proceso de cada persona.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {servicePages.map((service) => (
              <article
                key={service.slug}
                className="rounded-[8px] border border-neutral-200 bg-white p-5 shadow-sm"
              >
                <div className={["mb-5 h-2 w-16 rounded-full", service.color].join(" ")} />
                <h2 className="text-2xl font-semibold leading-tight">
                  {service.shortTitle}
                </h2>
                <p className="mt-3 text-sm leading-6 text-purple/70">
                  {service.description}
                </p>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="mt-5 brand-gradient inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                >
                  Ver servicio
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lavender-light px-6 py-20 text-purple sm:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal">Servicios psicológicos</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-purple">
              Agenda una primera cita
            </h2>
            <p className="mt-3 max-w-2xl text-purple/75">
              Puedes reservar en línea o escribir por WhatsApp para confirmar la
              modalidad que mejor se adapta a tu proceso.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <AppointmentButton variant="yellow">Agendar cita</AppointmentButton>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-gradient inline-flex h-12 items-center justify-center rounded-full px-6 text-base font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
