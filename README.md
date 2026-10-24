# Huella Pública

> «Lo que publicamos, deja huella.»

Plataforma argentina en desarrollo para visibilizar, mediante un proceso editorial responsable, publicaciones públicas verificadas que contengan expresiones machistas, misóginas o que normalicen la violencia contra las mujeres.

**Estado:** etapa 1 (estructura base y diseño visual). El sitio es **solamente estático**: no tiene base de datos, autenticación, formularios operativos ni registros de personas. Ver `docs/IMPLEMENTATION_STATUS.md`.

## Requisitos

- Node.js ≥ 20.9 (recomendado: 22 o 24 LTS; Node 20 ya no tiene soporte).
- npm 10 o superior.

## Instalación

```bash
npm install
npx playwright install chromium   # solo para las pruebas e2e
```

No hace falta configurar variables de entorno en esta etapa (por eso todavía no existe `.env.example`).

## Ejecución

```bash
npm run dev     # servidor de desarrollo en http://localhost:3000
npm run build   # build de producción
npm run start   # sirve el build en http://localhost:3000
```

## Verificaciones

```bash
npm run lint        # ESLint (configuración de Next.js)
npm run typecheck   # TypeScript en modo estricto
npm run build
npm run test:e2e    # Playwright: requiere haber ejecutado `npm run build`
npm run check       # todo lo anterior en orden
```

Las pruebas e2e levantan el build de producción en el puerto 3100 y verifican, en escritorio y móvil: carga de cada ruta, título y encabezado únicos, `noindex`, cabeceras de seguridad, accesibilidad automática (axe, WCAG A/AA, impacto serio o crítico), ausencia de desplazamiento horizontal, enlace «Saltar al contenido», menú móvil por teclado, buscador deshabilitado, ausencia de campos en `/reportar`, `robots.txt` y página 404.

## Estructura

```
src/
  app/
    layout.tsx            # HTML raíz, fuentes, metadatos globales (noindex)
    globals.css           # tokens de diseño (Tailwind v4)
    robots.ts             # bloquea el rastreo
    not-found.tsx
    (public)/             # páginas públicas con encabezado y pie
      page.tsx  buscar/  reportar/  criterios/  recursos/  preguntas-frecuentes/  contacto/
  components/
    ui/                   # primitivas: Button, PageContainer, SectionHeading, Notice, PendingTag
    site/                 # SiteHeader, MainNav, SiteFooter, SearchForm, PrincipleList, etc.
  content/                # textos compartidos (principios editoriales provisionales)
  lib/site.ts             # configuración del sitio y navegación
tests/e2e/                # pruebas Playwright
docs/                     # especificación, decisiones, arquitectura, seguridad, diseño, estado
```

## Despliegue

Previsto en Vercel. **Todavía no hay ningún despliegue ni servicio externo conectado.** El sitio envía `X-Robots-Tag: noindex` y `robots.txt` bloquea el rastreo hasta que se apruebe el lanzamiento.

## Documentación

- `CLAUDE.md`: instrucciones permanentes del proyecto.
- `docs/PROJECT_SPEC.md`, `docs/DECISIONS.md`, `docs/ARCHITECTURE.md`, `docs/SECURITY.md`, `docs/DESIGN_SYSTEM.md`, `docs/IMPLEMENTATION_STATUS.md`.
