import { Button } from "@/components/Button";
import { CatalogProductCard } from "@/components/CatalogProductCard";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { ShoppingBag, ShoppingCart } from "lucide-react";

export default function Catalog() {
  return (
    <div className="flex items-start h-screen">
      <div className="flex-1 overflow-y-auto h-full">
        <Header />

        <div className="p-5 space-y-10">
          <div className="flex items-center gap-2">
            <ShoppingBag size={32} />
            <h1 className="text-2xl font-bold">Catalogo</h1>
          </div>

          <Input placeholder="Busca de produtos" />
        </div>
      </div>

      <div className="w-[40%] flex flex-col justify-between h-full border-l border-zinc-500/15 ">
        <header className="h-24 px-5 bg-zinc-950/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart />
            <h2>Carrinho de compras</h2>
          </div>

          <div>
            <span>2 Itens</span>
          </div>
        </header>

        <div className="flex items-center justify-between p-5 text-lg uppercase font-semibold text-zinc-500">
          <h3>Produto</h3>
          <h3>Quantidade</h3>
        </div>

        <div className="px-5 flex-1 overflow-y-auto bg-zinc-800">
          <h1>Produtos</h1>
        </div>

        <div className="px-5 py-8 space-y-5">
          <div className="flex items-center justify-between text-lg uppercase font-semibold text-zinc-500">
            <h3>Total</h3>
            <span>R$ 20,00</span>
          </div>

          <Button>Confirmar compra</Button>
        </div>
      </div>
    </div>
  );
}
