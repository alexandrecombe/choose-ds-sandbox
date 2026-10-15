import {
  Frame,
  FramePanel,
  FrameHeader,
  FrameTitle,
  FrameDescription,
  FrameFooter,
} from "@/components/choose-ui/frame";
import { Badge } from "@/components/choose-ui/badge";
import { Button } from "@/components/choose-ui/button";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

export default function FramePage() {
  return (
    <DocPage
      title="Frame"
      description="Cadre qui regroupe des panneaux apparentés sous un même contour. Pour une surface d'outil — réglages, état d'un service, liste d'enregistrements — pas pour un objet métier isolé."
    >
      <DocSection
        title="Panneau simple"
        description="Un cadre, un panneau : en-tête, contenu, pied. Les coins intérieurs s'emboîtent dans le rayon extérieur."
        layout="stack"
        code={`<Frame>
  <FramePanel>
    <FrameHeader>
      <FrameTitle>Synchronisation</FrameTitle>
      <FrameDescription>Connecteur catalogue</FrameDescription>
    </FrameHeader>
    <div className="p-5">…</div>
    <FrameFooter>Dernier passage il y a 4 minutes</FrameFooter>
  </FramePanel>
</Frame>`}
      >
        <Frame>
          <FramePanel>
            <FrameHeader>
              <FrameTitle>Synchronisation</FrameTitle>
              <FrameDescription>
                Connecteur catalogue — Maison Lelievre
              </FrameDescription>
            </FrameHeader>
            <div className="p-5 text-sm text-muted-foreground">
              348 références synchronisées, 2 en erreur. La prochaine passe est
              programmée dans 12 minutes.
            </div>
            <FrameFooter>Dernier passage il y a 4 minutes</FrameFooter>
          </FramePanel>
        </Frame>
      </DocSection>

      <DocSection
        title="Panneaux empilés"
        description="`stacked` supprime les marges entre panneaux et leur fait partager leurs bordures. Pour une liste d'enregistrements de même nature."
        layout="stack"
        code={`<Frame stacked>
  <FramePanel>…</FramePanel>
  <FramePanel>…</FramePanel>
</Frame>`}
      >
        <Frame stacked>
          {[
            { nom: "Catalogue", etat: "Actif", variant: "success" as const },
            { nom: "Stocks", etat: "En cours", variant: "progress" as const },
            { nom: "Facturation", etat: "Expiré", variant: "destructive" as const },
          ].map((s) => (
            <FramePanel key={s.nom}>
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="text-sm font-medium text-foreground">{s.nom}</p>
                  <p className="text-xs text-muted-foreground">
                    Connecteur interne
                  </p>
                </div>
                <Badge variant={s.variant}>{s.etat}</Badge>
              </div>
            </FramePanel>
          ))}
        </Frame>
      </DocSection>

      <DocSection
        title="Sans contour"
        description="`variant=ghost` retire le cadre extérieur et ne garde que les panneaux. `dense` supprime le rembourrage du cadre et colle les panneaux au bord."
        layout="stack"
        code={`<Frame variant="ghost">…</Frame>
<Frame dense>…</Frame>`}
      >
        <Frame variant="ghost">
          <FramePanel>
            <FrameHeader>
              <FrameTitle>Sans cadre</FrameTitle>
              <FrameDescription>
                Le panneau porte seul la bordure.
              </FrameDescription>
            </FrameHeader>
          </FramePanel>
        </Frame>
        <Frame dense>
          <FramePanel>
            <FrameHeader>
              <FrameTitle>Dense</FrameTitle>
              <FrameDescription>
                Le panneau vient au contact de la bordure extérieure.
              </FrameDescription>
            </FrameHeader>
          </FramePanel>
        </Frame>
      </DocSection>

      <DocSection
        title="Avec actions"
        description="Le pied loge les actions de la surface entière. Pour une action par ligne, la placer dans le panneau."
        layout="stack"
        code={`<FrameFooter>
  <Button variant="secondary">Relancer</Button>
</FrameFooter>`}
      >
        <Frame>
          <FramePanel>
            <FrameHeader>
              <FrameTitle>Export de stock</FrameTitle>
              <FrameDescription>Fichier quotidien, 06:00</FrameDescription>
            </FrameHeader>
            <div className="p-5 text-sm text-muted-foreground">
              Le dernier export a échoué : le service distant n'a pas répondu.
            </div>
            <FrameFooter>
              <div className="flex justify-end">
                <Button variant="secondary">Relancer l'export</Button>
              </div>
            </FrameFooter>
          </FramePanel>
        </Frame>
      </DocSection>

      <DocPractices
        items={[
          "Frame encadre une surface d'outil — réglages, état de services, journal. Pour un objet métier isolé qu'on peut nommer et ouvrir, c'est une Card.",
          "`stacked` ne joint que les FramePanel qui sont enfants directs du Frame. Un wrapper autour de l'un d'eux casse la jointure et laisse les deux panneaux entièrement arrondis.",
          "Le rayon se règle d'un seul endroit : `--frame-radius`. Les panneaux en dérivent pour que les coins s'emboîtent — ne pas poser un `rounded-*` sur un panneau.",
          "Un seul niveau de Frame. Un cadre dans un cadre multiplie les bordures concentriques sans ajouter de hiérarchie.",
          "Le pied porte les actions de la surface entière. Une action qui ne concerne qu'une ligne appartient à son panneau.",
          "Pour des sections qui se plient et se déplient, c'est un accordéon, pas un Frame : le cadre ne gère aucun état d'ouverture.",
          "`dense` sert à coller les panneaux au bord, pas à gagner de la place sur un cadre trop chargé.",
        ]}
      />
    </DocPage>
  );
}
