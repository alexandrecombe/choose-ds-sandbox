/**
 * Base : shadcn/ui — button-group (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/button-group
 * Surcouche mince sur components/ui/button-group.tsx. Attention : le groupe
 * fusionne les rayons de ses enfants via `[data-slot=button-group]`, il attend
 * donc le Button de components/ui, PAS choose-ui/button. Voir SOURCES.md.
 */
import { type ComponentProps } from "react";
import {
  ButtonGroup as BaseButtonGroup,
  ButtonGroupText,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import { cn } from "@/lib/utils";

function ButtonGroup({ className, ...props }: ComponentProps<typeof BaseButtonGroup>) {
  return <BaseButtonGroup className={cn("font-sans", className)} {...props} />;
}

export { ButtonGroup, ButtonGroupText, ButtonGroupSeparator };
