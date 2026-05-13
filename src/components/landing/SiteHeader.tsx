import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-18 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 shadow-[var(--shadow-card)] ring-1 ring-border">
            <img src={logo} alt="Lac Glória Laticínios" className="h-full w-full object-contain" />
          </span>
          <div className="leading-tight">
            <p className="text-base font-extrabold tracking-tight text-primary-deep">Lac Glória</p>
            <p className="text-[11px] text-muted-foreground">Laticínios do Sertão</p>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#diferenciais" className="transition-colors hover:text-primary-deep">Diferenciais</a>
          <a href="#produtos" className="transition-colors hover:text-primary-deep">Produtos</a>
          <a href="#parceiros" className="transition-colors hover:text-primary-deep">Parceiros</a>
        </nav>
        <Button asChild variant="cta" size="sm" className="hidden sm:inline-flex">
          <a href="#proposta">Receber proposta</a>
        </Button>
        <a
          href="#proposta"
          aria-label="Receber proposta"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[image:var(--gradient-cta)] text-secondary-foreground shadow-[var(--shadow-soft)] sm:hidden"
        >
          <Menu className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}