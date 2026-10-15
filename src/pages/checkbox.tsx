import { useState } from "react";
import { Checkbox } from "@/components/choose-ui/checkbox";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false);

  return (
    <DocPage
      title="Checkbox"
      description="Case à cocher pour un choix binaire ou une sélection multiple. Repose sur Base UI, avec état indeterminate natif."
    >
      {/* ---- Basique ---- */}
      <DocSection
        title="Checkbox simple"
        description="Un checkbox seul avec son label. L'état bascule au clic ou à la barre d'espace."
        code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <label htmlFor="terms" className="text-sm font-sans">
    Accepter les conditions
  </label>
</div>`}
      >
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-sans leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accepter les conditions
          </label>
        </div>
      </DocSection>

      {/* ---- Avec texte secondaire ---- */}
      <DocSection
        title="Avec description"
        description="Le label peut inclure un texte secondaire pour préciser l'effet du choix."
        code={`<div className="flex items-start gap-2">
  <Checkbox id="newsletter" />
  <div className="grid gap-1">
    <label htmlFor="newsletter" className="text-sm font-sans">
      Newsletter hebdomadaire
    </label>
    <p className="text-xs text-muted-foreground">
      Recevez un résumé chaque lundi.
    </p>
  </div>
</div>`}
      >
        <div className="flex items-start gap-2">
          <Checkbox id="newsletter" />
          <div className="grid gap-1">
            <label
              htmlFor="newsletter"
              className="text-sm font-sans leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Newsletter hebdomadaire
            </label>
            <p className="text-xs text-muted-foreground font-sans">
              Recevez un résumé chaque lundi.
            </p>
          </div>
        </div>
      </DocSection>

      {/* ---- Groupe ---- */}
      <DocSection
        title="Groupe de checkboxes"
        description="Plusieurs checkboxes groupés dans un fieldset. Chacun a son propre name."
        code={`<fieldset className="space-y-3">
  <legend className="text-sm font-medium">
    Notifications
  </legend>
  <div className="flex items-center gap-2">
    <Checkbox id="email" name="notif" defaultChecked />
    <label htmlFor="email">E-mail</label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="sms" name="notif" />
    <label htmlFor="sms">SMS</label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="push" name="notif" />
    <label htmlFor="push">Push</label>
  </div>
</fieldset>`}
      >
        <fieldset className="space-y-3">
          <legend className="text-sm font-medium font-sans">Notifications</legend>
          {[
            { id: "email", label: "E-mail", defaultChecked: true },
            { id: "sms", label: "SMS" },
            { id: "push", label: "Push" },
          ].map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <Checkbox
                id={item.id}
                name="notif"
                defaultChecked={item.defaultChecked}
              />
              <label
                htmlFor={item.id}
                className="text-sm font-sans leading-none"
              >
                {item.label}
              </label>
            </div>
          ))}
        </fieldset>
      </DocSection>

      {/* ---- Indeterminate ---- */}
      <DocSection
        title="Indéterminé"
        description="L'état indeterminate signale une sélection partielle. Il se pilote via la prop `indeterminate`."
        code={`<Checkbox indeterminate />`}
      >
        <div className="flex items-center gap-2">
          <Checkbox id="partial" indeterminate />
          <label
            htmlFor="partial"
            className="text-sm font-sans leading-none"
          >
            Sélectionner tout (partiel)
          </label>
        </div>
      </DocSection>

      {/* ---- Disabled ---- */}
      <DocSection
        title="Désactivé"
        description="Un checkbox désactivé n'est pas interactif. L'opacité réduite signale l'état."
        code={`<Checkbox disabled />
<Checkbox disabled defaultChecked />`}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox id="d1" disabled />
            <label
              htmlFor="d1"
              className="text-sm font-sans leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Option désactivée
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="d2" disabled defaultChecked />
            <label
              htmlFor="d2"
              className="text-sm font-sans leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Cochée et désactivée
            </label>
          </div>
        </div>
      </DocSection>

      {/* ---- Contrôlé ---- */}
      <DocSection
        title="Contrôlé"
        description="L'état est piloté par le parent via `checked` et `onCheckedChange`."
        code={`const [checked, setChecked] = useState(false)

<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
/>`}
      >
        <div className="flex items-center gap-2">
          <Checkbox
            id="controlled"
            checked={checked}
            onCheckedChange={setChecked}
          />
          <label
            htmlFor="controlled"
            className="text-sm font-sans leading-none"
          >
            {checked ? "Coché" : "Non coché"}
          </label>
        </div>
      </DocSection>

      {/* ---- Bonnes pratiques ---- */}
      <DocPractices
        items={[
          "Toujours associer un label visible au checkbox.",
          "Utiliser indeterminate pour signaler une sélection partielle dans un groupe.",
          "Formuler le label de façon affirmative (« Recevoir » et non « Ne pas recevoir »).",
          "Ne pas utiliser un checkbox pour un réglage appliqué instantanément — préférer un Switch.",
          "Ne pas utiliser un checkbox pour un choix exclusif — préférer un radio group.",
        ]}
      />
    </DocPage>
  );
}
