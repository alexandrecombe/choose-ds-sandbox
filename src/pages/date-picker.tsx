import { useState } from "react";
import { DatePicker } from "@/components/choose-ui/date-picker";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

export default function DatePickerPage() {
  const [livraison, setLivraison] = useState<Date | undefined>();
  const [naissance, setNaissance] = useState<Date | undefined>();
  const [erreur, setErreur] = useState<Date | undefined>();

  return (
    <DocPage
      title="Date picker"
      description="Un bouton qui affiche la date choisie et ouvre un calendrier dans un popover. Composition Choose de Popover et Calendar : shadcn ne livre pas de composant pour ça."
    >
      {/* ---- Simple ---- */}
      <DocSection
        title="Champ de date"
        description="Contrôlé : `value` et `onSelect` vont toujours ensemble. Le popover se ferme à la sélection — c'est le comportement attendu d'un champ."
        code={`const [date, setDate] = useState<Date | undefined>()

<label htmlFor="livraison">Date de livraison</label>
<DatePicker id="livraison" value={date} onSelect={setDate} />`}
      >
        <div className="grid max-w-xs gap-2">
          <label htmlFor="livraison" className="text-sm font-medium">
            Date de livraison
          </label>
          <DatePicker
            id="livraison"
            value={livraison}
            onSelect={setLivraison}
          />
        </div>
      </DocSection>

      {/* ---- Bornage ---- */}
      <DocSection
        title="Dates interdites"
        description="`disabledDays` est passé tel quel à react-day-picker. Borner ici plutôt que de valider après coup : un jour impossible ne doit pas être cliquable."
        code={`<DatePicker
  value={date}
  onSelect={setDate}
  disabledDays={{ before: new Date() }}
/>`}
      >
        <div className="grid max-w-xs gap-2">
          <label htmlFor="future" className="text-sm font-medium">
            Date d'expédition
          </label>
          <DatePicker
            id="future"
            value={livraison}
            onSelect={setLivraison}
            disabledDays={{ before: new Date() }}
            placeholder="À partir d'aujourd'hui"
          />
        </div>
      </DocSection>

      {/* ---- Date lointaine ---- */}
      <DocSection
        title="Date éloignée"
        description={'Pour une date à plusieurs mois ou années, `captionLayout="dropdown"` évite de cliquer la flèche vingt fois.'}
        code={`<DatePicker
  captionLayout="dropdown"
  dateFormat="dd/MM/yyyy"
/>`}
      >
        <div className="grid max-w-xs gap-2">
          <label htmlFor="naissance" className="text-sm font-medium">
            Date de fin de contrat
          </label>
          <DatePicker
            id="naissance"
            value={naissance}
            onSelect={setNaissance}
            captionLayout="dropdown"
          />
        </div>
      </DocSection>

      {/* ---- Erreur ---- */}
      <DocSection
        title="État d'erreur"
        description="Comme pour l'Input, l'erreur se pose par `aria-invalid` et le message se relie par `aria-describedby`."
        code={`<DatePicker
  aria-invalid
  aria-describedby="date-erreur"
/>
<p id="date-erreur">Choisissez une date de livraison.</p>`}
      >
        <div className="grid max-w-xs gap-2">
          <label htmlFor="err" className="text-sm font-medium">
            Date de livraison
          </label>
          <DatePicker
            id="err"
            value={erreur}
            onSelect={setErreur}
            aria-invalid
            aria-describedby="date-erreur"
          />
          <p id="date-erreur" className="text-xs text-destructive">
            Choisissez une date de livraison.
          </p>
        </div>
      </DocSection>

      {/* ---- Bonnes pratiques ---- */}
      <DocPractices
        items={[
          "Toujours un label visible : le placeholder du bouton annonce l'action, il ne nomme pas le champ.",
          "Préférer le format long (« 23 septembre 2026 ») : il lève l'ambiguïté jour / mois.",
          "Interdire les dates impossibles via disabledDays plutôt qu'à la validation.",
          "Passer captionLayout en dropdown dès que la date visée est à plusieurs mois.",
          "Pour une date de naissance, un champ de saisie reste plus rapide qu'un calendrier.",
        ]}
      />
    </DocPage>
  );
}
