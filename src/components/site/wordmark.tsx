import Link from "next/link";
import { siteConfig } from "@/lib/site";

// Presentación tipográfica provisional del nombre. No es un logo definitivo.
export function Wordmark() {
  return (
    <Link
      href="/"
      className="group inline-flex flex-col leading-none text-ink no-underline hover:text-ink"
    >
      <span className="font-serif text-[1.65rem] font-medium tracking-[0.01em]">
        Huella <span className="italic text-violet-700">Pública</span>
      </span>
      <span className="mt-1 text-[0.7rem] font-semibold tracking-[0.18em] text-ink-muted uppercase">
        {siteConfig.tagline}
      </span>
      <span className="sr-only"> (ir al inicio)</span>
    </Link>
  );
}
