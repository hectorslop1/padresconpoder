import { PathPage } from "@/components/paths/path-page";
import { businessesPath, stepMetadata } from "@/lib/paths";
import { localizedMetadata } from "@/lib/metadata";

const HREF = "/businesses/why-hire";

export async function generateMetadata() {
  return localizedMetadata((t) => stepMetadata(businessesPath, HREF, t));
}

export default function Page() {
  return <PathPage pathKey="businesses" href={HREF} />;
}
