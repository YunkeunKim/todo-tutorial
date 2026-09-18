"use client";

import { SORT_OPTIONS, type SortBy } from "@/lib/types";
import { RadioButtonGroup } from "@/components/radio-button-group";

interface TodoSortProps {
  value: SortBy;
  onChange: (value: SortBy) => void;
}

export function TodoSort({ value, onChange }: TodoSortProps) {
  return (
    <RadioButtonGroup
      ariaLabel="정렬"
      items={SORT_OPTIONS}
      value={value}
      onChange={onChange}
    />
  );
}
