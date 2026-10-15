import { useState } from "react";
import { Globe, CreditCard, Truck, User } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/choose-ui/select";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

export default function SelectPage() {
  return (
    <DocPage
      title="Select"
      description="Menu déroulant de sélection unique. Remplace le `<select>` natif pour garder un rendu cohérent entre navigateurs et systèmes."
    >
      {/* ---- Basique ---- */}
      <DocSection
        title="Select simple"
        description="L'option sélectionnée remplace le placeholder dans le trigger."
        code={`<Select defaultValue="eur">
  <SelectTrigger>
    <SelectValue placeholder="Devise" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="eur">EUR — Euro</SelectItem>
    <SelectItem value="usd">USD — Dollar</SelectItem>
    <SelectItem value="gbp">GBP — Livre sterling</SelectItem>
  </SelectContent>
</Select>`}
      >
        <Select defaultValue="eur">
          <SelectTrigger aria-label="Devise">
            <SelectValue placeholder="Devise" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="eur">EUR — Euro</SelectItem>
            <SelectItem value="usd">USD — Dollar</SelectItem>
            <SelectItem value="gbp">GBP — Livre sterling</SelectItem>
          </SelectContent>
        </Select>
      </DocSection>

      {/* ---- Groupes ---- */}
      <DocSection
        title="Groupes"
        description="Les `SelectGroup` + `SelectLabel` structurent une liste longue. Le label du groupe est annoncé par les lecteurs d'écran."
        code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Pays de livraison" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="fr">France</SelectItem>
      <SelectItem value="de">Allemagne</SelectItem>
      <SelectItem value="es">Espagne</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Amérique du Nord</SelectLabel>
      <SelectItem value="us">États-Unis</SelectItem>
      <SelectItem value="ca">Canada</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
      >
        <Select>
          <SelectTrigger aria-label="Pays de livraison">
            <SelectValue placeholder="Pays de livraison" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Europe</SelectLabel>
              <SelectItem value="fr">France</SelectItem>
              <SelectItem value="de">Allemagne</SelectItem>
              <SelectItem value="es">Espagne</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Amérique du Nord</SelectLabel>
              <SelectItem value="us">États-Unis</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </DocSection>

      {/* ---- Avec icônes ---- */}
      <DocSection
        title="Avec icônes"
        description="Chaque `SelectItem` peut contenir une icône avant le texte."
        code={`<SelectItem value="card">
  <CreditCard className="size-4" />
  Carte bancaire
</SelectItem>`}
      >
        <Select defaultValue="card">
          <SelectTrigger aria-label="Mode de paiement">
            <SelectValue placeholder="Mode de paiement" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Mode de paiement</SelectLabel>
              <SelectItem value="card">
                <CreditCard className="size-4" />
                Carte bancaire
              </SelectItem>
              <SelectItem value="transfer">
                <Globe className="size-4" />
                Virement SEPA
              </SelectItem>
              <SelectItem value="cod">
                <Truck className="size-4" />
                Contre-remboursement
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </DocSection>

      {/* ---- Tailles ---- */}
      <DocSection
        title="Tailles"
        description="`sm` pour les contextes denses (toolbar, en-tête de table), `default` pour le cas courant."
        code={`<SelectTrigger size="sm">…</SelectTrigger>
<SelectTrigger>…</SelectTrigger>`}
      >
        <div className="flex items-center gap-4">
          <Select defaultValue="sm">
            <SelectTrigger size="sm" aria-label="Taille sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sm">Petit (sm)</SelectItem>
              <SelectItem value="default">Par défaut</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="default">
            <SelectTrigger aria-label="Taille default">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sm">Petit (sm)</SelectItem>
              <SelectItem value="default">Par défaut</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </DocSection>

      {/* ---- Désactivé ---- */}
      <DocSection
        title="Désactivé"
        description="Un select désactivé sort du parcours clavier. Si l'option est verrouillée mais doit rester visible, afficher la valeur dans un champ `readOnly` à la place."
        code={`<SelectTrigger disabled>
  <SelectValue placeholder="Indisponible" />
</SelectTrigger>`}
      >
        <Select>
          <SelectTrigger disabled aria-label="Select désactivé">
            <SelectValue placeholder="Indisponible" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="x">Option</SelectItem>
          </SelectContent>
        </Select>
      </DocSection>

      {/* ---- Options désactivées ---- */}
      <DocSection
        title="Options désactivées"
        description="Une option `disabled` est visible mais non sélectionnable. Utile pour montrer qu'un choix existe mais n'est pas disponible dans ce contexte."
        code={`<SelectItem value="bpost" disabled>
  bpost — indisponible
</SelectItem>`}
      >
        <Select>
          <SelectTrigger aria-label="Transporteur">
            <SelectValue placeholder="Transporteur" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="colissimo">Colissimo</SelectItem>
            <SelectItem value="chronopost">Chronopost</SelectItem>
            <SelectItem value="bpost" disabled>
              bpost — indisponible
            </SelectItem>
            <SelectItem value="dhl">DHL Express</SelectItem>
          </SelectContent>
        </Select>
      </DocSection>

      {/* ---- Contrôlé ---- */}
      <DocSection
        title="Contrôlé"
        description="`value` + `onValueChange` rendent le select contrôlé. Chaque changement de valeur peut déclencher un effet (fetch, mise à jour du formulaire)."
        code={`const [role, setRole] = useState("viewer");
<Select value={role} onValueChange={setRole}>…</Select>`}
      >
        <SelectControle />
      </DocSection>

      {/* ---- Bonnes pratiques ---- */}
      <DocPractices
        items={[
          "Poser un `aria-label` sur le trigger quand il n'est pas précédé d'un `<label>`.",
          "Utiliser `SelectGroup` + `SelectLabel` dès que la liste dépasse 6-7 options.",
          "Préférer `defaultValue` pour un formulaire non contrôlé, `value` pour un composant contrôlé.",
          "Ne pas utiliser Select pour 2-3 options — un groupe de radios est plus rapide à scanner.",
          "Ne pas imbriquer un select dans un autre select.",
          "Ne pas oublier le placeholder : sans lui, le trigger apparaît vide et sa fonction n'est pas claire.",
        ]}
      />
    </DocPage>
  );
}

/* ---- Composant de démo interne ---- */

function SelectControle() {
  const [role, setRole] = useState("viewer");
  return (
    <div className="flex items-center gap-4">
      <Select value={role} onValueChange={setRole}>
        <SelectTrigger aria-label="Rôle">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="viewer">
            <User className="size-4" />
            Lecteur
          </SelectItem>
          <SelectItem value="editor">Éditeur</SelectItem>
          <SelectItem value="admin">Administrateur</SelectItem>
        </SelectContent>
      </Select>
      <span className="text-sm text-muted-foreground">
        Rôle actuel : <strong className="font-medium text-foreground">{role}</strong>
      </span>
    </div>
  );
}
