"use client";

import { Header } from "@/components/Header";
import { useProductDetail } from "@/hooks/useProductDetail";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FormProduct } from "../components/FormProduct";

interface IProductProps {
  params: {
    productId: string;
  };
}

export default function Product({ params }: IProductProps) {
  const { product } = useProductDetail(Number(params.productId));

  if (!product) return;

  return (
    <>
      <Header />
      <div className="p-5 max-w-xl mx-auto space-y-12">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold ">Editar produto</h1>

          <Link
            href={"/products"}
            className="flex items-center hover:text-primary transition-colors"
          >
            <ChevronLeft /> Voltar
          </Link>
        </div>

        <FormProduct typeform="edit" product={product} />
      </div>
    </>
  );
}
