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
    <section id="diferenciais" className="bg-[image:var(--gradient-sky)] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Por que escolher a Lac Glória</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-deep sm:text-4xl">
            Tudo o que o seu mercado precisa, em um único fornecedor
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-card-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}