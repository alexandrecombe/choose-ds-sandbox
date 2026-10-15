# Hover Card — règles d'usage

## Quand l'utiliser

- Aperçu d'un profil utilisateur au survol d'un nom ou d'un avatar.
- Prévisualisation d'un lien ou d'une ressource sans quitter la page.
- Informations complémentaires non essentielles à la lecture.

## Quand ne pas l'utiliser

- Pour des actions : utiliser **Dropdown Menu** ou **Context Menu**.
- Pour des informations critiques que l'utilisateur doit voir : les afficher directement.
- Sur tactile sans fallback : le hover n'existe pas sur mobile.

## Bonnes pratiques

- Le contenu doit être lisible en un coup d'œil, sans scroll.
- Prévoir un fallback pour le tactile (tooltip au tap, ou lien direct).
- Ne pas y placer d'actions principales.
- Utiliser `asChild` sur `HoverCardTrigger` pour garder la sémantique HTML.
