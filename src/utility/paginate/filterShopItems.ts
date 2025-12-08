import { Item } from "@/types/data.types";
import Shop from "@/utility/data/shopitem";

interface ShopFilterOptions {
  searchTerm?: string;
  selectedCategory?: string[];
  selectedWeight?: string[];
  selectedColor?: string[];
  selectedTags?: string[];
  range?: { min: number; max: number };
}

export function filterShopItems({
  searchTerm = "",
  selectedCategory = [],
  selectedWeight = [],
  selectedColor = [],
  selectedTags = [],
  range = { min: 0, max: 250 },
}: ShopFilterOptions) {
  let filtered = [...Shop];

  if (searchTerm.trim()) {
    const lowerTerm = searchTerm.toLowerCase();
    filtered = filtered.filter((item: Item) =>
      item.category?.toLowerCase().includes(lowerTerm)
    );
  }

  filtered = filtered.filter(
    (item) =>
      item.newPrice >= range.min &&
      item.newPrice <= range.max
  );

  if (selectedCategory.length > 0) {
    filtered = filtered.filter((item: Item) => selectedCategory.includes(item.category || ""));
  }

  if (selectedWeight.length > 0) {
    filtered = filtered.filter((item: Item) => selectedWeight.includes(item.weight || ""));
  }

  if (selectedColor.length > 0) {
    filtered = filtered.filter((item: Item) => selectedColor.includes(item.color || ""));
  }

  if (selectedTags.length > 0) {
    filtered = filtered.filter((item: Item) => selectedTags.includes(item.tags || ""));
  }

  return filtered;
}
