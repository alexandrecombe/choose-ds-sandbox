/**
 * Base : shadcn/ui — checkbox (variante Base UI)
 * https://ui.shadcn.com/docs/components/base/checkbox
 * Surcouche mince sur components/ui/checkbox.tsx : le composant upstream
 * repose déjà sur les tokens Choose (--input, --primary, --ring).
 * La surcouche n'impose que `font-sans` sur le label associé — le checkbox
 * lui-même n'a pas de texte. Voir SOURCES.md.
 */
import { Checkbox } from "@/components/ui/checkbox";

export { Checkbox };
