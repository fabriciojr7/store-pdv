"use client";

import { Header } from "@/components/Header";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FormProduct } from "../components/FormProduct";
import { useCreateProduct } from "@/hooks/useCreateProduct";
import { IProductWithoutId } from "@/interfaces/IProductWithoutId";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function NewProduct() {
  const { isPending, mutateAsync } = useCreateProduct();
  const router = useRouter();

  async function createProduct(product: IProductWithoutId) {
    try {
      await mutateAsync(product);
      toast.success("Produto cadastrado com sucesso!");

      router.replace("/products");
    } catch (error) {
      toast.success("Erro ao cadastrar o produto!");
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <div className="p-5 max-w-xl mx-auto space-y-12">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold ">Novo Produto</h1>

          <Link
            href={"/products"}
            className="flex items-center hover:text-primary transition-colors"
          >
            <ChevronLeft /> Voltar
          </Link>
        </div>

        <FormProduct onSubmitForm={createProduct} isPending={isPending} />
      </div>
    </>
  );
}
