/* Sélecteur de thème de la sandbox.
   Utilise le ButtonGroup du DS, donc le Button de components/ui et non
   choose-ui/button : c'est la condition documentée pour que les rayons
   fusionnent (voir button-group.usage.md). */
import { Monitor, Sun, Moon } from "lucide-react";
import { ButtonGroup } from "@/components/choose-ui/button-group";
import { Button } from "@/components/ui/button";
import { useTheme, type Theme } from "./theme";

const options: { valeur: Theme; libelle: string; Icone: typeof Sun }[] = [
  { valeur: "system", libelle: "Thème du système", Icone: Monitor },
  { valeur: "light", libelle: "Thème clair", Icone: Sun },
  { valeur: "dark", libelle: "Thème sombre", Icone: Moon },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <ButtonGroup aria-label="Thème">
      {options.map(({ valeur, libelle, Icone }) => {
        const actif = theme === valeur;
        return (
          <Button
            key={valeur}
            type="button"
            size="icon-sm"
            variant={actif ? "secondary" : "ghost"}
            aria-label={libelle}
            aria-pressed={actif}
            onClick={() => setTheme(valeur)}
          >
            <Icone />
          </Button>
        );
      })}
    </ButtonGroup>
  );
}
