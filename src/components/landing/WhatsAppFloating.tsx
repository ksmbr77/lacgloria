import { MessageCircle } from "lucide-react";

export function WhatsAppFloating() {
  const href =
    "https://wa.me/5579999999999?text=" +
    encodeURIComponent("Olá, Lac Glória! Tenho interesse em revender seus produtos.");
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 text-sm font-semibold text-whatsapp-foreground shadow-[var(--shadow-elevated)] ring-4 ring-whatsapp/20 transition-all hover:scale-105 hover:brightness-110"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}