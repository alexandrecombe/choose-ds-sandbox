/* Thème clair / sombre du site.
   Trois états : `system` suit la préférence du système et la suit en direct,
   `light` et `dark` la forcent. Le choix est gardé dans localStorage.
   La classe `.dark` est posée sur <html> : les tokens de choose-tokens.css y
   sont redéfinis, et tout en hérite. */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Theme = "system" | "light" | "dark";

const CLE = "choose-ds-theme";

interface ThemeState {
  theme: Theme;
  setTheme: (t: Theme) => void;
  /** Le thème réellement appliqué, une fois `system` résolu. */
  resolu: "light" | "dark";
}

const ThemeContext = createContext<ThemeState | null>(null);

function lireStockage(): Theme {
  if (typeof localStorage === "undefined") return "system";
  const v = localStorage.getItem(CLE);
  return v === "light" || v === "dark" || v === "system" ? v : "system";
}

function prefereSombre() {
  return (
    typeof matchMedia !== "undefined" &&
    matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(lireStockage);
  const [systemeSombre, setSystemeSombre] = useState(prefereSombre);

  /* `system` doit suivre la préférence en direct, pas seulement au chargement. */
  useEffect(() => {
    if (typeof matchMedia === "undefined") return;
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setSystemeSombre(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const resolu: "light" | "dark" =
    theme === "system" ? (systemeSombre ? "dark" : "light") : theme;

  useEffect(() => {
    const racine = document.documentElement;
    racine.classList.toggle("dark", resolu === "dark");
    /* Fait suivre les contrôles natifs (barres de défilement, champs). */
    racine.style.colorScheme = resolu;
  }, [resolu]);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem(CLE, t);
    } catch {
      /* navigation privée, stockage bloqué : le thème reste valable pour la session */
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolu }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeState {
  const v = useContext(ThemeContext);
  if (!v) throw new Error("useTheme doit être utilisé dans <ThemeProvider>");
  return v;
}
