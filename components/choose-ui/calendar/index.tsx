/**
 * Base : shadcn/ui — calendar (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/calendar
 * Surcouche mince sur components/ui/calendar.tsx, lui-même bâti sur
 * react-day-picker. Le composant upstream repose déjà sur les tokens Choose.
 *
 * Deux écarts Choose, et deux seulement :
 * - `font-sans` sur la grille ;
 * - la locale `fr` par défaut. Sans elle, react-day-picker affiche les jours
 *   et les mois en anglais et démarre la semaine le dimanche. C'est un réglage
 *   de produit, pas une préférence : le back-office est francophone.
 * Voir SOURCES.md.
 */
import { fr } from "react-day-picker/locale";

import {
  Calendar as CalendarBase,
  CalendarDayButton,
} from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

function Calendar({
  className,
  locale = fr,
  ...props
}: React.ComponentProps<typeof CalendarBase>) {
  return (
    <CalendarBase
      locale={locale}
      className={cn("font-sans", className)}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
