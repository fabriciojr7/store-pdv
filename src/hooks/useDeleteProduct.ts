import { IProduct } from "@/interfaces/IProduct";
import { useMutation } from "@tanstack/react-query";

export function useDeleteProduct(idProduct: number) {
  return useMutation({
    mutationFn: async (): Promise<IProduct> => {
      const result = await fetch(
        `https://fakestoreapi.com/products/${idProduct}`,
        {
          method: "DELETE",
        }
      );

      return result.json();
    },
  });
}
