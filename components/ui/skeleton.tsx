/**
 * Source : shadcn/ui — skeleton
 * https://ui.shadcn.com/docs/components/skeleton
 * Copie conforme, non restylée. Voir SOURCES.md.
 */
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  )
}

export { Skeleton }
