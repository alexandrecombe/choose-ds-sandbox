/**
 * Base : shadcn/ui — tooltip (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/tooltip
 * Surcouche mince sur components/ui/tooltip-base.tsx — et non sur
 * `tooltip.tsx`, resté en Radix pour la sidebar de la sandbox. Le composant
 * upstream repose déjà sur les tokens Choose (--foreground, --background).
 * La surcouche impose `font-sans` sur la bulle. Voir SOURCES.md.
 */
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent as TooltipContentBase,
  TooltipProvider,
} from "@/components/ui/tooltip-base";
import { cn } from "@/lib/utils";

function TooltipContent({
  className,
  ...props
}: React.ComponentProps<typeof TooltipContentBase>) {
  return (
    <TooltipContentBase className={cn("font-sans", className)} {...props} />
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
