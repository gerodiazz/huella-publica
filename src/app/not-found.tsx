import type { Metadata } from "next";
import { PublicShell } from "@/components/site/public-shell";
import { ButtonLink } from "@/components/ui/button";
import { PageContainer } from "@/components/ui/page-container";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <PublicShell>
      <PageContainer width="text" className="py-24">
        <p className="text-sm font-semibold tracking-[0.12em] text-violet-700 uppercase">Error 404</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">No encontramos esta página</h1>
        <p className="mt-4 text-lg text-ink-muted">
          Es posible que la dirección esté mal escrita o que la página todavía no exista en esta versión preliminar.
        </p>
        <ButtonLink href="/" className="mt-8">
          Volver al inicio
        </ButtonLink>
      </PageContainer>
    </PublicShell>
  );
}
