"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { mainNav, reportNavItem } from "@/lib/site";
import { buttonClasses } from "@/components/ui/button";

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MainNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const linkClass = (href: string) =>
    `transition-colors hover:text-violet-700 ${
      isCurrent(pathname, href)
        ? "text-violet-700 underline decoration-violet-700 underline-offset-8"
        : "text-ink no-underline"
    }`;

  return (
    <nav aria-label="Navegación principal">
      {/* Escritorio */}
      <ul className="hidden items-center gap-7 text-[0.9375rem] lg:flex">
        {mainNav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={linkClass(item.href)}
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={reportNavItem.href}
            className={buttonClasses("secondary", "min-h-10 px-5 py-2")}
            aria-current={isCurrent(pathname, reportNavItem.href) ? "page" : undefined}
          >
            {reportNavItem.label}
          </Link>
        </li>
      </ul>

      {/* Móvil y tablet */}
      <button
        ref={toggleRef}
        type="button"
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong px-4 text-[0.9375rem] font-semibold text-ink hover:bg-lavender-50 lg:hidden"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
          {open ? <path d="M4 4l10 10M14 4L4 14" /> : <path d="M2.5 5h13M2.5 9h13M2.5 13h13" />}
        </svg>
        Menú
      </button>

      <div id={menuId} hidden={!open} className="absolute inset-x-0 top-full z-20 border-b border-beige-200 bg-cream lg:hidden">
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
          {[...mainNav, reportNavItem].map((item) => (
            <li key={item.href} className="border-b border-beige-200 last:border-b-0">
              <Link
                href={item.href}
                className={`block py-3.5 text-lg ${linkClass(item.href)}`}
                onClick={() => setOpen(false)}
                aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
