import { useMemo } from "react";
import { filterBlogs } from "@/utility/paginate/filterBlogs";
import { paginate } from "@/utility/paginate";

interface UsePaginatedBlogsProps {
  searchTerm?: string;
  selectedCategory?: string[];
  currentPage: number;
  itemsPerPage: number;
}

export function usePaginatedBlogs({
  searchTerm = "",
  selectedCategory = [],
  currentPage,
  itemsPerPage,
}: UsePaginatedBlogsProps) {
  return useMemo(() => {
    const filtered = filterBlogs({ searchTerm, selectedCategory });
    return paginate(filtered, currentPage, itemsPerPage);
  }, [searchTerm, selectedCategory, currentPage, itemsPerPage]);
}
