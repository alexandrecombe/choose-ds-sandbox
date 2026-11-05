/**
 * Source : shadcn/ui — aspect-ratio (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/aspect-ratio
 * Copie conforme, non restylée. Voir SOURCES.md.
 */
import { cn } from "@/lib/utils"

function AspectRatio({
  ratio,
  className,
  ...props
}: React.ComponentProps<"div"> & { ratio: number }) {
  return (
    <div
      data-slot="aspect-ratio"
      style={
        {
          "--ratio": ratio,
        } as React.CSSProperties
      }
      className={cn("relative aspect-(--ratio)", className)}
      {...props}
    />
  )
}

export { AspectRatio }
