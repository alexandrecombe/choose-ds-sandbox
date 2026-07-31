import { type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "neutral" | "success" | "warning" | "destructive";

interface BadgeProps {
  variant?: BadgeVariant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, CSSProperties> = {
  neutral: {
    backgroundColor: "var(--muted)",
    color: "var(--muted-foreground)",
  },
  success: {
    backgroundColor: "var(--success-accent)",
    color: "var(--success-accent-foreground)",
  },
  warning: {
    backgroundColor: "var(--warning-accent)",
    color: "var(--warning-accent-foreground)",
  },
  destructive: {
    backgroundColor: "var(--destructive-accent)",
    color: "var(--destructive-accent-foreground)",
  },
};

export function Badge({
  variant = "neutral",
  icon,
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-sm px-2 py-0.5 text-xs font-medium font-sans",
        className,
      )}
      style={variantStyles[variant]}
    >
      {icon && <span className="shrink-0 [&>svg]:size-3.5">{icon}</span>}
      {children}
    </span>
  );
}
