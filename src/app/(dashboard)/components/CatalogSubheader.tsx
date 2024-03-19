"use client";

import { useCartStore } from "@/Store/CartStore";
import { Input } from "@/components/Input";
import { ShoppingBag, ShoppingCart } from "lucide-react";

export function CatalogSubheader() {
  const cartStore = useCartStore();

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag size={32} />
          <h1 className="text-2xl font-bold">Catalogo</h1>
        </div>

        <button className="lg:hidden relative" onClick={cartStore.toggleCart}>
          <ShoppingCart className="size-8" />
          <span className="flex items-center justify-center absolute -top-2 -right-3 text-sm font-bold bg-primary w-6 h-6 rounded-full">
            {cartStore.cart.length}
          </span>
        </button>
      </div>

      <div>
        <Input placeholder="Busca de produtos" />
      </div>
    </div>
  );
}
