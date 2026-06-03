"use client";

import { AudienceServicesSection } from "@/components/home/audience-services-section";
import { ContactCtaSection } from "@/components/home/contact-cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { HowWeHelpSection } from "@/components/home/how-we-help-section";
import { MissionSection } from "@/components/home/mission-section";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { WhyChooseSection } from "@/components/home/why-choose-section";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <SiteHeader />
      <main>
        <HeroSection />
        <MissionSection />
        <HowWeHelpSection />
        <AudienceServicesSection />
        <WhyChooseSection />
        <ContactCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
