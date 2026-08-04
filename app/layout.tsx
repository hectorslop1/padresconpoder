import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

import { LanguageProvider } from "@/contexts/language-context";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { currentLang, localizedMetadata } from "@/lib/metadata";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export async function generateMetadata() {
  return localizedMetadata((t) => t.siteMeta);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Resolve the language server-side so `lang` on <html> is correct on first
  // paint — this site serves a largely Spanish-speaking community.
  const initialLang = await currentLang();

  return (
    <html lang={initialLang} className={`${hankenGrotesk.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-ink">
        <LanguageProvider initialLang={initialLang}>
          <SiteHeader />
          {/* `overflow-x-clip` contains the horizontal offset of the reveal
              animations before they play. Unlike `overflow-x-hidden` it does not
              create a scroll container, so the sticky path rail keeps working. */}
          <main className="flex-1 overflow-x-clip">{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
