import { BadgeCheck } from "lucide-react";

import { cn } from "@/lib/utils";

export function TrustChip({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line/70 bg-white/88 px-4 py-2 text-sm text-ink-muted shadow-[0_14px_30px_-24px_rgba(30,84,174,0.35)] backdrop-blur",
        className,
      )}
    >
      <BadgeCheck className="size-4 text-brand-secondary" />
      <span>{label}</span>
    </div>
  );
}
