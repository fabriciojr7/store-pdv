"use client";

import { useCartStore } from "@/Store/CartStore";
import { PDVShoppingCart } from "./PDVShoppingCart";

export function ShoppingCartMobile() {
  const cartStore = useCartStore();

  return (
    <>
      {cartStore.isOpen && (
        <div className="absolute inset-0 bg-zinc-900 block lg:hidden">
          <PDVShoppingCart closeCart />
        </div>
      )}
    </>
  );
}
