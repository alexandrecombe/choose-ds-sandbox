import { useState } from "react";
import { Search, Mail } from "lucide-react";
import { Input } from "@/components/choose-ui/input";
import { Button } from "@/components/choose-ui/button";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

function ChampAvecErreur() {
  const [valeur, setValeur] = useState("maison-lelievre");
  const invalide = !valeur.includes("@");
  return (
    <div className="w-full max-w-sm">
      <label
        htmlFor="email-demo"
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        Adresse de facturation
      </label>
      <Input
        id="email-demo"
        type="email"
        value={valeur}
        onChange={(e) => setValeur(e.target.value)}
        aria-invalid={invalide || undefined}
        aria-describedby={invalide ? "email-demo-erreur" : undefined}
      />
      {invalide && (
        <p
          id="email-demo-erreur"
          className="mt-1.5 text-sm text-[color:var(--destructive)]"
        >
          Il manque un « @ » dans l'adresse.
        </p>
      )}
    </div>
  );
}

export default function InputPage() {
  return (
    <DocPage
      title="Input"
      description="Champ de saisie sur une ligne. La brique des formulaires back-office : recherche, filtres, édition d'une fiche."
    >
      <DocSection
        title="Champ simple"
        description="Le `placeholder` donne un exemple de saisie, il ne remplace pas le label."
        layout="stack"
        code={`<label htmlFor="nom">Nom de la marque</label>
<Input id="nom" placeholder="Maison Lelievre" />`}
      >
        <div className="w-full max-w-sm">
          <label
            htmlFor="nom-demo"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Nom de la marque
          </label>
          <Input id="nom-demo" placeholder="Maison Lelievre" />
        </div>
      </DocSection>

      <DocSection
        title="États"
        description="Normal, désactivé, en erreur. L'état d'erreur se pilote par `aria-invalid` : le style suit l'attribut d'accessibilité, pas l'inverse."
        layout="stack"
        code={`<Input placeholder="Normal" aria-label="Champ normal" />
<Input placeholder="Désactivé" disabled aria-label="Champ désactivé" />
<Input defaultValue="Valeur refusée" aria-invalid aria-label="Champ en erreur" />`}
      >
        <div className="flex w-full max-w-sm flex-col gap-3">
          <Input placeholder="Normal" aria-label="Champ normal" />
          <Input placeholder="Désactivé" disabled aria-label="Champ désactivé" />
          <Input
            defaultValue="Valeur refusée"
            aria-invalid
            aria-label="Champ en erreur"
          />
        </div>
      </DocSection>

      <DocSection
        title="Avec message d'erreur"
        description="Le message est relié au champ par `aria-describedby`, et le champ porte `aria-invalid`. Sans ce lien, un lecteur d'écran annonce un champ invalide sans dire pourquoi."
        layout="stack"
        code={`<Input
  id="email"
  aria-invalid={invalide || undefined}
  aria-describedby={invalide ? "email-erreur" : undefined}
/>
{invalide && <p id="email-erreur">Il manque un « @ » dans l'adresse.</p>}`}
      >
        <ChampAvecErreur />
      </DocSection>

      <DocSection
        title="Types"
        description="Le `type` natif conditionne le clavier mobile et la validation du navigateur."
        layout="stack"
        code={`<Input type="search" placeholder="Rechercher une opération" />
<Input type="email" placeholder="contact@maison-lelievre.fr" />
<Input type="number" placeholder="348" />`}
      >
        <div className="flex w-full max-w-sm flex-col gap-3">
          <Input
            type="search"
            placeholder="Rechercher une opération"
            aria-label="Recherche (type search)"
          />
          <Input
            type="email"
            placeholder="contact@maison-lelievre.fr"
            aria-label="Adresse e-mail (type email)"
          />
          <Input
            type="number"
            placeholder="348"
            aria-label="Nombre de références (type number)"
          />
        </div>
      </DocSection>

      <DocSection
        title="Dans une ligne"
        description="Associé à un bouton pour une recherche ou un ajout rapide."
        layout="stack"
        code={`<div className="flex gap-2">
  <Input type="search" placeholder="Rechercher" />
  <Button prefix={<Search />}>Rechercher</Button>
</div>`}
      >
        <div className="flex w-full max-w-md gap-2">
          <Input
            type="search"
            placeholder="Rechercher une opération"
            aria-label="Rechercher une opération"
          />
          <Button prefix={<Search />}>Rechercher</Button>
        </div>
        <div className="flex w-full max-w-md gap-2">
          <Input
            type="email"
            placeholder="Inviter par e-mail"
            aria-label="Adresse e-mail de l'invité"
          />
          <Button variant="secondary" prefix={<Mail />}>
            Inviter
          </Button>
        </div>
      </DocSection>

      <DocPractices
        items={[
          "Chaque champ a un label visible, relié par `htmlFor` / `id`. Le `placeholder` donne un exemple de saisie : il disparaît dès la frappe et ne peut pas tenir lieu de label.",
          "L'erreur se pilote par `aria-invalid` — le style la suit. Ne pas colorer la bordure à la main : la valeur visuelle et l'information d'accessibilité resteraient désynchronisées.",
          "Un message d'erreur se relie au champ par `aria-describedby`. Sans ce lien, un lecteur d'écran annonce un champ invalide sans dire pourquoi.",
          "Une erreur de validation d'un champ reste inline, à côté du champ. Elle ne remonte pas dans une Alert banner, qui est réservée au contexte de l'écran.",
          "Renseigner le `type` natif : il conditionne le clavier mobile et la validation du navigateur. Un champ e-mail en `type=text` fait saisir une adresse au clavier alphabétique.",
          "Un champ désactivé doit rester compréhensible : si la raison n'est pas évidente à l'écran, l'expliquer à côté plutôt que de laisser l'utilisateur deviner.",
          "Pour une recherche, `type=search` plutôt que `text` : le navigateur ajoute le bouton d'effacement et le bon clavier.",
        ]}
      />
    </DocPage>
  );
}
