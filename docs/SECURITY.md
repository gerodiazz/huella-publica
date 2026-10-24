# Huella Pública — Riesgos de seguridad, privacidad y revisión legal

> Estado: **análisis preliminar v0.1 (2026-10-20)**. Ningún control está implementado todavía; la columna «Control propuesto» describe intenciones, no medidas vigentes. Las referencias normativas son orientativas y **deben ser validadas por un/a profesional del derecho en Argentina**.

## 1. Activos sensibles

1. Identidad y contacto de las personas que reportan.
2. Evidencias (capturas) que pueden contener datos de terceros, menores o metadatos de ubicación.
3. Notas internas y decisiones editoriales.
4. Asociación nombre ↔ publicación (impacto en honor e imagen de la persona identificada).
5. Términos de búsqueda (revelan a quién investiga cada usuaria).
6. Cuentas del panel administrativo.

## 2. Riesgos de seguridad y privacidad

| ID | Riesgo | Impacto | Control propuesto | Etapa |
|---|---|---|---|---|
| R-01 | Atribución errónea por homónimos o cuentas falsas | Muy alto (daño a un tercero, responsabilidad) | Identidad anclada en cuenta de origen verificada; checklist separada; regla de cuatro ojos (P-08); advertencias de homónimos | 5–6 |
| R-02 | Capturas fabricadas o manipuladas | Muy alto | Exigir enlace original; comprobación manual de fuente; no publicar si la fuente no es verificable | 5 |
| R-03 | Uso de la plataforma para escraches u hostigamiento coordinado | Muy alto | Sin datos de contacto ni privados en fichas; política de uso; sin comentarios públicos; mecanismo de retirada | 6–7 |
| R-04 | Reportes maliciosos/masivos contra una persona (abuso del canal) | Alto | Límites de frecuencia, anti-bot, detección de duplicados, revisión humana | 4 |
| R-05 | Desanonimización de remitentes | Alto | Datos del remitente en tabla separada, contacto opcional, eliminación de EXIF, sin datos del remitente en logs | 4 |
| R-06 | Filtración de evidencias | Alto | Bucket privado, URLs firmadas de corta duración, nombres no predecibles, sin URLs permanentes | 2–4 |
| R-07 | Enumeración/fuerza bruta de códigos de seguimiento | Medio | Códigos ≥128 bits, hash HMAC, rate limit, respuesta uniforme (P-06) | 4 |
| R-08 | Toma de cuentas del panel / abuso interno | Muy alto | MFA, roles mínimos, auditoría inmutable, revisión periódica de accesos | 3 |
| R-09 | Exposición de la clave `service_role` o RLS mal configurada | Crítico | Clave solo en módulos `server-only`; RLS en todas las tablas; pruebas automáticas de RLS por rol | 2 |
| R-10 | Archivos maliciosos (polyglots, SVG con scripts, tamaños excesivos) | Alto | Lista blanca (JPEG/PNG/WebP), verificación de firma real, límite de tamaño, recodificación de imágenes | 4 |
| R-11 | XSS en contenidos editoriales o educativos | Alto | Sin HTML libre; Markdown sanitizado; CSP | 7–8 |
| R-12 | Términos de búsqueda almacenados en claro (datos personales) | Medio | Métricas solo como contadores agregados; no registrar el término; sin analítica de terceros que lo capture | 6–7 |
| R-13 | Contenido retirado que persiste en caché, CDN, buscadores o backups | Alto | Revalidación al retirar; `noindex` por defecto (P-11); política de backups con plazos | 6, 8 |
| R-14 | SSRF o tratamiento extra al obtener enlaces automáticamente | Medio | No obtener enlaces del lado del servidor en v1 (P-12) | 4–5 |
| R-15 | Datos personales en logs, errores y herramientas de monitoreo | Medio | Redacción de campos sensibles; mensajes de error genéricos | 3–8 |
| R-16 | Spam y reseñas falsas en opiniones | Bajo-medio | Moderación previa, anti-bot, límites (D-11) | 7 |
| R-17 | Represalias contra remitentes si se filtra un expediente | Muy alto | Todo lo anterior + mínimo de datos + retención acotada (D-10) | 2–4 |
| R-18 | Contenido con menores o terceros no involucrados en capturas | Alto | Exclusión/difuminado (D-19) | 5 |
| R-19 | Publicación accidental de registros reales durante el desarrollo | Muy alto | Doble interruptor apagado (P-05); seeds solo ficticios | 2, 6 |

## 3. Riesgos legales (para revisión profesional)

Temas a revisar por un/a abogado/a en Argentina especializado/a en derecho digital, datos personales, honor e imagen y responsabilidad por contenidos (RM §11, PDF §8, §11):

- **Protección de datos personales** (Ley 25.326 y normativa de la AAIP): base legal del tratamiento de nombres asociados a publicaciones; posible inscripción de bases de datos; derechos de acceso, rectificación y supresión; transferencia internacional según región de alojamiento (D-08); posibles datos sensibles.
- **Honor, intimidad e imagen** (Código Civil y Comercial, derechos personalísimos): asociación pública de una persona con contenido calificado como machista o misógino; uso de capturas que incluyen la imagen de la persona.
- **Responsabilidad por contenidos** y procedimiento de retirada; diferencia entre reproducir un contenido y emitir una valoración editorial.
- **Libertad de expresión e interés público** como posible fundamento, y sus límites cuando se trata de particulares (no figuras públicas).
- **Derechos de autor / términos de las plataformas** sobre la reproducción de capturas.
- **Menores de edad** en capturas o como personas identificadas.
- **Marco de violencia de género** (p. ej. Ley 26.485) para la redacción de la política editorial y de los recursos de ayuda.
- Textos a revisar: política editorial, términos y condiciones, política de privacidad, procedimiento de verificación, reclamos/rectificación/retirada, avisos en fichas y en resultados vacíos.

Mientras no exista esta revisión: los textos legales se publican como borradores marcados «pendiente de revisión profesional» y la publicación nominal real permanece deshabilitada.

## 4. Controles implementados

Ninguno todavía (etapa 0: planificación).
