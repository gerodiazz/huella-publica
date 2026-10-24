import { MainNav } from "@/components/site/main-nav";
import { Wordmark } from "@/components/site/wordmark";

export function SiteHeader() {
  return (
    <header className="relative border-b border-beige-200 bg-cream">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-5 sm:px-8">
        <Wordmark />
        <MainNav />
      </div>
    </header>
  );
}
