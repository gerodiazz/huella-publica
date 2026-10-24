import type { Metadata } from "next";
import { PageIntro } from "@/components/site/page-intro";
import { Notice } from "@/components/ui/notice";
import { PageContainer } from "@/components/ui/page-container";
import { PendingTag } from "@/components/ui/pending-tag";

export const metadata: Metadata = {
  title: "Recursos",
  description: "Recursos educativos y directorio de ayuda de Huella Pública, en preparación.",
};

// Temas propuestos por la responsable del proyecto. Los textos se redactarán y
// revisarán con personas calificadas antes de publicarse.
const educationalTopics = [
  "Machismo y misoginia.",
  "Normalización de la violencia.",
  "Estereotipos de género.",
  "La diferencia entre una opinión controvertida y un discurso que promueve o justifica la violencia.",
  "Señales de control, manipulación y relaciones no saludables.",
  "Límites personales y cómo pedir ayuda.",
];

const directorySections = [
  {
    title: "Organismos oficiales",
    text: "Líneas de atención y organismos públicos nacionales y provinciales.",
  },
  {
    title: "Organizaciones especializadas",
    text: "Organizaciones de la sociedad civil con trabajo reconocido en la prevención de la violencia de género.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageIntro eyebrow="Recursos" title="Recursos educativos y ayuda">
        <p>
          Un espacio para comprender mejor las formas de violencia simbólica y verbal, y para saber dónde buscar
          acompañamiento.
        </p>
      </PageIntro>

      <PageContainer width="text" className="py-14 sm:py-16">
        <Notice title="Si estás en una situación de riesgo" tone="pending">
          <p>
            Este directorio todavía no está completo. Los contactos de organismos oficiales y organizaciones se
            publicarán solo después de ser validados por el equipo. Ante una emergencia, comunicate con los servicios
            de emergencia de tu localidad.
          </p>
        </Notice>

        <section aria-labelledby="biblioteca" className="mt-14">
          <h2 id="biblioteca" className="flex flex-wrap items-center gap-3 text-3xl">
            Biblioteca educativa <PendingTag label="En preparación" />
          </h2>
          <p className="mt-3 text-ink-muted">
            Artículos breves, accesibles y fundamentados. Los temas previstos son:
          </p>
          <ul className="mt-5 list-disc space-y-1.5 pl-5 marker:text-violet-700">
            {educationalTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
          <p className="mt-5 text-ink-muted">
            Los contenidos que lo requieran serán revisados por personas con formación específica antes de publicarse.
          </p>
        </section>

        <section aria-labelledby="directorio" className="mt-16">
          <h2 id="directorio" className="flex flex-wrap items-center gap-3 text-3xl">
            Directorio de ayuda <PendingTag label="Pendiente de completar" />
          </h2>
          <div className="mt-8 space-y-8">
            {directorySections.map((section) => (
              <div key={section.title} className="border-t border-beige-200 pt-5">
                <h3 className="text-2xl">{section.title}</h3>
                <p className="mt-1 text-ink-muted">{section.text}</p>
                <p className="mt-4 rounded-md border border-dashed border-line-strong px-4 py-3 text-sm text-ink-muted">
                  Contenido pendiente: los nombres, enlaces y datos de contacto se incorporarán después de su validación.
                </p>
              </div>
            ))}
          </div>
        </section>
      </PageContainer>
    </>
  );
}
