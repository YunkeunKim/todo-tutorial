"use client";

import { Button } from "@/components/ui/button";

interface RadioButtonGroupItem<T extends string> {
  value: T;
  label: string;
}

interface RadioButtonGroupProps<T extends string> {
  ariaLabel: string;
  items: RadioButtonGroupItem<T>[];
  value: T;
  onChange: (value: T) => void;
}

export function RadioButtonGroup<T extends string>({
  ariaLabel,
  items,
  value,
  onChange,
}: RadioButtonGroupProps<T>) {
  return (
    <div role="radiogroup" aria-label={ariaLabel} className="flex gap-1">
      {items.map((item) => {
        const selected = item.value === value;
        return (
          <Button
            key={item.value}
            type="button"
            size="sm"
            variant={selected ? "default" : "outline"}
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(item.value)}
          >
            {item.label}
          </Button>
        );
      })}
    </div>
  );
}
