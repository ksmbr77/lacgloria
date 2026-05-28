import { lazy, Suspense } from "react";
import { Hero } from "./Hero";
import { SiteHeader } from "./SiteHeader";

// Below-the-fold sections are code-split to speed up the initial render.
const ValueProps = lazy(() => import("./ValueProps").then((m) => ({ default: m.ValueProps })));
const ProductGallery = lazy(() => import("./ProductGallery").then((m) => ({ default: m.ProductGallery })));
const SocialProof = lazy(() => import("./SocialProof").then((m) => ({ default: m.SocialProof })));
const LeadForm = lazy(() => import("./LeadForm").then((m) => ({ default: m.LeadForm })));
const SiteFooter = lazy(() => import("./SiteFooter").then((m) => ({ default: m.SiteFooter })));
const WhatsAppFloating = lazy(() => import("./WhatsAppFloating").then((m) => ({ default: m.WhatsAppFloating })));

const SectionFallback = () => <div className="min-h-[200px]" aria-hidden />;

export function FullLandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <ValueProps />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ProductGallery />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <SocialProof />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
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