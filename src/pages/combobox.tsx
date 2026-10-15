import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  useComboboxAnchor,
} from "@/components/choose-ui/combobox";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

const fruits = [
  { label: "Pomme", value: "apple" },
  { label: "Banane", value: "banana" },
  { label: "Cerise", value: "cherry" },
  { label: "Fraise", value: "strawberry" },
  { label: "Mangue", value: "mango" },
  { label: "Orange", value: "orange" },
];

const grouped = {
  Frontend: ["React", "Vue", "Svelte", "Angular"],
  Backend: ["Node.js", "Django", "Rails", "Spring"],
};

export default function ComboboxPage() {
  const [value, setValue] = useState("");
  const [multiValue, setMultiValue] = useState<string[]>([]);
  const anchor = useComboboxAnchor();

  return (
    <DocPage
      title="Combobox"
      description="Champ de saisie avec liste filtrée. Repose sur Base UI, avec recherche en temps réel et sélection clavier."
    >
      {/* ---- Basique ---- */}
      <DocSection
        title="Combobox simple"
        description="Un combobox avec une liste de chaînes. La saisie filtre les options."
        code={`<Combobox items={frameworks}>
  <ComboboxInput placeholder="Choisir un framework…" />
  <ComboboxContent>
    <ComboboxEmpty>Aucun résultat.</ComboboxEmpty>
    <ComboboxList>
      {(item) => (
        <ComboboxItem key={item}>{item}</ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`}
      >
        <div className="w-64">
          <Combobox items={frameworks}>
            <ComboboxInput placeholder="Choisir un framework…" />
            <ComboboxContent>
              <ComboboxEmpty>Aucun résultat.</ComboboxEmpty>
              <ComboboxList>
                {(item: string) => (
                  <ComboboxItem key={item}>{item}</ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      </DocSection>

      {/* ---- Avec objets ---- */}
      <DocSection
        title="Avec objets"
        description="Les items peuvent être des objets ; itemToString contrôle l'affichage et le filtrage."
        code={`<Combobox
  items={fruits}
  itemToString={(item) => item?.label ?? ""}
>
  <ComboboxInput placeholder="Chercher un fruit…" />
  <ComboboxContent>
    <ComboboxEmpty>Aucun résultat.</ComboboxEmpty>
    <ComboboxList>
      {(item) => (
        <ComboboxItem key={item.value}>
          {item.label}
        </ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`}
      >
        <div className="w-64">
          <Combobox
            items={fruits}
            itemToString={(item) => item?.label ?? ""}
          >
            <ComboboxInput placeholder="Chercher un fruit…" />
            <ComboboxContent>
              <ComboboxEmpty>Aucun résultat.</ComboboxEmpty>
              <ComboboxList>
                {(item: (typeof fruits)[number]) => (
                  <ComboboxItem key={item.value}>{item.label}</ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      </DocSection>

      {/* ---- Groupé ---- */}
      <DocSection
        title="Groupé"
        description="Les options peuvent être regroupées avec ComboboxGroup et ComboboxLabel."
        code={`<Combobox items={allTechs}>
  <ComboboxInput placeholder="Technologie…" />
  <ComboboxContent>
    <ComboboxEmpty>Aucun résultat.</ComboboxEmpty>
    <ComboboxList>
      <ComboboxGroup>
        <ComboboxLabel>Frontend</ComboboxLabel>
        {frontendItems.map(item => (
          <ComboboxItem key={item}>{item}</ComboboxItem>
        ))}
      </ComboboxGroup>
    </ComboboxList>
  </ComboboxContent>
</Combobox>`}
      >
        <div className="w-64">
          <Combobox items={Object.values(grouped).flat()}>
            <ComboboxInput placeholder="Technologie…" />
            <ComboboxContent>
              <ComboboxEmpty>Aucun résultat.</ComboboxEmpty>
              <ComboboxList>
                {Object.entries(grouped).map(([group, items]) => (
                  <ComboboxGroup key={group}>
                    <ComboboxLabel>{group}</ComboboxLabel>
                    {items.map((item) => (
                      <ComboboxItem key={item}>{item}</ComboboxItem>
                    ))}
                  </ComboboxGroup>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      </DocSection>

      {/* ---- Multi-sélection avec chips ---- */}
      <DocSection
        title="Multi-sélection (chips)"
        description="Le mode multi affiche les sélections en chips. L'utilisateur les retire via la croix ou le clavier."
        code={`<Combobox
  items={frameworks}
  selectedItems={multiValue}
  onSelectedItemsChange={setMultiValue}
>
  <ComboboxChips ref={anchor}>
    {(item) => <ComboboxChip key={item}>{item}</ComboboxChip>}
    <ComboboxChipsInput placeholder="Ajouter…" />
  </ComboboxChips>
  <ComboboxContent anchor={anchor}>
    <ComboboxEmpty>Aucun résultat.</ComboboxEmpty>
    <ComboboxList>
      {(item) => (
        <ComboboxItem key={item}>{item}</ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`}
      >
        <div className="w-80">
          <Combobox
            items={frameworks}
            selectedItems={multiValue}
            onSelectedItemsChange={setMultiValue}
          >
            <ComboboxChips ref={anchor}>
              {(item: string) => (
                <ComboboxChip key={item}>{item}</ComboboxChip>
              )}
              <ComboboxChipsInput placeholder="Ajouter…" />
            </ComboboxChips>
            <ComboboxContent anchor={anchor}>
              <ComboboxEmpty>Aucun résultat.</ComboboxEmpty>
              <ComboboxList>
                {(item: string) => (
                  <ComboboxItem key={item}>{item}</ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      </DocSection>

      {/* ---- Contrôlé ---- */}
      <DocSection
        title="Contrôlé"
        description="La valeur est pilotée par l'état parent via value et onValueChange."
        code={`const [value, setValue] = useState("")

<Combobox items={frameworks} value={value} onValueChange={setValue}>
  <ComboboxInput placeholder="Framework…" />
  <ComboboxContent>
    <ComboboxEmpty>Aucun résultat.</ComboboxEmpty>
    <ComboboxList>
      {(item) => (
        <ComboboxItem key={item}>{item}</ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>
<p>Valeur : {value || "—"}</p>`}
      >
        <div className="w-64 space-y-2">
          <Combobox items={frameworks} value={value} onValueChange={setValue}>
            <ComboboxInput placeholder="Framework…" />
            <ComboboxContent>
              <ComboboxEmpty>Aucun résultat.</ComboboxEmpty>
              <ComboboxList>
                {(item: string) => (
                  <ComboboxItem key={item}>{item}</ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
          <p className="text-sm text-muted-foreground font-sans">
            Valeur : {value || "—"}
          </p>
        </div>
      </DocSection>

      {/* ---- Désactivé ---- */}
      <DocSection
        title="Désactivé"
        description="Le combobox peut être désactivé pour empêcher toute interaction."
        code={`<Combobox items={frameworks} disabled>
  <ComboboxInput placeholder="Framework…" disabled />
  <ComboboxContent>
    <ComboboxList>
      {(item) => (
        <ComboboxItem key={item}>{item}</ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`}
      >
        <div className="w-64">
          <Combobox items={frameworks} disabled>
            <ComboboxInput placeholder="Framework…" disabled />
            <ComboboxContent>
              <ComboboxList>
                {(item: string) => (
                  <ComboboxItem key={item}>{item}</ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      </DocSection>

      {/* ---- Bonnes pratiques ---- */}
      <DocPractices
        items={[
          "Utiliser Combobox quand la liste dépasse 5-6 options ou quand la recherche est utile",
          "Préférer Select pour une courte liste sans besoin de filtrage",
          "Toujours fournir un ComboboxEmpty pour le cas sans résultat",
          "En multi-sélection, afficher les choix en chips pour un retour visuel clair",
        ]}
      />
    </DocPage>
  );
}
