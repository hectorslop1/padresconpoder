import type { Metadata } from "next";
import { BusinessesContent } from "@/components/businesses/businesses-content";

export const metadata: Metadata = {
  title: "Inclusive Business Consulting | Padres Con Poder",
  description:
    "Padres Con Poder helps California businesses build inclusive, neurodiverse-friendly workplaces through coaching, training, and DEI strategy.",
};

export default function BusinessesPage() {
  return <BusinessesContent />;
}
