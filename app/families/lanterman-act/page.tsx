import { PathPage } from "@/components/paths/path-page";
import { familiesPath, stepMetadata } from "@/lib/paths";
import { localizedMetadata } from "@/lib/metadata";

const HREF = "/families/lanterman-act";

export async function generateMetadata() {
  return localizedMetadata((t) => stepMetadata(familiesPath, HREF, t));
}

export default function Page() {
  return <PathPage pathKey="families" href={HREF} />;
}
