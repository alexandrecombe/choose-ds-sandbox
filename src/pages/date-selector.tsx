import { useEffect, useState } from "react";
import { CalendarIcon } from "lucide-react";
import {
  DateSelector,
  formatDateValue,
  type DateSelectorValue,
} from "@/components/choose-ui/date-selector";
import { Button } from "@/components/choose-ui/button";
import { Separator } from "@/components/choose-ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

function Valeur({ value }: { value?: DateSelectorValue }) {
  if (!value) {
    return (
      <p className="text-xs text-muted-foreground">Aucun filtre sélectionné</p>
    );
  }
  return (
    <pre className="overflow-x-auto rounded-lg border border-border bg-muted/40 p-3 text-xs leading-relaxed text-foreground">
      {JSON.stringify(value, null, 2)}
    </pre>
  );
}

/* Forme popover : le sélecteur édite un brouillon, « Annuler » le jette,
   « Appliquer » seul le valide. C'est ce que reui appelle « committed on
   Apply », et la vraie différence avec la forme à plat. */
function FiltrePopover() {
  const [value, setValue] = useState<DateSelectorValue | undefined>();
  const [brouillon, setBrouillon] = useState<DateSelectorValue | undefined>();
  const [ouvert, setOuvert] = useState(false);

  useEffect(() => {
    if (ouvert) setBrouillon(value);
  }, [ouvert, value]);

  return (
    <Popover open={ouvert} onOpenChange={setOuvert}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          prefix={<CalendarIcon />}
          className="w-72 justify-start font-normal"
        >
          {value ? formatDateValue(value) : "Choisir une période"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-3">
          <DateSelector
            value={brouillon}
            onChange={setBrouillon}
            label="Période"
            inputHint="Essayez : 2026, T4, 05/10/2026"
          />
        </div>
        <Separator />
        <div className="flex justify-end gap-2 p-3">
          <Button
            variant="secondary"
            onClick={() => {
              setBrouillon(value);
              setOuvert(false);
            }}
          >
            Annuler
          </Button>
          <Button
            onClick={() => {
              setValue(brouillon);
              setOuvert(false);
            }}
          >
            Appliquer
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default function DateSelectorPage() {
  const [complet, setComplet] = useState<DateSelectorValue | undefined>();
  const [mois, setMois] = useState<DateSelectorValue | undefined>();
  const [unique, setUnique] = useState<DateSelectorValue | undefined>();

  return (
    <DocPage
      title="Date selector"
      description="Filtre de date d'un rapport ou d'une liste : on choisit une période — jour, mois, trimestre, semestre, année — et un opérateur. Il formule une condition, il ne saisit pas une date."
    >
      {/* ---- Complet ---- */}
      <DocSection
        title="Filtre complet"
        description="Toutes les périodes et tous les opérateurs. La valeur rendue est une structure, pas une Date — déplier le bloc ci-dessous en sélectionnant une période."
        code={`const [value, setValue] = useState<DateSelectorValue | undefined>()

<DateSelector value={value} onChange={setValue} label="Période" />`}
      >
        <div className="grid max-w-xl gap-3">
          <DateSelector
            value={complet}
            onChange={setComplet}
            label="Période"
          />
          <Valeur value={complet} />
        </div>
      </DocSection>

      {/* ---- Popover ---- */}
      <DocSection
        title="Derrière un popover"
        description="La forme à privilégier dans une barre de filtres : à plat, le sélecteur mange la page. Le calendrier édite un brouillon — « Annuler » le jette, « Appliquer » seul le valide, ce qui évite de relancer une requête à chaque clic."
        code={`const [value, setValue] = useState<DateSelectorValue>()
const [brouillon, setBrouillon] = useState<DateSelectorValue>()
const [ouvert, setOuvert] = useState(false)

useEffect(() => { if (ouvert) setBrouillon(value) }, [ouvert, value])

<Popover open={ouvert} onOpenChange={setOuvert}>
  <PopoverTrigger asChild>
    <Button variant="secondary" prefix={<CalendarIcon />}>
      {value ? formatDateValue(value) : "Choisir une période"}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0" align="start">
    <DateSelector value={brouillon} onChange={setBrouillon} />
    <Separator />
    {/* Annuler : setBrouillon(value) — Appliquer : setValue(brouillon) */}
  </PopoverContent>
</Popover>`}
      >
        <FiltrePopover />
      </DocSection>

      {/* ---- Restreint ---- */}
      <DocSection
        title="Périodes restreintes"
        description="`periodTypes` limite les onglets proposés. Un filtre qui n'a de sens qu'au mois ou au trimestre ne doit pas offrir le jour."
        code={`<DateSelector
  periodTypes={["month", "quarter", "year"]}
  label="Période de facturation"
/>`}
      >
        <div className="grid max-w-xl gap-3">
          <DateSelector
            value={mois}
            onChange={setMois}
            periodTypes={["month", "quarter", "year"]}
            label="Période de facturation"
          />
          <Valeur value={mois} />
        </div>
      </DocSection>

      {/* ---- Date unique ---- */}
      <DocSection
        title="Sans intervalle"
        description="`allowRange={false}` retire l'opérateur « entre » et verrouille la sélection sur une date unique."
        code={`<DateSelector
  allowRange={false}
  periodTypes={["day"]}
  label="Expédié le"
/>`}
      >
        <div className="grid max-w-xl gap-3">
          <DateSelector
            value={unique}
            onChange={setUnique}
            allowRange={false}
            periodTypes={["day"]}
            label="Expédié le"
          />
          <Valeur value={unique} />
        </div>
      </DocSection>

      {/* ---- Bonnes pratiques ---- */}
      <DocPractices
        items={[
          "Ne pas le détourner en champ de formulaire : sa valeur est une condition, pas une date.",
          "Ne jamais traiter la valeur comme une Date — sur une période mois ou trimestre, startDate n'est pas renseigné.",
          "Passer un setter stable à onChange : il se déclenche au montage et à chaque changement d'identité de la fonction.",
          "Restreindre periodTypes aux périodes qui ont du sens pour le filtre.",
          "Toujours donner un label : sans lui, le filtre n'annonce pas sur quoi il porte.",
        ]}
      />
    </DocPage>
  );
}
