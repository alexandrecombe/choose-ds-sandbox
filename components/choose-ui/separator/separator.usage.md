# Separator

Trait fin qui sépare visuellement ou sémantiquement deux zones de contenu.

## Quand l'utiliser

- Séparer les sections d'un panneau ou d'un formulaire.
- Délimiter les groupes d'un menu ou d'une liste.
- Tracer un trait entre deux blocs de contenu à orientation différente (horizontal par défaut, vertical pour une toolbar).

## Quand ne pas l'utiliser

- Pour espacer sans tracer de trait → une marge ou un gap suffit.
- Pour encadrer un bloc → utiliser Card ou Frame.
- Pour un retour à la ligne dans du texte → utiliser `<br>` ou un paragraphe.

## API

```tsx
<Separator />                         {/* trait horizontal pleine largeur */}
<Separator orientation="vertical" />  {/* trait vertical, prend la hauteur du parent */}
```

Le composant rend un `<hr>` sémantique par défaut. `orientation` vaut `"horizontal"` ou `"vertical"`.

## Règles Choose

- Couleur : token `--border`. Jamais de couleur Tailwind brute.
- Épaisseur : 1px, fixée par le composant. Ne pas surcharger.

## Règle agent

Ne jamais fabriquer un `<hr>` stylé à la main ni un `<div>` avec `border-t`.
Importer et utiliser `choose-ui/separator`.
