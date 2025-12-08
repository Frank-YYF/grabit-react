export interface PaginationResult<T> {
    data: T[];
    totalItems: number;
    totalPages: number;
}
  
export function paginate<T>(
    items: T[],
    page: number = 1,
    limit: number = 6
): PaginationResult<T> {
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const data = items.slice(startIndex, endIndex);

    return { data, totalItems, totalPages };
}
  