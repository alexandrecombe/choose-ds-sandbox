/**
 * Base : reui — date-selector
 * https://reui.io/components/date-selector
 * Surcouche sur components/reui/date-selector.tsx.
 *
 * Quatre écarts Choose, tous des corrections de défauts inadaptés au produit,
 * pas des préférences :
 * - i18n française complète — l'upstream est en anglais ;
 * - `weekStartsOn: 1` — la semaine démarre le lundi, comme dans Calendar ;
 * - `dayDateFormat: "dd/MM/yyyy"` — l'upstream est en MM/dd/yyyy ;
 * - `maxYear` calculé sur l'année courante + 1. L'upstream le fige à 2026,
 *   ce qui rendait l'année suivante inatteignable dès 2026.
 * Voir SOURCES.md.
 */
import {
  DateSelector as DateSelectorBase,
  type DateSelectorI18nConfig,
  type DateSelectorProps,
  type DateSelectorValue,
  type DateSelectorFilterType,
  type DateSelectorPeriodType,
} from "@/components/reui/date-selector";
import { cn } from "@/lib/utils";

const I18N_FR: DateSelectorI18nConfig = {
  selectDate: "Choisir une date",
  apply: "Appliquer",
  cancel: "Annuler",
  clear: "Effacer",
  today: "Aujourd'hui",
  filterTypes: {
    is: "est",
    before: "avant",
    after: "après",
    between: "entre",
  },
  periodTypes: {
    day: "Jour",
    month: "Mois",
    quarter: "Trimestre",
    halfYear: "Semestre",
    year: "Année",
  },
  months: [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ],
  monthsShort: [
    "janv.",
    "févr.",
    "mars",
    "avr.",
    "mai",
    "juin",
    "juil.",
    "août",
    "sept.",
    "oct.",
    "nov.",
    "déc.",
  ],
  quarters: ["T1", "T2", "T3", "T4"],
  halfYears: ["S1", "S2"],
  weekdays: [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
  ],
  weekdaysShort: ["di", "lu", "ma", "me", "je", "ve", "sa"],
  placeholder: "Choisir une date…",
  rangePlaceholder: "Choisir une période…",
};

function DateSelector({
  className,
  i18n,
  weekStartsOn = 1,
  dayDateFormat = "dd/MM/yyyy",
  maxYear = new Date().getFullYear() + 1,
  ...props
}: DateSelectorProps) {
  return (
    <DateSelectorBase
      i18n={{ ...I18N_FR, ...i18n }}
      weekStartsOn={weekStartsOn}
      dayDateFormat={dayDateFormat}
      maxYear={maxYear}
      className={cn("font-sans", className)}
      {...props}
    />
  );
}

export {
  DateSelector,
  I18N_FR,
  type DateSelectorProps,
  type DateSelectorValue,
  type DateSelectorFilterType,
  type DateSelectorPeriodType,
};
