/**
 * Base : shadcn/ui — textarea (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/textarea
 * Surcouche mince sur components/ui/textarea.tsx : le composant upstream repose
 * déjà sur les tokens Choose (--input, --ring, --destructive,
 * --muted-foreground). La surcouche n'impose que `font-sans`. Voir SOURCES.md.
 */
import { Textarea as TextareaBase } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

function Textarea({
  className,
  ...props
}: React.ComponentProps<typeof TextareaBase>) {
  return <TextareaBase className={cn("font-sans", className)} {...props} />;
}

export { Textarea };
