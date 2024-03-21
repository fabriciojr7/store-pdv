"use client";

import { Header } from "@/components/Header";
import { useProductDetail } from "@/hooks/useProductDetail";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FormProduct } from "../components/FormProduct";
import { IProductWithoutId } from "@/interfaces/IProductWithoutId";
import { useUpdateProduct } from "@/hooks/useUpdateProduct";
import { useDeleteProduct } from "@/hooks/useDeleteProduct";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface IProductProps {
  params: {
    productId: string;
  };
}

export default function Product({ params }: IProductProps) {
  const { product } = useProductDetail(Number(params.productId));
  const router = useRouter();

  const { isPending: isPendingUpdated, mutateAsync } = useUpdateProduct(
    Number(params.productId)
  );
  const { isPending: isPendingDeleted, mutateAsync: mutateAsyncDelete } =
    useDeleteProduct(Number(params.productId));

  async function deleteProduct() {
    try {
      await mutateAsyncDelete();
      toast.success("Produto deletado com sucesso!");

      router.replace("/products");
    } catch (error) {
      toast.success("Erro ao deletar o produto!");
      console.log(error);
    }
  }

  async function updateProduct(product: IProductWithoutId) {
    try {
      await mutateAsync(product);

      toast.success("Produto editado com sucesso!");

      router.replace("/products");
    } catch (error) {
      toast.success("Erro ao editar o produto!");
      console.log(error);
    }
  }

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

        <FormProduct
          typeform="edit"
          product={product}
          onSubmitForm={updateProduct}
          isPending={isPendingUpdated}
          onDelete={deleteProduct}
          isPendingDeleted={isPendingDeleted}
        />
      </div>
    </>
  );
}
