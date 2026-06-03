import { HeroSection } from "@/components/home/hero-section";
import { MissionStrip } from "@/components/home/mission-strip";
import { AudienceSection } from "@/components/home/audience-section";
import { TrustSection } from "@/components/home/trust-section";
import { EditorialStrip } from "@/components/home/editorial-strip";
import { ContactCtaSection } from "@/components/home/contact-cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionStrip />
      <AudienceSection />
      <TrustSection />
      <EditorialStrip />
      <ContactCtaSection />
    </>
  );
}
