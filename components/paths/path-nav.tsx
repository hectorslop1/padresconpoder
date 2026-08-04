"use client";

import Link from "next/link";
import { Check } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import type { PathConfig } from "@/lib/paths";

/**
 * The "on this path" sub-navigation. Sticky rail on desktop, horizontal strip on
 * mobile, so a visitor always knows how many short reads are left.
 */
export function PathNav({ path, currentHref }: { path: PathConfig; currentHref: string }) {
  const { t } = useLanguage();
  const currentIndex = path.steps.findIndex((s) => s.href === currentHref);
  const pathLabel = t[path.key].pathLabel;

  return (
    // `min-w-0` matters: without it this grid item takes its width from the
    // horizontal scroller below and pushes the whole page sideways on mobile.
    <nav aria-label={pathLabel} className="min-w-0 lg:sticky lg:top-28">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
        {t.actions.onThisPath}
      </p>

      {/* Mobile: horizontal scroller. Desktop: vertical rail. */}
      <ol className="mt-4 flex gap-2 overflow-x-auto pb-2 lg:mt-5 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
        {path.steps.map((step, i) => {
          const content = step.select(t);
          const isCurrent = step.href === currentHref;
          const isDone = currentIndex > -1 && i < currentIndex;

          return (
            <li key={step.href} className="shrink-0 lg:shrink">
              <Link
                href={step.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[0.85rem] leading-snug transition-colors duration-200 lg:px-3.5 ${
                  isCurrent
                    ? "bg-brand-primary-soft/60 font-semibold text-brand-primary-strong"
                    : "text-ink-muted hover:bg-surface-muted hover:text-ink"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-semibold ${
                    isCurrent
                      ? "bg-brand-primary-strong text-white"
                      : isDone
                        ? "bg-brand-secondary-soft text-[#006d40]"
                        : "bg-surface-muted text-ink-muted"
                  }`}
                >
                  {isDone ? <Check className="size-3.5" strokeWidth={3} /> : i + 1}
                </span>
                <span className="whitespace-nowrap lg:whitespace-normal">{content.navLabel}</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
