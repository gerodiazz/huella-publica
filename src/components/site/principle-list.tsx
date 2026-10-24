import type { Principle } from "@/content/principles";

type PrincipleListProps = {
  principles: readonly Principle[];
  columns?: 1 | 2;
};

export function PrincipleList({ principles, columns = 2 }: PrincipleListProps) {
  return (
    <dl className={`grid gap-x-12 gap-y-8 ${columns === 2 ? "md:grid-cols-2" : ""}`}>
      {principles.map((principle, index) => (
        <div key={principle.title} className="border-t border-beige-200 pt-5">
          <dt className="flex items-baseline gap-3">
            <span aria-hidden="true" className="font-serif text-lg text-violet-700 italic">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-serif text-2xl">{principle.title}</span>
          </dt>
          <dd className="mt-2 text-ink-muted">{principle.summary}</dd>
        </div>
      ))}
    </dl>
  );
}
