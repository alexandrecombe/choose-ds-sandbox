/**
 * Base : shadcn/ui — radio-group (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/radio-group
 * Surcouche mince sur components/ui/radio-group.tsx : le composant upstream
 * repose déjà sur les tokens Choose (--input, --primary, --ring, --destructive).
 * La surcouche impose `font-sans` sur la racine, qui enveloppe les libellés
 * des options. Voir SOURCES.md.
 */
import {
  RadioGroup as RadioGroupBase,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupBase>) {
  return <RadioGroupBase className={cn("font-sans", className)} {...props} />;
}

export { RadioGroup, RadioGroupItem };
