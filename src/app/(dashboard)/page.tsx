import { Header } from "@/components/Header";
import { CatalogSubheader } from "./components/CatalogSubheader";
import { ShoppingCartMobile } from "./components/ShoppingCartMobile";
import { PDVShoppingCart } from "./components/PDVShoppingCart";
import { ListCatalogProducts } from "./components/ListCatalogProducts";

export default function Catalog() {
  return (
    <div className="relative flex items-start h-screen">
      <div className="flex-1 overflow-y-auto h-full">
        <Header />

        <div className="p-5 space-y-10">
          <CatalogSubheader />

          <ListCatalogProducts />
        </div>
      </div>

      <div className="lg:w-[420px] h-full hidden lg:block">
        <PDVShoppingCart />
      </div>

      <ShoppingCartMobile />
    </div>
  );
}
