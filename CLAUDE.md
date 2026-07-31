# Design System Choose — règles pour agent

Ce repo utilise le Design System Choose. Toute interface générée doit s'appuyer sur les
composants existants, jamais sur des composants recréés à la volée.

## Source unique de composants

Les composants Choose vivent dans `components/choose-ui/`. C'est la seule source autorisée.
shadcn/UI sert de socle sous-jacent, mais les composants sont consommés via leur surcouche
Choose (`choose-ui/`), jamais directement.

## Règle absolue : ne pas recréer

Avant de créer un élément d'interface, vérifier s'il existe déjà dans `components/choose-ui/`.
S'il existe, l'importer et l'utiliser. Ne jamais fabriquer :
- un `<button>` stylé à la main → utiliser `choose-ui/button`
- une étiquette de statut custom (`<span>` coloré) → utiliser `choose-ui/badge`
- un bloc de message custom → utiliser `choose-ui/alert-banner`

Si un besoin n'est couvert par aucun composant ni aucun variant existant, le signaler
explicitement dans la réponse au lieu de créer une variante locale.

## Lire les règles d'usage avant d'utiliser un composant

Chaque composant a un fichier `[composant].usage.md` dans son dossier. Le lire AVANT de
l'utiliser. Ces fichiers documentent ce que shadcn ne dit pas : quand utiliser le composant,
quand ne pas l'utiliser, quel variant pour quel cas.

- `components/choose-ui/button/button.usage.md`
- `components/choose-ui/badge/badge.usage.md`
- `components/choose-ui/alert-banner/alert-banner.usage.md`

Cas de choix fréquent à ne pas rater : feedback utilisateur.
- éphémère, confirme une micro-action → toast
- attaché à un champ, validation → erreur inline
- persistant, contextuel à l'écran → `choose-ui/alert-banner`

## Tokens et style

Couleurs, espacements et typo passent par les tokens sémantiques du DS. Jamais de couleur
Tailwind brute (`bg-blue-500`) ni de hex en dur. Typo : `font-sans` (Maison Neue) par défaut.
Icônes : Lucide exclusivement, jamais d'emoji comme marqueur visuel.

Ces règles ne sont pas optionnelles : la CI bloque les merges contenant des valeurs
hardcodées ou des classes Tailwind brutes à la place des tokens.
