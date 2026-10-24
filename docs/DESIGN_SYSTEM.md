# Huella Pública — Sistema visual (etapa 1)

> Estado: **provisional v0.1 (2026-10-20)**. Los tokens están definidos en `src/app/globals.css` (`@theme` de Tailwind CSS v4) y pueden ajustarse sin tocar componentes.

## 1. Dirección

Editorial, minimalista, elegante, delicada, profesional y confiable (RM §1). Se sigue la paleta de Milena (lavanda, beige, neutros cálidos), confirmada por el usuario para la etapa 1 (resuelve `D-01`). La paleta del PDF (verde oscuro) queda descartada salvo nueva indicación.

Se evita: estética SaaS/dashboard, fondos oscuros, neones, gradientes llamativos, exceso de tarjetas y sombras, iconografía policial o sensacionalista, contadores y rankings.

## 2. Color

| Token | Hex | Uso |
|---|---|---|
| `cream` | `#FBF8F3` | Fondo general |
| `beige-100` | `#F2EBE0` | Superficies cálidas (pie, llamado a enviar, avisos pendientes) |
| `beige-200` | `#E6DCCD` | Filetes y divisores (decorativos) |
| `lavender-50` | `#F6F3FA` | Superficie del buscador, avisos informativos, degradé suave de cabecera |
| `lavender-100` | `#ECE6F4` | Franja de «sitio en desarrollo» |
| `lavender-200` | `#DDD3EC` | Bordes de superficies lavanda; botón deshabilitado |
| `lavender-300` | `#C9BDE0` | Subrayado de enlaces (decorativo) |
| `ink` | `#2A2531` | Texto principal |
| `ink-muted` | `#5D5666` | Texto secundario |
| `violet-700` | `#5A4785` | Acento: enlaces, botón principal, foco |
| `violet-800` | `#463768` | Estados hover |
| `line-strong` | `#8E869A` | Bordes de campos y etiquetas (componente no textual) |

### Contrastes medidos (WCAG 2.x)

| Combinación | Ratio | Requisito |
|---|---|---|
| `ink` sobre `cream` / `beige-100` / `lavender-100` | 14,08 / 12,60 / 12,21 | AA texto ≥ 4,5 ✔ |
| `ink-muted` sobre `cream` / `beige-100` / `lavender-100` | 6,63 / 5,93 / 5,75 | ✔ |
| `violet-700` sobre `cream` / `beige-100` | 7,41 / 6,63 | ✔ |
| Blanco sobre `violet-700` (botón) | 7,85 | ✔ |
| `line-strong` sobre blanco / `cream` (bordes de campos) | 3,48 / 3,29 | No textual ≥ 3 ✔ |
| Contorno de foco `violet-700` sobre `cream` | 7,41 | ✔ |

`beige-200` y `lavender-300` son solo decorativos (filetes, subrayados) y no transmiten información.

## 3. Tipografía

- **Títulos:** Cormorant Garamond (500/600, normal e itálica). Serif de inspiración editorial y delicada; se usa solo en tamaños ≥ 20 px.
- **Cuerpo, navegación y formularios:** Source Sans 3. Alta legibilidad en pantalla.
- Ambas se cargan con `next/font/google`: se descargan en el build y se sirven desde el propio dominio (sin solicitudes a Google en tiempo de ejecución, compatible con la CSP `font-src 'self'`), con `display: swap`.
- Escala: cuerpo 17 px / 1,65; H1 42–56 px; H2 30–36 px; H3 24 px; metadatos 14 px; antetítulos en versalitas con espaciado.

## 4. Composición y componentes

- Ancho máximo 1152 px (`max-w-6xl`) para secciones, 768 px (`max-w-3xl`) para texto largo; márgenes laterales de 20–32 px.
- Separación por filetes finos en lugar de tarjetas; radios de 4–12 px; sin sombras.
- Botones en forma de píldora, altura mínima de 44 px (objetivo táctil), variantes primaria, secundaria y discreta.
- Nombre del sitio: **presentación tipográfica provisional** («Huella *Pública*» con el lema en versalitas). No es un logo.
- Iconografía mínima en SVG en línea (menú, información, desplegables), sin librerías.
- Animaciones: solo transiciones de color y el giro del ícono de las preguntas frecuentes; desactivadas con `prefers-reduced-motion`.

## 5. Componentes creados

`SiteHeader`, `MainNav` (cliente: menú móvil con `aria-expanded`, cierre con Escape y retorno del foco, `aria-current`), `SiteFooter`, `Wordmark`, `DevelopmentBanner`, `PublicShell` (incluye «Saltar al contenido»), `PageIntro`, `PageContainer`, `SectionHeading`, `Button`/`ButtonLink`, `Notice`, `PendingTag`, `SearchForm` (solo visual, deshabilitado), `PrincipleList`.

## 6. Pendiente

- Validar la paleta y la tipografía con Milena sobre el sitio funcionando.
- Logo e identidad definitiva (posterior, según RM §1).
- Imagen para redes sociales (Open Graph) e ícono del sitio (favicon): no se crearon para no anticipar la identidad.
