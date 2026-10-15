/**
 * Base : shadcn/ui — card (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/card
 * Surcouche mince sur components/ui/card.tsx : le composant upstream repose
 * déjà sur les tokens Choose (--card, --border, --muted-foreground).
 * La surcouche n'impose que `font-sans`. Voir SOURCES.md.
 */
import { type ComponentProps } from "react";
import {
  Card as BaseCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: ComponentProps<typeof BaseCard>) {
  return <BaseCard className={cn("font-sans", className)} {...props} />;
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
};
