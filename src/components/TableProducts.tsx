import { IProduct } from "@/interfaces/IProduct";
import { formatPrice } from "@/lib/util";
import { SquarePen, Trash2 } from "lucide-react";
import { ProductImage } from "./ProductImage";

interface ITableProductsProps {
  products: IProduct[];
}

export function TableProducts({ products }: ITableProductsProps) {
  return (
    <table className="w-full border border-zinc-800 rounded-t-2xl">
      <thead className="bg-zinc-800 text-xl font-semibold">
        <tr>
          <th className="py-6 px-3 text-left">Imagem</th>
          <th className="py-6 text-left">Produto</th>
          <th className="max-lg:hidden py-6 text-left">Categoria</th>
          <th className="max-lg:hidden py-6 text-center">Preço</th>
          <th className="py-6 px-3 text-right">Ações</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-zinc-700">
        {products.map((product) => (
          <tr key={product.id}>
            <td className="h-24 pl-5 py-4">
              <div className="relative h-full w-12">
                <ProductImage product={product} />
              </div>
            </td>
            <td className="h-24 py-4">{product.title}</td>
            <td className="max-lg:hidden h-24 py-4">{product.category}</td>
            <td className="max-lg:hidden h-24 py-4 text-center">
              {formatPrice(product.price)}
            </td>
            <td className="h-24 pr-5 py-4 text-right flex flex-col items-end gap-2">
              <button className="text-green-500">
                <SquarePen />
              </button>
              <button className="text-red-500">
                <Trash2 />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
