import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Padres Con Poder | Transforming Businesses, Empowering Individuals",
  description:
    "Padres Con Poder supports families navigating the Self-Determination Program and helps businesses build inclusive, neurodiverse-friendly workplaces across California.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
