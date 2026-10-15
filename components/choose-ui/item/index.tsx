/**
 * Base : shadcn/ui — item (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/item
 * Surcouche mince sur components/ui/item.tsx : le composant upstream repose
 * déjà sur les tokens Choose (--border, --muted, --accent, --foreground).
 * La surcouche n'impose que `font-sans`. Voir SOURCES.md.
 */
import { type ComponentProps } from "react";
import {
  Item as BaseItem,
  ItemGroup as BaseItemGroup,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemHeader,
  ItemFooter,
  ItemSeparator,
} from "@/components/ui/item";
import { cn } from "@/lib/utils";

function Item({ className, ...props }: ComponentProps<typeof BaseItem>) {
  return <BaseItem className={cn("font-sans", className)} {...props} />;
}

function ItemGroup({ className, ...props }: ComponentProps<typeof BaseItemGroup>) {
  return <BaseItemGroup className={cn("font-sans", className)} {...props} />;
}

export {
  Item,
  ItemGroup,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemHeader,
  ItemFooter,
  ItemSeparator,
};
