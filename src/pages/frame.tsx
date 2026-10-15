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
        title="Cadre simple"
        description="L'en-tête et le pied sont des barres de chrome posées sur le fond du cadre ; le panneau est la surface de contenu. Les trois s'alignent horizontalement."
        layout="stack"
        code={`<Frame>
  <FrameHeader>
    <FrameTitle>Synchronisation</FrameTitle>
    <FrameDescription>Connecteur catalogue</FrameDescription>
  </FrameHeader>
  <FramePanel>…</FramePanel>
  <FrameFooter>Dernier passage il y a 4 minutes</FrameFooter>
</Frame>`}
      >
        <Frame>
          <FrameHeader>
            <FrameTitle>Synchronisation</FrameTitle>
            <FrameDescription>
              Connecteur catalogue — Maison Lelievre
            </FrameDescription>
          </FrameHeader>
          <FramePanel>
            <p className="text-sm text-muted-foreground">
              348 références synchronisées, 2 en erreur. La prochaine passe est
              programmée dans 12 minutes.
            </p>
          </FramePanel>
          <FrameFooter>
            <span className="text-xs text-muted-foreground">
              Dernier passage il y a 4 minutes
            </span>
          </FrameFooter>
        </Frame>
      </DocSection>

      <DocSection
        title="Panneaux empilés"
        description="`stacked` supprime les marges entre panneaux et leur fait partager leurs bordures. Pour une liste d'enregistrements de même nature."
        layout="stack"
        code={`<Frame stacked>
  <FrameHeader>…</FrameHeader>
  <FramePanel>…</FramePanel>
  <FramePanel>…</FramePanel>
</Frame>`}
      >
        <Frame stacked>
          <FrameHeader>
            <FrameTitle>Connecteurs</FrameTitle>
            <FrameDescription>État des trois services</FrameDescription>
          </FrameHeader>
          {[
            { nom: "Catalogue", etat: "Actif", variant: "success" as const },
            { nom: "Stocks", etat: "En cours", variant: "progress" as const },
            { nom: "Facturation", etat: "Expiré", variant: "destructive" as const },
          ].map((s) => (
            <FramePanel key={s.nom}>
              <div className="flex items-center justify-between">
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
        title="Sans contour, et dense"
        description="`variant=ghost` retire le cadre extérieur. `dense` supprime le rembourrage du cadre : les panneaux viennent au contact du bord."
        layout="stack"
        code={`<Frame variant="ghost">…</Frame>
<Frame dense>…</Frame>`}
      >
        <Frame variant="ghost">
          <FrameHeader>
            <FrameTitle>Sans contour</FrameTitle>
            <FrameDescription>
              Le panneau porte seul la bordure.
            </FrameDescription>
          </FrameHeader>
          <FramePanel>
            <p className="text-sm text-muted-foreground">
              Le cadre extérieur a disparu, le fond reste.
            </p>
          </FramePanel>
        </Frame>
        <Frame dense>
          <FrameHeader>
            <FrameTitle>Dense</FrameTitle>
            <FrameDescription>
              Le panneau vient au contact de la bordure extérieure.
            </FrameDescription>
          </FrameHeader>
          <FramePanel>
            <p className="text-sm text-muted-foreground">
              Plus de marge entre le cadre et le panneau.
            </p>
          </FramePanel>
        </Frame>
      </DocSection>

      <DocSection
        title="Espacement"
        description="`spacing` règle le rembourrage du cadre et des barres : `xs`, `sm`, `default`, `lg`."
        layout="stack"
        code={`<Frame spacing="xs">…</Frame>`}
      >
        {(["xs", "sm", "default", "lg"] as const).map((e) => (
          <Frame key={e} spacing={e}>
            <FrameHeader>
              <FrameTitle>spacing = {e}</FrameTitle>
            </FrameHeader>
            <FramePanel>
              <p className="text-sm text-muted-foreground">
                Rembourrage du cadre, des barres et du panneau.
              </p>
            </FramePanel>
          </Frame>
        ))}
      </DocSection>

      <DocSection
        title="Avec action"
        description="Le pied loge les actions de la surface entière. Pour une action par ligne, la placer dans le panneau."
        layout="stack"
        code={`<FrameFooter>
  <div className="flex justify-end">
    <Button variant="secondary">Relancer</Button>
  </div>
</FrameFooter>`}
      >
        <Frame>
          <FrameHeader>
            <FrameTitle>Export de stock</FrameTitle>
            <FrameDescription>Fichier quotidien, 06:00</FrameDescription>
          </FrameHeader>
          <FramePanel>
            <p className="text-sm text-muted-foreground">
              Le dernier export a échoué : le service distant n'a pas répondu.
            </p>
          </FramePanel>
          <FrameFooter>
            <div className="flex justify-end">
              <Button variant="secondary">Relancer l'export</Button>
            </div>
          </FrameFooter>
        </Frame>
      </DocSection>

      <DocPractices
        items={[
          "FrameHeader et FrameFooter sont des barres de chrome, enfants directs du Frame — pas du panneau. Placés dans le panneau, ils perdent le fond du cadre et doublent le rembourrage.",
          "Leur nom de slot interne dit `frame-panel-header`, ce qui prête à confusion : leur rembourrage horizontal est calé sur celui du panneau pour que les trois s'alignent, pas pour qu'ils soient imbriqués.",
          "Le panneau porte déjà son rembourrage : ne pas lui ajouter un `p-*`, ça décale l'alignement avec les barres.",
          "Frame encadre une surface d'outil — réglages, état de services, journal. Pour un objet métier isolé qu'on peut nommer et ouvrir, c'est une Card.",
          "`stacked` ne joint que les FramePanel enfants directs du Frame. Un wrapper autour de l'un d'eux casse la jointure et laisse les deux panneaux entièrement arrondis.",
          "Le rayon se règle d'un seul endroit : `--frame-radius`. Les panneaux en dérivent pour que les coins s'emboîtent — ne pas poser un `rounded-*` sur un panneau.",
          "Un seul niveau de Frame. Un cadre dans un cadre multiplie les bordures concentriques sans ajouter de hiérarchie.",
          "Pour des sections qui se plient et se déplient, c'est un accordéon : le cadre ne gère aucun état d'ouverture.",
        ]}
      />
    </DocPage>
  );
}
