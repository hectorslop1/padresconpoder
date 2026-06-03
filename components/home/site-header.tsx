"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";

import { navItems } from "@/components/home/content";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-background/88 backdrop-blur-xl">
      <div className="page-shell flex h-20 items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/brand/padres-con-poder-logo.png"
            alt="Padres Con Poder logo"
            width={52}
            height={52}
            className="h-11 w-11 object-contain"
            priority
          />
          <div className="hidden min-[420px]:block">
            <div className="text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-brand-primary-strong">
              Padres Con Poder
            </div>
            <div className="text-sm text-ink-muted">Families and inclusive workplaces</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-brand-primary-strong"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <a href="#contact">Contact Padres Con Poder</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/80 bg-white text-brand-primary-strong shadow-ambient"
              aria-label="Open navigation menu"
            >
              <Menu className="size-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="max-w-[22rem]">
            <SheetHeader>
              <SheetTitle>Navigate Padres Con Poder</SheetTitle>
              <SheetDescription>
                Explore support for families, guidance for businesses, and ways to
                get in touch.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-brand-primary-soft/45 hover:text-brand-primary-strong"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <SheetFooter>
              <Button asChild>
                <a href="#contact" onClick={() => setOpen(false)}>
                  Contact Padres Con Poder
                </a>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
