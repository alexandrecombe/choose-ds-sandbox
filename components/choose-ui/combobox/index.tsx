import { type ComponentProps } from "react";
import {
  Combobox as UiCombobox,
  ComboboxInput as UiComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import { cn } from "@/lib/utils";

function Combobox({ className, ...props }: ComponentProps<typeof UiCombobox>) {
  return <UiCombobox className={cn("font-sans", className)} {...props} />;
}

function ComboboxInput({
  className,
  ...props
}: ComponentProps<typeof UiComboboxInput>) {
  return <UiComboboxInput className={cn("font-sans", className)} {...props} />;
}

export {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
};
