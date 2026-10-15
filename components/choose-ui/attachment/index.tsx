/**
 * Base : shadcn/ui — attachment (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/attachment
 * Surcouche Choose. À savoir : le composant ne téléverse rien, il met en
 * forme le `state` qu'on lui passe. Voir SOURCES.md.
 *
 * Écart assumé sur la largeur. Upstream modélise une pièce jointe comme un
 * *chip* de barre de composition : `w-fit`, dimensionné sur son contenu, dans
 * un AttachmentGroup qui défile horizontalement. L'usage Choose est une file
 * de fichiers en colonne, où des largeurs inégales donnent une liste
 * déchiquetée. La surcouche passe donc l'orientation horizontale en pleine
 * largeur, et le groupe rend le `w-fit` à ses enfants pour garder la barre de
 * composition intacte.
 */
import { type ComponentProps } from "react";
import {
  Attachment as BaseAttachment,
  AttachmentGroup as BaseAttachmentGroup,
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
  return (
    <BaseAttachment
      className={cn(
        "font-sans",
        /* Ciblé sur l'horizontale : l'orientation verticale a sa propre
           largeur fixe, qu'il ne faut pas écraser. */
        "data-[orientation=horizontal]:w-full",
        className,
      )}
      {...props}
    />
  );
}

function AttachmentGroup({
  className,
  ...props
}: ComponentProps<typeof BaseAttachmentGroup>) {
  return (
    <BaseAttachmentGroup
      className={cn(
        "font-sans",
        /* Dans un groupe, on retrouve le chip d'upstream. */
        "[&>[data-slot=attachment]]:w-fit",
        className,
      )}
      {...props}
    />
  );
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
