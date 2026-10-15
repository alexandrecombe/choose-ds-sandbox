import { Bold, Italic, Underline, ChevronDown, Archive, Trash2 } from "lucide-react";
import {
  ButtonGroup,
  ButtonGroupText,
  ButtonGroupSeparator,
} from "@/components/choose-ui/button-group";
import { Button } from "@/components/ui/button";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

export default function ButtonGroupPage() {
  return (
    <DocPage
      title="Button group"
      description="Regroupe des actions de même nature en un bloc continu : les rayons se fusionnent et les bordures se partagent. Pour des actions liées, pas pour aligner des boutons."
    >
      <DocSection
        title="Horizontal"
        description="Le cas courant : une barre d'outils, un jeu d'actions sur une sélection."
        layout="stack"
        code={`<ButtonGroup>
  <Button variant="outline" size="sm">Archiver</Button>
  <Button variant="outline" size="sm">Supprimer</Button>
</ButtonGroup>`}
      >
        <ButtonGroup>
          <Button variant="outline" size="sm">
            <Archive />
            Archiver
          </Button>
          <Button variant="outline" size="sm">
            <Trash2 />
            Supprimer
          </Button>
        </ButtonGroup>
      </DocSection>

      <DocSection
        title="Actions icône"
        description="Des bascules de format, où chaque bouton est une icône seule. Chaque bouton garde un intitulé accessible."
        layout="stack"
        code={`<ButtonGroup>
  <Button variant="outline" size="icon-sm" aria-label="Gras">
    <Bold />
  </Button>
  …
</ButtonGroup>`}
      >
        <ButtonGroup>
          <Button variant="outline" size="icon-sm" aria-label="Gras">
            <Bold />
          </Button>
          <Button variant="outline" size="icon-sm" aria-label="Italique">
            <Italic />
          </Button>
          <Button variant="outline" size="icon-sm" aria-label="Souligné">
            <Underline />
          </Button>
        </ButtonGroup>
      </DocSection>

      <DocSection
        title="Avec libellé"
        description="ButtonGroupText insère un intitulé non cliquable dans le bloc — une unité, un préfixe, un contexte."
        layout="stack"
        code={`<ButtonGroup>
  <ButtonGroupText>Trier par</ButtonGroupText>
  <Button variant="outline" size="sm">
    Date <ChevronDown />
  </Button>
</ButtonGroup>`}
      >
        <ButtonGroup>
          <ButtonGroupText>Trier par</ButtonGroupText>
          <Button variant="outline" size="sm">
            Date
            <ChevronDown />
          </Button>
        </ButtonGroup>
      </DocSection>

      <DocSection
        title="Séparateur et orientation"
        description="ButtonGroupSeparator isole un groupe d'actions dans le bloc. `orientation=vertical` empile, pour une barre latérale."
        layout="stack"
        code={`<ButtonGroup orientation="vertical">
  <Button variant="outline" size="sm">Archiver</Button>
  <ButtonGroupSeparator />
  <Button variant="outline" size="sm">Supprimer</Button>
</ButtonGroup>`}
      >
        <ButtonGroup>
          <Button variant="outline" size="sm">
            Archiver
          </Button>
          <ButtonGroupSeparator />
          <Button variant="outline" size="sm">
            Supprimer
          </Button>
        </ButtonGroup>
        <ButtonGroup orientation="vertical" className="w-fit">
          <Button variant="outline" size="sm">
            Archiver
          </Button>
          <ButtonGroupSeparator orientation="horizontal" />
          <Button variant="outline" size="sm">
            Supprimer
          </Button>
        </ButtonGroup>
      </DocSection>

      <DocPractices
        items={[
          "Le groupe attend le Button de components/ui, pas choose-ui/button : c'est lui qui porte les data-attributs sur lesquels la fusion des rayons s'appuie.",
          "Regrouper des actions de même nature et de même poids. Mettre côte à côte « Enregistrer » et « Supprimer » dans un bloc continu invite au clic malheureux.",
          "Un seul variant pour tout le groupe. Mélanger primary et outline casse la lecture du bloc comme une unité.",
          "Jamais d'action destructive seule dans un groupe d'icônes : sans libellé, rien ne distingue Supprimer d'Archiver avant le clic.",
          "Chaque bouton icône porte un `aria-label` : le groupe ne fournit aucun intitulé à ses enfants.",
          "Au-delà de cinq actions, le groupe devient une barre d'outils illisible — passer à un menu.",
          "Pour aligner simplement deux boutons indépendants, un `flex gap-2` suffit. Le groupe signifie que les actions vont ensemble.",
        ]}
      />
    </DocPage>
  );
}
