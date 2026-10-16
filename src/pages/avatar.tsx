import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/choose-ui/avatar";
import { DocPage, DocSection, DocSpecimen, DocPractices } from "@/src/doc";

/* Image de démo autonome : aucun appel réseau depuis la sandbox. */
const demoImage =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
       <rect width="80" height="80" fill="#139B51"/>
       <circle cx="40" cy="31" r="14" fill="#E7F5EE"/>
       <path d="M12 80c0-17 13-27 28-27s28 10 28 27z" fill="#E7F5EE"/>
     </svg>`,
  );

const tailles = [
  { size: "sm" as const, usage: "Tables denses" },
  { size: "default" as const, usage: "Cas courant" },
  { size: "lg" as const, usage: "En-têtes, profils" },
];

export default function AvatarPage() {
  return (
    <DocPage
      title="Avatar"
      description="Représente une personne ou un compte. Jamais une marque, un produit ni un objet métier."
    >
      <DocSection
        title="Tailles"
        description="24, 32 et 40px. `default` couvre le cas courant."
        code={`<Avatar size="lg">
  <AvatarImage src={user.photo} alt={user.name} />
  <AvatarFallback>AC</AvatarFallback>
</Avatar>`}
      >
        {tailles.map((t) => (
          <DocSpecimen key={t.size} label={t.size}>
            <Avatar size={t.size}>
              <AvatarImage src={demoImage} alt="" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
          </DocSpecimen>
        ))}
      </DocSection>

      <DocSection
        title="Fallback"
        description="Obligatoire, même avec une image : il s'affiche pendant le chargement et reste si l'image échoue. Initiales en majuscules, deux lettres maximum."
        code={`<Avatar>
  <AvatarFallback>AC</AvatarFallback>
</Avatar>`}
      >
        {tailles.map((t) => (
          <DocSpecimen key={t.size} label={t.size}>
            <Avatar size={t.size}>
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
          </DocSpecimen>
        ))}
      </DocSection>

      <DocSection
        title="Pastille de statut"
        description="AvatarBadge marque une présence ou un état binaire. Il n'a pas de couleur par défaut : passer un token sémantique explicite."
        code={`<Avatar>
  <AvatarImage src={user.photo} alt={user.name} />
  <AvatarFallback>AC</AvatarFallback>
  <AvatarBadge className="bg-[color:var(--success)]" />
</Avatar>`}
      >
        {tailles.map((t) => (
          <DocSpecimen key={t.size} label={t.size}>
            <Avatar size={t.size}>
              <AvatarImage src={demoImage} alt="" />
              <AvatarFallback>AC</AvatarFallback>
              <AvatarBadge className="bg-[color:var(--success)]" />
            </Avatar>
          </DocSpecimen>
        ))}
      </DocSection>

      <DocSection
        title="Groupe"
        description="Avatars empilés avec un anneau de séparation, et un compteur pour le reste. Le compteur suit la taille du groupe."
        layout="stack"
        code={`<AvatarGroup>
  <Avatar><AvatarFallback>AC</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>ML</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
  <AvatarGroupCount>+3</AvatarGroupCount>
</AvatarGroup>`}
      >
        {tailles.map((t) => (
          <div key={t.size} className="flex items-center gap-4">
            <AvatarGroup>
              <Avatar size={t.size}>
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <Avatar size={t.size}>
                <AvatarImage src={demoImage} alt="" />
                <AvatarFallback>ML</AvatarFallback>
              </Avatar>
              <Avatar size={t.size}>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>+3</AvatarGroupCount>
            </AvatarGroup>
            <span className="text-xs text-muted-foreground">
              {t.size}
            </span>
          </div>
        ))}
      </DocSection>

      <DocPractices
        items={[
          "Toujours fournir un AvatarFallback, même quand une image est passée. Sans lui, l'avatar est un trou visuel pendant le chargement et un trou définitif si l'image échoue.",
          "Si le nom est inconnu, utiliser une icône Lucide `User` plutôt que des initiales inventées.",
          "L'avatar n'encode pas d'information par sa teinte : pas de couleur de fond attribuée par personne ou par rôle.",
          "AvatarBadge ne porte qu'une présence ou un état binaire, sans texte. Pour un statut lisible (Actif, En attente), c'est un Badge à côté du nom.",
          "Pour un logo de marque ou de partenaire, c'est une image — pas un Avatar. Le rond de portrait signifie « une personne ».",
          "Au-delà de 4 visages, un groupe empilé n'est plus lisible : préférer une liste nommée.",
          "Jamais de rond d'initiales fabriqué à la main : il n'héritera ni des tailles, ni de l'anneau de groupe, ni des tokens.",
        ]}
      />
    </DocPage>
  );
}
