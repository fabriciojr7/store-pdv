import { Header } from "@/components/Header";
import { Package } from "lucide-react";
import { TableProducts } from "../components/TableProducts";

export default function Products() {
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

        <TableProducts />
      </div>
    </div>
  );
}
