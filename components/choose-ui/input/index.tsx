/**
 * Base : shadcn/ui — input (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/input
 * Surcouche mince sur components/ui/input.tsx : le composant upstream repose
 * déjà sur les tokens Choose (--input, --ring, --destructive,
 * --muted-foreground). La surcouche n'impose que `font-sans`.
 * Voir SOURCES.md.
 */
import { type ComponentProps } from "react";
import { Input as BaseInput } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function Input({ className, ...props }: ComponentProps<typeof BaseInput>) {
  return <BaseInput className={cn("font-sans", className)} {...props} />;
}

export { Input };
