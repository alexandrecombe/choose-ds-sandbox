import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from "@/components/choose-ui/empty";
import { Button } from "@/components/choose-ui/button";
import { DocPage, DocSection, DocPractices } from "@/src/doc";
import { InboxIcon, SearchIcon, FileIcon } from "lucide-react";

export default function EmptyPage() {
  return (
    <DocPage
      title="Empty"
      description="État vide affiché quand une liste, un tableau ou une vue ne contient aucun élément. Guide l'utilisateur vers l'action suivante."
    >
      {/* ---- Basique ---- */}
      <DocSection
        title="État vide simple"
        description="Titre et description suffisent pour les cas courants."
        code={`<Empty>
  <EmptyHeader>
    <EmptyTitle>Aucun résultat</EmptyTitle>
    <EmptyDescription>
      Essayez de modifier vos filtres.
    </EmptyDescription>
  </EmptyHeader>
</Empty>`}
      >
        <Empty>
          <EmptyHeader>
            <EmptyTitle>Aucun résultat</EmptyTitle>
            <EmptyDescription>
              Essayez de modifier vos filtres ou votre recherche.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </DocSection>

      {/* ---- Avec icône ---- */}
      <DocSection
        title="Avec icône"
        description="EmptyMedia variant='icon' affiche une icône dans un cercle pour renforcer le message."
        code={`<Empty>
  <EmptyMedia variant="icon">
    <InboxIcon />
  </EmptyMedia>
  <EmptyHeader>
    <EmptyTitle>Boîte de réception vide</EmptyTitle>
    <EmptyDescription>
      Les nouvelles notifications apparaîtront ici.
    </EmptyDescription>
  </EmptyHeader>
</Empty>`}
      >
        <Empty>
          <EmptyMedia variant="icon">
            <InboxIcon />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle>Boîte de réception vide</EmptyTitle>
            <EmptyDescription>
              Les nouvelles notifications apparaîtront ici.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </DocSection>

      {/* ---- Avec action ---- */}
      <DocSection
        title="Avec action"
        description="EmptyContent permet d'ajouter un bouton d'action sous le message."
        code={`<Empty>
  <EmptyMedia variant="icon">
    <FileIcon />
  </EmptyMedia>
  <EmptyHeader>
    <EmptyTitle>Aucun document</EmptyTitle>
    <EmptyDescription>
      Commencez par créer votre premier document.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Créer un document</Button>
  </EmptyContent>
</Empty>`}
      >
        <Empty>
          <EmptyMedia variant="icon">
            <FileIcon />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle>Aucun document</EmptyTitle>
            <EmptyDescription>
              Commencez par créer votre premier document.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>Créer un document</Button>
          </EmptyContent>
        </Empty>
      </DocSection>

      {/* ---- Recherche vide ---- */}
      <DocSection
        title="Recherche sans résultat"
        description="Variante pour les cas de recherche infructueuse."
        code={`<Empty>
  <EmptyMedia variant="icon">
    <SearchIcon />
  </EmptyMedia>
  <EmptyHeader>
    <EmptyTitle>Aucun résultat pour « xyz »</EmptyTitle>
    <EmptyDescription>
      Vérifiez l'orthographe ou essayez d'autres termes.
    </EmptyDescription>
  </EmptyHeader>
</Empty>`}
      >
        <Empty>
          <EmptyMedia variant="icon">
            <SearchIcon />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle>Aucun résultat pour « xyz »</EmptyTitle>
            <EmptyDescription>
              Vérifiez l'orthographe ou essayez d'autres termes.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </DocSection>

      <DocPractices
        items={[
          "Toujours donner un titre clair expliquant pourquoi la vue est vide",
          "Proposer une action quand l'utilisateur peut résoudre l'état vide",
          "Utiliser une icône cohérente avec le contenu manquant",
          "Ne pas confondre état vide (aucune donnée) et état d'erreur (problème technique)",
        ]}
      />
    </DocPage>
  );
}
