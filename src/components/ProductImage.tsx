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
    />
  );
}
