/**
 * Base : reui — filters
 * https://reui.io/components/filters
 * Surcouche mince sur components/reui/filters/filters.tsx : le composant
 * upstream repose déjà sur les tokens Choose. La surcouche n'impose que
 * `font-sans` sur le conteneur racine.
 * Voir SOURCES.md.
 */
import { type ComponentProps } from "react";
import {
  Filters as ReuiFilters,
  FiltersRow,
  FiltersAdvanced,
  FiltersAdvancedPanel,
  FilterAdvancedRow,
  FiltersBuilder,
  FilterFieldPicker,
  FilterChip,
  FilterOperatorPopover,
  FilterRuleMenuItems,
  FilterValuePopover,
  useFilterRuleDisplay,
  filterReadOnlyProps,
  isFilterLocked,
  useFilterActions,
  useFilterState,
  useFilterFocus,
  useFilterChipAutoOpen,
  useFilterChipFocused,
  useFilterFocusEmpty,
  useFilterFocusStore,
  useFilterRender,
  useFilterSegmentFocus,
  DEFAULT_FILTER_LABELS,
  DEFAULT_FILTER_OPERATORS,
  DEFAULT_FILTER_OPERATOR_LABELS,
  DEFAULT_FILTER_EDITORS,
  useFilterOptions,
  useFilterValueResolution,
  collectFilterIssues,
  copyFilterNodeTo,
  createFilterGroup,
  createFilterQuery,
  createFilterRule,
  countFilterRules,
  flattenFilterConditions,
  flattenFilterRules,
  isFilterQueryEmpty,
  isFilterRuleComplete,
  moveFilterNodeTo,
  pruneFilterQuery,
  unwrapFilterGroup,
  wrapFilterNodeInGroup,
} from "@/components/reui/filters/filters";
import { cn } from "@/lib/utils";

function Filters<V = unknown, O = unknown>({
  className,
  ...props
}: ComponentProps<typeof ReuiFilters<V, O>>) {
  return <ReuiFilters className={cn("font-sans", className)} {...props} />;
}

export {
  Filters,
  FiltersRow,
  FiltersAdvanced,
  FiltersAdvancedPanel,
  FilterAdvancedRow,
  FiltersBuilder,
  FilterFieldPicker,
  FilterChip,
  FilterOperatorPopover,
  FilterRuleMenuItems,
  FilterValuePopover,
  useFilterRuleDisplay,
  filterReadOnlyProps,
  isFilterLocked,
  useFilterActions,
  useFilterState,
  useFilterFocus,
  useFilterChipAutoOpen,
  useFilterChipFocused,
  useFilterFocusEmpty,
  useFilterFocusStore,
  useFilterRender,
  useFilterSegmentFocus,
  DEFAULT_FILTER_LABELS,
  DEFAULT_FILTER_OPERATORS,
  DEFAULT_FILTER_OPERATOR_LABELS,
  DEFAULT_FILTER_EDITORS,
  useFilterOptions,
  useFilterValueResolution,
  collectFilterIssues,
  copyFilterNodeTo,
  createFilterGroup,
  createFilterQuery,
  createFilterRule,
  countFilterRules,
  flattenFilterConditions,
  flattenFilterRules,
  isFilterQueryEmpty,
  isFilterRuleComplete,
  moveFilterNodeTo,
  pruneFilterQuery,
  unwrapFilterGroup,
  wrapFilterNodeInGroup,
};

export type * from "@/components/reui/filters/filters-types";
