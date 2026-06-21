export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  highlights: string[];
  keywords: string[];
  color: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "ansiedad",
    title: "Terapia para ansiedad en Puebla y Cholula",
    shortTitle: "Ansiedad",
    description:
      "Acompañamiento psicológico para ansiedad, preocupación constante, estrés crónico, pensamientos negativos y burnout en Puebla, Cholula y en línea.",
    intro:
      "La terapia para ansiedad ayuda a entender los detonantes, regular la respuesta emocional y construir herramientas prácticas para recuperar calma y claridad en la vida diaria.",
    highlights: [
      "Manejo de preocupación constante y pensamientos anticipatorios",
      "Herramientas para estrés crónico, burnout y tensión emocional",
      "Atención presencial en San Andrés Cholula y sesiones en línea",
    ],
    keywords: [
      "terapia para ansiedad Puebla",
      "psicóloga ansiedad Cholula",
      "tratamiento ansiedad San Andrés Cholula",
    ],
    color: "bg-humor",
  },
  {
    slug: "depresion",
    title: "Terapia para depresión en Puebla y Cholula",
    shortTitle: "Depresión",
    description:
      "Atención psicológica para depresión, agotamiento emocional, falta de motivación, tristeza persistente y pérdida de sentido.",
    intro:
      "La terapia para depresión ofrece un espacio profesional para comprender lo que estás viviendo, recuperar energía emocional y avanzar con objetivos realistas.",
    highlights: [
      "Acompañamiento ante tristeza persistente y desmotivación",
      "Trabajo gradual con hábitos, vínculos y pensamiento negativo",
      "Proceso confidencial, ético e inclusivo",
    ],
    keywords: [
      "terapia para depresión Puebla",
      "psicóloga depresión Cholula",
      "ayuda psicológica depresión Puebla",
    ],
    color: "bg-tranquilo",
  },
  {
    slug: "terapia-de-pareja",
    title: "Terapia de pareja en Puebla y Cholula",
    shortTitle: "Terapia de pareja",
    description:
      "Terapia de pareja para comunicación, confianza, conflictos recurrentes, infidelidad, sexualidad y acuerdos de vida.",
    intro:
      "La terapia de pareja permite revisar patrones de conflicto, mejorar la comunicación y construir acuerdos claros con acompañamiento profesional.",
    highlights: [
      "Comunicación, confianza y manejo de conflictos recurrentes",
      "Acompañamiento ante rupturas, infidelidad o distancia emocional",
      "Formación en terapia de pareja y método Gottman",
    ],
    keywords: [
      "terapia de pareja Puebla",
      "terapia de pareja Cholula",
      "psicóloga de pareja Puebla",
    ],
    color: "bg-declaracion",
  },
  {
    slug: "adolescentes",
    title: "Psicóloga para adolescentes en Puebla y Cholula",
    shortTitle: "Adolescentes",
    description:
      "Terapia para adolescentes con ansiedad, depresión, autolesiones, duelo, problemas escolares y conflictos familiares.",
    intro:
      "La atención para adolescentes integra escucha profesional, orientación emocional y trabajo con el entorno familiar cuando el proceso lo requiere.",
    highlights: [
      "Apoyo ante ansiedad, depresión, duelo y autolesiones",
      "Acompañamiento en conflictos escolares o familiares",
      "Comunicación cuidadosa con madres, padres o tutores",
    ],
    keywords: [
      "psicóloga adolescentes Puebla",
      "terapia adolescentes Cholula",
      "psicóloga para adolescentes San Andrés Cholula",
    ],
    color: "bg-turnos",
  },
  {
    slug: "terapia-en-linea",
    title: "Terapia psicológica en línea",
    shortTitle: "Terapia en línea",
    description:
      "Terapia psicológica en línea para adolescentes, adultos, parejas y familias en México y el extranjero.",
    intro:
      "La terapia en línea facilita iniciar o mantener un proceso psicológico cuando necesitas flexibilidad, continuidad o no puedes acudir presencialmente.",
    highlights: [
      "Sesiones en línea para México y el extranjero",
      "Atención para ansiedad, depresión, pareja, duelo y autoestima",
      "Proceso profesional desde un espacio privado y seguro",
    ],
    keywords: [
      "terapia en línea México",
      "psicóloga en línea Puebla",
      "terapia psicológica online",
    ],
    color: "bg-disculparse",
  },
  {
    slug: "duelo",
    title: "Terapia para duelo y separación en Puebla y Cholula",
    shortTitle: "Duelo",
    description:
      "Acompañamiento psicológico para duelo, rupturas de pareja, pérdidas importantes, separación y cambios de vida.",
    intro:
      "La terapia para duelo brinda acompañamiento respetuoso para procesar pérdidas, cambios significativos y emociones difíciles sin invalidar tu ritmo.",
    highlights: [
      "Acompañamiento ante pérdidas, rupturas y separación",
      "Herramientas para transitar cambios de vida y dolor emocional",
      "Atención presencial en Cholula y modalidad en línea",
    ],
    keywords: [
      "terapia duelo Puebla",
      "psicóloga duelo Cholula",
      "terapia separación Puebla",
    ],
    color: "bg-dejarlo",
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
