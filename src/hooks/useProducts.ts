import { IProduct } from "@/interfaces/IProduct";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  const { data, refetch, isLoading, isFetching, error } = useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<IProduct[]> => {
      const result = await fetch("https://fakestoreapi.com/products");
      return result.json();
    },
  });

  return { products: data ?? [], refetch, isLoading, isFetching, error };
}
