/**
 * Base : origine à confirmer — ne correspond à aucun composant upstream du même nom.
 * Voir SOURCES.md.
 */
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

/* Surface : seuls le fond et la bordure portent la couleur du variant. */
const variantStyles: Record<AlertBannerVariant, CSSProperties> = {
  info: {
    backgroundColor: "var(--info-accent)",
    borderColor: "var(--info-accent-border)",
  },
  success: {
    backgroundColor: "var(--success-accent)",
    borderColor: "var(--success-accent-border)",
  },
  warning: {
    backgroundColor: "var(--warning-accent)",
    borderColor: "var(--warning-accent-border)",
  },
  destructive: {
    backgroundColor: "var(--destructive-accent)",
    borderColor: "var(--destructive-accent-border)",
  },
};

/* L'icône est le seul élément de texte qui garde la couleur du variant. */
const variantIconStyles: Record<AlertBannerVariant, CSSProperties> = {
  info: { color: "var(--info-accent-foreground)" },
  success: { color: "var(--success-accent-foreground)" },
  warning: { color: "var(--warning-accent-foreground)" },
  destructive: { color: "var(--destructive-accent-foreground)" },
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
      <Icon
        className="mt-0.5 size-5 shrink-0"
        style={variantIconStyles[variant]}
      />
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{title}</p>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
        {action && <div className="mt-3">{action}</div>}
      </div>
    </div>
  );
}
