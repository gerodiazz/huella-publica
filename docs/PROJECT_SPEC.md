# Huella Pública — Especificación funcional consolidada

> Estado: **borrador v0.1 (2026-10-20)**, pendiente de aprobación por la responsable del proyecto.
> No constituye revisión ni aprobación legal. Los textos legales y editoriales definitivos requieren revisión profesional.

## 0. Fuentes y convenciones de procedencia

| Código | Fuente | Estado de lectura |
|---|---|---|
| `[PDF §n]` | `docs/proyecto-original.pdf` (Milena Cassini, 6 páginas) | Texto extraído completo y legible |
| `[RM §n]` | `docs/respuestas-milena.md` | Leído completo |
| `[CL §n]` | `CLAUDE.md` (instrucciones permanentes) | Leído completo |
| `[PROP]` | Propuesta técnica del equipo de desarrollo | **No es requisito**: requiere aprobación |
| `[PEND D-xx]` | Decisión pendiente registrada en `docs/DECISIONS.md` | — |

Se distinguen tres niveles: **requisito expreso** (aparece en una fuente), **propuesta técnica** (`[PROP]`) y **pendiente** (`[PEND]`).

## 1. Propósito y límites

- **RF-0.1** Plataforma argentina para recopilar, verificar y visibilizar publicaciones públicas de redes sociales con expresiones machistas, misóginas, sexualizantes, discriminatorias o que promuevan o normalicen la violencia hacia las mujeres. `[PDF §1]`
- **RF-0.2** Lema: «Lo que publicamos, deja huella». `[PDF §10]`
- **RF-0.3** Público principal: mujeres de Argentina que usan redes; secundario: sociedad general, instituciones educativas, organizaciones, profesionales. `[PDF §5]`
- **RF-0.4** No reemplaza a la Justicia, no determina responsabilidad penal, no diagnostica personalidades, no es registro oficial ni mecanismo de culpabilidad. `[PDF §1, §8]` `[CL §3]`
- **RF-0.5** No afirma que una persona ejerció violencia por una publicación; una publicación aislada no es prueba concluyente de la conducta integral. `[PDF §2, §4]`
- **RF-0.6** No debe funcionar como herramienta de escarnio, ataque, hostigamiento coordinado, represalias o campañas de contacto. `[PDF §7, §9]` `[RM §15]`
- **RF-0.7** Sin puntajes de peligrosidad, rankings de personas, perfiles psicológicos ni etiquetas automáticas. `[RM §7]` `[CL §6.7]`

## 2. Sitio público

### 2.1 Inicio y navegación
- **RF-1.1** Inicio con explicación breve del propósito. `[RM §2]`
- **RF-1.2** Buscador por nombre y apellido como función central y visible. `[PDF §1, §6.1]` `[RM §2]`
- **RF-1.3** Botón visible para enviar un reporte. `[RM §2]`
- **RF-1.4** Navegación simple, intuitiva y adaptable a móviles. `[RM §2, §7]`

### 2.2 Búsqueda y resultados
- **RF-2.1** Solo se muestran registros aprobados **y** habilitados para publicación. `[CL §5]` `[PDF §6.1]`
- **RF-2.2** Identificación con criterios adicionales al nombre para evitar homónimos y atribuciones incorrectas; advertir cuando existan homónimos. `[PDF §6.1]` `[RM §3]` — criterios concretos `[PEND D-14]`
- **RF-2.3** Mensaje sin resultados: «no se encontraron publicaciones verificadas en la plataforma»; no sugiere inexistencia de contenido problemático. `[RM §3]` `[CL §6.9]`
- **RF-2.4** Búsqueda avanzada por fecha, tipo o estado: *posible*, solo si es segura. `[RM §7]` `[PEND D-18]`
- **RF-2.5** Contenido de cada resultado (podrá incluir): nombre y apellido **cuando su publicación esté jurídicamente justificada**, usuario de la red, captura completa con contexto, enlace original, fecha, plataforma, explicación editorial breve, estado de verificación, fecha de revisión. `[PDF §6.4]` `[RM §3]` — conjunto exacto `[PEND D-03]`

### 2.3 Ficha individual
- **RF-3.1** Página individual por publicación aprobada. `[RM §7]`
- **RF-3.2** Tres secciones: **Publicación** (captura, fuente, fecha, contexto identificatorio), **Análisis** (por qué puede ser problemático), **Contexto** (respuestas, aclaraciones, rectificaciones). `[RM §4]`
- **RF-3.3** Separar hechos verificables de interpretación editorial; no imputar intenciones ni presentar opinión como conclusión judicial. `[PDF §2, §6.4]` `[RM §4]`
- **RF-3.4** Estados comprensibles que distingan: en revisión, fuente comprobada, contexto revisado, actualizado/rectificado. `[RM §4]` — ver contradicción C-04 `[PEND D-04]`

