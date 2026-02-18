"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CAR_BRAND_OPTIONS,
  CAR_CONDITION_OPTIONS,
  CAR_FUELTYPE_OPTIONS,
  CAR_MODEL_OPTIONS,
  CAR_PRICE_RANGE_OPTIONS,
  CAR_YEAR_RANGE_OPTIONS,
} from "@/constants/car-options";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface FilterOption {
  label: string;
  value: string;
}
interface FilterOptionProps {
  label: string;
  options: FilterOption[];
  placeholder: string;
  onChange: (value: string) => void;
}

const HeroFilter = () => {
  const router = useRouter();

  const [selectedFilters, setSelectedFilters] = useState<{
    brand?: string;
    condition?: string;
    model?: string;
    fuelType?: string;
    year_min?: string;
    year_max?: string;
    price?: string;
  }>({});

  const filterOptions: Record<string, FilterOption[]> = {
    brands: CAR_BRAND_OPTIONS,
    condition: CAR_CONDITION_OPTIONS,
    price: CAR_PRICE_RANGE_OPTIONS.filter((item) => item.value != "custom"),
    models: CAR_MODEL_OPTIONS,
    fuelType: CAR_FUELTYPE_OPTIONS,
    year: CAR_YEAR_RANGE_OPTIONS,
  };

  const handleFilterChange = (
    key: keyof typeof selectedFilters,
    value: string,
  ) => {
    setSelectedFilters((prev) => ({ ...prev, [key]: value }));
  };
  const handleSearch = () => {
    const params = new URLSearchParams();
    Object.entries(selectedFilters).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      }
    });
    router.push(`/search/?${params.toString()}`);
  };

  return (
    <div className="w-full flex flex-col gap-6 pt-6">
      <div className="w-full flex flex-wrap items-center justify-center gap-4"></div>
    </div>
  );
};
const FilterSelect: React.FC<FilterOptionProps> = ({
  label,
  options,
  placeholder,
  onChange,
}) => {
  <div className="w-full lg:w-[28%]">
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options?.map((option) => (
            <SelectItem key={option.value} value={option.label}></SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>;
};

export default HeroFilter;
