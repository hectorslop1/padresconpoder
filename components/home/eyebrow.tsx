import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  tone = "primary",
  className,
}: {
  children: ReactNode;
  tone?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em]",
        tone === "primary" &&
          "border-brand-primary/15 bg-brand-primary-soft/60 text-brand-primary-strong",
        tone === "secondary" &&
          "border-brand-secondary/20 bg-brand-secondary-soft text-[#0c6b3d]",
        className,
      )}
    >
      {children}
    </span>
  );
}
