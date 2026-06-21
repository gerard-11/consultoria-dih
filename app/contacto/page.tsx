import type { Metadata } from "next";
import Script from "next/script";
import { AppointmentButton } from "../components/AppointmentButton";
import { SiteHeader } from "../components/SiteHeader";
import { buildMetadata, siteUrl, whatsappUrl } from "../seo";

export const metadata: Metadata = buildMetadata({
  title: "Contacto | Psicóloga en San Andrés Cholula, Puebla",
  description:
    "Agenda terapia psicológica presencial en San Andrés Cholula, Puebla, o sesiones en línea con la Psicóloga Karla Figueroa de Consultoría DIH.",
  path: "/contacto",
  keywords: [
    "contacto psicóloga Puebla",
    "agenda terapia Cholula",
    "psicóloga San Andrés Cholula contacto",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto Consultoría DIH",
  url: `${siteUrl}/contacto`,
  mainEntity: {
    "@type": "PsychologicalService",
    name: "Psicóloga Karla Figueroa | Consultoría DIH",
    telephone: "+52 222 203 1068",
    areaServed: ["Puebla", "San Andrés Cholula", "Cholula", "En línea"],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <Script
        id="contact-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-footer-blue">
              Contacto
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
              Agenda terapia presencial en Cholula o sesión en línea
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Puedes reservar una cita directamente en el calendario o escribir
              por WhatsApp para confirmar disponibilidad, modalidad y dudas
              generales antes de iniciar tu proceso.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AppointmentButton>Agendar cita</AppointmentButton>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-key-yellow/70 bg-key-yellow px-6 text-base font-semibold text-footer-dark-blue shadow-sm transition-colors hover:bg-key-pink hover:text-background"
              >
                WhatsApp 222 203 1068
              </a>
            </div>
          </div>

          <aside className="rounded-[8px] border border-footer-blue/15 bg-surface p-6 shadow-sm">
            <h2 className="text-2xl font-semibold leading-tight">
              Datos de atención
            </h2>
            <dl className="mt-6 grid gap-4">
              <div className="rounded-[8px] bg-disculparse p-4 text-text-primary">
                <dt className="font-semibold">Modalidad</dt>
                <dd className="mt-1">Presencial y en línea</dd>
              </div>
              <div className="rounded-[8px] bg-declaracion p-4 text-text-primary">
                <dt className="font-semibold">Ubicación</dt>
                <dd className="mt-1">San Andrés Cholula, Puebla</dd>
              </div>
              <div className="rounded-[8px] bg-humor p-4 text-text-primary">
                <dt className="font-semibold">WhatsApp</dt>
                <dd className="mt-1">222 203 1068</dd>
              </div>
            </dl>
            <div className="mt-6 border-t border-footer-blue/15 pt-5">
              <h2 className="text-lg font-semibold leading-tight">Redes sociales</h2>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/consultoriadih/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-key-yellow/70 bg-key-yellow px-4 text-sm font-semibold text-footer-dark-blue transition-colors hover:bg-key-pink hover:text-background"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/consultoriadih-org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-footer-blue/25 px-4 text-sm font-semibold text-foreground transition-colors hover:border-footer-blue hover:text-footer-blue"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
