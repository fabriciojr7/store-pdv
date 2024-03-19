"use client";

import { useCartStore } from "@/Store/CartStore";
import { Button } from "@/components/Button";
import { ProductImage } from "@/components/ProductImage";
import { IProduct } from "@/interfaces/IProduct";
import { formatPrice } from "@/lib/util";

interface ICatalogProductCardProps {
  product: IProduct;
}

export function CatalogProductCard({ product }: ICatalogProductCardProps) {
  const { addToCart } = useCartStore();

  return (
    <div className="h-96 flex flex-col gap-5 rounded-2xl shadow-lg bg-zinc-800 p-3">
      <div className="relative max-h-72 flex-1 rounded-lg">
        <ProductImage product={product} />
      </div>

      <div className="space-y-3 ">
        <p className="font-medium truncate">{product.title}</p>
        <p className="text-sm font-semibold text-primary">
          {formatPrice(product.price)}
        </p>
      </div>

      <Button onClick={() => addToCart(product)}>Adicionar</Button>
    </div>
  );
}
