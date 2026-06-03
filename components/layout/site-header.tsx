"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Lang } from "@/lib/translations";

function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-line/70 bg-surface-muted p-0.5">
      {(["en", "es"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={`rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
            lang === l
              ? "bg-brand-primary-strong text-white shadow-sm"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.families, href: "/families" },
    { label: t.nav.businesses, href: "/businesses" },
    { label: t.nav.about, href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/50 bg-white/92 backdrop-blur-xl">
      <div className="page-shell flex h-[4.5rem] items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3 group">
          <Image
            src="/brand/padres-con-poder-logo.png"
            alt="Padres Con Poder"
            width={44}
            height={44}
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="hidden text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-brand-primary-strong sm:block transition-opacity duration-200 group-hover:opacity-75">
            Padres Con Poder
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 rounded-lg group ${
                  isActive
                    ? "text-brand-primary-strong"
                    : "text-ink-muted hover:text-ink hover:bg-surface-muted/80"
                }`}
              >
                {link.label}
                {/* Active underline */}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-brand-primary-strong transition-all duration-300 ${
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  } origin-left`}
                />
                {/* Hover underline (only when not active) */}
                {!isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-ink-muted/30 scale-x-0 transition-transform duration-200 origin-left group-hover:scale-x-100" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop right side */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <Button asChild size="sm" className="rounded-full px-5 shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg active:translate-y-0 active:scale-[0.98]">
            <Link href="/get-support">{t.nav.getSupport}</Link>
          </Button>
        </div>

        {/* Mobile right side */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-brand-primary-strong shadow-ambient transition-all duration-200 hover:bg-brand-primary-soft/40 active:scale-95"
                aria-label="Open navigation"
              >
                <Menu className="size-[1.1rem]" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80" aria-describedby={undefined}>
              <SheetHeader className="pb-2">
                <SheetTitle className="text-left text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                  Navigate
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-xl px-4 py-3 text-[1.05rem] font-medium transition-colors ${
                        isActive
                          ? "bg-brand-primary-soft/60 text-brand-primary-strong"
                          : "text-ink hover:bg-brand-primary-soft/40 hover:text-brand-primary-strong"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-6">
                <Button asChild className="w-full rounded-full shadow-ambient">
                  <Link href="/get-support" onClick={() => setOpen(false)}>
                    {t.nav.getSupport}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
