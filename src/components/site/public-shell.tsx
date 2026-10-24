import type { ReactNode } from "react";
import { DevelopmentBanner } from "@/components/site/development-banner";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export function PublicShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#contenido"
        className="sr-only z-50 rounded-md bg-violet-700 px-4 py-2 text-white no-underline focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:text-white"
      >
        Saltar al contenido
      </a>
      <DevelopmentBanner />
      <SiteHeader />
      <main id="contenido" tabIndex={-1} className="flex-1 focus:outline-none">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
