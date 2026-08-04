import { AboutContent } from "@/components/about/about-content";
import { localizedMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return localizedMetadata((t) => t.about.meta);
}

export default function AboutPage() {
  return <AboutContent />;
}
