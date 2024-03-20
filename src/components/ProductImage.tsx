import { IProduct } from "@/interfaces/IProduct";
import Image from "next/image";

interface IProductImageProps {
  product: IProduct;
}

export function ProductImage({ product }: IProductImageProps) {
  return (
    <Image
      src={product.image}
      fill
      alt={product.title}
      className="object-cover object-center rounded-lg"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
