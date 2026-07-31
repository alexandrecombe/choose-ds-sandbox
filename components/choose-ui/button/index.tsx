import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary:
    "border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost:
    "text-foreground hover:bg-accent hover:text-accent-foreground",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", icon, className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium font-sans transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        "disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {icon && <span className="shrink-0 [&>svg]:size-4">{icon}</span>}
      {children}
    </button>
  ),
);

Button.displayName = "Button";
