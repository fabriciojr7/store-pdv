"use client";

import { useState } from "react";
import { useCartStore } from "@/Store/CartStore";
import { Input } from "@/components/Input";
import { Search, ShoppingBag, ShoppingCart } from "lucide-react";
import { Button } from "@/components/Button";
import { DropdownCategories } from "@/components/DropdownCategories";

export function CatalogSubheader() {
  const cartStore = useCartStore();
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleDropdownChange = (value: string | null) => {
    setSelectedValue(value);
  };

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

      <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-4">
        <Input placeholder="Busca de produtos" />

        <div className="w-full md:max-w-60">
          <DropdownCategories onChange={handleDropdownChange} />
        </div>
        <Button className="md:max-w-28 flex items-center justify-center gap-4">
          Filtrar
          <Search />
        </Button>
      </div>
    </div>
  );
}
