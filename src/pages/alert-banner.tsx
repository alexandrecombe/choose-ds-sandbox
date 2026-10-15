import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/components/choose-ui/alert-banner";
import { Info, CircleCheck, TriangleAlert, CircleX } from "lucide-react";

const variants = [
  {
    variant: "info" as const,
    icon: Info,
    title: "Accès restreint",
    description:
      "Vous consultez cette opération en lecture seule. Contactez un administrateur pour obtenir les droits d'édition.",
    descriptionShort: "Information contextuelle neutre.",
  },
  {
    variant: "success" as const,
    icon: CircleCheck,
    title: "Facturation réglée",
    description:
      "Le paiement a été reçu et validé. Aucune action supplémentaire requise.",
    descriptionShort:
      "Confirmation d'un état durable que l'utilisateur doit pouvoir retrouver en revenant sur l'écran. À distinguer du toast qui confirme une micro-action et disparaît.",
  },
  {
    variant: "warning" as const,
    icon: TriangleAlert,
    title: "Certificat bientôt expiré",
    description:
      "Le certificat de conformité expire dans 12 jours. Pensez à le renouveler.",
    descriptionShort: "Condition à surveiller sans blocage immédiat.",
  },
  {
    variant: "destructive" as const,
    icon: CircleX,
    title: "Synchronisation échouée",
    description:
      "Les données n'ont pas pu être mises à jour depuis 2 heures. Vérifiez la connexion au service distant.",
    descriptionShort: "Erreur ou blocage nécessitant une action.",
  },
];

const props: {
  name: string;
  type: string;
  default: string;
  description: string;
}[] = [
  {
    name: "variant",
    type: '"default" | "info" | "success" | "warning" | "destructive"',
    default: '"info"',
    description: "Style visuel selon la sémantique du message",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description:
      "Icône Lucide, puis AlertTitle, AlertDescription et AlertAction",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Classes CSS additionnelles fusionnées via cn()",
  },
];

export default function AlertBannerPage() {
  return (
    <div className="max-w-4xl px-10 py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
        Alert banner
      </h1>
      <p className="mt-2 text-base text-muted-foreground">
        Message système persistant, affiché en place dans le flux de la page.
        Non éphémère.
      </p>

      {/* ── Composition ──────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-foreground">Composition</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Le composant s'assemble par enfants : l'icône Lucide du variant en
          premier, puis le titre, le texte de support et l'action.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs text-foreground">
{`<Alert variant="success">
  <CircleCheck />
  <AlertTitle>Facturation réglée</AlertTitle>
  <AlertDescription>Le paiement a été confirmé.</AlertDescription>
  <AlertAction>
    <Button variant="secondary">Voir le reçu</Button>
  </AlertAction>
</Alert>`}
        </pre>
      </section>

      {/* ── Variants ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-foreground">Variants</h2>

        <div className="mt-6 space-y-8">
          {variants.map((v) => (
            <div key={v.variant} className="border-b border-border/50 pb-6">
              <p className="font-mono text-sm font-medium text-foreground">
                {v.variant}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {v.descriptionShort}
              </p>
              <div className="mt-4 space-y-3">
                <Alert variant={v.variant}>
                  <v.icon />
                  <AlertTitle>{v.title}</AlertTitle>
                  <AlertDescription>{v.description}</AlertDescription>
                </Alert>
                <Alert variant={v.variant}>
                  <v.icon />
                  <AlertTitle>{v.title}</AlertTitle>
                </Alert>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Props ─────────────────────────────────────────────────── */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold text-foreground">Props</h2>

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
                  Défaut
                </th>
                <th className="pb-2 font-medium text-muted-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {props.map((p) => (
                <tr key={p.name} className="border-b border-border/50">
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

      {/* ── Anatomie ──────────────────────────────────────────────── */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold text-foreground">Anatomie</h2>
        <ul className="mt-4 space-y-1.5 text-sm text-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
            Titre obligatoire (une ligne,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
              font-sans
            </code>
            ).
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
            Texte de support optionnel sous le titre, sur un token de texte
            atténué.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
            Icône Lucide du variant en tête (20px), alignée sur la première
            ligne du titre.
          </li>
        </ul>
      </section>

      {/* ── Règles d'usage ────────────────────────────────────────── */}
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
                Communiquer un état persistant lié à la page ou à une section
                (accès restreint, données obsolètes, mode dégradé).
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Signaler une erreur de contexte qui ne disparaît pas seule et
                demande une lecture ou une action.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Introduire une contrainte durable en tête d'un formulaire ou
                d'une section.
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
                Retour éphémère après une micro-action (Copié, Enregistré) —
                utiliser un toast.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Erreur de validation attachée à un champ — utiliser le message
                d'erreur inline du champ, pas un banner.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Action destructive à confirmer — utiliser un dialog de
                confirmation.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Simple statut sur un élément de liste — utiliser un Badge.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Frontière avec les composants voisins
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Éphémère, confirme une micro-action, disparaît seul — toast.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Attaché à un champ, lié à la validation — erreur inline.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Persistant, contextuel à la page ou la section, doit rester
                visible au retour sur l'écran — Alert banner.
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
                Typo :{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                  font-sans
                </code>{" "}
                pour le titre comme pour le support.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Couleur : tokens sémantiques de feedback uniquement (fond,
                bordure, texte). Le token porte le sens du variant.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Marqueur en tête : icône Lucide du variant, 20px, alignée sur la
                première ligne du titre. Jamais d'emoji, y compris sur success.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Un banner porte au plus une action ; au-delà, repenser le
                placement.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
