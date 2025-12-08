import Products from "@/utility/data/productall";


interface ProductFilterOptions {
    searchTerm?: string;
    selectedCategory?: string[];
  }
  
  export function filterProducts({ searchTerm = "", selectedCategory = [] }: ProductFilterOptions) {
    let filtered = [...Products];
  
    if (searchTerm.trim()) {
      const lowerTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerTerm) ||
          item.category.toLowerCase().includes(lowerTerm)
      );
    }
  
    if (selectedCategory.length > 0) {
      filtered = filtered.filter((item) =>
        selectedCategory.includes(item.category)
      );
    }
  
    return filtered;
  }