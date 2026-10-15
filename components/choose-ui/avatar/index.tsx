/**
 * Base : shadcn/ui — avatar (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/avatar
 * Surcouche mince sur components/ui/avatar.tsx : le composant upstream repose
 * déjà sur les tokens Choose (--muted, --border, --primary, --background).
 * La surcouche n'impose que la typo `font-sans` sur le fallback et le compteur
 * de groupe. Voir SOURCES.md.
 */
import { type ComponentProps } from "react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback as BaseAvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount as BaseAvatarGroupCount,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type AvatarSize = "sm" | "default" | "lg";

function AvatarFallback({
  className,
  ...props
}: ComponentProps<typeof BaseAvatarFallback>) {
  return (
    <BaseAvatarFallback
      className={cn("font-sans font-medium", className)}
      {...props}
    />
  );
}

function AvatarGroupCount({
  className,
  ...props
}: ComponentProps<typeof BaseAvatarGroupCount>) {
  return (
    <BaseAvatarGroupCount
      className={cn("font-sans font-medium", className)}
      {...props}
    />
  );
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
};
export type { AvatarSize };
