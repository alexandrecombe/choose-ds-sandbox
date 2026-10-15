/**
 * Base : shadcn/ui — button
 * https://ui.shadcn.com/docs/components/base/button
 * Restylé Choose, a fortement divergé (plus de cva ni de radix). Voir SOURCES.md.
 *
 * `prefix` / `suffix` reprennent la nomenclature Geist. `prefix` remplace
 * l'ancienne prop `icon`.
 */
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive";
type ButtonSize = "sm" | "default" | "lg";

interface ButtonBase
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "prefix"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Élément placé avant le label — une icône Lucide en pratique. */
  prefix?: ReactNode;
  /** Élément placé après le label. */
  suffix?: ReactNode;
  /** Remplace le préfixe par un indicateur d'activité et neutralise le clic. */
  loading?: boolean;
}

/* Sans label visible, le nom accessible doit venir d'ailleurs : `aria-label`
   est donc exigé par le typage dès que `iconOnly` est posé. */
type ButtonProps =
  | (ButtonBase & { iconOnly?: false })
  | (ButtonBase & { iconOnly: true; "aria-label": string });

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary:
    "border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost:
    "text-tertiary hover:bg-tertiary-accent hover:text-tertiary-accent-foreground",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
};

/* Hauteur, rembourrage et taille de texte. L'icône suit le label. */
const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 gap-1.5 rounded-md px-3 text-xs [&_svg]:size-3.5",
  default: "h-9 gap-2 rounded-md px-4 text-sm [&_svg]:size-4",
  lg: "h-11 gap-2 rounded-lg px-6 text-base [&_svg]:size-5",
};

/* Icône seule : carré, sans rembourrage horizontal. */
const iconOnlyStyles: Record<ButtonSize, string> = {
  sm: "size-8 rounded-md p-0 [&_svg]:size-3.5",
  default: "size-9 rounded-md p-0 [&_svg]:size-4",
  lg: "size-11 rounded-lg p-0 [&_svg]:size-5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "default",
      prefix,
      suffix,
      loading = false,
      iconOnly = false,
      className,
      children,
      disabled,
      onClick,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      /* Pendant le chargement, le bouton reste focusable et annonce son état :
         `disabled` le sortirait du parcours clavier et ferait disparaître le
         contexte pour les lecteurs d'écran. */
      disabled={disabled}
      aria-disabled={loading || undefined}
      aria-busy={loading || undefined}
      onClick={loading ? (e) => e.preventDefault() : onClick}
      className={cn(
        "inline-flex items-center justify-center font-sans font-semibold transition-colors",
        "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/50",
        "disabled:pointer-events-none disabled:opacity-50",
        "aria-disabled:cursor-default aria-disabled:opacity-70",
        iconOnly ? iconOnlyStyles[size] : sizeStyles[size],
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {loading ? (
        <LoaderCircle className="shrink-0 animate-spin" aria-hidden="true" />
      ) : (
        !iconOnly && prefix && <span className="shrink-0">{prefix}</span>
      )}
      {iconOnly && loading ? null : children}
      {!iconOnly && suffix && <span className="shrink-0">{suffix}</span>}
    </button>
  ),
);

Button.displayName = "Button";

export type { ButtonProps, ButtonVariant, ButtonSize };
