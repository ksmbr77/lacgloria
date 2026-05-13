import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Lac Glória Laticínios" className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/20" />
          <div className="leading-tight">
            <p className="text-sm font-bold text-primary-deep">Lac Glória</p>
            <p className="text-[11px] text-muted-foreground">Laticínios do Sertão</p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <a href="#diferenciais" className="transition-colors hover:text-primary-deep">Diferenciais</a>
          <a href="#produtos" className="transition-colors hover:text-primary-deep">Produtos</a>
          <a href="#parceiros" className="transition-colors hover:text-primary-deep">Parceiros</a>
        </nav>
        <Button asChild variant="cta" size="sm">
          <a href="#proposta">Receber proposta</a>
        </Button>
      </div>
    </header>
  );
}