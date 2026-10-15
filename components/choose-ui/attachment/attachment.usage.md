# Attachment

Représente un fichier joint et l'état de son transfert.

**Le composant ne téléverse rien** : il met en forme le `state` qu'on lui passe. L'état doit
être piloté par le code de transfert, sinon un fichier en échec s'affichera comme réussi.

Construit sur l'`attachment` de shadcn/ui (variante Base UI).

## Composition

```tsx
<Attachment state="uploading">
  <AttachmentMedia>
    <FileText />
  </AttachmentMedia>
  <AttachmentContent>
    <AttachmentTitle>catalogue-mars.pdf</AttachmentTitle>
    <AttachmentDescription>Envoi en cours…</AttachmentDescription>
  </AttachmentContent>
  <AttachmentActions>
    <AttachmentAction type="button" aria-label="Retirer le fichier">
      <X />
    </AttachmentAction>
  </AttachmentActions>
</Attachment>
```

`AttachmentGroup` aligne plusieurs fichiers. `size` vaut `default`, `sm` ou `xs`.

## États

`idle` · `uploading` · `processing` · `error` · `done`.

`uploading` et `processing` animent le titre. Cette animation repose sur l'utilitaire
`shimmer`, qui n'est **pas** distribué avec le composant : il est réimplémenté dans
`src/index.css`, sur les tokens Choose.

## Piège connu

Le bouton derrière `AttachmentAction` ne définit aucun `type`. Dans un formulaire, il faut
donc lui passer `type="button"`, sinon un clic sur « Retirer » soumet le formulaire.

## Quand ne pas l'utiliser

- Pour une zone de dépôt de fichiers → Attachment représente le résultat, pas la cible.
- Pour une progression chiffrée → prévoir une barre de progression ; l'animation d'état ne
  donne aucune valeur.
- Pour une pastille de format (PDF, CSV) seule → une étiquette, pas un Attachment.

## Règles Choose

- `AttachmentDescription` porte le poids ou la raison de l'échec, pas le nom du fichier.
- Chaque action icône porte un `aria-label`.
- L'état `error` colore déjà la bordure et la description : ne pas doubler d'une Alert banner
  pour le même fichier.

## Règle agent

Toujours relier `state` à l'état réel du transfert. Un `state="done"` codé en dur est un
mensonge visuel.
