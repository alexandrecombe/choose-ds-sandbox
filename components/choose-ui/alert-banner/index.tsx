/**
 * Base : reui — alert
 * https://reui.io/docs/components/base/alert
 * Structure et API reprises de reui (composition Alert / AlertTitle /
 * AlertDescription / AlertAction). Couleurs remappées sur les tokens Choose
 * `--*-accent` : les cssVars de reui ne sont PAS installées. Voir SOURCES.md.
 */
import { type CSSProperties, type ComponentProps } from "react";
import {
  Alert as ReuiAlert,
  AlertTitle,
  AlertDescription,
  AlertAction,
} from "@/components/reui/alert";
import { cn } from "@/lib/utils";

type AlertBannerVariant =
  | "default"
  | "info"
  | "success"
  | "warning"
  | "destructive";

/* Surface : seuls le fond et la bordure portent la couleur du variant. */
const variantStyles: Record<AlertBannerVariant, CSSProperties> = {
  default: {
    backgroundColor: "var(--card)",
    borderColor: "var(--border)",
  },
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

/* L'icône est le seul élément qui garde la couleur du variant. */
const variantIconClasses: Record<AlertBannerVariant, string> = {
  default: "[&>svg]:text-(--muted-foreground)",
  info: "[&>svg]:text-(--info-accent-foreground)",
  success: "[&>svg]:text-(--success-accent-foreground)",
  warning: "[&>svg]:text-(--warning-accent-foreground)",
  destructive: "[&>svg]:text-(--destructive-accent-foreground)",
};

interface AlertProps extends Omit<ComponentProps<typeof ReuiAlert>, "variant"> {
  variant?: AlertBannerVariant;
}

/**
 * Icône Lucide attendue par variant, passée en premier enfant :
 * info → Info · success → CircleCheck · warning → TriangleAlert
 * destructive → CircleX · default → libre.
 */
function Alert({ variant = "info", className, style, ...props }: AlertProps) {
  return (
    <ReuiAlert
      className={cn(
        "font-sans [&>svg:not([class*=size-])]:size-5",
        variantIconClasses[variant],
        className,
      )}
      style={{ ...variantStyles[variant], ...style }}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription, AlertAction };
export type { AlertBannerVariant };
