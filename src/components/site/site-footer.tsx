import Link from "next/link";
import { mainNav, reportNavItem, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-beige-200 bg-beige-100">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr]">
        <div className="max-w-md">
          <p className="font-serif text-2xl">
            Huella <span className="italic text-violet-700">Pública</span>
          </p>
          <p className="mt-1 text-sm tracking-wide text-ink-muted">{siteConfig.tagline}</p>
          <p className="mt-6 text-[0.9375rem] text-ink-muted">
            Huella Pública no es un registro oficial, no reemplaza a la Justicia, no determina responsabilidades penales ni
            diagnostica personalidades.
          </p>
        </div>

        <nav aria-label="Navegación del pie de página">
          <ul className="grid gap-2.5 text-[0.9375rem] sm:grid-cols-2 md:grid-cols-1">
            {[...mainNav, reportNavItem].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink no-underline hover:text-violet-700 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-beige-200">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm text-ink-muted sm:px-8">
          Versión preliminar en desarrollo. Los textos son provisionales y están pendientes de revisión editorial y jurídica.
        </p>
      </div>
    </footer>
  );
}
