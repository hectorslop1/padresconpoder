import { ContactContent } from "@/components/contact/contact-content";
import { localizedMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return localizedMetadata((t) => t.contact.meta);
}

export default function ContactPage() {
  return <ContactContent />;
}
