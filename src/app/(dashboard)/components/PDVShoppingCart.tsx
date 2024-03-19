"use client";

import Image from "next/image";
import { CircleX, ShoppingCart } from "lucide-react";
import { CartItem } from "./CartItem";
import { useCartStore } from "@/Store/CartStore";
import { Button } from "@/components/Button";
import { formatPrice } from "@/lib/util";

interface IPDVShoppingCartProps {
  closeCart?: boolean;
}

export function PDVShoppingCart({ closeCart }: IPDVShoppingCartProps) {
  const cartStore = useCartStore();

  const totalPrice = cartStore.cart.reduce((accumulator, item) => {
    return accumulator + item.product.price * item.quantity!;
  }, 0);

  return (
    <div className="w-full flex flex-col justify-between h-full border-l border-zinc-500/15 ">
      <header className="h-24 px-5 bg-zinc-950/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingCart className="size-8" />
          <h2 className="font-bold">PDV</h2>
        </div>

        <span className="font-bold">
          {cartStore.cart.length > 0
            ? `${cartStore.cart.length} Itens`
            : "Vazio"}
        </span>

        {closeCart && (
          <button onClick={cartStore.toggleCart}>
            <CircleX />
          </button>
        )}
      </header>

      <div className="p-5 flex-1 overflow-y-auto bg-zinc-800 divide-y divide-zinc-500/20">
        {cartStore.cart.map((item) => (
          <CartItem productCart={item} key={item.product.id} />
        ))}
      </div>

      <div className="px-5 py-8 space-y-5">
        <div className="flex items-center justify-between text-lg uppercase font-semibold text-zinc-500">
          <h3>Total</h3>
          <span>{formatPrice(totalPrice)}</span>
        </div>

        <Button disabled={cartStore.cart.length === 0}>Confirmar compra</Button>
      </div>
    </div>
  );
}
