import { IProduct } from "@/interfaces/IProduct";
import { useQuery } from "@tanstack/react-query";

export function useProductDetail(productId: number) {
  const { data, refetch, isLoading, isFetching, error } = useQuery({
    queryKey: ["product", productId],
    queryFn: async (): Promise<IProduct> => {
      const result = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      return result.json();
    },
  });

  return { product: data ?? null, refetch, isLoading, isFetching, error };
}
