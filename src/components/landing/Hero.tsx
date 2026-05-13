import heroImg from "@/assets/hero-cheese.jpg";
import { Button } from "@/components/ui/button";
import { Truck, ShieldCheck, Factory } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" aria-hidden />
      <div
        className="absolute inset-0 opacity-25 mix-blend-overlay"
        style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:items-center">
        <div className="text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <Factory className="h-3.5 w-3.5" /> Fábrica em N. Sra. da Glória / SE
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Queijo de qualidade <span className="text-accent">direto da fábrica</span> para a sua prateleira.
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/90 sm:text-lg">
            A Lac Glória é a parceira de supermercados, mercadinhos e mercearias que querem
            margem maior, giro garantido e o sabor verdadeiro do Sertão sergipano.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#proposta">Quero receber proposta comercial</a>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a href="https://wa.me/5579999999999?text=Ol%C3%A1%2C%20quero%20comprar%20queijos%20Lac%20Gl%C3%B3ria%20para%20o%20meu%20mercado." target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/85">
            <span className="inline-flex items-center gap-2"><Truck className="h-4 w-4" /> Entrega regional</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Inspeção sanitária</span>
            <span className="inline-flex items-center gap-2"><Factory className="h-4 w-4" /> Preço de fábrica</span>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-elevated)] ring-1 ring-white/30">
            <img src={heroImg} alt="Queijos artesanais Lac Glória sobre tábua de madeira no Sertão" className="h-full w-full object-cover" width={1600} height={1200} />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card px-5 py-4 shadow-[var(--shadow-elevated)]">
            <p className="text-2xl font-extrabold text-primary-deep">+200</p>
            <p className="text-xs text-muted-foreground">mercados parceiros no Nordeste</p>
          </div>
        </div>
      </div>
    </section>
  );
}