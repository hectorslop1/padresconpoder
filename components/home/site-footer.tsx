import Image from "next/image";

import { navItems } from "@/components/home/content";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="bg-[#151a22] text-ink-inverse">
      <div className="page-shell py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <div className="space-y-5">
            <Image
              src="/brand/padres-con-poder-logo-white.png"
              alt="Padres Con Poder logo"
              width={88}
              height={88}
              className="h-16 w-16 object-contain"
            />
            <div className="max-w-md space-y-3">
              <p className="text-lg font-semibold tracking-[-0.02em] text-white">
                Padres Con Poder
              </p>
              <p className="text-base leading-7 text-white/68">
                Empowering individuals with disabilities, supporting families through
                the Self-Determination Program, and helping businesses build inclusive
                workplaces.
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                Navigate
              </p>
              <div className="mt-5 flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-white/72 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                Contact Status
              </p>
              <div className="mt-5 space-y-3 text-sm leading-6 text-white/68">
                <p>TODO: Add approved phone number</p>
                <p>TODO: Add approved email address</p>
                <p>TODO: Confirm social URLs for @IvesTorresFoundation and @PadresConPoder</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col gap-3 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Padres Con Poder. All rights reserved.</p>
          <p>Website content sourced from the approved Padres Con Poder materials.</p>
        </div>
      </div>
    </footer>
  );
}
