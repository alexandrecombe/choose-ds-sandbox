import { useState } from "react";
import { Switch } from "@/components/choose-ui/switch";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

export default function SwitchPage() {
  const [actif, setActif] = useState(true);
  const [reglages, setReglages] = useState({
    reclamation: true,
    retour: true,
    recap: false,
  });

  return (
    <DocPage
      title="Switch"
      description="Réglage on/off appliqué immédiatement. Basculer le switch, c'est déjà avoir changé l'état — il n'y a pas de bouton « Enregistrer » derrière."
    >
      {/* ---- Contrôlé ---- */}
      <DocSection
        title="Switch contrôlé"
        description="La forme normale : l'état est piloté par le parent et le changement applique le réglage."
        code={`const [actif, setActif] = useState(true)

<div className="flex items-center gap-2">
  <Switch
    id="notifs"
    checked={actif}
    onCheckedChange={setActif}
  />
  <label htmlFor="notifs">Notifications par e-mail</label>
</div>`}
      >
        <div className="flex items-center gap-2">
          <Switch id="notifs" checked={actif} onCheckedChange={setActif} />
          <label htmlFor="notifs" className="text-sm font-sans leading-none">
            Notifications par e-mail — {actif ? "activées" : "désactivées"}
          </label>
        </div>
      </DocSection>

      {/* ---- Panneau de réglages ---- */}
      <DocSection
        title="Panneau de réglages"
        description="Un réglage par ligne : le label à gauche, le switch aligné à droite. C'est la disposition courante dans un panneau de préférences."
        code={`<div className="flex items-center justify-between gap-4">
  <div className="grid gap-0.5">
    <label htmlFor="recap">Récapitulatif hebdomadaire</label>
    <p className="text-xs text-muted-foreground">
      Un résumé de vos opérations, chaque lundi.
    </p>
  </div>
  <Switch id="recap" checked={v} onCheckedChange={set} />
</div>`}
      >
        <div className="divide-y divide-border rounded-md border">
          {[
            {
              key: "reclamation" as const,
              label: "Nouvelle réclamation",
              hint: "Un client ouvre une réclamation sur une de vos commandes.",
            },
            {
              key: "retour" as const,
              label: "Retour reçu",
              hint: "Un colis retourné est réceptionné par le transporteur.",
            },
            {
              key: "recap" as const,
              label: "Récapitulatif hebdomadaire",
              hint: "Un résumé de vos opérations, chaque lundi matin.",
            },
          ].map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between gap-4 p-3"
            >
              <div className="grid gap-0.5">
                <label
                  htmlFor={item.key}
                  className="text-sm font-sans leading-none"
                >
                  {item.label}
                </label>
                <p className="text-xs text-muted-foreground font-sans">
                  {item.hint}
                </p>
              </div>
              <Switch
                id={item.key}
                checked={reglages[item.key]}
                onCheckedChange={(v) =>
                  setReglages((r) => ({ ...r, [item.key]: v }))
                }
              />
            </div>
          ))}
        </div>
      </DocSection>

      {/* ---- Tailles ---- */}
      <DocSection
        title="Tailles"
        description="`default` couvre le cas courant ; `sm` sert les contextes denses — une ligne de table, une barre d'outils."
        code={`<Switch size="default" defaultChecked />
<Switch size="sm" defaultChecked />`}
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Switch id="size-default" size="default" defaultChecked />
            <label
              htmlFor="size-default"
              className="text-sm font-sans leading-none"
            >
              default
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="size-sm" size="sm" defaultChecked />
            <label htmlFor="size-sm" className="text-sm font-sans leading-none">
              sm
            </label>
          </div>
        </div>
      </DocSection>

      {/* ---- Désactivé ---- */}
      <DocSection
        title="Désactivé"
        description="Un switch désactivé n'est pas basculable. Si la raison n'est pas évidente à l'écran, l'expliquer à côté."
        code={`<Switch disabled />
<Switch disabled defaultChecked />`}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Switch id="off-disabled" disabled />
            <label
              htmlFor="off-disabled"
              className="text-sm font-sans leading-none opacity-50"
            >
              Mode maintenance — réservé aux administrateurs
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="on-disabled" disabled defaultChecked />
            <label
              htmlFor="on-disabled"
              className="text-sm font-sans leading-none opacity-50"
            >
              Journalisation — imposée par la politique de sécurité
            </label>
          </div>
        </div>
      </DocSection>

      {/* ---- Bonnes pratiques ---- */}
      <DocPractices
        items={[
          "Contrôler le switch : sans onCheckedChange, l'utilisateur croit avoir changé un réglage qui n'est pas appliqué.",
          "Nommer l'état actif dans le label (« Recevoir les notifications »), jamais la négation.",
          "Ne pas mettre de switch dans un formulaire à bouton « Enregistrer » — c'est un Checkbox qu'il faut.",
          "Donner un name au switch quand il est dans un formulaire soumis nativement.",
          "Ne pas colorer un switch en succès ou en danger : il porte un état, pas un jugement.",
        ]}
      />
    </DocPage>
  );
}
