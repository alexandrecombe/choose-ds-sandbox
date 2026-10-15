/**
 * Source : shadcn/ui — skeleton (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/skeleton
 * Non distribué par le registry : code repris depuis la page de doc.
 * Copie conforme.
 * La surcouche Choose est dans components/choose-ui/skeleton. Voir SOURCES.md.
 */
import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
