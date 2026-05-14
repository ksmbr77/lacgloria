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
  { img: mussarela4, name: "Queijo Mussarela 4kg", desc: "Caixa c/ 6 unidades — ideal para fatiar no balcão.", tag: "Queijos" },
  { img: mussarela500, name: "Queijo Mussarela 500g", desc: "Caixa c/ 40 unidades — venda em peça para o consumidor.", tag: "Queijos" },
  { img: coalho3, name: "Queijo de Coalho 3kg", desc: "Fardo — alta procura para churrasco e pratos típicos.", tag: "Queijos" },
  { img: coalho500, name: "Queijo de Coalho 500g", desc: "Fardo c/ 40 unidades — formato prático para a gôndola.", tag: "Queijos" },
  { img: prato4, name: "Queijo Prato 4kg", desc: "Caixa c/ 6 unidades — para frios fatiados e lanches.", tag: "Queijos" },
  { img: prato500, name: "Queijo Prato 500g", desc: "Caixa c/ 40 unidades — peça embalada para varejo.", tag: "Queijos" },
  { img: manteiga200, name: "Manteiga 200g", desc: "Caixa c/ 24 unidades — sabor tradicional do Sertão.", tag: "Manteigas" },
  { img: manteigaBalde, name: "Manteiga Balde 3,5kg / 15kg", desc: "Para padarias, restaurantes e revenda fracionada.", tag: "Manteigas" },
  { img: requeijaoTrad, name: "Requeijão Cremoso Tradicional 200g", desc: "Caixa c/ 24 unidades — alto giro no autosserviço.", tag: "Requeijão" },
  { img: requeijaoCheddar, name: "Requeijão Cremoso Cheddar 200g", desc: "Caixa c/ 24 unidades — diferencial na sua categoria.", tag: "Requeijão" },
];

export function ProductGallery() {
  return (
    <section id="produtos" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary sm:text-sm">Catálogo de produtos</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-deep sm:text-4xl">
            Linha completa para abastecer o seu mercado
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Queijos, manteigas e requeijão Lac Glória — produzidos no Sertão sergipano com inspeção sanitária e padrão de qualidade reconhecido.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[image:var(--gradient-sky)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 z-10 rounded-full bg-white/85 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-deep shadow-sm backdrop-blur">
                  {p.tag}
                </span>
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="img-bright h-full w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1 sm:p-7"
                />
              </div>
              <div className="flex-1 border-t border-border p-5">
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