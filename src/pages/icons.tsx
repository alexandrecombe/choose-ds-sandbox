import { ExternalLink, icons } from "lucide-react";

export default function IconsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
        Icons
      </h1>
      <p className="mt-2 text-base text-muted-foreground">
        Rules and reference for iconography in the Choose Design System.
      </p>

      <section className="mt-12 rounded-lg border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">
          Usage rules
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
            <span>
              <strong>Lucide exclusively.</strong> All icons come from the Lucide
              library. No custom SVGs, no other icon packs.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
            <span>
              <strong>Never use emoji as a visual marker.</strong> Emoji
              rendering varies across platforms and breaks visual consistency.
              Always use a Lucide icon instead.
            </span>
          </li>
        </ul>

        <p className="mt-6 text-sm text-muted-foreground">
          {Object.keys(icons).length} icons available via{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            lucide-react
          </code>
        </p>
      </section>

      <section className="mt-8">
        <a
          href="https://lucide.dev/icons/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Browse Lucide icons
          <ExternalLink size={16} />
        </a>
      </section>
    </div>
  );
}
