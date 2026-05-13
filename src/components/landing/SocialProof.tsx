import { Quote, Star, ShieldCheck, Award, Leaf } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Comprador — Rede de Supermercados, Aracaju/SE",
    text: "A Lac Glória virou nossa principal fornecedora de mussarela e coalho. Padrão de qualidade e entrega no prazo todo mês.",
  },
  {
    name: "Joana R.",
    role: "Proprietária — Mercadinho, Itabaiana/SE",
    text: "O preço de fábrica fez nossa margem crescer. O cliente sente a diferença no sabor — virou queijo da casa.",
  },
  {
    name: "André S.",
    role: "Sócio — Rede de Mercearias, Salvador/BA",
    text: "Atendimento direto, sem intermediário. Recompras toda semana sem dor de cabeça com logística.",
  },
];

const seals = [
  { icon: ShieldCheck, label: "Inspeção Sanitária" },
  { icon: Award, label: "Tradição desde o Sertão" },
  { icon: Leaf, label: "Leite 100% regional" },
];

export function SocialProof() {
  return (
    <section id="parceiros" className="relative bg-muted py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Quem já vende Lac Glória</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-deep sm:text-4xl">
            Mercados parceiros que confiam na nossa qualidade
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative rounded-2xl bg-card p-6 shadow-[var(--shadow-card)]">
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/15" />
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-card-foreground">"{t.text}"</blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-bold text-card-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {seals.map(({ icon: Icon, label }) => (
            <div key={label} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground shadow-[var(--shadow-card)]">
              <Icon className="h-4 w-4 text-secondary" /> {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}