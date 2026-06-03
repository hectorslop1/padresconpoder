import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[0.08em] uppercase transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-primary-strong px-6 py-3 text-white shadow-ambient hover:-translate-y-0.5 hover:bg-brand-primary",
        secondary:
          "bg-brand-secondary px-6 py-3 text-ink shadow-ambient hover:-translate-y-0.5 hover:bg-[#63e4a0]",
        outline:
          "border border-brand-primary/30 bg-white/80 px-6 py-3 text-brand-primary-strong backdrop-blur hover:-translate-y-0.5 hover:border-brand-primary/50 hover:bg-brand-primary-soft/50",
        ghost:
          "px-4 py-2 text-ink-muted hover:bg-brand-primary-soft/40 hover:text-brand-primary-strong",
      },
      size: {
        default: "h-12",
        sm: "h-10 px-4 text-[0.72rem]",
        lg: "h-14 px-7 text-[0.78rem]",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
