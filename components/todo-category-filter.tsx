"use client";

import { CATEGORY_FILTERS, type CategoryFilter } from "@/lib/types";
import { RadioButtonGroup } from "@/components/radio-button-group";

interface TodoCategoryFilterProps {
  value: CategoryFilter;
  onChange: (value: CategoryFilter) => void;
}

export function TodoCategoryFilter({
  value,
  onChange,
}: TodoCategoryFilterProps) {
  return (
    <RadioButtonGroup
      ariaLabel="카테고리 필터"
      items={CATEGORY_FILTERS}
      value={value}
      onChange={onChange}
    />
  );
}
