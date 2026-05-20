import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Send } from "lucide-react";

const WHATSAPP = "557996437711"; // Número comercial Lac Glória (+55 79 9643-7711)

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  business: z.string().trim().min(2, "Informe o nome do estabelecimento").max(120),
  city: z.string().trim().min(2, "Informe cidade/estado").max(120),
  whatsapp: z.string().trim().min(10, "WhatsApp inválido").max(20),
  email: z.string().trim().email("E-mail inválido").max(160),
  product: z.enum(["queijo", "manteiga", "requeijao", "queijo_manteiga", "queijo_requeijao", "manteiga_requeijao", "todos"], { message: "Selecione o produto" }),
  volume: z.enum(["pequeno", "medio", "grande"], { message: "Selecione o volume" }),
  source: z.enum(["anuncio", "indicacao", "redes", "outro"], { message: "Selecione uma opção" }),
});

type FormState = {
  name: string;
  business: string;
  city: string;
  whatsapp: string;
  email: string;
  product: "" | "queijo" | "manteiga" | "requeijao" | "queijo_manteiga" | "queijo_requeijao" | "manteiga_requeijao" | "todos";
  volume: "" | "pequeno" | "medio" | "grande";
  source: "" | "anuncio" | "indicacao" | "redes" | "outro";
};

const initial: FormState = {
  name: "",
  business: "",
  city: "",
  whatsapp: "",
  email: "",
  product: "",
  volume: "",
  source: "",
};

const productLabel: Record<string, string> = {
  queijo: "Queijo",
  manteiga: "Manteiga",
  requeijao: "Requeijão",
  queijo_manteiga: "Queijo e Manteiga",
  queijo_requeijao: "Queijo e Requeijão",
  manteiga_requeijao: "Manteiga e Requeijão",
  todos: "Todos os produtos",
};
const volumeLabel: Record<string, string> = {
  pequeno: "Pequeno (500kg – 1.000kg/mês)",
  medio: "Médio (1.000kg – 2.000kg/mês)",
  grande: "Grande (acima de 2.000kg/mês)",
};
const sourceLabel: Record<string, string> = {
  anuncio: "Anúncio",
  indicacao: "Indicação",
  redes: "Redes sociais",
  outro: "Outro",
};

export function LeadForm() {
  const [data, setData] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Revise os campos destacados.");
      return;
    }
    setErrors({});
    const v = result.data;
    const message = encodeURIComponent(
      `Olá, Lac Glória! Quero receber proposta comercial.\n\n` +
        `• Nome: ${v.name}\n` +
        `• Estabelecimento: ${v.business}\n` +
        `• Cidade/UF: ${v.city}\n` +
        `• WhatsApp: ${v.whatsapp}\n` +
        `• E-mail: ${v.email}\n` +
        `• Produto de interesse: ${productLabel[v.product]}\n` +
        `• Volume estimado: ${volumeLabel[v.volume]}\n` +
        `• Como conheceu: ${sourceLabel[v.source]}`,
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${message}`, "_blank", "noopener");
    setSent(true);
    toast.success("Solicitação enviada! Em instantes nosso comercial entrará em contato.");
  }

  return (
    <section id="proposta" className="relative overflow-hidden py-12 sm:py-20">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-95" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="min-w-0 text-primary-foreground">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm">Proposta comercial</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">
            Receba tabela de preços e condições para o seu mercado
          </h2>
          <p className="mt-3 text-sm text-white/90 sm:mt-4 sm:text-base">
            Preencha o formulário e nosso time comercial envia sua proposta personalizada em poucas horas — pelo WhatsApp ou e-mail, do seu jeito.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm text-white/90 sm:mt-6 sm:space-y-3">
            {[
              "Tabela de preços direto da fábrica",
              "Condições especiais para primeira compra",
              "Atendimento por consultor comercial dedicado",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 rounded-2xl bg-card p-4 shadow-[var(--shadow-elevated)] sm:rounded-3xl sm:p-8">
          {sent ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-card-foreground">Tudo certo!</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Sua solicitação foi enviada. Continue a conversa pelo WhatsApp que abrimos para você.
              </p>
              <Button variant="cta" className="mt-6" onClick={() => { setSent(false); setData(initial); }}>
                Enviar outra solicitação
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-5 text-center">
                <h3 className="text-lg font-bold text-card-foreground sm:text-xl">
                  Queijos Direto da Fábrica
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Distribuição para supermercados, mercadinhos e revendedores em Todo o Nordeste.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  <Field label="Nome completo" error={errors.name}>
                    <Input value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="Seu nome" maxLength={100} />
                  </Field>
                  <Field label="Nome do estabelecimento" error={errors.business}>
                    <Input value={data.business} onChange={(e) => update("business", e.target.value)} placeholder="Mercado / mercearia" maxLength={120} />
                  </Field>
                  <Field label="Cidade / Estado" error={errors.city}>
                    <Input value={data.city} onChange={(e) => update("city", e.target.value)} placeholder="Aracaju / SE" maxLength={120} />
                  </Field>
                  <Field label="WhatsApp" error={errors.whatsapp}>
                    <Input value={data.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} placeholder="(00) 00000-0000" inputMode="tel" maxLength={20} />
                  </Field>
                  <Field label="E-mail" error={errors.email} className="sm:col-span-2">
                    <Input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="voce@empresa.com" maxLength={160} />
                  </Field>
                  <Field label="Produto de interesse" error={errors.product}>
                    <Select value={data.product} onValueChange={(v) => update("product", v as FormState["product"])}>
                      <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="queijo">{productLabel.queijo}</SelectItem>
                        <SelectItem value="manteiga">{productLabel.manteiga}</SelectItem>
                        <SelectItem value="requeijao">{productLabel.requeijao}</SelectItem>
                        <SelectItem value="queijo_manteiga">{productLabel.queijo_manteiga}</SelectItem>
                        <SelectItem value="queijo_requeijao">{productLabel.queijo_requeijao}</SelectItem>
                        <SelectItem value="manteiga_requeijao">{productLabel.manteiga_requeijao}</SelectItem>
                        <SelectItem value="todos">{productLabel.todos}</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Volume de compra estimado" error={errors.volume}>
                    <Select value={data.volume} onValueChange={(v) => update("volume", v as FormState["volume"])}>
                      <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pequeno">{volumeLabel.pequeno}</SelectItem>
                        <SelectItem value="medio">{volumeLabel.medio}</SelectItem>
                        <SelectItem value="grande">{volumeLabel.grande}</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Como conheceu a Lac Glória?" error={errors.source}>
                    <Select value={data.source} onValueChange={(v) => update("source", v as FormState["source"])}>
                      <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="anuncio">Anúncio</SelectItem>
                        <SelectItem value="indicacao">Indicação</SelectItem>
                        <SelectItem value="redes">Redes sociais</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
                <Button type="submit" variant="cta" size="xl" className="w-full">
                  <Send className="h-4 w-4" /> Quero receber proposta comercial
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Ao enviar, você concorda em ser contatado pelo nosso time comercial.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label className="mb-1.5 block text-xs font-semibold text-card-foreground">{label}</Label>
      {children}
      {error ? <p className="mt-1 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}