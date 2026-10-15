/**
 * Base : shadcn/ui — skeleton (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/skeleton
 * Surcouche mince sur components/ui/skeleton.tsx : le composant upstream
 * repose déjà sur le token --muted. Aucune divergence.
 * Voir SOURCES.md.
 */
import { type ComponentProps } from "react";
import { Skeleton as BaseSkeleton } from "@/components/ui/skeleton";

function Skeleton(props: ComponentProps<typeof BaseSkeleton>) {
  return <BaseSkeleton {...props} />;
}

export { Skeleton };
