/**
 * Base : shadcn/ui — select (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/select
 * Surcouche mince sur components/ui/select.tsx : le composant upstream repose
 * déjà sur les tokens Choose (--input, --ring, --popover, --accent).
 * La surcouche n'impose que `font-sans` sur le trigger.
 * Voir SOURCES.md.
 */
import { type ComponentProps } from "react";
import {
  Select,
  SelectContent as BaseSelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger as BaseSelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

function SelectTrigger({
  className,
  ...props
}: ComponentProps<typeof BaseSelectTrigger>) {
  return (
    <BaseSelectTrigger className={cn("font-sans", className)} {...props} />
  );
}

function SelectContent({
  className,
  ...props
}: ComponentProps<typeof BaseSelectContent>) {
  return (
    <BaseSelectContent className={cn("font-sans", className)} {...props} />
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
