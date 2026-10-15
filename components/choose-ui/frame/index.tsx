/**
 * Base : reui — frame
 * https://reui.io/docs/components/base/frame
 * Surcouche mince sur components/reui/frame.tsx : le composant upstream
 * repose déjà sur les tokens Choose (--card, --border, --muted) et son rayon
 * retombe sur --radius-xl. La surcouche n'impose que `font-sans`.
 * Voir SOURCES.md.
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

function Frame({ className, ...props }: ComponentProps<typeof BaseFrame>) {
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
