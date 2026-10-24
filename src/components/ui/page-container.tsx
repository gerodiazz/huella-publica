import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  width?: "text" | "wide";
  className?: string;
};

export function PageContainer({ children, width = "wide", className = "" }: PageContainerProps) {
  const maxWidth = width === "text" ? "max-w-3xl" : "max-w-6xl";
  return <div className={`mx-auto w-full ${maxWidth} px-5 sm:px-8 ${className}`.trim()}>{children}</div>;
}
