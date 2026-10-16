import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/choose-ui/radio-group";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

export default function RadioGroupPage() {
  const [theme, setTheme] = useState("system");

  return (
    <DocPage
      title="Radio group"
      description="Choix exclusif entre deux et cinq options toutes visibles. Repose sur Base UI : navigation aux flèches et une seule tabulation pour le groupe."
    >
      {/* ---- Basique ---- */}
      <DocSection
        title="Radio group simple"
        description="Une option par ligne, toutes visibles. Une valeur est sélectionnée par défaut."
        code={`<RadioGroup defaultValue="standard">
  <div className="flex items-center gap-2">
    <RadioGroupItem id="standard" value="standard" />
    <label htmlFor="standard">Livraison standard</label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem id="express" value="express" />
    <label htmlFor="express">Livraison express</label>
  </div>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="standard">
          {[
            { id: "standard", label: "Livraison standard" },
            { id: "express", label: "Livraison express" },
            { id: "retrait", label: "Retrait en boutique" },
          ].map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <RadioGroupItem id={item.id} value={item.id} />
              <label htmlFor={item.id} className="text-sm leading-none">
                {item.label}
              </label>
            </div>
          ))}
        </RadioGroup>
      </DocSection>

      {/* ---- Avec description ---- */}
      <DocSection
        title="Avec description"
        description="Chaque option peut porter un texte secondaire qui précise sa conséquence."
        code={`<div className="flex items-start gap-2">
  <RadioGroupItem id="hebdo" value="hebdo" className="mt-0.5" />
  <div className="grid gap-1">
    <label htmlFor="hebdo">Hebdomadaire</label>
    <p className="text-xs text-muted-foreground">
      Un seul e-mail, le lundi matin.
    </p>
  </div>
</div>`}
      >
        <RadioGroup defaultValue="hebdo">
          {[
            {
              id: "instant",
              label: "Immédiate",
              hint: "Un e-mail à chaque événement.",
            },
            {
              id: "hebdo",
              label: "Hebdomadaire",
              hint: "Un seul e-mail, le lundi matin.",
            },
            {
              id: "jamais",
              label: "Aucune",
              hint: "Rien ne vous est envoyé.",
            },
          ].map((item) => (
            <div key={item.id} className="flex items-start gap-2">
              <RadioGroupItem
                id={item.id}
                value={item.id}
                className="mt-0.5"
              />
              <div className="grid gap-1">
                <label htmlFor={item.id} className="text-sm leading-none">
                  {item.label}
                </label>
                <p className="text-xs text-muted-foreground">{item.hint}</p>
              </div>
            </div>
          ))}
        </RadioGroup>
      </DocSection>

      {/* ---- Contrôlé ---- */}
      <DocSection
        title="Contrôlé"
        description="La valeur est pilotée par le parent via `value` et `onValueChange`. C'est la forme à utiliser dès qu'un changement déclenche un effet."
        code={`const [theme, setTheme] = useState("system")

<RadioGroup value={theme} onValueChange={setTheme}>
  <RadioGroupItem id="light" value="light" />
  <RadioGroupItem id="dark" value="dark" />
  <RadioGroupItem id="system" value="system" />
</RadioGroup>`}
      >
        <div className="space-y-3">
          <RadioGroup value={theme} onValueChange={setTheme}>
            {[
              { id: "light", label: "Clair" },
              { id: "dark", label: "Sombre" },
              { id: "system", label: "Système" },
            ].map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <RadioGroupItem id={item.id} value={item.id} />
                <label htmlFor={item.id} className="text-sm leading-none">
                  {item.label}
                </label>
              </div>
            ))}
          </RadioGroup>
          <p className="text-xs text-muted-foreground">
            Valeur courante : <code>{theme}</code>
          </p>
        </div>
      </DocSection>

      {/* ---- Désactivé ---- */}
      <DocSection
        title="Désactivé"
        description="Une option seule ou le groupe entier peut être désactivé. Si la raison n'est pas évidente à l'écran, l'expliquer à côté."
        code={`<RadioGroupItem value="pro" disabled />

<RadioGroup disabled defaultValue="a">…</RadioGroup>`}
      >
        <RadioGroup defaultValue="basique">
          {[
            { id: "basique", label: "Offre basique", disabled: false },
            { id: "pro", label: "Offre pro — réservée aux comptes vérifiés", disabled: true },
          ].map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <RadioGroupItem
                id={item.id}
                value={item.id}
                disabled={item.disabled}
              />
              <label
                htmlFor={item.id}
                className="text-sm leading-none data-disabled:opacity-50"
              >
                {item.label}
              </label>
            </div>
          ))}
        </RadioGroup>
      </DocSection>

      {/* ---- Erreur ---- */}
      <DocSection
        title="État d'erreur"
        description="Comme pour l'Input, l'erreur se pose par `aria-invalid` et le message se relie par `aria-describedby`. Ne jamais colorer la bordure à la main."
        code={`<RadioGroup aria-invalid aria-describedby="mode-erreur">
  …
</RadioGroup>
<p id="mode-erreur">Choisissez un mode de livraison.</p>`}
      >
        <div className="space-y-2">
          <RadioGroup aria-invalid aria-describedby="mode-erreur">
            {[
              { id: "err-a", label: "Standard" },
              { id: "err-b", label: "Express" },
            ].map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <RadioGroupItem id={item.id} value={item.id} aria-invalid />
                <label htmlFor={item.id} className="text-sm leading-none">
                  {item.label}
                </label>
              </div>
            ))}
          </RadioGroup>
          <p id="mode-erreur" className="text-xs text-destructive">
            Choisissez un mode de livraison.
          </p>
        </div>
      </DocSection>

      {/* ---- Bonnes pratiques ---- */}
      <DocPractices
        items={[
          "Garder le radio group entre 2 et 5 options — au-delà, passer à un Select.",
          "Toujours présélectionner une option : un groupe vide oblige à deviner ce qui est actif.",
          "Associer un label visible à chaque option, relié par htmlFor et id.",
          "Garder des libellés de même nature — ne pas mélanger « Clair » et « Ne pas forcer ».",
          "Ne pas utiliser un radio group pour une sélection multiple — préférer des Checkbox.",
        ]}
      />
    </DocPage>
  );
}
