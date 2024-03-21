import { IProduct } from "@/interfaces/IProduct";
import { IProductWithoutId } from "@/interfaces/IProductWithoutId";
import { useMutation } from "@tanstack/react-query";

export function useUpdateProduct(idProduct: number) {
  return useMutation({
    mutationFn: async (product: IProductWithoutId): Promise<IProduct> => {
      const result = await fetch(
        `https://fakestoreapi.com/products/${idProduct}`,
        {
          method: "PUT",
          body: JSON.stringify({
            title: product.title,
            price: product.price,
            description: product.description,
            image: product.image,
            category: product.category,
          }),
        }
      );

      return result.json();
    },
  });
}
