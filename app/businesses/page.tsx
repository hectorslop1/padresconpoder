import { PathIndex } from "@/components/paths/path-index";
import { localizedMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return localizedMetadata((t) => t.businesses.meta);
}

export default function BusinessesPage() {
  return (
    <PathIndex
      pathKey="businesses"
      image="/images/2.jpg.webp"
      imageAlt="Padres Con Poder team members collaborating at an event"
    />
  );
}
