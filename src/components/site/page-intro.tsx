import type { ReactNode } from "react";
import { PageContainer } from "@/components/ui/page-container";
import { SectionHeading } from "@/components/ui/section-heading";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
};

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <div className="border-b border-beige-200 bg-gradient-to-b from-lavender-50 to-cream">
      <PageContainer className="pt-14 pb-12 sm:pt-20 sm:pb-16">
        <SectionHeading level={1} eyebrow={eyebrow} title={title}>
          {children}
        </SectionHeading>
      </PageContainer>
    </div>
  );
}
