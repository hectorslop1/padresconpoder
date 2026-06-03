import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ProcessStepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="group relative h-full overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-ambient-lg">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary" />
      <CardHeader className="gap-5">
        <span className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-brand-primary-strong">
          Step {step}
        </span>
        <CardTitle className="text-[1.6rem]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
