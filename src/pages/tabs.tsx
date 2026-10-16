import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/choose-ui/tabs";
import { DocPage, DocSection, DocPractices } from "@/src/doc";
import { CodeIcon, EyeIcon, SettingsIcon } from "lucide-react";

export default function TabsPage() {
  return (
    <DocPage
      title="Tabs"
      description="Navigation par onglets pour alterner entre des panneaux de contenu parallèles. Repose sur Base UI, avec variantes default et line, orientation horizontale ou verticale."
    >
      {/* ---- Default ---- */}
      <DocSection
        title="Onglets par défaut"
        description="Le variant default affiche les onglets dans un fond muted avec l'onglet actif en surbrillance."
        code={`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Compte</TabsTrigger>
    <TabsTrigger value="password">Mot de passe</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Contenu du compte…
  </TabsContent>
  <TabsContent value="password">
    Contenu du mot de passe…
  </TabsContent>
</Tabs>`}
      >
        <Tabs defaultValue="account" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="account">Compte</TabsTrigger>
            <TabsTrigger value="password">Mot de passe</TabsTrigger>
            <TabsTrigger value="settings">Réglages</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="mt-3">
            <p className="text-sm text-muted-foreground">
              Gérez les informations de votre compte, votre nom et votre adresse email.
            </p>
          </TabsContent>
          <TabsContent value="password" className="mt-3">
            <p className="text-sm text-muted-foreground">
              Modifiez votre mot de passe. Après la sauvegarde, vous serez déconnecté.
            </p>
          </TabsContent>
          <TabsContent value="settings" className="mt-3">
            <p className="text-sm text-muted-foreground">
              Configurez vos préférences de notification et d'affichage.
            </p>
          </TabsContent>
        </Tabs>
      </DocSection>

      {/* ---- Line variant ---- */}
      <DocSection
        title="Variant line"
        description="Le variant line affiche un trait sous l'onglet actif, sans fond muted."
        code={`<Tabs defaultValue="preview">
  <TabsList variant="line">
    <TabsTrigger value="preview">Aperçu</TabsTrigger>
    <TabsTrigger value="code">Code</TabsTrigger>
  </TabsList>
  …
</Tabs>`}
      >
        <Tabs defaultValue="preview" className="w-full max-w-md">
          <TabsList variant="line">
            <TabsTrigger value="preview">Aperçu</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-3">
            <div className="flex h-24 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
              Contenu de l'aperçu
            </div>
          </TabsContent>
          <TabsContent value="code" className="mt-3">
            <div className="flex h-24 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
              {'<Component />'}
            </div>
          </TabsContent>
        </Tabs>
      </DocSection>

      {/* ---- With icons ---- */}
      <DocSection
        title="Avec icônes"
        description="Les onglets peuvent combiner icône et texte pour plus de clarté."
        code={`<TabsTrigger value="preview">
  <EyeIcon data-icon="inline-start" />
  Aperçu
</TabsTrigger>`}
      >
        <Tabs defaultValue="preview" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="preview">
              <EyeIcon data-icon="inline-start" />
              Aperçu
            </TabsTrigger>
            <TabsTrigger value="code">
              <CodeIcon data-icon="inline-start" />
              Code
            </TabsTrigger>
            <TabsTrigger value="settings">
              <SettingsIcon data-icon="inline-start" />
              Réglages
            </TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-3">
            <p className="text-sm text-muted-foreground">Aperçu du composant.</p>
          </TabsContent>
          <TabsContent value="code" className="mt-3">
            <p className="text-sm text-muted-foreground">Code source du composant.</p>
          </TabsContent>
          <TabsContent value="settings" className="mt-3">
            <p className="text-sm text-muted-foreground">Réglages du composant.</p>
          </TabsContent>
        </Tabs>
      </DocSection>

      {/* ---- Disabled ---- */}
      <DocSection
        title="Onglet désactivé"
        description="Un onglet peut être désactivé pour indiquer qu'il n'est pas disponible."
        code={`<TabsTrigger value="billing" disabled>
  Facturation
</TabsTrigger>`}
      >
        <Tabs defaultValue="general" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="general">Général</TabsTrigger>
            <TabsTrigger value="billing" disabled>Facturation</TabsTrigger>
            <TabsTrigger value="team">Équipe</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="mt-3">
            <p className="text-sm text-muted-foreground">Paramètres généraux du projet.</p>
          </TabsContent>
          <TabsContent value="team" className="mt-3">
            <p className="text-sm text-muted-foreground">Gérez les membres de l'équipe.</p>
          </TabsContent>
        </Tabs>
      </DocSection>

      <DocPractices
        items={[
          "Utiliser les tabs pour du contenu parallèle (pas hiérarchique) — sinon préférer une navigation latérale",
          "Le variant default convient aux formulaires et réglages ; le variant line aux vues de contenu",
          "Garder les labels courts (1-2 mots) et cohérents en longueur",
          "Ne pas dépasser 5-6 onglets ; au-delà, envisager une autre navigation",
        ]}
      />
    </DocPage>
  );
}
