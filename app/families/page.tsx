import type { Metadata } from "next";
import { FamiliesContent } from "@/components/families/families-content";

export const metadata: Metadata = {
  title: "Support for Families | Padres Con Poder",
  description:
    "Padres Con Poder helps individuals with disabilities and their families navigate the Self-Determination Program with confidence — from service planning to ongoing advocacy.",
};

export default function FamiliesPage() {
  return <FamiliesContent />;
}
