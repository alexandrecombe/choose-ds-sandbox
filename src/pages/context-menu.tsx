import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuGroup,
} from "@/components/choose-ui/context-menu";
import { DocPage, DocSection, DocPractices } from "@/src/doc";
import { useState } from "react";

export default function ContextMenuPage() {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(false);
  const [person, setPerson] = useState("pedro");

  return (
    <DocPage
      title="Context Menu"
      description="Menu contextuel affiché au clic droit. Repose sur Base UI, avec sous-menus, checkbox, radios et raccourcis clavier."
    >
      {/* ---- Basique ---- */}
      <DocSection
        title="Menu contextuel simple"
        description="Clic droit sur la zone pour ouvrir le menu. Les items peuvent porter un raccourci clavier."
        code={`<ContextMenu>
  <ContextMenuTrigger className="…">
    Clic droit ici
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>
      Retour <ContextMenuShortcut>⌘[</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem disabled>
      Avancer <ContextMenuShortcut>⌘]</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Actualiser</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
      >
        <ContextMenu>
          <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-lg border border-dashed text-sm font-sans">
            Clic droit ici
          </ContextMenuTrigger>
          <ContextMenuContent className="w-56 font-sans">
            <ContextMenuItem>
              Retour <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem disabled>
              Avancer <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              Actualiser <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </DocSection>

      {/* ---- Sous-menus ---- */}
      <DocSection
        title="Avec sous-menus"
        description="Les sous-menus permettent de regrouper les actions en catégories."
        code={`<ContextMenuSub>
  <ContextMenuSubTrigger>Plus d'outils</ContextMenuSubTrigger>
  <ContextMenuSubContent>
    <ContextMenuItem>Enregistrer sous…</ContextMenuItem>
    <ContextMenuItem>Imprimer…</ContextMenuItem>
  </ContextMenuSubContent>
</ContextMenuSub>`}
      >
        <ContextMenu>
          <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-lg border border-dashed text-sm font-sans">
            Clic droit ici
          </ContextMenuTrigger>
          <ContextMenuContent className="w-56 font-sans">
            <ContextMenuItem>Copier</ContextMenuItem>
            <ContextMenuItem>Coller</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger>Plus d'outils</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>Enregistrer sous…</ContextMenuItem>
                <ContextMenuItem>Créer un raccourci…</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Outils de développement</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuContent>
        </ContextMenu>
      </DocSection>

      {/* ---- Checkbox + Radio ---- */}
      <DocSection
        title="Checkbox et radios"
        description="Les items peuvent être des cases à cocher ou des boutons radio pour des réglages contextuels."
        code={`<ContextMenuCheckboxItem
  checked={showBookmarks}
  onCheckedChange={setShowBookmarks}
>
  Afficher les favoris
</ContextMenuCheckboxItem>

<ContextMenuRadioGroup value={person} onValueChange={setPerson}>
  <ContextMenuRadioItem value="pedro">Pedro</ContextMenuRadioItem>
  <ContextMenuRadioItem value="colm">Colm</ContextMenuRadioItem>
</ContextMenuRadioGroup>`}
      >
        <ContextMenu>
          <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-lg border border-dashed text-sm font-sans">
            Clic droit ici
          </ContextMenuTrigger>
          <ContextMenuContent className="w-56 font-sans">
            <ContextMenuCheckboxItem
              checked={showBookmarks}
              onCheckedChange={setShowBookmarks}
            >
              Afficher les favoris
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem
              checked={showFullUrls}
              onCheckedChange={setShowFullUrls}
            >
              Afficher les URL complètes
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuLabel>Personnes</ContextMenuLabel>
              <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
                <ContextMenuRadioItem value="pedro">Pedro</ContextMenuRadioItem>
                <ContextMenuRadioItem value="colm">Colm</ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      </DocSection>

      <DocPractices
        items={[
          "Réserver le context menu aux actions secondaires ; les actions principales restent visibles",
          "Grouper les actions liées avec des séparateurs",
          "Indiquer les raccourcis clavier quand ils existent",
          "Ne pas mettre d'actions destructives sans confirmation",
        ]}
      />
    </DocPage>
  );
}
