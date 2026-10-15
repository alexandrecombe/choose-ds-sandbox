/**
 * Base : reui — badge (Base UI)
 * https://reui.io/docs/badge
 * Restylé Choose. Voir SOURCES.md.
 */
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "relative inline-flex shrink-0 items-center justify-center w-fit border border-transparent font-sans font-medium whitespace-nowrap outline-none transition-shadow",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-3",
  ],
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "border-border bg-transparent",
        info: "border-info-accent-border bg-info-accent text-info-accent-foreground",
        progress:
          "border-progress-accent-border bg-progress-accent text-progress-accent-foreground",
        success:
          "border-success-accent-border bg-success-accent text-success-accent-foreground",
        warning:
          "border-warning-accent-border bg-warning-accent text-warning-accent-foreground",
        destructive:
          "border-destructive-accent-border bg-destructive-accent text-destructive-accent-foreground",
        "primary-light":
          "border-primary/10 bg-primary/10 text-primary dark:border-primary/25 dark:bg-primary/15 dark:text-primary",
        "primary-outline": "bg-background border-border text-primary",
      },
      size: {
        xs: "px-1 py-[0.0625rem] text-[0.6rem] leading-none h-4 min-w-4 gap-1",
        sm: "px-1 py-[0.0625rem] text-[0.625rem] leading-none h-[1.125rem] min-w-[1.125rem] gap-1",
        default: "px-[0.3125rem] py-0.5 text-xs h-5 min-w-5 gap-1",
        lg: "px-1.5 py-0.5 text-xs h-[1.375rem] min-w-[1.375rem] gap-1",
        xl: "px-2 py-[0.1875rem] text-sm h-6 min-w-6 gap-1.5",
      },
      /** `default`: rayon Choose (--radius-sm). `full`: pilule. */
      radius: {
        default: "rounded-sm",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  },
);

interface BadgeProps extends useRender.ComponentProps<"span"> {
  variant?: VariantProps<typeof badgeVariants>["variant"];
  size?: VariantProps<typeof badgeVariants>["size"];
  radius?: VariantProps<typeof badgeVariants>["radius"];
}

function Badge({
  className,
  variant,
  size,
  radius,
  render,
  ...props
}: BadgeProps) {
  const defaultProps = {
    "data-slot": "badge",
    className: cn(badgeVariants({ variant, size, radius, className })),
  };

  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(defaultProps, props),
  });
}

export { Badge, badgeVariants, type BadgeProps };
