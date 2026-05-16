import { MessageCircle } from "lucide-react";

export function WhatsAppFloating() {
  const href =
    "https://wa.me/557999308271?text=" +
    encodeURIComponent("Olá, Lac Glória! Tenho interesse em revender seus produtos.");
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="animate-pulse-ring fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[var(--shadow-elevated)] transition-all hover:scale-110 hover:brightness-110 sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3.5"
    >
      <MessageCircle className="h-6 w-6 sm:h-5 sm:w-5" />
      <span className="hidden text-sm font-semibold sm:inline">Falar no WhatsApp</span>
    </a>
  );
}