# Frame

Cadre qui regroupe des panneaux apparentés sous un même contour. Surface d'outil : réglages,
état de services, liste d'enregistrements de même nature.

Construit sur le `frame` de reui. Son rayon retombe sur `--radius-xl`, donc il suit déjà
le rayon Choose sans réglage.

## Composition

```tsx
<Frame>
  <FrameHeader>
    <FrameTitle>Synchronisation</FrameTitle>
    <FrameDescription>Connecteur catalogue</FrameDescription>
  </FrameHeader>
  <FramePanel>…</FramePanel>
  <FrameFooter>Dernier passage il y a 4 minutes</FrameFooter>
</Frame>
```

`FrameHeader` et `FrameFooter` sont des **barres de chrome, enfants directs du `Frame`**, pas du
panneau : elles se posent sur le fond du cadre, de part et d'autre de la surface de contenu.
Leur rembourrage horizontal est calé sur celui du panneau pour que les trois s'alignent.

⚠️ La doc upstream de reui montre l'en-tête et le pied **à l'intérieur** du `FramePanel`, et le
nom de slot interne (`frame-panel-header`) va dans le même sens. C'est trompeur : imbriqués, les
barres perdent le fond du cadre, le rembourrage se cumule et la distinction visuelle disparaît.
Le code du composant tranche — ses commentaires décrivent ces barres comme du chrome aligné sur
le corps, et les exemples publiés de reui les montrent bien autour du panneau.

Le panneau porte déjà son propre rembourrage : ne pas lui ajouter de `p-*`.

## Options du cadre

- `stacked` — supprime les marges entre panneaux et leur fait partager leurs bordures.
- `variant="ghost"` — retire le contour extérieur, les panneaux portent seuls la bordure.
- `dense` — supprime le rembourrage du cadre : les panneaux viennent au contact du bord.
- `spacing` — `sm` | `default` | `lg`.

## Frontière avec Card

- Un objet métier identifiable, qu'on peut nommer et ouvrir → **Card**.
- Une surface d'outil qui regroupe plusieurs panneaux de même nature → **Frame**.

Un Frame à panneau unique et une Card se ressemblent à l'écran ; la différence est ce que le
conteneur dit. Si le contenu n'est pas une liste ni une surface de réglages, prendre Card.

## Quand ne pas l'utiliser

- Pour des sections qui se plient et se déplient → un accordéon ; le cadre ne gère aucun état.
- Pour une grille de chiffres clés → des Card `size="sm"`.
- Pour un message adressé à l'utilisateur → une Alert banner.

## Pièges

- `stacked` ne joint que les `FramePanel` enfants **directs** du `Frame`. Un wrapper autour de
  l'un d'eux casse la jointure et laisse les deux panneaux entièrement arrondis et bordés.
- `FrameHeader` / `FrameFooter` placés dans le `FramePanel` : erreur la plus fréquente, induite
  par la doc upstream. Les laisser au niveau du `Frame`.
- Le rayon se règle d'un seul endroit, `--frame-radius` : les panneaux en dérivent pour que les
  coins s'emboîtent. Poser un `rounded-*` sur un panneau casse l'emboîtement.

## Règles Choose

- Un seul niveau de Frame : un cadre dans un cadre multiplie les bordures sans hiérarchie.
- Le pied porte les actions de la surface entière ; une action de ligne appartient à son panneau.

## Règle agent

Ne pas fabriquer un cadre à panneaux à la main. Avant d'utiliser Frame, vérifier que le contenu
est bien une surface d'outil et non un objet métier — sinon c'est `choose-ui/card`.
