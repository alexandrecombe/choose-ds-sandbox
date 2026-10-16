import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/choose-ui/calendar";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

export default function CalendarPage() {
  const [single, setSingle] = useState<Date | undefined>(new Date());
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <DocPage
      title="Calendar"
      description="Grille de jours affichée en place, pour choisir une date, plusieurs dates isolées ou un intervalle. Bâti sur react-day-picker, en français par défaut."
    >
      {/* ---- Simple ---- */}
      <DocSection
        title="Jour unique"
        description="Le cas courant. Sans `required`, recliquer sur le jour sélectionné le désélectionne — `onSelect` rend alors `undefined`."
        code={`const [date, setDate] = useState<Date | undefined>(new Date())

<Calendar mode="single" selected={date} onSelect={setDate} />`}
      >
        <div className="flex flex-col items-start gap-3">
          <Calendar
            mode="single"
            selected={single}
            onSelect={setSingle}
            className="rounded-lg border"
          />
          <p className="text-xs text-muted-foreground">
            {single
              ? single.toLocaleDateString("fr-FR", { dateStyle: "long" })
              : "Aucune date sélectionnée"}
          </p>
        </div>
      </DocSection>

      {/* ---- Intervalle ---- */}
      <DocSection
        title="Intervalle"
        description={'`mode="range"` attend un `DateRange` — un objet `{ from, to }`, pas une date.'}
        code={`const [range, setRange] = useState<DateRange | undefined>()

<Calendar mode="range" selected={range} onSelect={setRange} />`}
      >
        <div className="flex flex-col items-start gap-3">
          <Calendar
            mode="range"
            selected={range}
            onSelect={setRange}
            className="rounded-lg border"
          />
          <p className="text-xs text-muted-foreground">
            {range?.from
              ? `Du ${range.from.toLocaleDateString("fr-FR")}${
                  range.to ? ` au ${range.to.toLocaleDateString("fr-FR")}` : ""
                }`
              : "Aucun intervalle sélectionné"}
          </p>
        </div>
      </DocSection>

      {/* ---- Navigation ---- */}
      <DocSection
        title="Navigation par menus"
        description={'`captionLayout="dropdown"` remplace le mois en texte par des menus mois et année. À poser dès que la date visée peut être à plusieurs mois.'}
        code={`<Calendar mode="single" captionLayout="dropdown" />`}
      >
        <Calendar
          mode="single"
          captionLayout="dropdown"
          className="rounded-lg border"
        />
      </DocSection>

      {/* ---- Jours interdits ---- */}
      <DocSection
        title="Jours non sélectionnables"
        description="Borner la plage utile avec `disabled` plutôt que de valider après coup : un jour qu'on ne peut pas choisir ne doit pas être cliquable."
        code={`<Calendar
  mode="single"
  disabled={{ before: new Date() }}
/>`}
      >
        <Calendar
          mode="single"
          disabled={{ before: new Date() }}
          className="rounded-lg border"
        />
      </DocSection>

      {/* ---- Bonnes pratiques ---- */}
      <DocPractices
        items={[
          "Garder la locale française : sans elle, la semaine démarre le dimanche et les mois s'affichent en anglais.",
          "Interdire les jours impossibles via disabled plutôt que de les refuser à la validation.",
          "Passer captionLayout en dropdown dès qu'on vise une date à plusieurs mois.",
          "Gérer le cas undefined : sans required, un second clic désélectionne le jour.",
          "Pour un champ de formulaire, utiliser Date picker — un calendrier à plat mange la page.",
        ]}
      />
    </DocPage>
  );
}
