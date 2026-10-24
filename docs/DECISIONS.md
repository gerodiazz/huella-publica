# Huella Pública — Decisiones

> Estado al 2026-10-20 (actualizado al cierre de la etapa 1). Las decisiones «Propuestas» no se implementan hasta que la responsable las apruebe.
> Leyenda: ✅ Confirmada · 🟡 Propuesta (requiere aprobación) · 🔴 Pendiente (requiere definición de la responsable o asesoría legal)

## 1. Decisiones confirmadas

| ID | Decisión | Fuente |
|---|---|---|
| C-01 | Stack: Next.js App Router, React, TypeScript estricto, Tailwind CSS, Supabase (PostgreSQL, Auth, Storage privado), Vercel, Git/GitHub | Usuario, `CLAUDE.md §4` |
| C-02 | Ningún reporte se publica automáticamente; recepción, revisión y publicación son estados distintos | PDF §6.2, RM §5, `CLAUDE.md §6` |
| C-03 | Separación de reportes privados, evidencias, verificación editorial y registros publicables | Usuario, `CLAUDE.md §7` |
| C-04 | Sin puntajes, rankings, perfiles psicológicos ni etiquetas automáticas de personas | RM §7 |
| C-05 | Sin comunidad participativa en v1 | RM §10 |
| C-06 | Logo definitivo después de la web; se presentan propuestas visuales antes de elegir | RM §1 |
| C-07 | Registros nominales reales deshabilitados hasta controles técnicos, procedimiento editorial y revisión jurídica aprobados | PDF §8, RM §14, `CLAUDE.md §6.10` |
| C-08 | Sin IA para clasificar personas; sin microservicios | `CLAUDE.md §4` |
| C-09 | Desarrollo por las 8 etapas de `CLAUDE.md §10`, una por vez, con aprobación entre etapas | `CLAUDE.md §10` |
| C-10 | Datos de desarrollo siempre ficticios y marcados como tales | `CLAUDE.md §6.12` |
| C-11 | Paleta de Milena (lavanda/violeta claro, beige/crema, neutros cálidos); resuelve D-01. Tokens en `docs/DESIGN_SYSTEM.md` | Usuario, etapa 1 |
| C-12 | Sitio no indexable (meta `noindex`, `X-Robots-Tag`, `robots.txt`) hasta aprobación de lanzamiento | Usuario, etapa 1 |
| C-13 | Alcance de páginas de la etapa 1: inicio, `/buscar`, `/reportar`, `/criterios`, `/recursos`, `/preguntas-frecuentes`, `/contacto` | Usuario, etapa 1 |

## 2. Propuestas técnicas (requieren aprobación)

| ID | Propuesta | Motivo |
|---|---|---|
| P-01 | Monolito Next.js con route groups `(public)` y `(admin)`; lógica sensible solo en servidor (`server-only`) | Simplicidad; un único despliegue en Vercel |
| P-02 | Esquemas PostgreSQL separados por dominio: `intake`, `evidence`, `editorial`, `publication`, `content`, `feedback`, `audit` (detalle en `ARCHITECTURE.md`) | Aislar permisos y facilitar RLS y retención por dominio |
| P-03 | El rol `anon` **no** tiene acceso directo a tablas privadas; el público solo lee vistas/funciones del esquema `publication` y `content` | Mínimo privilegio |
| P-04 | Publicar = crear una **instantánea versionada** en `publication`, separada del expediente; retirar = despublicar + invalidar caché | Que la ficha nunca lea datos del expediente; historial auditable |
| P-05 | Doble interruptor para registros nominales: bandera en base de datos + variable de entorno; ambos en «off» por defecto | Defensa en profundidad para C-07 |
| P-06 | Código de seguimiento aleatorio ≥128 bits, mostrado una sola vez, guardado como hash (HMAC con secreto del servidor); respuesta de estado genérica y limitada por frecuencia | Anti-enumeración, anti-fuerza bruta |
| P-07 | Evidencias en bucket privado, nombres UUID, acceso solo con URLs firmadas de corta duración para roles autorizados; eliminación de metadatos EXIF al recibir | Privacidad de remitentes y terceros |
| P-08 | Separación de funciones: quien verifica no puede ser quien aprueba la publicación (regla de «cuatro ojos») | Reducir errores de atribución y abuso interno |
| P-09 | MFA obligatorio para cuentas del panel | Cuentas de alto impacto |
| P-10 | Validación con Zod; Playwright + axe para e2e y accesibilidad (**aplicado en etapa 1**); Vitest para unitarias cuando haya lógica (requiere Node ≥22); pruebas SQL para RLS | Cobertura de flujos críticos |
| P-11 | Fichas públicas con `noindex` hasta decisión explícita (ver D-16) | Reducir daño por indexación de errores |
| P-12 | No obtener automáticamente desde el servidor los enlaces reportados en v1 (sin scraping ni previsualizaciones) | Evitar SSRF y tratamiento adicional de datos |
| P-13 | Node.js 22 o 24 LTS recomendado; TypeScript 5.9.3 (no 7.x) y ESLint 9 (no 10, incompatible con `eslint-plugin-react`). **Aplicado en etapa 1**, salvo la actualización de Node local (20.11.1), que queda a cargo del usuario | Next.js 16 requiere Node ≥20.9; Vitest 5 requiere Node ≥22 |
| P-14 | Idioma de la interfaz: español rioplatense; código e identificadores en inglés | Convención habitual y legibilidad |

