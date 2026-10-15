import { type ComponentProps } from "react";
import {
  Empty as UiEmpty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from "@/components/ui/empty";
import { cn } from "@/lib/utils";

function Empty({ className, ...props }: ComponentProps<typeof UiEmpty>) {
  return <UiEmpty className={cn("font-sans", className)} {...props} />;
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
};
