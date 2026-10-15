import { ChevronDown } from "lucide-react";
import {
  Frame,
  FramePanel,
  FrameHeader,
  FrameTitle,
  FrameDescription,
  FrameFooter,
} from "@/components/choose-ui/frame";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/choose-ui/badge";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

const services = [
  { nom: "Catalogue", etat: "Actif", variant: "success" as const },
  { nom: "Stocks", etat: "En cours", variant: "progress" as const },
  { nom: "Facturation", etat: "Expiré", variant: "destructive" as const },
];

function LigneService({ s }: { s: (typeof services)[number] }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-foreground">{s.nom}</p>
        <p className="text-xs text-muted-foreground">Connecteur interne</p>
      </div>
      <Badge variant={s.variant}>{s.etat}</Badge>
    </div>
  );
}

export default function FramePage() {
  return (
    <DocPage
      title="Frame"
      description="Cadre qui regroupe des panneaux apparentés sous un même contour. Pour une surface d'outil — réglages, état d'un service, liste d'enregistrements — pas pour un objet métier isolé."
    >
      <DocSection
        title="Panneaux séparés"
        description="Disposition par défaut : chaque panneau garde sa bordure arrondie, séparé du suivant par une gouttière."
        layout="stack"
        code={`<Frame>
  <FrameHeader>
    <FrameTitle>Connecteurs</FrameTitle>
    <FrameDescription>État des services</FrameDescription>
  </FrameHeader>
  <FramePanel>…</FramePanel>
  <FramePanel>…</FramePanel>
</Frame>`}
      >
        <Frame>
          <FrameHeader>
            <FrameTitle>Connecteurs</FrameTitle>
            <FrameDescription>État des services</FrameDescription>
          </FrameHeader>
          {services.slice(0, 2).map((s) => (
            <FramePanel key={s.nom}>
              <LigneService s={s} />
            </FramePanel>
          ))}
        </Frame>
      </DocSection>

      <DocSection
        title="Panneaux empilés"
        description="`stacked` fusionne les panneaux en une colonne : une seule bordure marque la jointure. Pour une liste d'enregistrements de même nature."
        layout="stack"
        code={`<Frame stacked>
  <FrameHeader>…</FrameHeader>
  <FramePanel>…</FramePanel>
  <FramePanel>…</FramePanel>
</Frame>`}
      >
        <Frame stacked>
          <FrameHeader>
            <FrameTitle>Journal des services</FrameTitle>
            <FrameDescription>Activité et erreurs récentes</FrameDescription>
          </FrameHeader>
          {services.map((s) => (
            <FramePanel key={s.nom}>
              <LigneService s={s} />
            </FramePanel>
          ))}
          <FrameFooter>
            <span className="text-xs text-muted-foreground">
              Mis à jour il y a 4 minutes
            </span>
          </FrameFooter>
        </Frame>
      </DocSection>

      <DocSection
        title="Panneau repliable"
        description="La barre de titre déplie son panneau. Chaque section repliable a son propre Collapsible ; `stacked` ne joint rien ici, puisque le panneau est à l'intérieur du contenu replié."
        layout="stack"
        code={`<Frame>
  <Collapsible defaultOpen>
    <CollapsibleTrigger>
      <FrameHeader>
        <FrameTitle>Étape 1 — Préparation</FrameTitle>
      </FrameHeader>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <FramePanel>…</FramePanel>
    </CollapsibleContent>
  </Collapsible>
</Frame>`}
      >
        <Frame>
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="group">
              <FrameHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <FrameTitle>Étape 1 — Préparation</FrameTitle>
                    <FrameDescription>
                      Vérifier le catalogue avant import
                    </FrameDescription>
                  </div>
                  <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform group-aria-expanded:rotate-180" />
                </div>
              </FrameHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <FramePanel>
                <p className="text-sm text-muted-foreground">
                  Contrôler que les 348 références portent un prix et une
                  disponibilité avant de lancer la synchronisation.
                </p>
              </FramePanel>
            </CollapsibleContent>
          </Collapsible>
        </Frame>
      </DocSection>

      <DocSection
        title="Espacement"
        description="`spacing` règle le rembourrage du cadre, des barres et du panneau."
        layout="stack"
        code={`<Frame spacing="xs">…</Frame>
<Frame spacing="sm">…</Frame>
<Frame>…</Frame>
<Frame spacing="lg">…</Frame>`}
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
        title="Rayon"
        description="Le rayon se pilote par `--frame-radius` ; les panneaux en dérivent pour que les coins s'emboîtent. Sans réglage, le cadre prend `--radius-xl`, le rayon Choose par défaut."
        layout="stack"
        code={`<Frame className="[--frame-radius:var(--radius-sm)]">…</Frame>
<Frame className="[--frame-radius:var(--radius-md)]">…</Frame>
<Frame className="[--frame-radius:var(--radius-lg)]">…</Frame>
<Frame>…</Frame>`}
      >
        {[
          { cle: "sm", classe: "[--frame-radius:var(--radius-sm)]", px: "6px" },
          { cle: "md", classe: "[--frame-radius:var(--radius-md)]", px: "8px" },
          { cle: "lg", classe: "[--frame-radius:var(--radius-lg)]", px: "10px" },
          { cle: "xl (défaut)", classe: "", px: "14px" },
        ].map((r) => (
          <Frame key={r.cle} className={r.classe}>
            <FrameHeader>
              <FrameTitle>
                radius = {r.cle} · {r.px}
              </FrameTitle>
            </FrameHeader>
            <FramePanel>
              <p className="text-sm text-muted-foreground">
                Les coins du panneau s'emboîtent dans ceux du cadre.
              </p>
            </FramePanel>
          </Frame>
        ))}
      </DocSection>

      <DocPractices
        items={[
          "Trois dispositions sont retenues pour Choose : panneaux séparés, panneaux empilés, panneau repliable. Les variantes `ghost` et `dense` de reui ne sont pas exposées — le cadre garde toujours son contour et son rembourrage.",
          "FrameHeader et FrameFooter sont des barres de chrome, enfants directs du Frame — pas du panneau. Placés dans le panneau, ils perdent le fond du cadre et doublent le rembourrage.",
          "Leur nom de slot interne dit `frame-panel-header`, ce qui prête à confusion : leur rembourrage horizontal est calé sur celui du panneau pour que les trois s'alignent, pas pour qu'ils soient imbriqués.",
          "Le panneau porte déjà son rembourrage : ne pas lui ajouter un `p-*`, ça décale l'alignement avec les barres.",
          "Un panneau sans barre de titre n'est pas retenu : le cadre doit toujours annoncer ce qu'il regroupe.",
          "`stacked` ne joint que les FramePanel enfants directs du Frame. Dans un panneau repliable, le panneau est dans le contenu replié : la jointure ne s'applique pas.",
          "Le rayon se règle d'un seul endroit, `--frame-radius`, sur les rayons Choose : sm, md, lg, ou xl par défaut. Ne pas poser un `rounded-*` sur un panneau.",
          "Frame encadre une surface d'outil. Pour un objet métier isolé qu'on peut nommer et ouvrir, c'est une Card.",
          "Pour plusieurs sections qui se déplient indépendamment, c'est un accordéon : le repliable du Frame vaut pour une section isolée.",
        ]}
      />
    </DocPage>
  );
}
