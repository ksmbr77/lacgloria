import { Truck, BadgeDollarSign, Boxes, Sparkles } from "lucide-react";

const items = [
  {
    icon: BadgeDollarSign,
    title: "Preço de fábrica",
    desc: "Sem atravessadores. Margem maior para o seu mercado em cada caixa.",
  },
  {
    icon: Truck,
    title: "Entrega regional",
    desc: "Logística própria pelo Nordeste, com prazos curtos e frete competitivo.",
  },
  {
    icon: Boxes,
    title: "Mix completo",
    desc: "Mussarela, coalho, prato, manteiga e requeijão em formatos para varejo e atacado.",
  },
  {
    icon: Sparkles,
    title: "Qualidade artesanal",
    desc: "Receita tradicional do Sertão sergipano, com inspeção sanitária e padrão constante.",
  },
];

export function ValueProps() {
  return (
    <section id="diferenciais" className="bg-[image:var(--gradient-sky)] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">Por que escolher a Lac Glória</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-primary-deep sm:text-4xl">
            Tudo o que o seu mercado precisa, em um único fornecedor
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, idx) => (
            <div
              key={title}
              className="group animate-fade-up rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] sm:p-6"
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-card-foreground sm:text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}