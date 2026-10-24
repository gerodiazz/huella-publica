# Huella Pública — Arquitectura inicial (propuesta)

> Estado: **propuesta v0.1 (2026-10-20)**. Implementado en la etapa 1: solo la estructura `src/app/(public)`, `src/components` y las páginas estáticas. Nada del backend existe todavía.

## 1. Visión general

```
Navegador ──HTTPS──▶ Vercel (Next.js App Router)
                       ├─ (public)  páginas públicas: SSR/ISR, solo lectura
                       ├─ (admin)   /panel: sesión Supabase Auth + MFA + rol
                       └─ Server Actions / Route Handlers (server-only)
                              │  clave anon + sesión del usuario (RLS)
                              │  clave service_role SOLO en módulos server-only puntuales
                              ▼
                     Supabase
                       ├─ PostgreSQL (esquemas por dominio + RLS)
                       ├─ Auth (solo personal autorizado; sin registro público)
                       └─ Storage (bucket privado "evidence"; bucket público solo para imágenes ya publicadas o educativas)
```

Principios: monolito modular, mínimo privilegio, autorización verificada en servidor y en base de datos (RLS), el público nunca lee tablas privadas.

## 2. Dominios de datos (esquemas PostgreSQL propuestos)

| Esquema | Contenido | Quién accede |
|---|---|---|
| `intake` | Reportes entrantes, datos del remitente (separados en tabla propia), hash del código de seguimiento, historial de estados | Inserción solo vía función controlada; lectura por roles editoriales |
| `evidence` | Metadatos de archivos (ruta interna, tipo verificado, tamaño, hash) | Roles editoriales con URL firmada temporal |
| `editorial` | Comprobaciones (fuente, identidad, contexto), notas internas, decisiones, solicitudes de información, reclamos/rectificaciones | Roles editoriales según permiso |
| `publication` | Instantáneas aprobadas y versionadas de fichas; estado publicado/retirado; bandera global de habilitación | Público: solo vista de registros publicados y habilitados |
| `content` | Artículos, recursos, directorio de ayuda, FAQ, páginas institucionales | Público: lectura de publicados; edición por `moderador_contenidos` |
| `feedback` | Opiniones (1–5 estrellas) y su moderación | Público: insertar vía función + leer aprobadas |
| `audit` | Registro inmutable de acciones (quién, qué, cuándo, sobre qué id) | Solo `admin`/`auditor`; sin borrado |
| `stats` | Contadores agregados (sin términos de búsqueda en claro) | Panel |

Detalle de entidades y clasificación de datos: se documentará en `docs/DATA_MODEL.md` en la etapa 2.

## 3. Flujos principales

**Reporte:** formulario → Server Action → validación Zod + límites de frecuencia + verificación de archivo (firma real, extensión, tamaño) + limpieza de EXIF → inserción en `intake` y `evidence` → se genera código de seguimiento (se muestra una vez, se guarda su HMAC) → estado `recibido`.

**Seguimiento:** código → HMAC → consulta → respuesta con solo el estado público genérico. Límite por IP/huella y respuesta uniforme para códigos inexistentes.

**Verificación:** `verificador` registra comprobaciones por separado (fuente, identidad, contexto) → `editor` distinto aprueba/rechaza/pide información → toda acción va a `audit`.

**Publicación:** aprobación → se crea instantánea en `publication` (solo campos publicables, imagen redactada) → visible únicamente si la bandera global y la variable de entorno lo permiten → revalidación de caché.

**Rectificación/retirada:** solicitud pública → `editorial` → decisión registrada → nueva versión o retiro + invalidación de caché.

## 4. Estructura de carpetas propuesta

```
huella_publica/
├─ CLAUDE.md
├─ README.md
├─ .env.example              # solo nombres de variables, sin valores
├─ docs/
├─ public/                   # estáticos no sensibles
├─ src/
│  ├─ app/
│  │  ├─ (public)/
│  │  │  ├─ page.tsx                 # inicio + buscador
│  │  │  ├─ buscar/                  # resultados
│  │  │  ├─ registros/[id]/          # ficha
│  │  │  ├─ reportar/                # formulario privado
│  │  │  ├─ seguimiento/             # consulta de estado
│  │  │  ├─ rectificacion/           # corrección, reclamo, retirada
│  │  │  ├─ sobre/  biblioteca/  recursos/  ayuda/
│  │  │  ├─ preguntas-frecuentes/  contacto/  opiniones/
│  │  │  ├─ criterios/                # criterios editoriales (creada en etapa 1)
│  │  │  └─ privacidad/  terminos/    # marcados «pendiente de revisión legal»
│  │  ├─ (admin)/panel/
│  │  │  ├─ reportes/  verificacion/  publicaciones/  rectificaciones/
│  │  │  ├─ contenidos/  opiniones/  estadisticas/  usuarios/  auditoria/
│  │  ├─ layout.tsx  not-found.tsx  error.tsx
│  ├─ components/
│  │  ├─ ui/          # primitivas accesibles
│  │  ├─ public/
│  │  └─ admin/
│  ├─ server/         # acceso a datos y acciones; todo con `import "server-only"`
│  │  ├─ auth/  reports/  editorial/  publication/  content/  feedback/  audit/
│  ├─ lib/
│  │  ├─ supabase/    # clientes browser/server; cliente admin solo server-only
│  │  ├─ validation/  # esquemas Zod compartidos
│  │  ├─ security/    # rate limit, tokens, verificación de archivos
│  │  └─ editorial/   # máquina de estados del reporte
│  └─ styles/
├─ supabase/
│  ├─ migrations/     # versionadas
│  ├─ seed.sql        # solo datos ficticios, marcados
│  └─ tests/          # pruebas de RLS
└─ tests/
   ├─ unit/  integration/  e2e/
```

## 5. Configuración y secretos

- Variables en `.env.local` (ignorado por git) y en el panel de Vercel; `.env.example` sin valores.
- `SUPABASE_SERVICE_ROLE_KEY` y el secreto HMAC nunca con prefijo `NEXT_PUBLIC_`.
- No se conectan servicios reales hasta que se apruebe (D-08).

## 6. Fuera de alcance de esta arquitectura

Microservicios, IA de clasificación, comunidad, scraping de enlaces, aplicaciones móviles nativas.
