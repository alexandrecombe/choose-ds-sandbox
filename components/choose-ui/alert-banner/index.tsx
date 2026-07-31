import { type CSSProperties, type ReactNode } from "react";
import { Info, CircleCheck, TriangleAlert, CircleX } from "lucide-react";
import { cn } from "@/lib/utils";

type AlertBannerVariant = "info" | "success" | "warning" | "destructive";

interface AlertBannerProps {
  variant?: AlertBannerVariant;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

const variantStyles: Record<AlertBannerVariant, CSSProperties> = {
  info: {
    backgroundColor: "var(--info-accent)",
    borderColor: "var(--info-accent-border)",
    color: "var(--info-accent-foreground)",
  },
  success: {
    backgroundColor: "var(--success-accent)",
    borderColor: "var(--success-accent-border)",
    color: "var(--success-accent-foreground)",
  },
  warning: {
    backgroundColor: "var(--warning-accent)",
    borderColor: "var(--warning-accent-border)",
    color: "var(--warning-accent-foreground)",
  },
  destructive: {
    backgroundColor: "var(--destructive-accent)",
    borderColor: "var(--destructive-accent-border)",
    color: "var(--destructive-accent-foreground)",
  },
};

const variantIcons: Record<AlertBannerVariant, typeof Info> = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  destructive: CircleX,
};

export function AlertBanner({
  variant = "info",
  title,
  description,
  action,
  className,
}: AlertBannerProps) {
  const Icon = variantIcons[variant];

  return (
    <div
      role="alert"
      className={cn("flex gap-3 rounded-lg border p-4 font-sans", className)}
      style={variantStyles[variant]}
    >
      <Icon className="mt-0.5 size-5 shrink-0" />
      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
        {description && (
          <p className="mt-1 text-sm opacity-80">{description}</p>
        )}
        {action && <div className="mt-3">{action}</div>}
      </div>
    </div>
  );
}