## 3. Decisiones pendientes

| ID | Pregunta | Opciones / propuesta | Quién decide | Bloquea |
|---|---|---|---|---|
| D-01 | ~~Paleta~~ | **Resuelta** por C-11 | — | — |
| D-02 | Campos obligatorios del reporte (PDF exige captura completa, usuario y red; Milena admite «evidencia disponible») | Propuesta: obligatorios enlace, plataforma, nombre/usuario atribuido y al menos una captura; el resto opcional | Milena + legal | Etapa 4 |
| D-03 | ¿Se puede buscar por nombre si el nombre solo se muestra «cuando esté jurídicamente justificado»? ¿Qué datos exactos muestra cada ficha? | Requiere asesoría legal | Legal + Milena | Etapa 6 |
| D-04 | ¿Puede una ficha pública mostrar el estado «en revisión»? | Propuesta: solo para fichas ya publicadas bajo revisión por reclamo, con aviso; nunca reportes nuevos | Milena + legal | Etapas 5–6 |
| D-05 | ¿Qué teléfono se publica? (riesgo si es personal) | Propuesta: línea institucional dedicada | Milena | Etapa 1 (texto) / 7 |
| D-06 | Contacto del remitente y notificaciones | Propuesta v1: solo código de seguimiento; email opcional únicamente si se piden notificaciones, con retención acotada | Milena + legal | Etapa 4 |
| D-07 | Almacén para límites de frecuencia (Postgres vs. servicio externo tipo Redis) y anti-bots (p. ej. CAPTCHA) | Propuesta: comenzar con Postgres; evaluar anti-bot externo | Equipo técnico + Milena | Etapa 4 |
| D-08 | Región de Supabase/Vercel y transferencia internacional de datos (Ley 25.326) | Requiere asesoría legal; Supabase ofrece región São Paulo | Legal + Milena | Conexión de servicios |
| D-09 | Roles y autoridad editorial: ¿quién aprueba publicaciones? | Propuesta: `admin`, `editor` (aprueba/publica), `verificador`, `moderador_contenidos`, `auditor` (solo lectura) | Milena | Etapa 2 |
| D-10 | Retención y eliminación de reportes rechazados, evidencias, contactos, registros retirados y backups | Requiere plazos definidos + asesoría legal | Milena + legal | Etapa 2 |
| D-10b | Plazos de revisión, respuesta a reclamos y retirada | — | Milena + legal | Etapa 5 |
| D-11 | Moderación y anti-fraude de opiniones (¿requiere cuenta, email, CAPTCHA?) | Propuesta: anónimas, moderadas antes de publicarse, con anti-bot | Milena | Etapa 7 |
| D-12 | Rama principal: el repo está en `master`, el entorno indica `main` | Propuesta: renombrar a `main` antes del primer commit | Usuario | Etapa 1 |
| D-13 | ~~Plantillas de npm init y `.idea/`~~ | **Resuelta en etapa 1** (opción conservadora): `.idea/` retirado del índice e ignorado (archivos conservados en disco); `index.js` eliminado; `package.json` reemplazado | — | — |
| D-14 | Criterios adicionales al nombre para distinguir homónimos (usuario de red, otros) | Propuesta: identidad anclada en la cuenta de origen verificada, nunca en datos privados (ciudad, trabajo) | Milena + legal | Etapa 6 |
| D-15 | Evidencia mínima para atribuir una publicación a una persona | Requiere criterio editorial + legal | Milena + legal | Etapa 5 |
| D-16 | Indexación de fichas por buscadores (SEO) | Propuesta: `noindex` por defecto | Milena + legal | Etapa 6 |
| D-17 | ¿Se notifica o da derecho a réplica a la persona identificada antes de publicar? | No figura en las fuentes; consulta legal | Legal + Milena | Etapa 5 |
| D-18 | Búsqueda avanzada en v1 | Propuesta: no en v1 | Milena | Etapa 6 |
| D-19 | Capturas con terceros, menores o datos privados: ¿difuminado obligatorio? | Propuesta: difuminar todo dato de terceros y excluir contenidos con menores | Milena + legal | Etapa 5 |
| D-20 | Estados de cierre del reporte (p. ej. «publicado», «cerrado sin publicar», «archivado») y su redacción pública | — | Milena | Etapa 4 |
| D-21 | Propuesta técnica de costos, tiempos y recursos (pedida en RM §14) | Elaborar como documento aparte cuando se apruebe la arquitectura | Equipo + Milena | — |
| D-22 | Orden de etapas: el PDF ubica la revisión jurídica antes del desarrollo | Propuesta: desarrollar con publicación real apagada; la revisión jurídica bloquea la habilitación | Milena | General |
| D-23 | Archivo de la fuente original (p. ej. guardar una copia/hash para detectar alteraciones o eliminación) | Implica tratamiento adicional; consulta legal | Milena + legal | Etapa 5 |
