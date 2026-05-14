import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-3 sm:h-16 sm:px-6">
        <a href="#top" className="flex items-center gap-2 sm:gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-[var(--shadow-card)] ring-1 ring-border sm:h-12 sm:w-12 sm:rounded-2xl">
            <img src={logo} alt="Lac Glória Laticínios" className="h-full w-full object-contain" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-extrabold tracking-tight text-primary-deep sm:text-base">Lac Glória</p>
            <p className="hidden text-[11px] text-muted-foreground sm:block">Laticínios do Sertão</p>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#diferenciais" className="transition-colors hover:text-primary-deep">Diferenciais</a>
          <a href="#produtos" className="transition-colors hover:text-primary-deep">Produtos</a>
          <a href="#parceiros" className="transition-colors hover:text-primary-deep">Parceiros</a>
        </nav>
        <Button asChild variant="cta" size="sm" className="h-9 px-3 text-xs sm:px-4 sm:text-sm">
          <a href="#proposta">
            <span className="hidden sm:inline">Receber proposta</span>
            <span className="sm:hidden">Proposta</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </Button>
      </div>
    </header>
  );
}