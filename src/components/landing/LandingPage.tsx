import { lazy, Suspense } from "react";
import { SiteHeader } from "./SiteHeader";

const LeadForm = lazy(() => import("./LeadForm").then((m) => ({ default: m.LeadForm })));
const SiteFooter = lazy(() => import("./SiteFooter").then((m) => ({ default: m.SiteFooter })));
const WhatsAppFloating = lazy(() => import("./WhatsAppFloating").then((m) => ({ default: m.WhatsAppFloating })));

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="min-h-[600px]" aria-hidden />}>
          <LeadForm />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <SiteFooter />
      </Suspense>
      <Suspense fallback={null}>
        <WhatsAppFloating />
      </Suspense>
    </div>
  );
}