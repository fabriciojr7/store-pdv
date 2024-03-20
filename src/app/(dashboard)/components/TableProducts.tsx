"use client";
import { ProductImage } from "@/components/ProductImage";
import { useProducts } from "@/hooks/useProducts";
import { formatPrice } from "@/lib/util";
import { SquarePen } from "lucide-react";

import Link from "next/link";
import { HeaderTableProducts } from "./HeaderTableProducts";

export function TableProducts() {
  const { products } = useProducts();

  return (
    <div className="space-y-10">
      <HeaderTableProducts numberProducts={products.length} />

      <table className="w-full border border-zinc-800 rounded-t-2xl">
        <thead className="bg-zinc-800 text-lg md:text-xl font-semibold">
          <tr>
            <th className="py-6 px-3 text-left">Imagem</th>
            <th className="py-6 text-left">Produto</th>
            <th className="max-lg:hidden py-6 text-left">Categoria</th>
            <th className="max-lg:hidden py-6 text-center">Preço</th>
            <th className="py-6 px-3 text-right">Editar</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-zinc-700">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="h-24 px-3 py-4">
                <div className="relative h-full w-12">
                  <ProductImage product={product} />
                </div>
              </td>
              <td className="h-24 py-4">{product.title}</td>
              <td className="max-lg:hidden h-24 py-4">{product.category}</td>
              <td className="max-lg:hidden h-24 py-4 text-center">
                {formatPrice(product.price)}
              </td>
              <td className="h-24 px-3 py-4 flex justify-end items-center ">
                <Link
                  href={`/products/${product.id}`}
                  className="text-green-500"
                >
                  <SquarePen />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
