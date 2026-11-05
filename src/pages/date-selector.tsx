import { useState } from "react";
import {
  DateSelector,
  type DateSelectorValue,
} from "@/components/choose-ui/date-selector";
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

export default function DateSelectorPage() {
  const [complet, setComplet] = useState<DateSelectorValue | undefined>();
  const [mois, setMois] = useState<DateSelectorValue | undefined>();
  const [unique, setUnique] = useState<DateSelectorValue | undefined>();

  return (
    <DocPage
      title="Date selector"
      description="Filtre de date d'un rapport ou d'une liste : on choisit une période — jour, mois, trimestre, semestre, année — et un opérateur. Ce n'est pas un champ de formulaire : pour ça, voir Date picker."
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
          "Ne pas confondre avec Date picker : celui-ci formule une condition, l'autre saisit une date.",
          "Ne jamais traiter la valeur comme une Date — sur une période mois ou trimestre, startDate n'est pas renseigné.",
          "Passer un setter stable à onChange : il se déclenche au montage et à chaque changement d'identité de la fonction.",
          "Restreindre periodTypes aux périodes qui ont du sens pour le filtre.",
          "Toujours donner un label : sans lui, le filtre n'annonce pas sur quoi il porte.",
        ]}
      />
    </DocPage>
  );
}
