import { Save, Trash2, Plus, ArrowLeft } from "lucide-react";
import { Button } from "@/components/choose-ui/button";

const variants = [
  { variant: "primary" as const, label: "Primary" },
  { variant: "secondary" as const, label: "Secondary" },
  { variant: "ghost" as const, label: "Ghost" },
  { variant: "destructive" as const, label: "Destructive" },
];

const variantIcons = {
  primary: <Save />,
  secondary: <ArrowLeft />,
  ghost: <Plus />,
  destructive: <Trash2 />,
};

const props: { name: string; type: string; default: string; description: string }[] = [
  { name: "variant", type: '"primary" | "secondary" | "ghost" | "destructive"', default: '"primary"', description: "Style visuel du bouton" },
  { name: "icon", type: "ReactNode", default: "—", description: "Icône Lucide affichée avant le label. Les SVG sont dimensionnés à 16px automatiquement." },
  { name: "disabled", type: "boolean", default: "false", description: "Désactive l'interaction et réduit l'opacité" },
  { name: "className", type: "string", default: "—", description: "Classes CSS additionnelles fusionnées via cn()" },
  { name: "children", type: "ReactNode", default: "—", description: "Label du bouton" },
];

export default function ButtonPage() {
  return (
    <div className="max-w-4xl px-10 py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
        Button
      </h1>
      <p className="mt-2 text-base text-muted-foreground">
        Déclenche une action. Élément interactif principal de l'interface
        backoffice.
      </p>

      {/* ── Live variants ────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-foreground">Variants</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Chaque variant a un rôle précis. Un seul bouton primary par zone.
        </p>

        <div className="mt-6 space-y-8">
          {variants.map((v) => (
            <div key={v.variant} className="border-b border-border/50 pb-6">
              <p className="font-mono text-sm font-medium text-foreground">
                {v.variant}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {v.variant === "primary" &&
                  "Action principale d'un écran ou d'un formulaire. Un seul par zone."}
                {v.variant === "secondary" &&
                  "Actions de support à côté du primary (Annuler, Retour)."}
                {v.variant === "ghost" &&
                  "Actions tertiaires, barres d'outils, actions répétées en ligne (dans une table)."}
                {v.variant === "destructive" &&
                  "Suppression ou action irréversible. Toujours accompagnée d'une confirmation."}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Button variant={v.variant}>{v.label}</Button>
                <Button variant={v.variant} icon={variantIcons[v.variant]}>
                  Avec icône
                </Button>
                <Button variant={v.variant} disabled>
                  Désactivé
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Anatomy & Props ──────────────────────────────────────── */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold text-foreground">Props</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Étend{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            ButtonHTMLAttributes&lt;HTMLButtonElement&gt;
          </code>
          . Toutes les props natives sont transmises.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-2 pr-4 font-medium text-muted-foreground">
                  Prop
                </th>
                <th className="pb-2 pr-4 font-medium text-muted-foreground">
                  Type
                </th>
                <th className="pb-2 pr-4 font-medium text-muted-foreground">
                  Default
                </th>
                <th className="pb-2 font-medium text-muted-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {props.map((p) => (
                <tr
                  key={p.name}
                  className="border-b border-border/50"
                >
                  <td className="py-2.5 pr-4 font-mono text-xs font-medium text-foreground">
                    {p.name}
                  </td>
                  <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">
                    {p.type}
                  </td>
                  <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">
                    {p.default}
                  </td>
                  <td className="py-2.5 text-xs text-muted-foreground">
                    {p.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Usage rules ──────────────────────────────────────────── */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold text-foreground">
          Règles d'usage
        </h2>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Quand l'utiliser
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Déclencher une action (soumettre, enregistrer, ouvrir un dialog,
                lancer un traitement).
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Naviguer uniquement si l'action a un poids d'action
                (ex. « Créer une offre »). Pour une navigation pure, utiliser un
                lien.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Quand ne pas l'utiliser
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Navigation entre pages sans effet de bord — utiliser un lien
                stylé, pas un Button.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Choix binaire persistant (on/off) — utiliser un Switch.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Action destructive sans confirmation — passer par un dialog de
                confirmation, ne pas exposer l'action directement.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Règles Choose
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Typo : <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">font-sans</code> (Maison
                Neue). Jamais <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">font-display</code>.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Couleurs et fonds : tokens sémantiques uniquement. Jamais de
                couleur Tailwind brute ni de hex en dur.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Icône : Lucide uniquement, taille alignée sur le font-size du
                label (16px pour un bouton standard).
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Un bouton ne porte jamais deux icônes.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
