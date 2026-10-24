import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/site/page-intro";
import { Notice } from "@/components/ui/notice";
import { PageContainer } from "@/components/ui/page-container";
import { PendingTag } from "@/components/ui/pending-tag";

export const metadata: Metadata = {
  title: "Enviar información",
  description:
    "Cómo funcionará el envío privado de publicaciones a Huella Pública. El formulario todavía no está habilitado.",
};

const keyPoints = [
  {
    title: "Todo se revisa antes de decidir",
    text: "Cada presentación será revisada por personas del equipo editorial antes de cualquier decisión.",
  },
  {
    title: "Enviar no garantiza la publicación",
    text: "Una presentación puede no publicarse por falta de verificación, de contexto o de pertinencia.",
  },
  {
    title: "Tus datos son privados",
    text: "La identidad y los datos de contacto de quien presenta información deben tratarse de forma privada y no se publican.",
  },
  {
    title: "La fuente original es clave",
    text: "Un enlace a la publicación original y contexto verificable son indispensables para poder revisar un caso.",
  },
  {
    title: "Cuidar a terceros",
    text: "Evitá incluir datos personales innecesarios de otras personas, como domicilios, teléfonos o información familiar.",
  },
];

const plannedFields = [
  "Nombre y apellido de la persona a la que se atribuye la publicación, y el usuario público de la cuenta.",
  "Red social o plataforma de procedencia.",
  "Enlace directo a la publicación original.",
  "Captura de pantalla completa u otra evidencia disponible.",
  "Fecha aproximada de la publicación, si se conoce.",
  "Contexto necesario para comprender el contenido.",
  "Por qué considerás que el contenido es problemático.",
  "Un dato de contacto opcional, según la política de privacidad que se apruebe.",
];

export default function ReportPage() {
  return (
    <>
      <PageIntro eyebrow="Enviar información" title="Cómo vas a poder enviar una publicación">
        <p>
          Huella Pública recibirá información a través de un canal privado. Antes de habilitarlo, queremos explicar con
          claridad cómo va a funcionar.
        </p>
      </PageIntro>

      <PageContainer width="text" className="py-14 sm:py-16">
        <Notice title="El formulario todavía no está habilitado" tone="pending">
          <p>
            Esta página es informativa. Por ahora no es posible enviar información ni adjuntar archivos, y el sitio no
            recibe ni almacena datos.
          </p>
        </Notice>

        <section aria-labelledby="antes-de-enviar" className="mt-14">
          <h2 id="antes-de-enviar" className="text-3xl">
            Antes de enviar
          </h2>
          <dl className="mt-6 space-y-6">
            {keyPoints.map((point) => (
              <div key={point.title} className="border-t border-beige-200 pt-4">
                <dt className="font-serif text-xl font-semibold">{point.title}</dt>
                <dd className="mt-1 text-ink-muted">{point.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="datos-previstos" className="mt-14">
          <h2 id="datos-previstos" className="flex flex-wrap items-center gap-3 text-3xl">
            Información que se pedirá <PendingTag label="En definición" />
          </h2>
          <p className="mt-3 text-ink-muted">
            La lista definitiva de campos, y cuáles serán obligatorios, todavía está pendiente de aprobación.
          </p>
          <ul className="mt-5 list-disc space-y-1.5 pl-5 marker:text-violet-700">
            {plannedFields.map((field) => (
              <li key={field}>{field}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="despues" className="mt-14">
          <h2 id="despues" className="text-3xl">
            Después del envío
          </h2>
          <p className="mt-3 text-ink-muted">
            Está previsto que cada presentación reciba un código de seguimiento para consultar su estado (por ejemplo,
            recibida, en revisión, con pedido de información adicional o rechazada) sin exponer detalles del caso.
          </p>
          <p className="mt-3 text-ink-muted">
            Podés leer los <Link href="/criterios">criterios editoriales provisionales</Link> que guiarán la revisión.
          </p>
        </section>
      </PageContainer>
    </>
  );
}
