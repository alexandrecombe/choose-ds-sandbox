/**
 * Base : shadcn/ui — pagination (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/pagination
 * Surcouche mince sur components/ui/pagination.tsx : le composant upstream
 * s'appuie sur le Button de components/ui et sur les tokens Choose.
 * La surcouche n'impose que `font-sans`. Voir SOURCES.md.
 */
import { type ComponentProps } from "react";
import {
  Pagination as BasePagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

function Pagination({
  className,
  ...props
}: ComponentProps<typeof BasePagination>) {
  return <BasePagination className={cn("font-sans", className)} {...props} />;
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
