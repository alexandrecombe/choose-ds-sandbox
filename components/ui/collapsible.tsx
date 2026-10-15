/**
 * Collapsible — écrit à la main sur @base-ui/react/collapsible.
 *
 * ATTENTION, ce fichier n'est PAS une copie upstream : shadcn/ui ne publie pas
 * de variante Base UI pour ce composant (son registry sert la version radix,
 * un simple ré-export de 11 lignes). Comme toute la famille installée ici est
 * en Base UI, ce wrapper reprend la nomenclature shadcn (Collapsible /
 * CollapsibleTrigger / CollapsibleContent) au-dessus du primitif Base UI.
 *
 * Il existe pour les panneaux repliables du Frame (c-frame-5). Voir SOURCES.md.
 */
import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import { cn } from "@/lib/utils";

function Collapsible({ ...props }: CollapsiblePrimitive.Root.Props) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({
  className,
  ...props
}: CollapsiblePrimitive.Trigger.Props) {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="collapsible-trigger"
      className={cn("w-full text-left", className)}
      {...props}
    />
  );
}

function CollapsibleContent({
  className,
  ...props
}: CollapsiblePrimitive.Panel.Props) {
  return (
    <CollapsiblePrimitive.Panel
      data-slot="collapsible-content"
      className={cn("overflow-hidden", className)}
      {...props}
    />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
