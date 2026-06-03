import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionShell({
  id,
  children,
  className,
  tone = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted" | "dark";
}) {
  return (
    <section
      id={id}
      className={cn(
        "section-shell",
        tone === "default" && "bg-background",
        tone === "muted" && "bg-surface-muted",
        tone === "dark" && "bg-[#151a22] text-ink-inverse",
        className,
      )}
    >
      <div className="page-shell relative z-10">{children}</div>
    </section>
  );
}
