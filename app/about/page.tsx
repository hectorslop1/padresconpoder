import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "About Padres Con Poder | Mission, Vision & Approach",
  description:
    "Learn about Padres Con Poder's mission, vision, and person-centered approach to empowering families and building inclusive workplaces across California.",
};

export default function AboutPage() {
  return <AboutContent />;
}
