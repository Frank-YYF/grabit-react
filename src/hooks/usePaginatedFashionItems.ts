import { useMemo } from "react";
import { paginate } from "@/utility/paginate";
import { filterFashionItems } from "@/utility/paginate/filterFashionItems";

interface UsePaginatedFashionItemsProps {
  searchTerm?: string;
  sortOption?: string;
  selectedCategory?: string[];
  selectedTags?: string[];
  selectedBrands?: string[];
  MinPrice?: number;
  MaxPrice?: number;
  currentPage: number;
  itemsPerPage: number;
}

export function usePaginatedFashionItems({
  searchTerm = "",
  sortOption = "1",
  selectedCategory = [],
  selectedTags = [],
  selectedBrands = [],
  MinPrice = 0,
  MaxPrice = Infinity,
  currentPage,
  itemsPerPage,
}: UsePaginatedFashionItemsProps) {
  return useMemo(() => {
    const filtered = filterFashionItems({
      searchTerm,
      sortOption,
      selectedCategory,
      selectedTags,
      selectedBrands,
      MinPrice,
      MaxPrice,
    });

    return paginate(filtered, currentPage, itemsPerPage);
  }, [
    searchTerm,
    sortOption,
    selectedCategory,
    selectedTags,
    selectedBrands,
    MinPrice,
    MaxPrice,
    currentPage,
    itemsPerPage,
  ]);
}
