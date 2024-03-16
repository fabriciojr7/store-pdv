import { ShoppingBag } from "lucide-react";

export function Logo() {
  return (
    <div className="flex flex-col items-center">
      <ShoppingBag className="text-primary size-8" />
      <h1 className="font-bold">Store PDV</h1>
    </div>
  );
}
