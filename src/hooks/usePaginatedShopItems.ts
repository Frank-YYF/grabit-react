import { useMemo } from "react";
import { filterShopItems } from "@/utility/paginate/filterShopItems";
import { paginate } from "@/utility/paginate";

interface UsePaginatedShopItemsProps {
  searchTerm?: string;
  selectedCategory?: string[];
  selectedWeight?: string[];
  selectedColor?: string[];
  selectedTags?: string[];
  range?: { min: number; max: number };
  sortOption?: string;
  currentPage: number;
  itemsPerPage: number;
}

function sortData(data: any[], sortOption: string) {
  switch (sortOption) {
    case "3":
      return [...data].sort((a, b) => a.category.localeCompare(b.category));
    case "4":
      return [...data].sort((a, b) => b.category.localeCompare(a.category));
    case "5":
      return [...data].sort((a, b) => a.newPrice - b.newPrice);
    case "6":
      return [...data].sort((a, b) => b.newPrice - a.newPrice);
    default:
      return data;
  }
}

export function usePaginatedShopItems({
  searchTerm = "",
  selectedCategory = [],
  selectedWeight = [],
  selectedColor = [],
  selectedTags = [],
  range = { min: 0, max: 250 },
  sortOption = "1",
  currentPage,
  itemsPerPage,
}: UsePaginatedShopItemsProps) {
  return useMemo(() => {
    const filtered = filterShopItems({
      searchTerm,
      selectedCategory,
      selectedWeight,
      selectedColor,
      selectedTags,
      range,
    });

    const sorted = sortData(filtered, sortOption);

    return paginate(sorted, currentPage, itemsPerPage);
  }, [
    searchTerm,
    selectedCategory,
    selectedWeight,
    selectedColor,
    selectedTags,
    range,
    sortOption,
    currentPage,
    itemsPerPage,
  ]);
}
