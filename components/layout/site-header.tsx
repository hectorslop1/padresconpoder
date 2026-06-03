"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Families", href: "/families" },
  { label: "Businesses", href: "/businesses" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/50 bg-white/92 backdrop-blur-xl">
      <div className="page-shell flex h-[4.5rem] items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/brand/padres-con-poder-logo.png"
            alt="Padres Con Poder"
            width={44}
            height={44}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="hidden text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-brand-primary-strong sm:block">
            Padres Con Poder
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-150 ${
                pathname?.startsWith(link.href)
                  ? "text-brand-primary-strong"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button asChild size="sm" className="rounded-full px-6 shadow-ambient">
            <Link href="/get-support">Get Support</Link>
          </Button>
        </div>

        {/* Mobile trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-brand-primary-strong shadow-ambient"
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-[1.05rem] font-medium text-ink transition-colors hover:bg-brand-primary-soft/50 hover:text-brand-primary-strong"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Button asChild className="w-full rounded-full shadow-ambient">
                <Link href="/get-support" onClick={() => setOpen(false)}>
                  Get Support
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
