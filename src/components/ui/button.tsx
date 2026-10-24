import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "quiet";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-[0.9375rem] font-semibold transition-colors duration-150 disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
  primary:
    "no-underline bg-violet-700 text-white hover:bg-violet-800 hover:text-white disabled:bg-lavender-200 disabled:text-ink-muted",
  secondary:
    "no-underline border border-violet-700 bg-transparent text-violet-700 hover:bg-lavender-50 hover:text-violet-800 disabled:border-line-strong disabled:text-ink-muted",
  quiet: "px-0 text-violet-700 underline decoration-lavender-300 underline-offset-4 hover:decoration-violet-700",
};

export function buttonClasses(variant: ButtonVariant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`.trim();
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: ButtonVariant };

export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return <Link className={buttonClasses(variant, className)} {...props} />;
}

type ButtonProps = ComponentProps<"button"> & { variant?: ButtonVariant };

export function Button({ variant = "primary", className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, className)} {...props} />;
}
