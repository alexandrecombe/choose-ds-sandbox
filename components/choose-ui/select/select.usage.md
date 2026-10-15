# Select

Menu déroulant de sélection unique. Remplace le `<select>` natif pour garder
un rendu cohérent entre navigateurs et systèmes.

## Quand l'utiliser

- Choisir une valeur parmi une liste de 4 options ou plus (devise, pays,
  transporteur, rôle…).
- Remplacer un `<select>` natif dans un formulaire back-office.

## Quand ne pas l'utiliser

- Pour 2-3 options → un groupe de radios est plus rapide à scanner.
- Pour une recherche avec saisie → utiliser un Combobox (autocomplete).
- Pour un choix binaire → utiliser un Switch ou une paire de radios.
- Pour déclencher une action → utiliser un menu (Dropdown), pas un Select.

## API

```tsx
<Select defaultValue="eur">
  <SelectTrigger>
    <SelectValue placeholder="Devise" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="eur">EUR — Euro</SelectItem>
    <SelectItem value="usd">USD — Dollar</SelectItem>
  </SelectContent>
</Select>
```

### Tailles

- `sm` — contextes denses : toolbar, en-tête de table.
- `default` — le cas courant.

### Groupes

`SelectGroup` + `SelectLabel` structurent une liste longue. Le label du
groupe est annoncé par les lecteurs d'écran.

### Contrôlé

`value` + `onValueChange` rendent le select contrôlé. Chaque changement
de valeur peut déclencher un effet (fetch, filtre, mise à jour du formulaire).

## Règles Choose

- Typo : `font-sans` (Maison Neue) sur le trigger et le contenu. Jamais `font-display`.
- Couleurs : tokens sémantiques uniquement (--input, --ring, --popover, --accent).
- Poser un `aria-label` sur le trigger quand il n'est pas précédé d'un `<label>`.

## Règle agent

Ne jamais fabriquer un `<select>` natif ni styliser un élément avec des classes Tailwind
ad hoc. Importer et utiliser `choose-ui/select`. Si un besoin n'est pas couvert
(multi-sélection, recherche), signaler le manque — ne pas créer un composant local.
