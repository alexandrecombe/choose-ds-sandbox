import {
  Save,
  Trash2,
  Plus,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/choose-ui/button";
import { DocPage, DocSection, DocSpecimen, DocPractices } from "@/src/doc";

const variants = [
  { variant: "primary" as const, label: "Enregistrer", icone: <Save /> },
  { variant: "secondary" as const, label: "Retour", icone: <ArrowLeft /> },
  { variant: "ghost" as const, label: "Ajouter", icone: <Plus /> },
  { variant: "destructive" as const, label: "Supprimer", icone: <Trash2 /> },
];

export default function ButtonPage() {
  return (
    <DocPage
      title="Button"
      description="Déclenche une action. Élément interactif principal d'une interface back-office."
    >
      <DocSection
        title="Variants"
        description="Chaque variant a un rôle précis. Un seul bouton primary par zone."
        code={`<Button variant="primary">Enregistrer</Button>
<Button variant="secondary">Retour</Button>
<Button variant="ghost">Ajouter</Button>
<Button variant="destructive">Supprimer</Button>`}
      >
        {variants.map((v) => (
          <DocSpecimen key={v.variant} label={v.variant}>
            <Button variant={v.variant}>{v.label}</Button>
          </DocSpecimen>
        ))}
      </DocSection>

      <DocSection
        title="Tailles"
        description="`default` couvre le cas courant. `sm` pour les contextes denses — une table, une barre d'outils ; `lg` pour une action isolée mise en avant."
        code={`<Button size="sm">Enregistrer</Button>
<Button>Enregistrer</Button>
<Button size="lg">Enregistrer</Button>`}
      >
        {(["sm", "default", "lg"] as const).map((t) => (
          <DocSpecimen key={t} label={t}>
            <Button size={t}>Enregistrer</Button>
          </DocSpecimen>
        ))}
      </DocSection>

      <DocSection
        title="Préfixe et suffixe"
        description="`prefix` place une icône avant le label, `suffix` après. Le suffixe signale où mène l'action — une flèche d'avancement, un lien externe ; le préfixe qualifie l'action elle-même."
        code={`<Button prefix={<Save />}>Enregistrer</Button>
<Button suffix={<ArrowRight />}>Continuer</Button>
<Button prefix={<Save />} suffix={<ArrowRight />}>Enregistrer et continuer</Button>`}
      >
        <DocSpecimen label="prefix">
          <Button prefix={<Save />}>Enregistrer</Button>
        </DocSpecimen>
        <DocSpecimen label="suffix">
          <Button variant="secondary" suffix={<ArrowRight />}>
            Continuer
          </Button>
        </DocSpecimen>
        <DocSpecimen label="les deux">
          <Button prefix={<Save />} suffix={<ArrowRight />}>
            Enregistrer et continuer
          </Button>
        </DocSpecimen>
        <DocSpecimen label="lien externe">
          <Button variant="ghost" suffix={<ExternalLink />}>
            Voir la facture
          </Button>
        </DocSpecimen>
      </DocSection>

      <DocSection
        title="Préfixe par variant"
        description="L'icône suit la taille du label : 14px en `sm`, 16px en `default`, 20px en `lg`."
        code={`<Button variant="destructive" prefix={<Trash2 />}>
  Supprimer
</Button>`}
      >
        {variants.map((v) => (
          <DocSpecimen key={v.variant} label={v.variant}>
            <Button variant={v.variant} prefix={v.icone}>
              {v.label}
            </Button>
          </DocSpecimen>
        ))}
      </DocSection>

      <DocSection
        title="Chargement"
        description="`loading` remplace le préfixe par un indicateur d'activité et neutralise le clic. Le bouton reste focusable et annonce son état (aria-busy) — contrairement à `disabled`, qui le sortirait du parcours clavier."
        code={`<Button loading>Enregistrement…</Button>`}
      >
        {(["sm", "default", "lg"] as const).map((t) => (
          <DocSpecimen key={t} label={t}>
            <Button size={t} loading>
              Enregistrement…
            </Button>
          </DocSpecimen>
        ))}
        <DocSpecimen label="secondary">
          <Button variant="secondary" loading>
            Chargement…
          </Button>
        </DocSpecimen>
      </DocSection>

      <DocSection
        title="Désactivé"
        description="L'interaction est coupée et l'opacité réduite. Un bouton désactivé doit rester compréhensible : si la raison n'est pas évidente à l'écran, l'expliquer à côté."
        code={`<Button disabled>Enregistrer</Button>`}
      >
        {variants.map((v) => (
          <DocSpecimen key={v.variant} label={v.variant}>
            <Button variant={v.variant} disabled>
              {v.label}
            </Button>
          </DocSpecimen>
        ))}
      </DocSection>

      <DocPractices
        items={[
          "Un seul bouton `primary` par zone. Deux actions principales côte à côte signifient qu'aucune n'est principale.",
          "Préférer `loading` à un remplacement du label par un spinner : le bouton garde sa place dans le parcours clavier et annonce son état aux lecteurs d'écran.",
          "`loading` ne désactive pas le bouton au sens HTML — il neutralise le clic et pose `aria-busy`. Ne pas lui ajouter `disabled` : on perdrait justement ce que `loading` préserve.",
          "Le suffixe signale où mène l'action (flèche d'avancement, lien externe) ; le préfixe qualifie l'action. Un bouton ne porte jamais deux icônes du même côté.",
          "Pour une navigation pure, sans effet de bord, utiliser un lien — pas un Button. Le Button se réserve aux actions qui changent quelque chose.",
          "`destructive` ne s'expose jamais seul : toute action irréversible passe par un dialog de confirmation.",
          "`ghost` est le seul variant qui colore son texte sans aplat : il porte la couleur tertiary Choose, avec tertiary-accent en fond au survol.",
          "`ghost` sert les actions répétées en ligne, typiquement dans une table. Dans un formulaire, il se perd.",
          "Le label dit l'action, pas son résultat : « Valider l'opération », pas « Opération validée ».",
        ]}
      />
    </DocPage>
  );
}
