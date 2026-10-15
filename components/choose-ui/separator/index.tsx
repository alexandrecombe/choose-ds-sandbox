/**
 * Base : shadcn/ui — separator (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/separator
 * Surcouche mince sur components/ui/separator.tsx : le composant upstream
 * repose déjà sur le token --border. La surcouche n'impose que `font-sans`
 * sur le conteneur parent si nécessaire.
 * Voir SOURCES.md.
 */
import { type ComponentProps } from "react";
import { Separator as BaseSeparator } from "@/components/ui/separator";

function Separator(props: ComponentProps<typeof BaseSeparator>) {
  return <BaseSeparator {...props} />;
}

export { Separator };
