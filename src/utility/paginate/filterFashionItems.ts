import fashionAllItem from "@/utility/data/fashionallitem";

interface FashionFilterOptions {
  searchTerm?: string;
  sortOption?: string;
  selectedCategory?: string[];
  selectedTags?: string[];
  selectedBrands?: string[];
  MinPrice?: number;
  MaxPrice?: number;
}

function sortData(items: any[], sortOption: string): any[] {
  switch (sortOption) {
    case "3":
      return [...items].sort((a, b) => a.category.localeCompare(b.category));
    case "4":
      return [...items].sort((a, b) => b.category.localeCompare(a.category));
    case "5":
      return [...items].sort((a, b) => a.newPrice - b.newPrice);
    case "6":
      return [...items].sort((a, b) => b.newPrice - a.newPrice);
    default:
      return items;
  }
}

export function filterFashionItems({
  searchTerm = "",
  sortOption = "1",
  selectedCategory = [],
  selectedTags = [],
  selectedBrands = [],
  MinPrice = 0,
  MaxPrice = Infinity,
}: FashionFilterOptions = {}) {
  let filtered = [...fashionAllItem];

  if (searchTerm.trim()) {
    const lowerTerm = searchTerm.toLowerCase();
    filtered = filtered.filter((item) =>
      item.category.toLowerCase().includes(lowerTerm)
    );
  }

  filtered = filtered.filter(
    (item) => item.newPrice >= MinPrice && item.newPrice <= MaxPrice
  );

  if (selectedCategory.length > 0) {
    filtered = filtered.filter((item) =>
      selectedCategory.includes(item.category)
    );
  }

  if (selectedTags.length > 0) {
    filtered = filtered.filter((item) => selectedTags.includes(item.tags || ""));
  }

  if (selectedBrands.length > 0) {
    filtered = filtered.filter((item) => selectedBrands.includes(item.brand));
  }

  return sortData(filtered, sortOption);
}
