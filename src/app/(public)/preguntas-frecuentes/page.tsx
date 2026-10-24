import type { Metadata } from "next";
import { PageIntro } from "@/components/site/page-intro";
import { Notice } from "@/components/ui/notice";
import { PageContainer } from "@/components/ui/page-container";
import { PendingTag } from "@/components/ui/pending-tag";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Respuestas breves sobre el propósito, la verificación, las correcciones y la privacidad en Huella Pública.",
};

type Faq = {
  question: string;
  answer: string;
  provisional?: boolean;
};

const faqs: readonly Faq[] = [
  {
    question: "¿Qué es Huella Pública?",
    answer:
      "Es un proyecto argentino en desarrollo que busca visibilizar, con verificación y contexto, publicaciones públicas de redes sociales que reproducen expresiones machistas, misóginas, sexualizantes, discriminatorias o que normalizan la violencia hacia las mujeres. Su propósito es preventivo y educativo.",
  },
  {
    question: "¿Huella Pública determina si alguien es violento?",
    answer:
      "No. La plataforma no reemplaza a la Justicia, no determina responsabilidades penales, no diagnostica personalidades ni asigna puntajes o etiquetas a las personas. Presenta contenido verificable con su contexto para que cada quien pueda formarse su propia opinión.",
  },
  {
    question: "¿Cuál es la diferencia entre enviar información y publicar un registro?",
    answer:
      "Enviar información es aportar una publicación para que el equipo la revise. Publicar un registro es una decisión editorial posterior que solo puede tomarse si el caso supera la verificación. Ningún envío se publica de forma automática, y muchos pueden no publicarse nunca.",
  },
  {
    question: "¿Cómo se verifica una publicación?",
    answer:
      "Se busca comprobar que el enlace original exista y corresponda al contenido, que la captura no esté alterada, que la cuenta corresponda a la persona identificada y que el contexto sea suficiente. Si hay dudas sobre la identidad, la fuente o el contexto, el caso no se presenta como verificado.",
    provisional: true,
  },
  {
    question: "¿Qué pasa si hay personas con el mismo nombre?",
    answer:
      "La coincidencia de nombre no alcanza para atribuir una publicación a alguien. La identificación deberá apoyarse en criterios adicionales, y ante cualquier duda el contenido no se publica como verificado.",
  },
  {
    question: "¿Qué significa que una búsqueda no tenga resultados?",
    answer:
      "Significa únicamente que la plataforma no tiene registros verificados disponibles con esos datos. No demuestra que una persona nunca haya publicado contenido problemático.",
  },
  {
    question: "¿Se puede corregir o retirar un contenido?",
    answer:
      "Sí, está previsto un procedimiento visible para señalar errores, aportar contexto, presentar un reclamo o solicitar la revisión o la retirada de un contenido. El procedimiento concreto y sus plazos están en definición.",
    provisional: true,
  },
  {
    question: "¿Qué pasa con los datos de quien envía información?",
    answer:
      "La identidad de quien presenta información debe mantenerse privada y no se publica. La política de privacidad, incluidos los plazos de conservación de los datos, todavía está en elaboración y será revisada por profesionales.",
    provisional: true,
  },
  {
    question: "¿Ya puedo usar el buscador o enviar información?",
    answer:
      "Todavía no. El sitio está en desarrollo: la consulta y el envío de información se habilitarán más adelante, una vez que los procedimientos y la revisión jurídica estén completos.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageIntro eyebrow="Preguntas frecuentes" title="Preguntas frecuentes">
        <p>Respuestas breves sobre cómo funcionará Huella Pública.</p>
      </PageIntro>

      <PageContainer width="text" className="py-14 sm:py-16">
        <Notice>
          <p>
            Las respuestas marcadas como provisionales describen políticas que todavía requieren definición y revisión
            profesional.
          </p>
        </Notice>

        <div className="mt-10 divide-y divide-beige-200 border-y border-beige-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-1">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-serif text-xl font-semibold text-ink hover:text-violet-700 [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <svg
                  aria-hidden="true"
                  className="shrink-0 text-violet-700 transition-transform group-open:rotate-45"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M9 3v12M3 9h12" />
                </svg>
              </summary>
              <div className="pb-5 text-ink-muted">
                {faq.provisional ? (
                  <p className="mb-2">
                    <PendingTag />
                  </p>
                ) : null}
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </PageContainer>
    </>
  );
}
