import { CheckCircle2 } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ServiceCard({
  title,
  description,
  bullets,
}: {
  title: string;
  description: string;
  bullets: string[];
}) {
  return (
    <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-ambient-lg">
      <CardHeader>
        <CardTitle className="text-[1.35rem]">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-ink-muted">
              <CheckCircle2 className="mt-0.5 size-4 text-brand-secondary" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
