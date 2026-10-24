import type { ReactNode } from "react";

type NoticeProps = {
  title?: string;
  children: ReactNode;
  tone?: "info" | "pending";
  className?: string;
};

// Aviso editorial sobrio para estados provisionales o aclaraciones importantes.
export function Notice({ title, children, tone = "info", className = "" }: NoticeProps) {
  const toneClasses =
    tone === "pending" ? "border-beige-200 bg-beige-100" : "border-lavender-200 bg-lavender-50";

  return (
    <aside className={`rounded-md border-l-4 ${toneClasses} px-5 py-4 ${className}`.trim()}>
      {title ? <p className="font-semibold text-ink">{title}</p> : null}
      <div className="text-[0.9375rem] text-ink-muted [&>p+p]:mt-2">{children}</div>
    </aside>
  );
}
