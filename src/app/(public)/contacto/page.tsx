import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/site/page-intro";
import { PageContainer } from "@/components/ui/page-container";
import { PendingTag } from "@/components/ui/pending-tag";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Canales de contacto de Huella Pública, en definición.",
};

const channels = [
  {
    title: "Formulario de contacto",
    text: "Será el canal principal para consultas generales.",
  },
  {
    title: "Teléfono",
    text: "Está previsto un teléfono de contacto visible en el sitio.",
  },
  {
    title: "Correo electrónico",
    text: "Para consultas institucionales y de prensa.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contacto" title="Contacto">
        <p>Estamos definiendo los canales oficiales de comunicación de Huella Pública.</p>
      </PageIntro>

      <PageContainer width="text" className="py-14 sm:py-16">
        <section aria-labelledby="canales">
          <h2 id="canales" className="text-3xl">
            Canales previstos
          </h2>
          <ul className="mt-8 space-y-6">
            {channels.map((channel) => (
              <li key={channel.title} className="border-t border-beige-200 pt-5">
                <p className="flex flex-wrap items-center gap-3">
                  <span className="font-serif text-2xl">{channel.title}</span>
                  <PendingTag label="Pendiente de confirmar" />
                </p>
                <p className="mt-1 text-ink-muted">{channel.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-ink-muted">
            Ningún canal está habilitado todavía. Los datos se publicarán aquí cuando estén confirmados.
          </p>
        </section>

        <section aria-labelledby="otras-consultas" className="mt-16">
          <h2 id="otras-consultas" className="text-3xl">
            Otras consultas
          </h2>
          <ul className="mt-5 space-y-3">
            <li>
              Para enviar una publicación, conocé <Link href="/reportar">cómo funcionará el envío de información</Link>.
            </li>
            <li>
              Si un contenido te involucra, en el futuro vas a poder solicitar su corrección o retirada. Leé los{" "}
              <Link href="/criterios">criterios editoriales</Link>.
            </li>
            <li>
              Para dudas generales, revisá las <Link href="/preguntas-frecuentes">preguntas frecuentes</Link>.
            </li>
          </ul>
        </section>
      </PageContainer>
    </>
  );
}
