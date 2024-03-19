import { Header } from "@/components/Header";
import { TableProducts } from "@/components/TableProducts";
import { IProduct } from "@/interfaces/IProduct";
import { Package } from "lucide-react";

async function getProducts() {
  const result = await fetch("https://fakestoreapi.com/products");

  return result.json();
}

export default async function Products() {
  const products: IProduct[] = await getProducts();

  return (
    <div>
      <Header />
      <div className="p-5 space-y-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Package size={32} />
            <h1 className="text-2xl font-bold">Produtos</h1>
          </div>
          <h2 className="text-sm font-medium text-zinc-500">
            Gerencie os produtos do seu estabelecimento
          </h2>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="font-medium">Produtos</h3>
            <div className="w-12 h-8 rounded-lg flex items-center justify-center bg-zinc-500">
              <span className="block text-zinc-950 font-bold">
                {products.length}
              </span>
            </div>
          </div>

          <button>Novo produto</button>
        </div>

        <TableProducts products={products} />
      </div>
    </div>
  );
}
