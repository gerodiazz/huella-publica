import type { Metadata } from "next";
import { PageIntro } from "@/components/site/page-intro";
import { SearchForm } from "@/components/site/search-form";
import { Notice } from "@/components/ui/notice";
import { PageContainer } from "@/components/ui/page-container";

export const metadata: Metadata = {
  title: "Consultar registros",
  description:
    "Interfaz preliminar de la consulta de registros verificados de Huella Pública. Todavía no está habilitada.",
};

export default function SearchPage() {
  return (
    <>
      <PageIntro eyebrow="Consulta" title="Consultar registros verificados">
        <p>
          Esta sección permitirá buscar por nombre y apellido entre los registros que hayan superado la revisión
          editorial de Huella Pública.
        </p>
      </PageIntro>

      <PageContainer width="text" className="py-14 sm:py-16">
        <SearchForm id="consulta-principal" />

        <Notice title="La consulta todavía no está disponible" className="mt-10">
          <p>
            Estamos en una etapa de desarrollo. Esta página no accede a ninguna base de datos y no muestra registros de
            ninguna persona, ni reales ni de ejemplo.
          </p>
        </Notice>

        <div className="mt-14 space-y-12">
          <section aria-labelledby="que-mostrara">
            <h2 id="que-mostrara" className="text-3xl">
              Qué mostrará cada resultado
            </h2>
            <p className="mt-3 text-ink-muted">
              Cuando la consulta esté habilitada, cada registro publicado podrá incluir información como la siguiente. El
              conjunto exacto de datos visibles está pendiente de definición y de revisión jurídica.
            </p>
            <ul className="mt-5 list-disc space-y-1.5 pl-5 marker:text-violet-700">
              <li>La fuente original y la plataforma de procedencia.</li>
              <li>Una captura de la publicación, conservando el contexto relevante.</li>
              <li>La fecha de la publicación y la fecha de la última revisión.</li>
              <li>El contexto disponible, como respuestas, aclaraciones o rectificaciones.</li>
              <li>Una explicación editorial breve, separada de los hechos comprobables.</li>
              <li>El estado de verificación del registro.</li>
            </ul>
          </section>

          <section aria-labelledby="sin-resultados">
            <h2 id="sin-resultados" className="text-3xl">
              Qué significa no encontrar resultados
            </h2>
            <p className="mt-3 text-ink-muted">
              Que una búsqueda no arroje resultados significará únicamente que la plataforma no tiene registros
              verificados disponibles con esos datos. No significa que la persona nunca haya publicado contenido
              problemático fuera de Huella Pública.
            </p>
          </section>

          <section aria-labelledby="homonimos">
            <h2 id="homonimos" className="text-3xl">
              Personas con el mismo nombre
            </h2>
            <p className="mt-3 text-ink-muted">
              Un nombre y un apellido pueden corresponder a varias personas. Por eso, la coincidencia de nombre no
              alcanza para atribuir una publicación: la identificación deberá apoyarse en criterios adicionales y, ante
              cualquier duda, el contenido no se presentará como verificado.
            </p>
          </section>
        </div>
      </PageContainer>
    </>
  );
}
