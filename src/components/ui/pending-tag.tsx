type PendingTagProps = { label?: string };

export function PendingTag({ label = "Provisional" }: PendingTagProps) {
  return (
    <span className="inline-block rounded-full border border-line-strong px-2.5 py-0.5 align-middle text-xs font-semibold tracking-wide text-ink-muted uppercase">
      {label}
    </span>
  );
}
