"use client";
import { Button } from "@/components/Button";
import { DropdownCategories } from "@/components/DropdownCategories";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormProduct } from "../components/FormProduct";

export default function NewProduct() {
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

        <FormProduct />

        {/* <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label>Nome</label>
            <Input placeholder="Titulo" {...register("title")} />
          </div>

          <div className="space-y-2">
            <label>Preço</label>
            <Input placeholder="Preço" {...register("price")} />
          </div>

          <div className="space-y-2">
            <label>Descrição</label>
            <Textarea placeholder="Descrição" {...register("description")} />
          </div>

          <div className="space-y-2">
            <label>Categoria</label>

  
            <DropdownCategories onChange={handleDropdownChange} />
          </div>

          <div className="space-y-2">
            <label>Imagem</label>

            <Input placeholder="Imagem" {...register("image")} />
          </div>

          <div className="flex items-center gap-2">
            <Button>Cadastrar Produto</Button>
          </div>
        </form> */}
      </div>
    </>
  );
}
