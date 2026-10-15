# Alert dialog

Interrompt l'utilisateur pour une décision qui doit être prise avant que la page continue.
Il se ferme par un choix, jamais par un clic à côté ni par Échap.

Construit sur l'`alert-dialog` de shadcn/ui (variante Base UI), recoloré par les tokens Choose.

## Composition

```tsx
<AlertDialog>
  <AlertDialogTrigger render={<Button variant="destructive" />}>
    Supprimer l'opération
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Supprimer l'opération #4821 ?</AlertDialogTitle>
      <AlertDialogDescription>
        Les 348 références engagées seront détachées. Cette action est irréversible.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Annuler</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Supprimer</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

`AlertDialogMedia` place une icône au-dessus du titre quand la gravité mérite d'être signalée
avant la lecture.

## Quand l'utiliser

- Confirmer une action irréversible (suppression, annulation, envoi définitif).
- Avertir d'une perte imminente (quitter sans enregistrer).

## Quand ne pas l'utiliser

- Pour informer sans appeler de décision → une **Alert banner**.
- Pour un formulaire, même court → un dialog ordinaire, qui se ferme au clic extérieur.
- Pour une confirmation légère et réversible → un toast avec annulation suffit souvent.

## Frontière avec les composants voisins

- Bloquant, deux issues, action irréversible → **Alert dialog** (ce composant).
- Non bloquant, persistant, contextuel à l'écran → **Alert banner**.
- Éphémère, confirme une micro-action → **toast**.

## Règles Choose

- Le titre pose la question à laquelle les boutons répondent, il n'annonce pas « Attention ».
- La description énonce la conséquence concrète, chiffrée quand c'est possible.
- Le bouton de confirmation nomme l'action, jamais « Oui » ni « OK ».
- Exactement deux issues. Une troisième option signifie que ce n'est pas une confirmation.
- Action destructive → bouton `destructive`, et l'annulation reste la plus facile à atteindre.

## Règle agent

Toute action destructive générée doit passer par ce composant. Ne jamais exposer une
suppression directe, et ne jamais remplacer la confirmation par un simple avertissement.
