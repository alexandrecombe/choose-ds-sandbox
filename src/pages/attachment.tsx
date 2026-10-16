import { FileText, Image as ImageIcon, X, LoaderCircle } from "lucide-react";
import {
  Attachment,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentActions,
  AttachmentAction,
} from "@/components/choose-ui/attachment";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

const etats = [
  { state: "idle" as const, titre: "contrat-2026.pdf", desc: "En attente" },
  { state: "uploading" as const, titre: "catalogue-mars.pdf", desc: "Envoi en cours…" },
  { state: "processing" as const, titre: "visuels-vitrine.zip", desc: "Traitement…" },
  { state: "done" as const, titre: "facture-4821.pdf", desc: "2,4 Mo" },
  { state: "error" as const, titre: "export-stock.csv", desc: "Échec de l'envoi" },
];

export default function AttachmentPage() {
  return (
    <DocPage
      title="Attachment"
      description="Représente un fichier joint et l'état de son transfert. Le composant ne téléverse rien : il met en forme l'état qu'on lui passe."
    >
      <DocSection
        title="États"
        description="`state` est piloté par le code de transfert. Les états uploading et processing animent le titre."
        layout="stack"
        code={`<Attachment state="uploading">
  <AttachmentMedia>
    <FileText />
  </AttachmentMedia>
  <AttachmentContent>
    <AttachmentTitle>catalogue-mars.pdf</AttachmentTitle>
    <AttachmentDescription>Envoi en cours…</AttachmentDescription>
  </AttachmentContent>
</Attachment>`}
      >
        {etats.map((e) => (
          <Attachment key={e.state} state={e.state}>
            <AttachmentMedia>
              {e.state === "uploading" || e.state === "processing" ? (
                <LoaderCircle data-slot="spinner" className="animate-spin" />
              ) : (
                <FileText />
              )}
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>{e.titre}</AttachmentTitle>
              <AttachmentDescription>{e.desc}</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        ))}
      </DocSection>

      <DocSection
        title="Avec action"
        description="AttachmentAction loge le retrait du fichier. Dans un formulaire, lui passer `type=button` : le bouton sous-jacent n'en définit aucun et soumettrait le formulaire."
        layout="stack"
        code={`<Attachment state="done">
  …
  <AttachmentActions>
    <AttachmentAction type="button" aria-label="Retirer">
      <X />
    </AttachmentAction>
  </AttachmentActions>
</Attachment>`}
      >
        <Attachment state="done">
          <AttachmentMedia>
            <FileText />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>facture-4821.pdf</AttachmentTitle>
            <AttachmentDescription>2,4 Mo</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction type="button" aria-label="Retirer le fichier">
              <X />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
      </DocSection>

      <DocSection
        title="Tailles"
        description="`sm` et `xs` pour un bandeau de composition ou une liste dense."
        layout="stack"
        code={`<Attachment state="done" size="sm">…</Attachment>`}
      >
        {(["default", "sm", "xs"] as const).map((s) => (
          <div key={s} className="flex items-center gap-4">
            <Attachment state="done" size={s}>
              <AttachmentMedia>
                <ImageIcon />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>visuel-vitrine.jpg</AttachmentTitle>
                <AttachmentDescription>820 Ko</AttachmentDescription>
              </AttachmentContent>
            </Attachment>
            <span className="text-xs text-muted-foreground">{s}</span>
          </div>
        ))}
      </DocSection>

      <DocSection
        title="Groupe"
        description="AttachmentGroup aligne plusieurs fichiers — une pièce jointe multiple, une file d'envoi."
        layout="stack"
        code={`<AttachmentGroup>
  <Attachment state="done">…</Attachment>
  <Attachment state="uploading">…</Attachment>
</AttachmentGroup>`}
      >
        <AttachmentGroup>
          {etats.slice(0, 3).map((e) => (
            <Attachment key={e.state} state={e.state} size="sm">
              <AttachmentMedia>
                <FileText />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>{e.titre}</AttachmentTitle>
              </AttachmentContent>
            </Attachment>
          ))}
        </AttachmentGroup>
      </DocSection>

      <DocPractices
        items={[
          "Le composant ne téléverse rien. `state` doit être piloté par le code de transfert, sinon un fichier en échec s'affichera comme réussi.",
          "Dans un formulaire, passer `type=button` à AttachmentAction : le bouton sous-jacent ne définit aucun type et soumettrait le formulaire au clic sur « Retirer ».",
          "AttachmentDescription porte le poids ou la raison de l'échec, pas le nom du fichier — il est déjà dans le titre, qui tronque proprement.",
          "Chaque action icône porte un `aria-label` : une croix seule ne dit pas ce qu'elle retire.",
          "Pour une zone où l'on dépose des fichiers depuis le bureau, ce n'est pas Attachment mais un champ de dépôt : Attachment représente le résultat, pas la cible.",
          "Pour une file d'envoi où chaque ligne doit montrer une progression chiffrée, prévoir une barre de progression — l'animation d'état ne donne aucune valeur.",
          "L'état `error` colore la bordure et la description : ne pas doubler avec une Alert banner pour le même fichier.",
        ]}
      />
    </DocPage>
  );
}
