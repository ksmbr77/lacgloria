import { Hero } from "./Hero";
import { ValueProps } from "./ValueProps";
import { ProductGallery } from "./ProductGallery";
import { SocialProof } from "./SocialProof";
import { LeadForm } from "./LeadForm";
import { SiteFooter } from "./SiteFooter";
import { WhatsAppFloating } from "./WhatsAppFloating";
import { SiteHeader } from "./SiteHeader";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <ValueProps />
        <ProductGallery />
        <SocialProof />
        <LeadForm />
      </main>
      <SiteFooter />
      <WhatsAppFloating />
    </div>
  );
}