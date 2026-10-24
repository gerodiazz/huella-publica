import { Button } from "@/components/ui/button";

type SearchFormProps = {
  headingLevel?: 2 | 3;
  id?: string;
};

/**
 * Interfaz visual del futuro buscador. En la etapa 1 está deshabilitada a
 * propósito: no envía datos ni consulta registros.
 */
export function SearchForm({ headingLevel = 2, id = "consulta" }: SearchFormProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const statusId = `${id}-estado`;

  return (
    <section
      aria-labelledby={`${id}-titulo`}
      className="rounded-lg border border-lavender-200 bg-lavender-50 p-6 sm:p-8"
    >
      <Heading id={`${id}-titulo`} className="text-2xl sm:text-[1.75rem]">
        Consultar registros verificados
      </Heading>
      <p className="mt-2 text-ink-muted">
        La búsqueda se realizará por nombre y apellido y mostrará únicamente registros que hayan superado la revisión
        editorial.
      </p>

      <form className="mt-6" aria-describedby={statusId} noValidate>
        <fieldset disabled className="grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
          <legend className="sr-only">Datos de búsqueda</legend>
          <div>
            <label htmlFor={`${id}-nombre`} className="mb-1.5 block text-sm font-semibold text-ink">
              Nombre
            </label>
            <input
              id={`${id}-nombre`}
              name="nombre"
              type="text"
              autoComplete="off"
              className="min-h-12 w-full rounded-md border border-line-strong bg-white px-4 text-ink disabled:cursor-not-allowed disabled:bg-cream"
            />
          </div>
          <div>
            <label htmlFor={`${id}-apellido`} className="mb-1.5 block text-sm font-semibold text-ink">
              Apellido
            </label>
            <input
              id={`${id}-apellido`}
              name="apellido"
              type="text"
              autoComplete="off"
              className="min-h-12 w-full rounded-md border border-line-strong bg-white px-4 text-ink disabled:cursor-not-allowed disabled:bg-cream"
            />
          </div>
          <Button type="submit" className="min-h-12">
            Buscar
          </Button>
        </fieldset>
      </form>

      <p id={statusId} role="note" className="mt-4 flex gap-2 text-sm text-ink">
        <svg aria-hidden="true" className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="8" cy="8" r="6.5" />
          <path d="M8 7v4.5M8 4.6v.2" strokeLinecap="round" />
        </svg>
        <span>
          <strong className="font-semibold">Consulta en preparación.</strong> El buscador todavía no está habilitado y no
          accede a ninguna base de datos.
        </span>
      </p>
    </section>
  );
}
