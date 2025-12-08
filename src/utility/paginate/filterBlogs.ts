import Blog from "@/utility/data/blogcontent";

interface BlogFilterOptions {
  searchTerm?: string;
  selectedCategory?: string[];
}

export function filterBlogs({ searchTerm = "", selectedCategory = [] }: BlogFilterOptions) {
  let filtered = [...Blog];

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
