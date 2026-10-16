import { useState } from "react";
import { Textarea } from "@/components/choose-ui/textarea";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

const LIMITE = 280;

export default function TextareaPage() {
  const [note, setNote] = useState("");
  const trop = note.length > LIMITE;

  return (
    <DocPage
      title="Textarea"
      description="Champ de saisie sur plusieurs lignes : un motif de retour, une note interne, un message au client. La hauteur suit le texte saisi."
    >
      {/* ---- Basique ---- */}
      <DocSection
        title="Textarea simple"
        description="Un champ avec son label. La hauteur part de `min-h-16` et grandit avec le texte."
        code={`<label htmlFor="motif">Motif du retour</label>
<Textarea id="motif" placeholder="Décrivez le problème rencontré" />`}
      >
        <div className="grid gap-2 max-w-md">
          <label htmlFor="motif" className="text-sm font-sans font-medium">
            Motif du retour
          </label>
          <Textarea id="motif" placeholder="Décrivez le problème rencontré" />
        </div>
      </DocSection>

      {/* ---- Auto-grandissement ---- */}
      <DocSection
        title="Hauteur automatique"
        description="Le champ porte `field-sizing-content` : il grandit à la frappe. Ne pas poser de `rows`, qui est ignoré par ce dimensionnement. Pour borner la hauteur, utiliser `min-h-*` et `max-h-*`."
        code={`<Textarea className="min-h-24 max-h-48" />`}
      >
        <div className="grid gap-2 max-w-md">
          <label htmlFor="auto" className="text-sm font-sans font-medium">
            Note interne
          </label>
          <Textarea
            id="auto"
            className="min-h-24 max-h-48"
            defaultValue={
              "Le client a renvoyé les deux articles dans le même colis.\nLe transporteur confirme la réception le 25 septembre."
            }
          />
        </div>
      </DocSection>

      {/* ---- Avec compteur et erreur ---- */}
      <DocSection
        title="Limite et état d'erreur"
        description="La limite s'annonce avant la frappe. L'erreur se pose par `aria-invalid` et le message se relie par `aria-describedby` — jamais une bordure colorée à la main."
        code={`<Textarea
  id="message"
  aria-invalid={trop || undefined}
  aria-describedby="message-aide"
/>
<p id="message-aide">{note.length} / 280 caractères</p>`}
      >
        <div className="grid gap-2 max-w-md">
          <label htmlFor="message" className="text-sm font-sans font-medium">
            Message au client
          </label>
          <Textarea
            id="message"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            aria-invalid={trop || undefined}
            aria-describedby="message-aide"
            placeholder="Expliquez la solution retenue"
          />
          <p
            id="message-aide"
            className={`text-xs font-sans ${
              trop ? "text-destructive" : "text-muted-foreground"
            }`}
          >
            {trop
              ? `${note.length} / ${LIMITE} caractères — message trop long`
              : `${note.length} / ${LIMITE} caractères`}
          </p>
        </div>
      </DocSection>

      {/* ---- Désactivé ---- */}
      <DocSection
        title="Désactivé"
        description="Un champ désactivé doit rester compréhensible. Si la raison n'est pas évidente à l'écran, l'expliquer à côté."
        code={`<Textarea disabled defaultValue="…" />`}
      >
        <div className="grid gap-2 max-w-md">
          <label htmlFor="cloture" className="text-sm font-sans font-medium">
            Motif du retour
          </label>
          <Textarea
            id="cloture"
            disabled
            defaultValue="La taille ne me correspond pas."
            aria-describedby="cloture-aide"
          />
          <p
            id="cloture-aide"
            className="text-xs text-muted-foreground font-sans"
          >
            Non modifiable : la réclamation est clôturée.
          </p>
        </div>
      </DocSection>

      {/* ---- Bonnes pratiques ---- */}
      <DocPractices
        items={[
          "Toujours associer un label visible, relié par htmlFor et id.",
          "Ne pas poser de rows : le dimensionnement automatique l'ignore et laisse croire à une hauteur fixe.",
          "Annoncer la limite de caractères avant la frappe, pas au moment où l'utilisateur bute dessus.",
          "Piloter l'erreur par aria-invalid, jamais en colorant la bordure à la main.",
          "Ne pas forcer text-sm sur toutes les tailles : sous 16px, iOS zoome à la mise au point du champ.",
        ]}
      />
    </DocPage>
  );
}
