import heroImg from "@/assets/hero-cheese.jpg";
import { Button } from "@/components/ui/button";
import { Truck, ShieldCheck, Factory, MessageCircle, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" aria-hidden />
      {/* Soft decorative blobs */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl" aria-hidden />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-20 pt-14 sm:px-6 sm:pt-20 md:pb-28 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
        <div className="text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
            <Factory className="h-3.5 w-3.5" /> Fábrica em N. Sra. da Glória / SE
          </span>
          <h1 className="mt-5 text-[2.1rem] font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Queijo de qualidade <span className="text-accent">direto da fábrica</span> para a sua prateleira.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/90 sm:text-lg">
            A Lac Glória é a parceira de supermercados, mercadinhos e mercearias que querem
            margem maior, giro garantido e o sabor verdadeiro do Sertão sergipano.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <a href="#proposta">
                Receber proposta comercial <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="xl" className="w-full border-white/40 bg-white/10 text-primary-foreground backdrop-blur hover:bg-white/20 hover:text-primary-foreground sm:w-auto">
              <a
                href="https://wa.me/5579999999999?text=Ol%C3%A1%2C%20quero%20comprar%20queijos%20Lac%20Gl%C3%B3ria%20para%20o%20meu%20mercado."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
              </a>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-2 text-sm text-white/90 sm:grid-cols-3 sm:gap-3">
            <span className="inline-flex items-center gap-2"><Truck className="h-4 w-4 text-accent" /> Entrega regional</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> Inspeção sanitária</span>
            <span className="inline-flex items-center gap-2"><Factory className="h-4 w-4 text-accent" /> Preço de fábrica</span>
          </div>
        </div>

        <div className="relative mt-2 lg:mt-0">
          <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-elevated)] ring-1 ring-white/30">
            <img
              src={heroImg}
              alt="Queijos artesanais Lac Glória sobre tábua de madeira no Sertão sergipano"
              className="h-64 w-full object-cover sm:h-80 lg:h-[520px]"
              width={1600}
              height={1200}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-deep/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-5 left-4 rounded-2xl bg-card px-4 py-3 shadow-[var(--shadow-elevated)] sm:left-6 sm:px-5 sm:py-4">
            <p className="text-xl font-extrabold text-primary-deep sm:text-2xl">+200</p>
            <p className="text-[11px] text-muted-foreground sm:text-xs">mercados parceiros no Nordeste</p>
          </div>
          <div className="absolute -top-4 right-4 hidden rounded-2xl bg-card px-4 py-3 shadow-[var(--shadow-elevated)] sm:block">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Sabor do</p>
            <p className="text-base font-extrabold text-secondary">Sertão sergipano</p>
          </div>
        </div>
      </div>

      {/* bottom wave divider */}
      <svg className="absolute bottom-0 left-0 right-0 w-full text-background" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
      </svg>
    </section>
  );
}