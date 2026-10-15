/**
 * Base : shadcn/ui — attachment (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/attachment
 * Surcouche mince sur components/ui/attachment.tsx. La surcouche n'impose que
 * `font-sans`. À savoir : le composant ne téléverse rien, il met en forme le
 * `state` qu'on lui passe. Voir SOURCES.md.
 */
import { type ComponentProps } from "react";
import {
  Attachment as BaseAttachment,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentActions,
  AttachmentAction,
  AttachmentTrigger,
} from "@/components/ui/attachment";
import { cn } from "@/lib/utils";

function Attachment({
  className,
  ...props
}: ComponentProps<typeof BaseAttachment>) {
  return <BaseAttachment className={cn("font-sans", className)} {...props} />;
}

export {
  Attachment,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentActions,
  AttachmentAction,
  AttachmentTrigger,
};
