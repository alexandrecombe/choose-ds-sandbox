/**
 * Base : shadcn/ui — alert-dialog (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/alert-dialog
 * Surcouche mince sur components/ui/alert-dialog.tsx : le composant upstream
 * repose déjà sur les tokens Choose. La surcouche n'impose que `font-sans`
 * sur le contenu. Voir SOURCES.md.
 */
import { type ComponentProps } from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent as BaseAlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";

function AlertDialogContent({
  className,
  ...props
}: ComponentProps<typeof BaseAlertDialogContent>) {
  return (
    <BaseAlertDialogContent className={cn("font-sans", className)} {...props} />
  );
}

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
