import type { Metadata } from "next";

function normalizeSiteUrl(url: string) {
  return url.replace(/\/$/, "");
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://consultoria-dih.com",
);
export const siteName = "Consultoría DIH";
export const psychologistName = "Karla Leticia Figueroa Hernández";
export const whatsappUrl =
  "https://wa.me/522222031068?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20la%20Psic%C3%B3loga%20Karla%20Figueroa.";
export const socialLinks = [
  "https://www.instagram.com/consultoriadih/",
  "https://www.linkedin.com/in/consultoriadih-org/",
];

export const defaultOgImage = {
  url: "/brand/consultoria-dih-logo.png",
  width: 1094,
  height: 561,
  alt: "Consultoría DIH Psicóloga Karla Figueroa",
};

type SeoConfig = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
}: SeoConfig): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "es_MX",
      type: "website",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage.url],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/brand/consultoria-dih-logo.png`,
  sameAs: socialLinks,
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "PsychologicalService"],
  name: `Psicóloga Karla Figueroa | ${siteName}`,
  description:
    "Atención psicológica presencial en San Andrés Cholula, Puebla, y terapia en línea para ansiedad, depresión, terapia de pareja, duelo, autoestima, adolescentes y familias.",
  image: `${siteUrl}/brand/consultoria-dih-logo.png`,
  logo: `${siteUrl}/brand/consultoria-dih-logo.png`,
  url: siteUrl,
  telephone: "+52 222 203 1068",
  priceRange: "$$",
  sameAs: socialLinks,
  areaServed: ["Puebla", "San Andrés Cholula", "Cholula", "Angelópolis"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Andrés Cholula",
    addressRegion: "Puebla",
    addressCountry: "MX",
  },
  founder: {
    "@type": "Person",
    name: psychologistName,
    jobTitle: "Psicóloga",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Cédula profesional",
      identifier: "6452371",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de terapia psicológica",
    itemListElement: [
      "Terapia para ansiedad",
      "Terapia para depresión",
      "Terapia de pareja",
      "Terapia para adolescentes",
      "Terapia en línea",
      "Acompañamiento en duelo",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  },
};
