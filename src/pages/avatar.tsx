import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/choose-ui/avatar";

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

const sizes = [
  { size: "sm" as const, label: "sm", usage: "Tables denses, listes compactes" },
  { size: "default" as const, label: "default", usage: "Cas courant" },
  { size: "lg" as const, label: "lg", usage: "En-têtes, fiches de profil" },
];

const props: {
  name: string;
  type: string;
  default: string;
  description: string;
}[] = [
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: "Diamètre de l'avatar (24 / 32 / 40px)",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "AvatarImage puis AvatarFallback, et AvatarBadge si besoin",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Classes CSS additionnelles fusionnées via cn()",
  },
];

export default function AvatarPage() {
  return (
    <div className="max-w-4xl px-10 py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
        Avatar
      </h1>
      <p className="mt-2 text-base text-muted-foreground">
        Représente une personne ou un compte. Jamais une marque ni un objet
        métier.
      </p>

      {/* ── Composition ──────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-foreground">Composition</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Le fallback est obligatoire : il s'affiche tant que l'image charge, et
          définitivement si elle échoue.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs text-foreground">
{`<Avatar size="lg">
  <AvatarImage src={user.photo} alt={user.name} />
  <AvatarFallback>AC</AvatarFallback>
</Avatar>`}
        </pre>
      </section>

      {/* ── Tailles ──────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-foreground">Tailles</h2>
        <div className="mt-6 space-y-6">
          {sizes.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-6 border-b border-border/50 pb-6"
            >
              <div className="flex w-40 shrink-0 items-center gap-4">
                <Avatar size={s.size}>
                  <AvatarImage src={demoImage} alt="" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <Avatar size={s.size}>
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <p className="font-mono text-sm font-medium text-foreground">
                  {s.label}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {s.usage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pastille de statut ───────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-foreground">
          Pastille de statut
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            AvatarBadge
          </code>{" "}
          marque une présence ou un état binaire. Pour un statut lisible, passer
          par un Badge à côté du nom.
        </p>
        <div className="mt-6 flex items-center gap-6">
          {sizes.map((s) => (
            <Avatar key={s.label} size={s.size}>
              <AvatarImage src={demoImage} alt="" />
              <AvatarFallback>AC</AvatarFallback>
              <AvatarBadge className="bg-[color:var(--success)]" />
            </Avatar>
          ))}
        </div>
      </section>

      {/* ── Groupe ───────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-foreground">Groupe</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Avatars empilés, avec un compteur pour le reste. Au-delà de 4 visages,
          préférer une liste.
        </p>
        <div className="mt-6 space-y-6">
          {sizes.map((s) => (
            <AvatarGroup key={s.label}>
              <Avatar size={s.size}>
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <Avatar size={s.size}>
                <AvatarImage src={demoImage} alt="" />
                <AvatarFallback>ML</AvatarFallback>
              </Avatar>
              <Avatar size={s.size}>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>+3</AvatarGroupCount>
            </AvatarGroup>
          ))}
        </div>
      </section>

      {/* ── Props ────────────────────────────────────────────────── */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold text-foreground">Props</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-2 pr-4 font-medium text-muted-foreground">
                  Prop
                </th>
                <th className="pb-2 pr-4 font-medium text-muted-foreground">
                  Type
                </th>
                <th className="pb-2 pr-4 font-medium text-muted-foreground">
                  Défaut
                </th>
                <th className="pb-2 font-medium text-muted-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {props.map((p) => (
                <tr key={p.name} className="border-b border-border/50">
                  <td className="py-2.5 pr-4 font-mono text-xs font-medium text-foreground">
                    {p.name}
                  </td>
                  <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">
                    {p.type}
                  </td>
                  <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">
                    {p.default}
                  </td>
                  <td className="py-2.5 text-xs text-muted-foreground">
                    {p.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
