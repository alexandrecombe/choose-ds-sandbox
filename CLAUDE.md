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
- un rond d'initiales fait main → utiliser `choose-ui/avatar`
- un conteneur d'objet bricolé → utiliser `choose-ui/card`
- une suppression sans confirmation → passer par `choose-ui/alert-dialog`
- un `<select>` natif ou un dropdown custom → utiliser `choose-ui/select`
- un `<hr>` ou un `border-t` fait main → utiliser `choose-ui/separator`
- un div pulsant fait main → utiliser `choose-ui/skeleton`
- un `<input type="checkbox">` natif → utiliser `choose-ui/checkbox`
- un `<select>` avec recherche ou un autocomplete → utiliser `choose-ui/combobox`
- un menu contextuel au clic droit fait main → utiliser `choose-ui/context-menu`
- un menu déroulant ou un dropdown bricolé → utiliser `choose-ui/dropdown-menu`
- un placeholder "aucun résultat" fait main → utiliser `choose-ui/empty`
- un tooltip riche au survol fait main → utiliser `choose-ui/hover-card`
- des onglets ou un tab bar fait main → utiliser `choose-ui/tabs`
- un rond sélectionnable fait main, ou un Select détourné pour 2-5 options → utiliser `choose-ui/radio-group`
- un interrupteur fait main, ou un Checkbox détourné pour un réglage instantané → utiliser `choose-ui/switch`

Si un besoin n'est couvert par aucun composant ni aucun variant existant, le signaler
explicitement dans la réponse au lieu de créer une variante locale.

## Lire les règles d'usage avant d'utiliser un composant

Chaque composant a un fichier `[composant].usage.md` dans son dossier. Le lire AVANT de
l'utiliser. Ces fichiers documentent ce que shadcn ne dit pas : quand utiliser le composant,
quand ne pas l'utiliser, quel variant pour quel cas.

- `components/choose-ui/button/button.usage.md`
- `components/choose-ui/badge/badge.usage.md`
- `components/choose-ui/alert-banner/alert-banner.usage.md`
- `components/choose-ui/avatar/avatar.usage.md`
- `components/choose-ui/breadcrumb/breadcrumb.usage.md`
- `components/choose-ui/card/card.usage.md`
- `components/choose-ui/button-group/button-group.usage.md`
- `components/choose-ui/alert-dialog/alert-dialog.usage.md`
- `components/choose-ui/attachment/attachment.usage.md`
- `components/choose-ui/frame/frame.usage.md`
- `components/choose-ui/input/input.usage.md`
- `components/choose-ui/item/item.usage.md`
- `components/choose-ui/pagination/pagination.usage.md`
- `components/choose-ui/radio-group/radio-group.usage.md`
- `components/choose-ui/select/select.usage.md`
- `components/choose-ui/separator/separator.usage.md`
- `components/choose-ui/skeleton/skeleton.usage.md`
- `components/choose-ui/switch/switch.usage.md`
- `components/choose-ui/tabs/tabs.usage.md`
- `components/choose-ui/checkbox/checkbox.usage.md`
- `components/choose-ui/combobox/combobox.usage.md`
- `components/choose-ui/context-menu/context-menu.usage.md`
- `components/choose-ui/dropdown-menu/dropdown-menu.usage.md`
- `components/choose-ui/empty/empty.usage.md`
- `components/choose-ui/hover-card/hover-card.usage.md`
- `components/choose-ui/filters/filters.usage.md`

Cas de choix fréquent à ne pas rater : feedback utilisateur.
- éphémère, confirme une micro-action → toast
- attaché à un champ, validation → erreur inline
- persistant, contextuel à l'écran → `choose-ui/alert-banner`

## Tokens et style

Couleurs, espacements et typo passent par les tokens sémantiques du DS. Jamais de couleur
Tailwind brute (`bg-blue-500`) ni de hex en dur. Typo : `font-sans` (Maison Neue) par défaut.
Icônes : Lucide exclusivement, jamais d'emoji comme marqueur visuel.

## Deux modes

Le site a un mode clair et un mode sombre, pilotés par la classe `.dark` sur `<html>`. Les
tokens sémantiques ont une valeur dans chaque mode : s'appuyer dessus suffit, et c'est la
raison d'être de la règle ci-dessus. Une couleur Tailwind brute ou un hex en dur ne suivra pas
le mode sombre — c'est le symptôme le plus visible d'un token contourné.

Ne pas écrire de variante `dark:` à la main sur un composant : si un token manque pour un rôle,
le signaler dans `GAPS.md` plutôt que de coder la valeur sombre en dur.

Ces règles ne sont pas optionnelles, mais rien ne les vérifie automatiquement : ce repo n'a
ni CI, ni lint, ni hook. Le respect des tokens repose entièrement sur toi à la génération.

## Signaler un manque

Quand un besoin n'est couvert par aucun composant ni aucun variant, le signaler dans la réponse
**et** ajouter une entrée dans `GAPS.md` (nom du besoin + d'où il vient). Ne pas créer de
variante locale pour contourner.

## Fichiers de référence

- `components/choose-ui/catalog.json` — inventaire des composants (nom, usage en une phrase, statut).
- `GAPS.md` — besoins identifiés et non couverts.
- `SOURCES.md` — origine upstream de chaque composant copié.
