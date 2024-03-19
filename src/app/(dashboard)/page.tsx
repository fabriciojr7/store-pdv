import { Header } from "@/components/Header";
import { IProduct } from "@/interfaces/IProduct";
import { CatalogSubheader } from "./components/CatalogSubheader";
import { CatalogProductCard } from "./components/CatalogProductCard";
import { ShoppingCartMobile } from "./components/ShoppingCartMobile";
import { PDVShoppingCart } from "./components/PDVShoppingCart";

async function getProducts() {
  const result = await fetch("https://fakestoreapi.com/products");

  return result.json();
}

export default async function Catalog() {
  const products: IProduct[] = await getProducts();

  return (
    <div className="relative flex items-start h-screen">
      <div className="flex-1 overflow-y-auto h-full">
        <Header />

        <div className="p-5 space-y-10">
          <CatalogSubheader />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
            {products.map((product) => (
              <CatalogProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <div className="lg:w-[420px] h-full hidden lg:block">
        <PDVShoppingCart />
      </div>

      <ShoppingCartMobile />
    </div>
  );
}
