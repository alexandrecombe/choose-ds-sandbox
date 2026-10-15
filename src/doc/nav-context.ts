import { createContext, useContext } from "react";
import type { Page } from "@/src/nav";

interface NavState {
  page: Page;
  setPage: (p: Page) => void;
}

export const NavContext = createContext<NavState | null>(null);

export function useNav(): NavState {
  const v = useContext(NavContext);
  if (!v) throw new Error("useNav doit être utilisé dans <NavContext.Provider>");
  return v;
}
