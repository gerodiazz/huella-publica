import Link from "next/link";
import { editorialPrinciples } from "@/content/principles";
import { PrincipleList } from "@/components/site/principle-list";
import { SearchForm } from "@/components/site/search-form";
import { ButtonLink } from "@/components/ui/button";
import { PageContainer } from "@/components/ui/page-container";
import { SectionHeading } from "@/components/ui/section-heading";

const processSteps = [
  {
    title: "Recepción privada",
    text: "Una persona envía una publicación pública con su enlace original y el contexto disponible. La información queda en un canal privado.",
  },
  {
    title: "Verificación editorial",
    text: "El equipo revisa la fuente, la autenticidad del contenido, la correspondencia con la cuenta de origen y el contexto. Puede pedir más información o descartar el caso.",
  },
  {
    title: "Publicación eventual",
    text: "Solo los casos que superan la revisión podrían publicarse, con su fuente, su contexto y una explicación editorial separada de los hechos.",
  },
];

export default function HomePage() {
  return (
    <>
      <div className="border-b border-beige-200 bg-gradient-to-b from-lavender-50 to-cream">
        <PageContainer className="grid gap-12 pt-14 pb-16 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pb-24">
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-semibold tracking-[0.12em] text-violet-700 uppercase">
              Plataforma argentina · En desarrollo
            </p>
            <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.5rem]">Lo que publicamos, deja huella.</h1>
            <p className="mt-6 text-lg text-ink">
              Huella Pública es un proyecto para consultar publicaciones públicas de redes sociales que reproducen
              expresiones machistas, misóginas o que normalizan la violencia hacia las mujeres, siempre después de una
              verificación editorial y junto con su contexto.
            </p>
            <p className="mt-4 text-ink-muted">
              Su propósito es preventivo e informativo: aportar elementos para reflexionar y decidir con más
              información. No reemplaza a la Justicia ni califica a las personas.
            </p>
          </div>
          <SearchForm />
        </PageContainer>
      </div>

      <section aria-labelledby="como-funciona" className="py-20 sm:py-24">
        <PageContainer>
          <SectionHeading id="como-funciona" eyebrow="El proceso" title="Cómo funciona">
            <p>Recibir información no significa publicarla. Cada etapa es distinta y requiere una decisión humana.</p>
          </SectionHeading>
          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
            {processSteps.map((step, index) => (
              <li key={step.title} className="border-t border-violet-700/40 pt-5">
                <p aria-hidden="true" className="font-serif text-4xl text-violet-700 italic">
                  {index + 1}
                </p>
                <h3 className="mt-2 text-2xl">{step.title}</h3>
                <p className="mt-2 text-ink-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </PageContainer>
      </section>

      <section aria-labelledby="principios" className="border-y border-beige-200 bg-white/60 py-20 sm:py-24">
        <PageContainer>
          <SectionHeading id="principios" eyebrow="Principios editoriales" title="Lo que guía cada decisión">
            <p>
              Criterios provisionales, pendientes de aprobación definitiva y de revisión jurídica.{" "}
              <Link href="/criterios">Leer los criterios editoriales</Link>
            </p>
          </SectionHeading>
          <div className="mt-12">
            <PrincipleList principles={editorialPrinciples} />
          </div>
        </PageContainer>
      </section>

      <section aria-labelledby="enviar" className="py-20 sm:py-24">
        <PageContainer>
          <div className="grid gap-8 rounded-lg bg-beige-100 px-6 py-10 sm:px-12 sm:py-14 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <h2 id="enviar" className="text-3xl sm:text-[2.25rem]">
                ¿Encontraste una publicación que debería revisarse?
              </h2>
              <p className="mt-4 text-ink-muted">
                Vas a poder enviarla por un canal privado. Cada presentación será revisada por personas del equipo y{" "}
                <strong className="font-semibold text-ink">nunca se publica de forma automática</strong>. Enviar
                información no garantiza su publicación.
              </p>
            </div>
            <div className="md:justify-self-end">
              <ButtonLink href="/reportar">Cómo enviar información</ButtonLink>
            </div>
          </div>
        </PageContainer>
      </section>

      <section aria-labelledby="mas-informacion" className="pb-4">
        <PageContainer>
          <h2 id="mas-informacion" className="sr-only">
            Más información
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="border-t border-beige-200 pt-6">
              <h3 className="text-2xl">Recursos y ayuda</h3>
              <p className="mt-2 text-ink-muted">
                Materiales educativos y un directorio de organismos y organizaciones especializadas, en preparación.
              </p>
              <Link href="/recursos" className="mt-4 inline-block font-semibold">
                Ver recursos
              </Link>
            </div>
            <div className="border-t border-beige-200 pt-6">
              <h3 className="text-2xl">Contacto</h3>
              <p className="mt-2 text-ink-muted">
                Los canales de contacto todavía están en definición. Mientras tanto, podés leer las preguntas
                frecuentes.
              </p>
              <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                <Link href="/contacto" className="font-semibold">
                  Contacto
                </Link>
                <Link href="/preguntas-frecuentes" className="font-semibold">
                  Preguntas frecuentes
                </Link>
              </p>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
