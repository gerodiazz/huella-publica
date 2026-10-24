import type { Metadata } from "next";
import { editorialPrinciples } from "@/content/principles";
import { PageIntro } from "@/components/site/page-intro";
import { PrincipleList } from "@/components/site/principle-list";
import { Notice } from "@/components/ui/notice";
import { PageContainer } from "@/components/ui/page-container";

export const metadata: Metadata = {
  title: "Criterios editoriales",
  description: "Principios provisionales de verificación, contexto, evaluación editorial y corrección de Huella Pública.",
};

const verificationChecks = [
  "Que el enlace exista y corresponda al contenido informado.",
  "Que la captura sea auténtica y no presente alteraciones que cambien el sentido del mensaje.",
  "Que la cuenta de origen corresponda a la persona identificada.",
  "El contexto completo de la publicación y su pertinencia para los fines del proyecto.",
  "Las fechas, las fuentes y la existencia de posibles duplicados.",
  "Si el contenido fue eliminado o si el enlace dejó de funcionar.",
  "Si hace falta pedir información adicional a quien presentó el caso.",
];

const exclusions = [
  "Capturas manipuladas o cuya autenticidad no pueda comprobarse.",
  "Casos en los que no sea posible identificar con seguridad a la persona.",
  "Acusaciones sin sustento verificable o información contradictoria.",
  "Contenidos que expongan innecesariamente información privada.",
  "Casos que impliquen riesgos injustificados para terceras personas.",
];

const limits = [
  "No asigna puntajes, rankings ni etiquetas automáticas a las personas.",
  "No elabora perfiles psicológicos ni diagnostica personalidades.",
  "No determina responsabilidades penales ni reemplaza a la Justicia.",
  "No presenta una opinión editorial como si fuera una conclusión judicial.",
  "No permite que su espacio se use para hostigar, amenazar o contactar a las personas mencionadas.",
];

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 list-disc space-y-1.5 pl-5 marker:text-violet-700">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function EditorialCriteriaPage() {
  return (
    <>
      <PageIntro eyebrow="Criterios editoriales" title="Cómo se evaluará cada publicación">
        <p>
          La confianza en Huella Pública depende de fuentes comprobables, de un proceso de revisión cuidadoso y de
          mecanismos de corrección accesibles.
        </p>
      </PageIntro>

      <PageContainer width="text" className="py-14 sm:py-16">
        <Notice title="Documento provisional" tone="pending">
          <p>
            Estos criterios describen la orientación del proyecto. Todavía no son una política editorial aprobada ni
            procedimientos en funcionamiento, y están pendientes de revisión profesional, incluida la revisión jurídica.
          </p>
        </Notice>

        <section aria-labelledby="principios" className="mt-14">
          <h2 id="principios" className="text-3xl">
            Principios
          </h2>
          <div className="mt-8">
            <PrincipleList principles={editorialPrinciples} columns={1} />
          </div>
        </section>

        <section aria-labelledby="verificacion" className="mt-16">
          <h2 id="verificacion" className="text-3xl">
            Qué se comprobará antes de publicar
          </h2>
          <p className="mt-3 text-ink-muted">
            La comprobación de la fuente, la correspondencia de identidad, la revisión del contexto y la explicación
            editorial se tratarán como pasos separados.
          </p>
          <BulletList items={verificationChecks} />
        </section>

        <section aria-labelledby="exclusiones" className="mt-16">
          <h2 id="exclusiones" className="text-3xl">
            Qué no se publicará como verificado
          </h2>
          <BulletList items={exclusions} />
          <p className="mt-5 text-ink-muted">
            Que una publicación resulte ofensiva para alguien no basta por sí solo: se aplicarán criterios consistentes
            de pertinencia, autenticidad, contexto e interés preventivo.
          </p>
        </section>

        <section aria-labelledby="hechos" className="mt-16">
          <h2 id="hechos" className="text-3xl">
            Hechos, contexto e interpretación
          </h2>
          <p className="mt-3 text-ink-muted">
            Cada registro distinguirá entre la publicación en sí (lo comprobable), el contexto disponible (respuestas,
            aclaraciones o rectificaciones) y el análisis editorial, que explica por qué el contenido puede resultar
            problemático sin imputar intenciones que no puedan probarse. Una publicación aislada no permite conocer
            integralmente a una persona.
          </p>
        </section>

        <section aria-labelledby="correcciones" className="mt-16">
          <h2 id="correcciones" className="text-3xl">
            Correcciones, revisión y retirada
          </h2>
          <p className="mt-3 text-ink-muted">
            Está previsto un procedimiento visible para que las personas involucradas puedan señalar errores, aportar
            contexto, presentar un reclamo o solicitar la revisión o la retirada de un contenido. Cada solicitud deberá
            quedar registrada y ser evaluada por personas autorizadas. Los plazos y el procedimiento concreto están
            pendientes de definición.
          </p>
        </section>

        <section aria-labelledby="limites" className="mt-16">
          <h2 id="limites" className="text-3xl">
            Lo que Huella Pública no hace
          </h2>
          <BulletList items={limits} />
        </section>
      </PageContainer>
    </>
  );
}
