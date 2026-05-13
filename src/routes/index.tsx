import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lac Glória Laticínios — Queijo de fábrica para seu mercado" },
      {
        name: "description",
        content:
          "Fábrica de queijos no Sertão de Sergipe. Mussarela, coalho, prato, manteiga e requeijão direto da fábrica para supermercados, mercadinhos e mercearias. Solicite proposta comercial.",
      },
      { property: "og:title", content: "Lac Glória Laticínios — Direto da fábrica para seu mercado" },
      {
        property: "og:description",
        content:
          "Queijos artesanais do Sertão sergipano com preço de fábrica e entrega regional. Receba sua proposta comercial.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
