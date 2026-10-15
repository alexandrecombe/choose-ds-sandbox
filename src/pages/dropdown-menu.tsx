import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "@/components/choose-ui/dropdown-menu";
import { Button } from "@/components/choose-ui/button";
import { DocPage, DocSection, DocPractices } from "@/src/doc";
import { useState } from "react";

export default function DropdownMenuPage() {
  const [showStatus, setShowStatus] = useState(true);
  const [showActivity, setShowActivity] = useState(false);
  const [theme, setTheme] = useState("system");

  return (
    <DocPage
      title="Dropdown Menu"
      description="Menu déroulant déclenché par un bouton. Repose sur Base UI, avec sous-menus, checkbox, radios et raccourcis clavier."
    >
      {/* ---- Basique ---- */}
      <DocSection
        title="Menu simple"
        description="Un bouton ouvre un menu avec des actions. Les items peuvent porter un raccourci clavier."
        code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profil</DropdownMenuItem>
    <DropdownMenuItem>Paramètres</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Déconnexion</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Options</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 font-sans">
            <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profil <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Paramètres <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Déconnexion <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DocSection>

      {/* ---- Sous-menus ---- */}
      <DocSection
        title="Avec sous-menus"
        description="Les sous-menus permettent de regrouper les actions en catégories sans surcharger le menu principal."
        code={`<DropdownMenuSub>
  <DropdownMenuSubTrigger>Inviter</DropdownMenuSubTrigger>
  <DropdownMenuSubContent>
    <DropdownMenuItem>Par email</DropdownMenuItem>
    <DropdownMenuItem>Par lien</DropdownMenuItem>
  </DropdownMenuSubContent>
</DropdownMenuSub>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Partager</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 font-sans">
            <DropdownMenuItem>Copier le lien</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Inviter</DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="w-48">
                <DropdownMenuItem>Par email</DropdownMenuItem>
                <DropdownMenuItem>Par lien</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Slack</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Exporter…</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DocSection>

      {/* ---- Checkbox + Radio ---- */}
      <DocSection
        title="Checkbox et radios"
        description="Les items peuvent être des cases à cocher ou des boutons radio pour des réglages rapides."
        code={`<DropdownMenuCheckboxItem
  checked={showStatus}
  onCheckedChange={setShowStatus}
>
  Statut
</DropdownMenuCheckboxItem>

<DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
  <DropdownMenuRadioItem value="light">Clair</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="dark">Sombre</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="system">Système</DropdownMenuRadioItem>
</DropdownMenuRadioGroup>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Affichage</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 font-sans">
            <DropdownMenuLabel>Colonnes visibles</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showStatus}
              onCheckedChange={setShowStatus}
            >
              Statut
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showActivity}
              onCheckedChange={setShowActivity}
            >
              Activité
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Thème</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
              <DropdownMenuRadioItem value="light">Clair</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark">Sombre</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="system">Système</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </DocSection>

      <DocPractices
        items={[
          "Préférer le Dropdown Menu au Context Menu quand il y a un bouton déclencheur visible",
          "Grouper les actions liées avec des séparateurs et des labels",
          "Indiquer les raccourcis clavier quand ils existent",
          "Ne pas dépasser deux niveaux de sous-menu",
        ]}
      />
    </DocPage>
  );
}
