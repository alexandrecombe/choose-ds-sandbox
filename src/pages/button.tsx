import { Save, Trash2, Plus, ArrowLeft } from "lucide-react";
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
        title="Avec icône"
        description="L'icône Lucide se passe via `icon` et se dimensionne sur le label (16px)."
        code={`<Button variant="primary" icon={<Save />}>
  Enregistrer
</Button>`}
      >
        {variants.map((v) => (
          <DocSpecimen key={v.variant} label={v.variant}>
            <Button variant={v.variant} icon={v.icone}>
              {v.label}
            </Button>
          </DocSpecimen>
        ))}
      </DocSection>

      <DocSection
        title="Désactivé"
        description="L'interaction est coupée et l'opacité réduite. Un bouton désactivé doit rester compréhensible : si la raison n'est pas évidente à l'écran, l'expliquer à côté."
        code={`<Button variant="primary" disabled>
  Enregistrer
</Button>`}
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
          "Pour une navigation pure, sans effet de bord, utiliser un lien — pas un Button. Le Button se réserve aux actions qui changent quelque chose.",
          "`destructive` ne s'expose jamais seul : toute action irréversible passe par un dialog de confirmation.",
          "Pour un choix binaire persistant (on/off), c'est un Switch, pas un bouton qui bascule son propre label.",
          "`ghost` sert les actions répétées en ligne, typiquement dans une table. Dans un formulaire, il se perd.",
          "Une icône par bouton, jamais deux, et seulement si elle ajoute une information que le label ne porte pas.",
          "Le label dit l'action, pas son résultat : « Valider l'opération », pas « Opération validée ».",
        ]}
      />
    </DocPage>
  );
}
