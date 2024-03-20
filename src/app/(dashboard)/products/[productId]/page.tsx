"use client";

import { Button } from "@/components/Button";
import { DropdownCategories } from "@/components/DropdownCategories";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { useProductDetail } from "@/hooks/useProductDetail";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface IProductProps {
  params: {
    productId: string;
  };
}

export default function Product({ params }: IProductProps) {
  const { product } = useProductDetail(Number(params.productId));
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleDropdownChange = (value: string | null) => {
    setSelectedValue(value);
  };

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

        <div className="space-y-6">
          <div className="space-y-2">
            <label>Nome</label>
            <Input placeholder="Nome" value={product?.title} />
          </div>

          <div className="space-y-2">
            <label>Preço</label>
            <Input placeholder="Preço" value={product?.price} />
          </div>

          <div className="space-y-2">
            <label>Descrição</label>
            <Textarea placeholder="Descrição" value={product?.description} />
          </div>

          <div className="space-y-2">
            <label>Categoria</label>
            <DropdownCategories onChange={handleDropdownChange} />
          </div>

          <div className="space-y-2">
            <label>Imagem</label>
            <Input placeholder="Imagem" value={product?.image} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button>Editar Produto</Button>
          <Button variant="danger">Excluir Produto</Button>
        </div>
      </div>
    </>
  );
}
