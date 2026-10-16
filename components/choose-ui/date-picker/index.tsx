/**
 * Composition Choose — pas de source amont.
 * shadcn documente le date picker comme une recette, pas comme un composant :
 * « A date picker is built from Popover and Calendar (there is no DatePicker
 * component) ». https://ui.shadcn.com/docs/components/base/date-picker
 *
 * Ce fichier fige cette recette pour que chaque prototype ne la réinvente pas.
 * Il assemble le Popover radix de components/ui, le Calendar Choose et le
 * Button Choose. Le calendrier n'interagit pas avec le popover — il en est un
 * simple enfant — donc mélanger une primitive Base UI dans un popover radix
 * ne pose pas de problème ici. Voir SOURCES.md.
 */
"use client";

import * as React from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/choose-ui/button";
import { Calendar } from "@/components/choose-ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  /** Date sélectionnée. Contrôlé : toujours fournir `onSelect` avec. */
  value?: Date;
  onSelect?: (date: Date | undefined) => void;
  /** Texte affiché tant qu'aucune date n'est choisie. */
  placeholder?: string;
  /** Format date-fns du libellé. `PPP` donne « 23 septembre 2026 ». */
  dateFormat?: string;
  disabled?: boolean;
  /** Jours non sélectionnables, passés tels quels à react-day-picker. */
  disabledDays?: React.ComponentProps<typeof Calendar>["disabled"];
  /** `dropdown` dès que la date visée peut être à plusieurs mois. */
  captionLayout?: React.ComponentProps<typeof Calendar>["captionLayout"];
  id?: string;
  className?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
}

function DatePicker({
  value,
  onSelect,
  placeholder = "Choisir une date",
  dateFormat = "PPP",
  disabled,
  disabledDays,
  captionLayout,
  id,
  className,
  ...aria
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant="secondary"
          disabled={disabled}
          prefix={<CalendarIcon />}
          className={cn(
            "w-full justify-start font-normal",
            !value && "text-muted-foreground",
            className,
          )}
          {...aria}
        >
          {value ? format(value, dateFormat, { locale: fr }) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(d) => {
            onSelect?.(d);
            setOpen(false);
          }}
          disabled={disabledDays}
          captionLayout={captionLayout}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export { DatePicker, type DatePickerProps };
