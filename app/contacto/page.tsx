import type { Metadata } from "next";
import Script from "next/script";
import { AppointmentButton } from "../components/AppointmentButton";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { ContactSidebar } from "../components/ContactSidebar";
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
    <main className="min-h-screen bg-white text-primary transition-colors">
      <Script
        id="contact-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Contacto
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-primary sm:text-6xl">
              Agenda terapia presencial en Cholula o sesión en línea
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-primary/70">
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
                className="brand-gradient inline-flex h-12 items-center justify-center rounded-full px-6 text-base font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
              >
                WhatsApp 222 203 1068
              </a>
            </div>
          </div>

          <ContactSidebar />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
