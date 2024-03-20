import Link from "next/link";

interface IHeaderTableProductsProps {
  numberProducts: number;
}

export function HeaderTableProducts({
  numberProducts,
}: IHeaderTableProductsProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h3 className="font-medium">Produtos</h3>
        <div className="w-12 h-8 rounded-lg flex items-center justify-center bg-zinc-500">
          <span className="block text-zinc-950 font-bold">
            {numberProducts}
          </span>
        </div>
      </div>

      <Link
        href={"/products/new"}
        className="font-semibold hover:text-primary transition-colors"
      >
        Novo produto
      </Link>
    </div>
  );
}