### 2.4 Secciones institucionales y educativas
- **RF-4.1** Sobre Huella Pública; Biblioteca educativa; Consejos y recursos; Preguntas frecuentes; Contacto; Directorio de ayuda con organizaciones oficiales y especializadas. `[RM §8]`
- **RF-4.2** Temas de la biblioteca: machismo y misoginia; normalización de la violencia; estereotipos de género; diferencia entre opinión controvertida y discurso que promueve/justifica violencia; señales de control y relaciones no saludables; límites y cómo pedir ayuda. `[RM §9]`
- **RF-4.3** Contenidos breves, accesibles, fundamentados; revisión por personas calificadas cuando corresponda; sin avales inventados. `[RM §9]`
- **RF-4.4** Teléfono de contacto visible en la web; canal principal: formulario. `[RM §5]` — qué número `[PEND D-05]`
- **RF-4.5** Publicación de reglas de funcionamiento, criterios de verificación y mecanismos de reclamo/rectificación (política editorial pública). `[PDF §7, §9]`

### 2.5 Opiniones sobre la plataforma
- **RF-5.1** Valoraciones de 1 a 5 estrellas sobre la experiencia con la plataforma. `[RM §8]`
- **RF-5.2** Medidas contra spam y reseñas falsas; moderación desde el panel. `[RM §8, §12]` — mecanismo `[PEND D-11]`
- **RF-5.3** No pueden usarse para acusar ni calificar personas. `[RM §8]`

### 2.6 Rectificación, revisión y retirada
- **RF-6.1** Procedimiento visible y accesible para que personas identificadas señalen errores, aporten contexto, pidan revisión, reclamen o soliciten retirada. `[PDF §8]` `[RM §7]`
- **RF-6.2** Las solicitudes quedan registradas y las gestionan personas autorizadas. `[CL §6.11]`
- **RF-6.3** Plazos de respuesta `[PEND D-10b]`.

### 2.7 Fuera de alcance v1
- **RF-7.1** Comunidad participativa: no en v1; eventual incorporación futura con reglas, moderación y privacidad. `[RM §10]`

## 3. Recepción y seguimiento de reportes

- **RF-8.1** Canal **privado** de recepción. `[PDF §6.2]` `[RM §5]`
- **RF-8.2** Campos (unión de fuentes; obligatoriedad `[PEND D-02]`, ver C-02):

| Campo | PDF §6.2 | RM §5 |
|---|---|---|
| Nombre y apellido atribuido | (como «nombre y usuario público de la cuenta») obligatorio | sí |
| Usuario público de la cuenta | obligatorio | no mencionado |
| Red social / plataforma | obligatorio | no mencionado (sí en `[CL §5]`) |
| Captura de pantalla | «completa», obligatoria | «captura o evidencia disponible» |
| Enlace original | obligatorio | sí |
| Fecha aproximada | si está disponible | si se conoce |
| Contexto adicional | si es necesario | sí |
| Explicación del remitente | — | sí |
| Contacto del remitente | — | opcional / mínimo necesario |

- **RF-8.3** Ningún envío se publica automáticamente; todos requieren revisión. `[PDF §6.2]` `[RM §5]` `[CL §6.1]`
- **RF-8.4** Identidad del remitente privada, tratada según política de privacidad clara. `[RM §5]`
- **RF-8.5** Confirmación de recepción y código de seguimiento no predecible. `[RM §7]` `[CL §5]`
- **RF-8.6** Estados consultables: recibido, en revisión, se necesita información adicional, rechazado, más estados de cierre a definir. `[RM §7]` `[PEND D-20]`
- **RF-8.7** La consulta de estado no expone información del expediente ni de terceros. `[CL §5]`
- **RF-8.8** Notificaciones opcionales sobre actualizaciones. `[RM §7]` `[PEND D-06]`

## 4. Verificación editorial

- **RF-9.1** Comprobaciones previas a publicar `[PDF §6.3]` `[RM §6]`:
  1. El enlace existe y corresponde al contenido informado.
  2. Autenticidad de la captura y posible alteración.
  3. Correspondencia entre la cuenta/publicación y la persona identificada.
  4. Contexto completo y relevancia/pertinencia editorial.
  5. Fechas, fuentes y duplicados.
  6. Si el contenido fue eliminado o el enlace dejó de funcionar.
  7. Si la información es insuficiente para identificar a la persona con seguridad.
  8. Si hace falta pedir información adicional al remitente.
  9. Riesgos injustificados para terceros. `[PDF §6.3]`
