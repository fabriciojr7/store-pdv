"use client";

import { useProducts } from "@/hooks/useProducts";
import { CatalogProductCard } from "./CatalogProductCard";

export function ListCatalogProducts() {
  const { products } = useProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
      {products.map((product) => (
        <CatalogProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
