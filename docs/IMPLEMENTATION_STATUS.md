# Huella Pública — Estado de implementación

> Última actualización: 2026-10-20

## Etapa 0 — Análisis y planificación ✅

Fuentes analizadas y documentos base creados (`PROJECT_SPEC.md`, `DECISIONS.md`, `ARCHITECTURE.md`, `SECURITY.md`).

## Etapa 1 — Estructura base y diseño visual ✅ (implementada; pendiente de revisión del usuario)

El alcance aprobado por el usuario para esta etapa reemplazó al propuesto en la etapa 0: siete páginas públicas (inicio, `/buscar`, `/reportar`, `/criterios`, `/recursos`, `/preguntas-frecuentes`, `/contacto`) y paleta de Milena sin página de propuestas alternativas.

### Criterios de aceptación

| # | Criterio | Estado | Evidencia |
|---|---|---|---|
| 1 | Next.js App Router + React + TypeScript `strict` + Tailwind, versiones fijadas | ✔ | Next 16.4.2, React 19.3.1, TypeScript 5.9.3, Tailwind 4.3.3, ESLint 9.39.5 (`package.json`, versiones exactas) |
| 2 | `lint`, `typecheck` y `build` sin errores | ✔ | Ejecutados el 2026-10-20: 0 errores, 0 advertencias; 9 rutas estáticas generadas |
| 3 | Pruebas mínimas | ✔ | Playwright: 54 pruebas pasadas, 2 omitidas a propósito (aplican a un solo viewport), en escritorio y Pixel 7. Sin pruebas unitarias: no hay lógica que probar todavía (ver «Limitaciones») |
| 4 | Estructura de carpetas | ✔ | `src/app/(public)`, `src/components/{ui,site}`, `src/content`, `src/lib`, `tests/e2e`. Panel no creado (etapa 3) |
| 5 | Inicio con propósito, buscador visual, proceso, principios, acceso a envío, recursos/contacto, pie | ✔ | `src/app/(public)/page.tsx` |
| 6 | Sistema visual documentado | ✔ | `docs/DESIGN_SYSTEM.md`, tokens en `src/app/globals.css` |
| 7 | Accesibilidad básica | ✔ (automatizada + revisión visual) | axe sin violaciones serias/críticas en las 7 rutas × 2 viewports; skip link, foco visible, `lang="es-AR"`, un único `h1`, menú móvil con teclado, contraste AA medido, sin scroll horizontal a 412 px |
| 8 | Seguridad base | ✔ (no es una auditoría) | Cabeceras CSP, `X-Frame-Options`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`, COOP, `X-Robots-Tag`; `poweredByHeader: false`; `robots.txt` bloquea todo; meta `noindex`; `.gitignore` con `.env*` |
| 9 | README | ✔ | `README.md` |
| 10 | Git | Parcial | `.idea/` retirado del índice (los archivos siguen en disco) e ignorado; `index.js` de plantilla eliminado. Rama y commit: pendientes de indicación |

### Qué es exclusivamente estático

Todo. No hay base de datos, API, Server Actions, autenticación, almacenamiento, formularios operativos ni variables de entorno. El buscador está deshabilitado (`fieldset disabled`) y `/reportar` no contiene campos. No existen registros de personas, ni reales ni ficticios.

### Limitaciones conocidas

- La CSP admite `'unsafe-inline'` en `script-src` porque Next.js inyecta scripts en línea; una CSP con nonces se evaluará en la etapa 8.
- `npm audit` informa 5 vulnerabilidades altas en `braces`, dependencia **solo de desarrollo** (cadena de ESLint). Producción: 0. Se resolverá cuando la cadena publique una versión corregida; no se forzó `npm audit fix --force` porque introduce cambios incompatibles.
- Node local 20.11.1: funciona con Next 16 (requiere ≥20.9), pero Node 20 ya no tiene soporte y Vitest 5 requiere Node ≥22. Por eso no se agregó Vitest en esta etapa.
- Accesibilidad verificada con herramientas automáticas y revisión visual por capturas; no se hizo prueba con lectores de pantalla reales.
- Sin favicon ni imagen Open Graph (dependen de la identidad visual definitiva).
- Los textos son provisionales y no fueron revisados por Milena ni por asesoría legal.
- La revisión de navegación y responsive se hizo en Chromium (escritorio 1280–1366 px y Pixel 7); no se probaron Firefox ni Safari.

## Etapas 2–8

No iniciadas. Ver secuencia en `CLAUDE.md §10`.
