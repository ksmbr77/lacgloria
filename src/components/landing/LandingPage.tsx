import { LeadForm } from "./LeadForm";
import { SiteFooter } from "./SiteFooter";
import { WhatsAppFloating } from "./WhatsAppFloating";
import { SiteHeader } from "./SiteHeader";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <LeadForm />
      </main>
      <SiteFooter />
      <WhatsAppFloating />
    </div>
  );
}