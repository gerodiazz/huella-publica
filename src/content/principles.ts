export type Principle = {
  title: string;
  summary: string;
};

// Principios provisionales. La política editorial definitiva requiere aprobación
// de la responsable del proyecto y revisión jurídica (ver docs/DECISIONS.md).
export const editorialPrinciples: readonly Principle[] = [
  {
    title: "Verificación",
    summary:
      "Ninguna presentación se publica sin revisión humana. Se busca comprobar la fuente original, la autenticidad del contenido y su correspondencia con la cuenta de origen.",
  },
  {
    title: "Contexto",
    summary:
      "Cada publicación debe leerse junto con su contexto. Los hechos comprobables se presentan separados de la explicación editorial, que no equivale a una conclusión judicial.",
  },
  {
    title: "Responsabilidad",
    summary:
      "La coincidencia de nombre no alcanza para atribuir una publicación. Ante dudas sobre identidad, fuente o contexto, el contenido no se presenta como verificado.",
  },
  {
    title: "Corrección",
    summary:
      "Las personas involucradas podrán señalar errores, aportar contexto y solicitar la revisión o la retirada de un contenido mediante un procedimiento visible.",
  },
  {
    title: "Privacidad",
    summary:
      "Los datos de quien presenta información se tratan de forma privada, y se evita exponer datos personales que no sean necesarios para comprender el contenido.",
  },
];
