import { ArrowUpRight } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function DifferentiatorCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="group h-full bg-white/95 transition-all duration-300 hover:-translate-y-1 hover:shadow-ambient-lg">
      <CardHeader className="flex-row items-start justify-between gap-4">
        <div className="space-y-3">
          <CardTitle className="text-[1.25rem]">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="rounded-full border border-brand-primary/15 bg-brand-primary-soft/55 p-3 text-brand-primary-strong transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
          <ArrowUpRight className="size-4" />
        </div>
      </CardHeader>
      <CardContent />
    </Card>
  );
}