- **RF-9.2** No se publica como verificado si: contenido eliminado, enlace caído, evidencia insuficiente de identidad, información contradictoria, riesgo injustificado para terceros, captura manipulada. `[PDF §6.3, §7]` `[RM §6]`
- **RF-9.3** Registro interno de revisor, comprobaciones, fechas y decisión (aprobar, rechazar, pedir información). `[RM §6]`
- **RF-9.4** Criterios de selección consistentes: pertinencia, autenticidad, contexto e interés preventivo; no basta con que algo resulte ofensivo para alguien. `[PDF §7]`
- **RF-9.5** Categorías de contenido admisible: expresiones machistas, misoginia, sexualización degradante, discriminación por género, amenazas explícitas u otras relevantes. `[PDF §7]`
- **RF-9.6** Exclusiones: capturas manipuladas, acusaciones sin sustento, exposición innecesaria de información privada. `[PDF §7]`
- **RF-9.7** Separar comprobación de fuente, correspondencia de identidad, revisión contextual y explicación editorial. `[CL §6.5]`

## 5. Panel administrativo

- **RF-10.1** Acceso exclusivo para personal autorizado, con niveles de permisos diferenciados. `[RM §12]` — roles `[PEND D-09]`
- **RF-10.2** Funciones: gestionar reportes; consultar capturas y enlaces con acceso restringido; registrar verificaciones; aprobar, rechazar o pedir información; publicar, editar, actualizar; rectificaciones y retiradas; artículos educativos; moderar opiniones; estadísticas generales. `[RM §12]`
- **RF-10.3** Copias de seguridad, seguridad y registro de auditoría. `[RM §12]`
- **RF-10.4** Administración de usuarios y páginas institucionales. `[CL §5]`

## 6. Estadísticas

- **RF-11.1** Métricas agregadas: búsquedas, reportes recibidos y revisados, % verificados, tiempo promedio de revisión, visitas al sitio y a artículos, participación, valoraciones, cantidad y resolución de solicitudes de rectificación. `[PDF §12]` `[RM §13]`
- **RF-11.2** Sin información privada ni rankings de personas. `[RM §13]` — ver riesgo R-12 (los términos buscados son datos personales).

## 7. Requisitos no funcionales

- **RNF-1** Diseño editorial, minimalista, elegante, delicado, confiable; tipografía elegante en encabezados; mucho blanco. `[RM §1]` — paleta: ver C-01 `[PEND D-01]`
- **RNF-2** Evitar estética infantil, sensacionalista o de escrache/entretenimiento/rumor. `[RM §1]` `[PDF §10]`
- **RNF-3** Logo no definido; primero la web, luego la identidad. Presentar propuestas visuales. `[RM §1]`
- **RNF-4** Accesible y responsive. `[RM §7]` `[CL §9]` — objetivo propuesto: WCAG 2.2 AA `[PROP]`
- **RNF-5** Arquitectura escalable que sostenga la plataforma completa. `[RM §14, §15]`
- **RNF-6** Protección de privacidad, conservación/actualización/eliminación de registros. `[PDF §8]` `[RM §16]`
- **RNF-7** Revisión jurídica profesional (derecho digital, datos personales, honor e imagen, libertad de expresión, responsabilidad por contenidos) antes de lanzar y antes de habilitar registros nominales reales. `[PDF §8, §11]` `[RM §11, §14]`
- **RNF-8** Propuesta técnica con tecnologías, protección de datos, tiempos, costos iniciales y de mantenimiento, y recursos. `[RM §14]` — pendiente de elaborar `[PEND D-21]`

## 8. Contradicciones detectadas entre fuentes

| ID | Tema | PDF | Respuestas de Milena | Tratamiento |
|---|---|---|---|---|
| C-01 | Paleta | Verde oscuro, beige, blanco, gris cálido `[§10]` | Lavanda pálido, beige, neutros `[§1]` | `CLAUDE.md` adopta la de Milena (más reciente). Confirmar `D-01` |
| C-02 | Campos obligatorios del reporte | Captura completa, enlace, nombre **y usuario**, red social obligatorios `[§6.2]` | «Captura **o evidencia disponible**»; no menciona usuario ni red social `[§5]` | `D-02` |
| C-03 | Orden de etapas | Revisión jurídica (2.ª) **antes** del desarrollo (3.ª) `[§11]` | Plataforma completa desde el inicio `[§14]` | Desarrollo con publicación real deshabilitada; la revisión jurídica es bloqueante para habilitarla. Confirmar `D-22` |
| C-04 | Estados visibles en fichas | Solo se publica lo verificado `[§6.3]` | Estados públicos incluyen «material en revisión» `[§4]` | ¿Puede una ficha pública estar «en revisión»? `D-04` |
| C-05 | Nombre en resultados | Buscador por nombre y apellido `[§1, §6.1]`, pero el nombre se muestra «cuando su publicación esté jurídicamente justificada» `[§6.4]` | Búsqueda por nombre y apellido `[§3]` | Si el nombre no puede mostrarse, ¿puede usarse como clave de búsqueda? `D-03` |
| C-06 | Datos del remitente | — | Contacto opcional/mínimo `[§5]` vs. notificaciones opcionales `[§7]` | Las notificaciones exigen guardar un contacto. `D-06` |
