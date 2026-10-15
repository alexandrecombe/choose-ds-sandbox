/* Gabarit de page composant, inspiré de la doc Geist de Vercel :
   titre + description, puis une section par thème — spécimens vivants dans un
   panneau encadré, code repliable sous le panneau — et les bonnes pratiques en
   prose à la fin, suivies de la navigation précédent/suivant. */
import { type ReactNode } from "react";
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PAGE_ORDER } from "@/src/nav";
import { useNav } from "./nav-context";

/* --- Page ---------------------------------------------------------------- */

export function DocPage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-4xl px-10 py-16">
      <header>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          {description}
        </p>
      </header>
      <div className="mt-10 border-t border-border" />
      {children}
      <DocPrevNext />
    </div>
  );
}

/* --- Section ------------------------------------------------------------- */

export function DocSection({
  title,
  description,
  code,
  layout = "row",
  children,
}: {
  title: string;
  description?: string;
  code?: string;
  layout?: "row" | "stack";
  children: ReactNode;
}) {
  return (
    <section className="border-b border-border py-10">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          {description}
        </p>
      )}

      <div className="mt-6 rounded-lg border border-border bg-muted/40 px-6 py-10">
        <div
          className={cn(
            layout === "row"
              ? "flex flex-wrap items-center justify-center gap-x-4 gap-y-6"
              : "flex flex-col gap-4",
          )}
        >
          {children}
        </div>
      </div>

      {code && <DocCode code={code} />}
    </section>
  );
}

/* --- Spécimen (légende optionnelle sous l'élément) ----------------------- */

export function DocSpecimen({
  label,
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  if (!label) return <>{children}</>;
  return (
    <div className="flex min-w-24 flex-col items-center gap-2">
      {children}
      <span className="font-mono text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

/* --- Code repliable ------------------------------------------------------ */

export function DocCode({ code }: { code: string }) {
  return (
    <details className="group mt-3">
      <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-md py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
        <ChevronRight className="size-4 transition-transform group-open:rotate-90" />
        Voir le code
      </summary>
      <pre className="mt-3 overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 font-mono text-xs leading-relaxed text-foreground">
        {code}
      </pre>
    </details>
  );
}

/* --- Bonnes pratiques ---------------------------------------------------- */

export function DocPractices({ items }: { items: ReactNode[] }) {
  return (
    <section className="border-b border-border py-10">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">
        Bonnes pratiques
      </h2>
      <ul className="mt-5 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground">
            <span className="mt-2 block size-1 shrink-0 rounded-full bg-muted-foreground" />
            <span className="max-w-2xl">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* --- Précédent / suivant ------------------------------------------------- */

function DocPrevNext() {
  const { page, setPage } = useNav();
  const i = PAGE_ORDER.findIndex((p) => p.key === page);
  const prec = i > 0 ? PAGE_ORDER[i - 1] : null;
  const suiv = i >= 0 && i < PAGE_ORDER.length - 1 ? PAGE_ORDER[i + 1] : null;

  return (
    <nav className="flex items-stretch gap-4 pt-10">
      {prec ? (
        <button
          onClick={() => setPage(prec.key)}
          className="group flex flex-1 flex-col items-start gap-1 rounded-lg border border-border px-5 py-4 text-left transition-colors hover:bg-muted/60"
        >
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <ArrowLeft className="size-3.5" />
            Précédent
          </span>
          <span className="text-sm font-medium text-foreground">
            {prec.label}
          </span>
        </button>
      ) : (
        <div className="flex-1" />
      )}

      {suiv ? (
        <button
          onClick={() => setPage(suiv.key)}
          className="group flex flex-1 flex-col items-end gap-1 rounded-lg border border-border px-5 py-4 text-right transition-colors hover:bg-muted/60"
        >
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            Suivant
            <ArrowRight className="size-3.5" />
          </span>
          <span className="text-sm font-medium text-foreground">
            {suiv.label}
          </span>
        </button>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
