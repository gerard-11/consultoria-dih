import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { AppointmentButton } from "../../components/AppointmentButton";
import { SiteHeader } from "../../components/SiteHeader";
import { buildMetadata, siteName, siteUrl, whatsappUrl } from "../../seo";
import { getServicePage, servicePages } from "../services";

type ServiceRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return {};
  }

  return buildMetadata({
    title: `${service.title} | Consultoría DIH`,
    description: service.description,
    path: `/servicios/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${siteUrl}/servicios/${service.slug}`,
    provider: {
      "@type": "PsychologicalService",
      name: `Psicóloga Karla Figueroa | ${siteName}`,
      url: siteUrl,
      telephone: "+52 222 203 1068",
      areaServed: ["Puebla", "San Andrés Cholula", "Cholula", "México"],
    },
    serviceType: service.shortTitle,
    areaServed: ["Puebla", "San Andrés Cholula", "Cholula", "En línea"],
  };

  return (
    <main className="min-h-screen bg-white text-purple transition-colors">
      <Script
        id={`service-json-ld-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-purple">
              Servicio psicológico
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-purple/70">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AppointmentButton>Agendar cita</AppointmentButton>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-gradient inline-flex h-12 items-center justify-center rounded-full px-6 text-base font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
              >
                Enviar WhatsApp
              </a>
            </div>
          </div>

          <aside className="rounded-[8px] border border-neutral-200 bg-white p-6 shadow-sm">
            <div className={["mb-6 h-2 w-20 rounded-full", service.color].join(" ")} />
            <h2 className="text-2xl font-semibold leading-tight">
              Cómo puede ayudarte
            </h2>
            <ul className="mt-5 grid gap-4">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="rounded-[8px] bg-white p-4 text-sm font-semibold leading-6 text-purple">
                  {highlight}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-neutral-warm px-5 py-14 sm:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="text-3xl font-semibold leading-tight">
            Otros servicios relacionados
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {servicePages
              .filter((item) => item.slug !== service.slug)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/servicios/${item.slug}`}
                  className="rounded-[8px] border border-neutral-200 bg-white p-5 shadow-sm transition-colors hover:border-neutral-200"
                >
                  <span className="text-lg font-semibold">{item.shortTitle}</span>
                  <span className="mt-2 block text-sm leading-6 text-purple/70">
                    {item.description}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
