# Button

Déclenche une action. Élément interactif principal d'une interface backoffice.

## Quand l'utiliser

- Déclencher une action (soumettre, enregistrer, ouvrir un dialog, lancer un traitement).
- Naviguer uniquement si l'action a un poids d'action (ex. « Créer une offre »). Pour une navigation pure, utiliser un lien.

## Quand ne pas l'utiliser

- Pour naviguer entre pages sans effet de bord → utiliser un lien stylé, pas un Button.
- Pour un choix binaire persistant (on/off) → utiliser un Switch.
- Pour une action destructive sans confirmation → passer par un dialog de confirmation, ne pas exposer l'action directement.

## Variants

- `primary` — action principale d'un écran ou d'un formulaire. **Une seule par zone.**
- `secondary` — actions de support à côté de la primaire (Annuler, Retour).
- `ghost` — actions tertiaires, barres d'outils, actions répétées en ligne (dans une table).
  Porté par la couleur **tertiary** Choose : texte `--tertiary`, et `--tertiary-accent`
  en fond au survol. C'est le seul variant qui colore son texte sans aplat.
- `destructive` — suppression ou action irréversible. Toujours accompagnée d'une confirmation.

## Tailles

- `sm` — contextes denses : une table, une barre d'outils.
- `default` — le cas courant.
- `lg` — une action isolée mise en avant.

L'icône suit la taille du label : 14px en `sm`, 16px en `default`, 20px en `lg`.

## Préfixe et suffixe

```tsx
<Button prefix={<Save />}>Enregistrer</Button>
<Button suffix={<ArrowRight />}>Continuer</Button>
```

`prefix` remplace l'ancienne prop `icon`. Le **préfixe qualifie l'action** ; le **suffixe
signale où elle mène** — une flèche d'avancement, un lien externe. Jamais deux icônes du même
côté.

## Icône seule

```tsx
<Button iconOnly aria-label="Copier l'URL de l'opération">
  <Copy />
</Button>
```

`iconOnly` rend le bouton carré : 32px en `sm`, 36px en `default`, 44px en `lg`.

**`aria-label` est obligatoire, et exigé par le typage** : un bouton `iconOnly` sans nom
accessible ne compile pas. Sans label visible, c'est la seule source du nom pour un lecteur
d'écran.

Le label nomme **l'action et sa cible** — « Copier l'URL de l'opération », pas « Copier ».
À l'inverse, ne jamais poser d'`aria-label` sur un bouton qui a déjà un label visible : il
l'écrase et crée un décalage entre ce qui est lu et ce qui est affiché.

Réserver ce format aux actions répétées en ligne, typiquement dans une table, où le contexte
rend l'action évidente. Pour une action isolée, un label écrit vaut mieux qu'une icône à deviner.

## Chargement

```tsx
<Button loading>Enregistrement…</Button>
```

`loading` remplace le préfixe par un indicateur d'activité et neutralise le clic, **sans**
passer le bouton en `disabled` : il reste dans le parcours clavier et annonce son état via
`aria-busy`. Un bouton désactivé en HTML disparaît du parcours clavier et perd ce contexte.

Ne pas cumuler `loading` et `disabled` : on perdrait exactement ce que `loading` préserve.
Ne pas remplacer le label par un spinner non plus — la largeur du bouton sauterait.

## Règles Choose

- Typo : `font-sans` (Maison Neue), graisse **semibold** sur tous les variants. Jamais `font-display`.
- Couleurs et fonds : tokens sémantiques uniquement. Jamais de couleur Tailwind brute ni de hex.
- Icône : Lucide uniquement, taille alignée sur le `font-size` du label (16px pour un bouton standard).
- Un bouton ne porte jamais deux icônes.

## Règle agent

Ne jamais fabriquer un `<button>` custom ni styliser un élément avec des classes Tailwind ad hoc.
Importer et utiliser `choose-ui/button`. Si un besoin n'est pas couvert par un variant existant,
signaler le manque — ne pas créer une variante locale.
