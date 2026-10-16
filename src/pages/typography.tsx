import {
  getFontFamilies,
  getTypographyTokens,
  getTextScale,
} from "../tokens/source";

const families = getFontFamilies();
const headings = getTypographyTokens();
const textScale = getTextScale();

const cssFontStack: Record<string, string> = {
  "font-sans":
    '"Maison Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  "font-heading": '"SangBleu Republic", Georgia, serif',
};

function fontWeightLabel(w: number): string {
  const map: Record<number, string> = {
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Regular",
    500: "Medium",
    600: "Semibold",
    700: "Bold",
    800: "Extra Bold",
    900: "Black",
  };
  return map[w] ?? String(w);
}

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function TableHead() {
  return (
    <div className="grid grid-cols-[1fr_minmax(140px,auto)_minmax(160px,auto)] items-end gap-4 border-b border-border pb-2">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Aperçu
      </span>
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Classe / Token
      </span>
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Détails
      </span>
    </div>
  );
}

export default function TypographyPage() {
  return (
    <div className="max-w-5xl px-10 py-16 font-sans">
      {/* ── Page header ─────────────────────────────────────────── */}
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
        Typography
      </h1>
      <p className="mt-2 text-base text-muted-foreground max-w-2xl">
        Règles de composition typographique du Design System Choose. Les titres
        utilisent SangBleu Republic, le texte courant Maison Neue.
      </p>

      {/* ── Font families ───────────────────────────────────────── */}
      <section className="mt-16">
        <SectionHeader
          title="Familles"
          description="Deux familles, et deux seulement : SangBleu Republic pour les titres, Maison Neue pour tout le reste."
        />

        <div className="space-y-10">
          {families.map((f) => {
            const stack = cssFontStack[f.key] ?? f.name;
            return (
              <div key={f.key} className="border-b border-border/50 pb-8">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="rounded bg-muted px-2 py-0.5 text-xs font-medium text-foreground">
                    {f.key}
                  </span>
                  <span className="text-sm text-muted-foreground">{f.name}</span>
                </div>
                <p
                  className="text-[40px] leading-[1.2] tracking-tight text-foreground"
                  style={{ fontFamily: stack }}
                >
                  Aa Bb Cc Dd Ee Ff Gg
                </p>
                <p
                  className="mt-3 text-lg text-muted-foreground"
                  style={{ fontFamily: stack }}
                >
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                  0123456789
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Heading roles ───────────────────────────────────────── */}
      <section className="mt-20">
        <SectionHeader
          title="Titres"
          description="Tokens composites de la collection Custom/Desktop. Chaque rôle combine famille, taille, graisse, interligne et espacement."
        />

        <div>
          {headings.map((h) => {
            const familyKey =
              h.fontFamily === "SangBleu Republic"
                ? "font-heading"
                : "font-sans";
            return (
              <div
                key={h.role}
                className="flex flex-wrap items-baseline gap-x-6 gap-y-2 border-b border-border/30 py-5"
              >
                <p
                  className="text-foreground w-full"
                  style={{
                    fontFamily: cssFontStack[familyKey],
                    fontSize: `${h.fontSize}px`,
                    lineHeight: `${h.lineHeight}px`,
                    fontWeight: h.fontWeight,
                    letterSpacing: `${h.letterSpacing}px`,
                  }}
                >
                  Choose Design System
                </p>
                <span className="rounded bg-muted px-2 py-0.5 text-xs text-foreground w-fit">
                  {h.role}
                </span>
                <span className="text-xs text-muted-foreground">
                  {h.fontFamily} · {h.fontSize}/{h.lineHeight} ·{" "}
                  {fontWeightLabel(h.fontWeight)}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Text scale ──────────────────────────────────────────── */}
      <section className="mt-20">
        <SectionHeader
          title="Texte"
          description="Rampe de tailles issue de la collection Theme. Le texte courant utilise Maison Neue, weight 400."
        />
        <TableHead />

        <div>
          {textScale.map((t) => (
            <div
              key={t.size}
              className="grid grid-cols-[1fr_minmax(140px,auto)_minmax(160px,auto)] items-center gap-4 border-b border-border/30 py-4"
            >
              <p
                className="text-foreground truncate"
                style={{
                  fontFamily: cssFontStack["font-sans"],
                  fontSize: `${t.fontSize}px`,
                  lineHeight: `${t.lineHeight}px`,
                }}
              >
                The quick brown fox jumps over the lazy dog
              </p>
              <span className="rounded bg-muted px-2 py-0.5 text-xs text-foreground self-start mt-1 w-fit">
                text-{t.size}
              </span>
              <span className="text-xs text-muted-foreground">
                {t.fontSize}px / {t.lineHeight}px
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
