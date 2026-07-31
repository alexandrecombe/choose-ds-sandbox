import { useState } from "react";
import ColorsPage from "./pages/colors";
import TypographyPage from "./pages/typography";
import IconsPage from "./pages/icons";

type Page = "colors" | "typography" | "icons";

const NAV_ITEMS: { key: Page; label: string }[] = [
  { key: "colors", label: "Colors" },
  { key: "typography", label: "Typography" },
  { key: "icons", label: "Icons" },
];

export default function App() {
  const [page, setPage] = useState<Page>("colors");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b border-border">
        <div className="mx-auto flex max-w-4xl items-center gap-8 px-6 py-4">
          <span className="font-display text-sm font-semibold tracking-tight">
            Choose DS
          </span>
          <div className="flex gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => setPage(item.key)}
                className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                  page === item.key
                    ? "bg-accent font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {page === "colors" && <ColorsPage />}
      {page === "typography" && <TypographyPage />}
      {page === "icons" && <IconsPage />}
    </div>
  );
}
