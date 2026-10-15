/**
 * Base : reui — frame
 * https://reui.io/docs/components/base/frame
 * Surcouche mince sur components/reui/frame.tsx : le composant upstream
 * repose déjà sur les tokens Choose (--card, --border, --muted) et son rayon
 * retombe sur --radius-xl. La surcouche impose `font-sans`.
 *
 * Périmètre Choose : `variant` (ghost, inverse) et `dense` ne sont PAS
 * exposés. Le cadre garde toujours son contour et son rembourrage ; seules
 * les dispositions séparée, empilée et repliable sont retenues.
 * Voir SOURCES.md et frame.usage.md.
 */
import { type ComponentProps } from "react";
import {
  Frame as BaseFrame,
  FramePanel,
  FrameHeader,
  FrameTitle,
  FrameDescription,
  FrameFooter,
} from "@/components/reui/frame";
import { cn } from "@/lib/utils";

type FrameProps = Omit<
  ComponentProps<typeof BaseFrame>,
  "variant" | "dense"
>;

function Frame({ className, ...props }: FrameProps) {
  return <BaseFrame className={cn("font-sans", className)} {...props} />;
}

export {
  Frame,
  FramePanel,
  FrameHeader,
  FrameTitle,
  FrameDescription,
  FrameFooter,
};
export type { FrameProps };
