import { Info, CircleCheck, TriangleAlert, CircleX } from "lucide-react";
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertAction,
} from "@/components/choose-ui/alert-banner";
import { Button } from "@/components/choose-ui/button";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

const variants = [
  {
    variant: "info" as const,
    icone: Info,
    titre: "Accès restreint",
    texte:
      "Vous consultez cette opération en lecture seule. Contactez un administrateur pour obtenir les droits d'édition.",
  },
  {
    variant: "success" as const,
    icone: CircleCheck,
    titre: "Facturation réglée",
    texte: "Le paiement a été reçu et validé. Aucune action supplémentaire requise.",
  },
  {
    variant: "warning" as const,
    icone: TriangleAlert,
    titre: "Certificat bientôt expiré",
    texte:
      "Le certificat de conformité expire dans 12 jours. Pensez à le renouveler.",
  },
  {
    variant: "destructive" as const,
    icone: CircleX,
    titre: "Synchronisation échouée",
    texte:
      "Les données n'ont pas pu être mises à jour depuis 2 heures. Vérifiez la connexion au service distant.",
  },
];

export default function AlertBannerPage() {
  return (
    <DocPage
      title="Alert banner"
      description="Message système persistant, posé dans le flux de la page et toujours visible au retour sur l'écran. Non éphémère."
    >
      <DocSection
        title="Variants"
        description="Le token sémantique porte le sens ; l'icône Lucide du variant vient en premier enfant."
        layout="stack"
        code={`<Alert variant="success">
  <CircleCheck />
  <AlertTitle>Facturation réglée</AlertTitle>
  <AlertDescription>Le paiement a été reçu et validé.</AlertDescription>
</Alert>`}
      >
        {variants.map((v) => (
          <Alert key={v.variant} variant={v.variant}>
            <v.icone />
            <AlertTitle>{v.titre}</AlertTitle>
            <AlertDescription>{v.texte}</AlertDescription>
          </Alert>
        ))}
      </DocSection>

      <DocSection
        title="Titre seul"
        description="Le texte de support est optionnel. AlertTitle porte un line-clamp-1 : au-delà d'une ligne, le texte va dans AlertDescription."
        layout="stack"
        code={`<Alert variant="warning">
  <TriangleAlert />
  <AlertTitle>Certificat bientôt expiré</AlertTitle>
</Alert>`}
      >
        {variants.map((v) => (
          <Alert key={v.variant} variant={v.variant}>
            <v.icone />
            <AlertTitle>{v.titre}</AlertTitle>
          </Alert>
        ))}
      </DocSection>

      <DocSection
        title="Avec action"
        description="AlertAction se place à droite du message en desktop et repasse sous le texte en mobile. Au plus une zone d'action par banner."
        layout="stack"
        code={`<Alert variant="warning">
  <TriangleAlert />
  <AlertTitle>Certificat bientôt expiré</AlertTitle>
  <AlertDescription>Il expire dans 12 jours.</AlertDescription>
  <AlertAction>
    <Button variant="secondary">Renouveler</Button>
  </AlertAction>
</Alert>`}
      >
        <Alert variant="warning">
          <TriangleAlert />
          <AlertTitle>Certificat bientôt expiré</AlertTitle>
          <AlertDescription>
            Le certificat de conformité expire dans 12 jours.
          </AlertDescription>
          <AlertAction>
            <Button variant="secondary">Renouveler</Button>
          </AlertAction>
        </Alert>
        <Alert variant="destructive">
          <CircleX />
          <AlertTitle>Synchronisation échouée</AlertTitle>
          <AlertDescription>
            Les données n'ont pas pu être mises à jour depuis 2 heures.
          </AlertDescription>
          <AlertAction>
            <Button variant="secondary">Réessayer</Button>
          </AlertAction>
        </Alert>
      </DocSection>

      <DocSection
        title="Neutre"
        description="`default` est une surface de carte sans charge sémantique, pour une information qui n'est ni positive ni négative. L'icône est libre."
        layout="stack"
        code={`<Alert variant="default">
  <Info />
  <AlertTitle>Mode lecture seule</AlertTitle>
</Alert>`}
      >
        <Alert variant="default">
          <Info />
          <AlertTitle>Mode lecture seule</AlertTitle>
          <AlertDescription>
            Cet écran est en consultation. Les modifications sont désactivées.
          </AlertDescription>
        </Alert>
      </DocSection>

      <DocPractices
        items={[
          "Trois composants se disputent le feedback utilisateur. Éphémère et lié à une micro-action → toast. Attaché à un champ et lié à la validation → erreur inline. Persistant et contextuel à l'écran → Alert banner.",
          "`success` vaut aussi pour un état durable que l'utilisateur doit retrouver en revenant sur l'écran (facturation réglée). Ce n'est pas réservé aux erreurs.",
          "L'icône n'est plus déduite du variant : info → Info, success → CircleCheck, warning → TriangleAlert, destructive → CircleX. Ne jamais croiser l'icône d'un variant avec la couleur d'un autre.",
          "Jamais d'emoji comme marqueur, y compris sur un succès : la chaleur du message passe par le copywriting, pas par le pictogramme.",
          "Un banner porte au plus une action. Au-delà, c'est que le message devrait être ailleurs — un dialog ou une section dédiée.",
          "Pour un simple statut sur un élément de liste, c'est un Badge. L'Alert banner s'adresse à l'utilisateur ; le Badge qualifie un objet.",
          "Pour une action destructive à confirmer, c'est un dialog de confirmation, pas un banner d'avertissement qu'on peut ignorer.",
        ]}
      />
    </DocPage>
  );
}
