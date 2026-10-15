import { useState } from "react";
import { TriangleAlert } from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/choose-ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

function DemoSuppression() {
  const [ouvert, setOuvert] = useState(false);
  return (
    <AlertDialog open={ouvert} onOpenChange={setOuvert}>
      <AlertDialogTrigger render={<Button variant="destructive" size="sm" />}>
        Supprimer l'opération
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Supprimer l'opération #4821 ?</AlertDialogTitle>
          <AlertDialogDescription>
            Les 348 références engagées seront détachées et les commandes en
            cours annulées. Cette action est irréversible.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction variant="destructive">
            Supprimer
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function DemoAvecMedia() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" size="sm" />}>
        Quitter sans enregistrer
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <TriangleAlert />
          </AlertDialogMedia>
          <AlertDialogTitle>Modifications non enregistrées</AlertDialogTitle>
          <AlertDialogDescription>
            Vous avez modifié cette fiche sans l'enregistrer. En quittant
            maintenant, vos changements seront perdus.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Rester</AlertDialogCancel>
          <AlertDialogAction>Quitter</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default function AlertDialogPage() {
  return (
    <DocPage
      title="Alert dialog"
      description="Interrompt l'utilisateur pour une décision qui doit être prise avant que la page continue. Il se ferme par un choix, jamais par un clic à côté."
    >
      <DocSection
        title="Confirmation destructive"
        description="Le cas principal : toute action irréversible passe par là. Le titre pose la question, la description énonce la conséquence."
        code={`<AlertDialog>
  <AlertDialogTrigger render={<Button variant="destructive" />}>
    Supprimer l'opération
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Supprimer l'opération #4821 ?</AlertDialogTitle>
      <AlertDialogDescription>Cette action est irréversible.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Annuler</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Supprimer</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
      >
        <DemoSuppression />
      </DocSection>

      <DocSection
        title="Avec marqueur"
        description="AlertDialogMedia place une icône au-dessus du titre, quand la gravité mérite d'être signalée avant la lecture."
        code={`<AlertDialogHeader>
  <AlertDialogMedia>
    <TriangleAlert />
  </AlertDialogMedia>
  <AlertDialogTitle>Modifications non enregistrées</AlertDialogTitle>
</AlertDialogHeader>`}
      >
        <DemoAvecMedia />
      </DocSection>

      <DocPractices
        items={[
          "L'alert dialog n'est pas un dialog ordinaire : il bloque, et ne se ferme ni au clic extérieur ni à Échap. Le réserver aux décisions qui ne peuvent pas attendre.",
          "Le titre pose la question à laquelle les boutons répondent : « Supprimer l'opération #4821 ? », pas « Attention ».",
          "La description énonce la conséquence concrète et chiffrée quand c'est possible — ce qui sera détaché, annulé, perdu.",
          "Le bouton de confirmation nomme l'action, jamais « Oui » ni « OK ». L'utilisateur doit pouvoir décider en lisant le seul bouton.",
          "Une action destructive se confirme avec un bouton `destructive`, et l'annulation reste le choix le plus facile à atteindre.",
          "Exactement deux issues : confirmer ou annuler. Une troisième option signifie que ce n'est pas une confirmation mais un formulaire — donc un dialog.",
          "Ne pas s'en servir pour informer : une information qui n'appelle aucune décision est une Alert banner, pas une interruption.",
        ]}
      />
    </DocPage>
  );
}
