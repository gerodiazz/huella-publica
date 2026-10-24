import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  level?: 1 | 2;
  children?: ReactNode;
};

export function SectionHeading({ id, eyebrow, title, level = 2, children }: SectionHeadingProps) {
  const Heading = level === 1 ? "h1" : "h2";
  const size = level === 1 ? "text-4xl sm:text-5xl" : "text-3xl sm:text-[2.25rem]";

  return (
    <header className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-[0.12em] text-violet-700 uppercase">{eyebrow}</p>
      ) : null}
      <Heading id={id} className={size}>
        {title}
      </Heading>
      {children ? <div className="mt-4 text-lg text-ink-muted">{children}</div> : null}
    </header>
  );
}
