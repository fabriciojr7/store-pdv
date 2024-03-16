import Image from "next/image";

export function CatalogProductCard() {
  return (
    <div className="bg-zinc-800 w-fit rounded-2xl flex flex-col">
      <div className="w-48">
        <Image
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
          width={0}
          height={0}
          className="rounded-t-2xl"
          sizes="w-[200px]"
        />
      </div>

      <div>
        <h2>Nome do produto</h2>
        <span>Categoria</span>
        <span>R$ 20,00</span>
      </div>
    </div>
  );
}
