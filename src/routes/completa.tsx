import { createFileRoute } from "@tanstack/react-router";
import { FullLandingPage } from "@/components/landing/FullLandingPage";

export const Route = createFileRoute("/completa")({
  head: () => ({
    meta: [
      { title: "Lac Glória — Queijo de fábrica para seu mercado" },
      {
        name: "description",
        content:
          "Conheça a Lac Glória: fábrica de queijos do Sertão sergipano. Mussarela, coalho, prato, manteiga e requeijão direto para supermercados, mercadinhos e mercearias.",
      },
      { property: "og:title", content: "Lac Glória — Direto da fábrica para seu mercado" },
      {
        property: "og:description",
        content:
          "Queijos artesanais do Sertão sergipano com preço de fábrica e entrega regional. Receba sua proposta comercial.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CompletaPage,
});

function CompletaPage() {
  return <FullLandingPage />;
}