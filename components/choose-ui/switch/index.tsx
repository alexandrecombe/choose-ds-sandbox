/**
 * Base : shadcn/ui — switch (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/switch
 * Surcouche mince sur components/ui/switch.tsx : le composant upstream repose
 * déjà sur les tokens Choose (--primary, --input, --background, --ring,
 * --destructive). Comme le Checkbox, le Switch n'a pas de texte propre — la
 * surcouche n'impose donc pas `font-sans`, qui revient au label associé.
 * Voir SOURCES.md.
 */
import { Switch } from "@/components/ui/switch";

export { Switch };
