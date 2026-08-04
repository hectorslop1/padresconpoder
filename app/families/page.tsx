import { PathIndex } from "@/components/paths/path-index";
import { localizedMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return localizedMetadata((t) => t.families.meta);
}

export default function FamiliesPage() {
  return (
    <PathIndex
      pathKey="families"
      image="/images/3.jpg.webp"
      imageAlt="Families supported by Padres Con Poder at a community gathering"
    />
  );
}
