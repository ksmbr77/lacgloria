import mussarela4 from "@/assets/mussarela-4kg.jpg";
import mussarela500 from "@/assets/mussarela-500g.jpg";
import coalho3 from "@/assets/coalho-3kg.jpg";
import coalho500 from "@/assets/coalho-500g.jpg";
import prato4 from "@/assets/prato-4kg.jpg";
import prato500 from "@/assets/prato-500g.jpg";
import manteiga200 from "@/assets/manteiga-200g.jpg";
import manteigaBalde from "@/assets/manteiga-balde.jpg";
import requeijaoTrad from "@/assets/requeijao-tradicional.jpg";
import requeijaoCheddar from "@/assets/requeijao-cheddar.jpg";

const products = [
  { img: mussarela4, name: "Queijo Mussarela 4kg", desc: "Caixa c/ 6 unidades — ideal para fatiar no balcão." },
  { img: mussarela500, name: "Queijo Mussarela 500g", desc: "Caixa c/ 40 unidades — venda em peça para o consumidor." },
  { img: coalho3, name: "Queijo de Coalho 3kg", desc: "Fardo — alta procura para churrasco e pratos típicos." },
  { img: coalho500, name: "Queijo de Coalho 500g", desc: "Fardo c/ 40 unidades — formato prático para a gôndola." },
  { img: prato4, name: "Queijo Prato 4kg", desc: "Caixa c/ 6 unidades — para frios fatiados e lanches." },
  { img: prato500, name: "Queijo Prato 500g", desc: "Caixa c/ 40 unidades — peça embalada para varejo." },
  { img: manteiga200, name: "Manteiga 200g", desc: "Caixa c/ 24 unidades — sabor tradicional do Sertão." },
  { img: manteigaBalde, name: "Manteiga Balde 3,5kg / 15kg", desc: "Para padarias, restaurantes e revenda fracionada." },
  { img: requeijaoTrad, name: "Requeijão Cremoso Tradicional 200g", desc: "Caixa c/ 24 unidades — alto giro no autosserviço." },
  { img: requeijaoCheddar, name: "Requeijão Cremoso Cheddar 200g", desc: "Caixa c/ 24 unidades — diferencial na sua categoria." },
];

export function ProductGallery() {
  return (
    <section id="produtos" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Catálogo de produtos</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-deep sm:text-4xl">
            Linha completa para abastecer o seu mercado
          </h2>
          <p className="mt-3 text-muted-foreground">
            Queijos, manteigas e requeijão Lac Glória — produzidos no Sertão sergipano com inspeção sanitária e padrão de qualidade reconhecido.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-border p-5">
                <h3 className="text-base font-bold text-card-foreground">{p.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}