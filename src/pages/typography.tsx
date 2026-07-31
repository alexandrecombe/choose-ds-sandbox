import {
  getFontFamilies,
  getTypographyTokens,
  getTextScale,
} from "../tokens/source";

const families = getFontFamilies();
const headings = getTypographyTokens();
const textScale = getTextScale();

/** Maps Figma font-family keys to CSS font-family stacks used in the app. */
const cssFontStack: Record<string, string> = {
  "font-sans": '"Maison Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  "font-heading": '"SangBleu Republic", Georgia, serif',
  "font-mono": '"Geist Mono", monospace',
  "font-serif": "Georgia, serif",
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

export default function TypographyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
        Typography
      </h1>
      <p className="mt-2 text-base text-muted-foreground">
        Font families and type scale from the Choose Design System.
        Headings use SangBleu Republic, body text uses Maison Neue.
      </p>

      {/* ── Font families ────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-foreground">
          Font Families
        </h2>
        <div className="mt-6 space-y-8">
          {families.map((f) => (
            <div key={f.key} className="border-b border-border/50 pb-6">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm font-medium text-foreground">
                  {f.key}
                </span>
                <span className="text-sm text-muted-foreground">{f.name}</span>
              </div>
              <p
                className="mt-3 text-3xl text-foreground"
                style={{ fontFamily: cssFontStack[f.key] ?? f.name }}
              >
                The quick brown fox jumps over the lazy dog
              </p>
              <p
                className="mt-1 text-base text-muted-foreground"
                style={{ fontFamily: cssFontStack[f.key] ?? f.name }}
              >
                ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                0123456789
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Heading roles ────────────────────────────────────────── */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold text-foreground">
          Heading Roles
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Composite tokens from the Custom/Desktop collection. Each role
          combines font-family, size, weight, line-height and letter-spacing.
        </p>

        <div className="mt-8 space-y-10">
          {headings.map((h) => (
            <div key={h.role} className="border-b border-border/50 pb-6">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-mono text-sm font-medium text-foreground">
                  {h.role}
                </span>
                <span className="text-xs text-muted-foreground">
                  {h.fontFamily} &middot; {h.fontSize}px / {h.lineHeight}px
                  &middot; {fontWeightLabel(h.fontWeight)} &middot;
                  letter-spacing {h.letterSpacing}px
                </span>
              </div>
              <p
                className="mt-3 text-foreground"
                style={{
                  fontFamily:
                    cssFontStack[
                      h.fontFamily === "SangBleu Republic"
                        ? "font-heading"
                        : "font-sans"
                    ],
                  fontSize: `${h.fontSize}px`,
                  lineHeight: `${h.lineHeight}px`,
                  fontWeight: h.fontWeight,
                  letterSpacing: `${h.letterSpacing}px`,
                }}
              >
                Choose Design System
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Text scale ───────────────────────────────────────────── */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold text-foreground">
          Text Scale
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Size ramp from the Theme collection. Body text uses Maison Neue
          (font-sans) by default, weight 400.
        </p>

        {/* Column headers */}
        <div className="mt-6 grid grid-cols-[80px_100px_1fr] items-center gap-4 border-b border-border pb-2">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Size
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Value
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Preview
          </span>
        </div>

        {textScale.map((t) => (
          <div
            key={t.size}
            className="grid grid-cols-[80px_100px_1fr] items-center gap-4 border-b border-border/50 py-3"
          >
            <span className="font-mono text-sm font-medium text-foreground">
              {t.size}
            </span>
            <span className="text-xs text-muted-foreground">
              {t.fontSize}px / {t.lineHeight}px
            </span>
            <p
              className="truncate text-foreground"
              style={{
                fontFamily: cssFontStack["font-sans"],
                fontSize: `${t.fontSize}px`,
                lineHeight: `${t.lineHeight}px`,
              }}
            >
              The quick brown fox
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
