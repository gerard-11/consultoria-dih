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
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <SiteHeader />

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-footer-blue">
            Servicios psicológicos
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            Terapia psicológica presencial en Cholula y atención en línea
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            Cada servicio cuenta con una ruta de atención enfocada en una
            necesidad concreta, con acompañamiento profesional, confidencial y
            adaptado al proceso de cada persona.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {servicePages.map((service) => (
              <article
                key={service.slug}
                className="rounded-[8px] border border-footer-blue/15 bg-surface p-5 shadow-sm"
              >
                <div className={["mb-5 h-2 w-16 rounded-full", service.color].join(" ")} />
                <h2 className="text-2xl font-semibold leading-tight">
                  {service.shortTitle}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {service.description}
                </p>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-key-yellow px-4 text-sm font-semibold text-footer-dark-blue transition-colors hover:bg-key-pink hover:text-background"
                >
                  Ver servicio
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-footer-dark-blue px-5 py-14 text-bg-creamy sm:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold leading-tight">
              Agenda una primera cita
            </h2>
            <p className="mt-3 max-w-2xl text-bg-creamy/85">
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
              className="inline-flex h-12 items-center justify-center rounded-full border border-bg-creamy/35 px-6 text-base font-semibold text-bg-creamy transition-colors hover:bg-bg-creamy hover:text-footer-dark-blue"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
