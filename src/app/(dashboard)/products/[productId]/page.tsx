import { Header } from "@/components/Header";

interface IProductProps {
  params: {
    productId: string;
  };
}

export default function Product({ params }: IProductProps) {
  return (
    <div>
      <Header />
      <h1>Product - {params.productId}</h1>
    </div>
  );
}
