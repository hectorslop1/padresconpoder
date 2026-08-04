import { ResourcesContent } from "@/components/resources/resources-content";
import { localizedMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return localizedMetadata((t) => t.resources.meta);
}

export default function ResourcesPage() {
  return <ResourcesContent />;
}
