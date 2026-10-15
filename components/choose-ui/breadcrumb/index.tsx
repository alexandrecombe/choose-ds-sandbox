/**
 * Base : shadcn/ui — breadcrumb (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/breadcrumb
 * Surcouche mince sur components/ui/breadcrumb.tsx : le composant upstream
 * repose déjà sur les tokens Choose (--muted-foreground, --foreground).
 * La surcouche n'impose que `font-sans`. Voir SOURCES.md.
 */
import { type ComponentProps } from "react";
import {
  Breadcrumb as BaseBreadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

function Breadcrumb({ className, ...props }: ComponentProps<typeof BaseBreadcrumb>) {
  return <BaseBreadcrumb className={cn("font-sans", className)} {...props} />;
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
