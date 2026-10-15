import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/choose-ui/hover-card";
import { DocPage, DocSection, DocPractices } from "@/src/doc";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CalendarDaysIcon } from "lucide-react";

export default function HoverCardPage() {
  return (
    <DocPage
      title="Hover Card"
      description="Carte flottante affichée au survol d'un élément, pour prévisualiser un contenu sans quitter la page."
    >
      {/* ---- Basique ---- */}
      <DocSection
        title="Aperçu au survol"
        description="Survoler le lien pour afficher un aperçu dans une carte flottante."
        code={`<HoverCard>
  <HoverCardTrigger asChild>
    <a href="#" className="underline">
      @nextjs
    </a>
  </HoverCardTrigger>
  <HoverCardContent>
    <p>The React Framework — created and maintained by @vercel.</p>
  </HoverCardContent>
</HoverCard>`}
      >
        <p className="text-sm font-sans">
          Créé par{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <a
                href="#"
                className="font-medium underline underline-offset-4"
                onClick={(e) => e.preventDefault()}
              >
                @nextjs
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 font-sans">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarFallback>NJ</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@nextjs</h4>
                  <p className="text-sm text-muted-foreground">
                    The React Framework — created and maintained by @vercel.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </p>
      </DocSection>

      {/* ---- Profil utilisateur ---- */}
      <DocSection
        title="Aperçu de profil"
        description="Cas d'usage fréquent : afficher un résumé de profil au survol d'un nom d'utilisateur."
        code={`<HoverCard>
  <HoverCardTrigger asChild>
    <span className="cursor-pointer font-medium">
      Marie Dupont
    </span>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="space-y-1">
      <h4 className="text-sm font-semibold">Marie Dupont</h4>
      <p className="text-sm text-muted-foreground">
        Responsable produit — Équipe Marketplace
      </p>
    </div>
  </HoverCardContent>
</HoverCard>`}
      >
        <p className="text-sm font-sans">
          Assigné à{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <span className="cursor-pointer font-medium underline underline-offset-4">
                Marie Dupont
              </span>
            </HoverCardTrigger>
            <HoverCardContent className="w-72 font-sans">
              <div className="flex items-start space-x-3">
                <Avatar>
                  <AvatarFallback>MD</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Marie Dupont</h4>
                  <p className="text-sm text-muted-foreground">
                    Responsable produit — Équipe Marketplace
                  </p>
                  <p className="text-xs text-muted-foreground">
                    marie.dupont@choose.co
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </p>
      </DocSection>

      <DocPractices
        items={[
          "Réserver la hover card aux informations complémentaires non essentielles",
          "Ne pas y mettre d'actions principales (préférer un menu ou un dialog)",
          "Le contenu doit être lisible en un coup d'œil : pas de scroll",
          "Prévoir un fallback pour le tactile où le hover n'existe pas",
        ]}
      />
    </DocPage>
  );
}
