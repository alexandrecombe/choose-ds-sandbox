# Skeleton

Placeholder animé qui signale un contenu en cours de chargement.

## Quand l'utiliser

- Réserver la place d'un élément dont les données ne sont pas encore arrivées (texte,
  avatar, image, ligne de table).
- Donner un feedback visuel immédiat pendant un fetch, plutôt qu'un écran vide.

## Quand ne pas l'utiliser

- Pour un chargement global de page → utiliser un spinner ou un indicateur de progression.
- Pour signaler un upload en cours → utiliser le composant Attachment avec son état `uploading`.
- Quand la donnée est déjà disponible côté client → afficher directement.

## API

```tsx
<Skeleton className="h-4 w-48" />           {/* ligne de texte */}
<Skeleton className="size-10 rounded-full" /> {/* avatar */}
<Skeleton className="h-32 w-full" />          {/* image ou carte */}
```

Le skeleton est un simple `<div>` avec `animate-pulse` et `bg-muted`. Il prend la taille
que vous lui donnez via `className`.

## Règles Choose

- Fond : token `--muted`. Jamais de couleur Tailwind brute.
- Animation : `animate-pulse` fourni par Tailwind, pas de durée custom.

## Règle agent

Ne jamais fabriquer un div pulsant à la main. Importer et utiliser `choose-ui/skeleton`.
