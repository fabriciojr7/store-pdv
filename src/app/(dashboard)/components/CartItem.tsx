"use client";

import { IProduct } from "@/interfaces/IProduct";
import { formatPrice } from "@/lib/util";
import { ProductImage } from "@/components/ProductImage";
import { Button } from "@/components/Button";
import { useCartStore } from "@/Store/CartStore";

interface ICartItemProps {
  productCart: {
    product: IProduct;
    quantity?: number | 1;
  };
}

export function CartItem({ productCart }: ICartItemProps) {
  const cartStore = useCartStore();

  return (
    <div className="h-32 w-full flex gap-4 py-5">
      <div className="relative min-w-16 rounded-lg">
        <ProductImage product={productCart.product} />
      </div>

      <div className="w-full flex flex-col gap-3 justify-center overflow-x-hidden">
        <p className="font-semibold truncate">{productCart.product.title}</p>

        <div className="flex items-center justify-between">
          <p className="text-primary font-medium">
            {formatPrice(productCart.product.price)}
          </p>

          <div className="w-full max-w-36 flex items-center gap-2">
            <Button
              onClick={() => cartStore.removeFromCart(productCart.product)}
              className="max-w-10 font-medium"
            >
              -
            </Button>

            <div className="flex-1 flex items-center justify-center py-2 bg-zinc-950/50 rounded-lg">
              <span className="text-lg font-bold">{productCart.quantity}</span>
            </div>

            <Button
              onClick={() => cartStore.addToCart(productCart.product)}
              className="max-w-10 font-medium"
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
