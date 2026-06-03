import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PrimaryCtaGroup() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Button asChild size="lg">
        <a href="#families">
          Family Support
          <ArrowRight className="size-4" />
        </a>
      </Button>
      <Button asChild variant="outline" size="lg">
        <a href="#businesses">
          Business Consulting
          <ArrowRight className="size-4" />
        </a>
      </Button>
    </div>
  );
}
