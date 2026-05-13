import logo from "@/assets/logo.png";
import { Instagram, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 shadow-[var(--shadow-card)]">
              <img src={logo} alt="Lac Glória" className="h-full w-full object-contain" />
            </span>
            <div>
              <p className="text-base font-bold">Lac Glória Laticínios</p>
              <p className="text-xs text-white/70">O sabor do Sertão para a sua mesa</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/75">
            Fábrica de queijos, manteigas e requeijão atendendo supermercados, mercadinhos e mercearias de todo o Nordeste.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Endereço</p>
          <p className="mt-3 inline-flex items-start gap-2 text-sm text-white/90">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
            Pov. Lagoa do Rancho<br />Nossa Senhora da Glória / SE
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Siga a gente</p>
          <a
            href="https://instagram.com/laticinioslacgloria"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
          >
            <Instagram className="h-4 w-4" /> @laticinioslacgloria
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-white/60 sm:px-6">
          © {new Date().getFullYear()} Lac Glória Laticínios. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}