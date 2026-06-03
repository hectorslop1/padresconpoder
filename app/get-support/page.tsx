import type { Metadata } from "next";
import { GetSupportContent } from "@/components/get-support/get-support-content";

export const metadata: Metadata = {
  title: "Get Support | Padres Con Poder",
  description:
    "Connect with Padres Con Poder for family support through the Self-Determination Program or inclusive workplace consulting for your business.",
};

export default function GetSupportPage() {
  return <GetSupportContent />;
}
