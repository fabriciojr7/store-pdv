import { useQuery } from "@tanstack/react-query";

export function useCategories() {
  const { data, refetch, isLoading, isFetching, error } = useQuery({
    staleTime: 0,
    queryKey: ["categories"],
    queryFn: async (): Promise<string[]> => {
      const result = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      return result.json();
    },
  });

  return { categories: data ?? [], refetch, isLoading, isFetching, error };
}
