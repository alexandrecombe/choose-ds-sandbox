import {
  getSemanticColors,
  COLOR_GROUPS,
  type ColorToken,
} from "../tokens/source";

const lightColors = getSemanticColors("light");
const darkColors = getSemanticColors("dark");

// Checkerboard background for swatches with transparency
const checkerboard =
  "repeating-conic-gradient(#e0e0e0 0% 25%, #fff 0% 50%) 0 0 / 12px 12px";

function Swatch({ token }: { token: ColorToken }) {
  const hasAlpha = token.alpha < 1;
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-10 w-10 shrink-0 rounded-md border border-black/10"
        style={
          hasAlpha
            ? { background: `${checkerboard}` }
            : { backgroundColor: token.cssValue }
        }
      >
        {hasAlpha && (
          <div
            className="h-full w-full rounded-md"
            style={{ backgroundColor: token.cssValue }}
          />
        )}
      </div>
      <span className="font-mono text-xs text-muted-foreground">
        {token.cssValue}
      </span>
    </div>
  );
}

function TokenRow({ name }: { name: string }) {
  const light = lightColors.get(name);
  const dark = darkColors.get(name);
  if (!light || !dark) return null;

  return (
    <div className="grid grid-cols-[200px_1fr_1fr] items-center gap-4 border-b border-border/50 py-3">
      <div>
        <p className="font-mono text-sm font-medium text-foreground">{name}</p>
        {light.description && (
          <p className="mt-0.5 text-xs text-muted-foreground">
            {light.description}
          </p>
        )}
      </div>
      <Swatch token={light} />
      <Swatch token={dark} />
    </div>
  );
}

export default function ColorsPage() {
  return (
    <div className="max-w-4xl px-10 py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
        Colors
      </h1>
      <p className="mt-2 text-base text-muted-foreground">
        Tokens de couleurs sémantiques du Design System Choose. Chaque couleur
        correspond à un rôle, jamais à une valeur brute de palette. Modes Light
        et Dark affichés côte à côte.
      </p>

      {COLOR_GROUPS.map((group) => (
        <section key={group.label} className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">
            {group.label}
          </h2>

          {/* Column headers */}
          <div className="mt-4 grid grid-cols-[200px_1fr_1fr] gap-4 border-b border-border pb-2">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Token
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Light
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Dark
            </span>

          </div>

          {group.tokenNames.map((name) => (
            <TokenRow key={name} name={name} />
          ))}
        </section>
      ))}
    </div>
  );
}
