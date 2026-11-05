# Aspect ratio

Réserve une boîte à une proportion donnée, pour qu'une image ou une vidéo garde la même forme
quelle que soit sa taille réelle.

Construit sur l'`aspect-ratio` de shadcn/ui (variante Base UI) : un `div` qui pose la
proportion en variable CSS et se met en `relative`.

## Composition

```tsx
<AspectRatio ratio={16 / 9} className="w-full">
  <img
    src={photo.url}
    alt="Pieds de chaise cassés, photo envoyée par la cliente"
    className="absolute inset-0 size-full rounded-lg object-cover"
  />
</AspectRatio>
```

## Il lui faut une largeur

C'est le piège du composant. La proportion dit le **rapport** entre largeur et hauteur, pas
la taille : sans largeur venue du parent, la boîte se réduit à son contenu — et son contenu
est en `absolute`, donc il ne mesure rien. Résultat, une boîte de quelques pixels, sans
erreur ni avertissement.

Lui donner `w-full`, ou une largeur fixe, ou la placer dans une grille qui l'étire.

`ratio` est la largeur divisée par la hauteur, et il est **obligatoire** dans cette variante —
contrairement à la variante radix, qui retombe sur `1`. L'écrire en division (`16 / 9`) plutôt
qu'en décimale : on relit la forme, pas un nombre.

Le composant est `relative` : l'enfant se pose en `absolute inset-0` avec `object-cover` pour
remplir la boîte en rognant, ou `object-contain` pour tenir dedans en laissant du vide.

## Quand ne pas l'utiliser

**C'est la section qui compte ici.** Tailwind sait déjà faire des proportions, et dans la
plupart des cas une classe suffit :

```tsx
<div className="relative aspect-video">…</div>
```

Prendre ce composant quand la proportion est **calculée** plutôt qu'écrite — issue des
métadonnées d'une image, d'un réglage, d'une API :

```tsx
<AspectRatio ratio={image.width / image.height}>
```

Une classe Tailwind ne peut pas porter une valeur dynamique sans passer par du style en ligne.
C'est là, et là seulement, que ce composant gagne sa place.

Autres cas à écarter :

- Pour une image dont la hauteur doit suivre le contenu → pas de proportion du tout.
- Pour plusieurs images qu'on fait défiler une à une → un carrousel, absent de la lib.

## Règles Choose

- Toujours un `alt` qui décrit **ce que montre** l'image, pas sa forme ni son rôle. Sur une
  photo de réclamation, « Pieds de chaise cassés » et non « photo » ni « 16:9 ».
- Une image décorative prend `alt=""`, jamais un `alt` inventé.
- Poser un fond en attendant le chargement (`bg-muted`) : sans lui, la boîte réservée est un
  trou blanc pendant le téléchargement.

## Règle agent

Ne pas atteindre ce composant par réflexe : si la proportion est connue à l'écriture, une
classe `aspect-*` fait le travail avec moins de bruit. Le prendre quand la proportion vient
des données — et ne jamais oublier de lui donner une largeur.
