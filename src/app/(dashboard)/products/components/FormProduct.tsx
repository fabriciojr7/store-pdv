import { Button } from "@/components/Button";
import { DropdownCategories } from "@/components/DropdownCategories";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { IProduct } from "@/interfaces/IProduct";
import { IProductWithoutId } from "@/interfaces/IProductWithoutId";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "O titulo do produto é obrigatório"),
  price: z.union([z.string().min(1, "O preço é obrigatório."), z.number()]),
  description: z.string().optional(),
  category: z.string().min(1, "A categoria é obrigatória"),
  image: z
    .string()
    .min(1, "A URL de imagem é obrigatória.")
    .url("Informe uma URL de imagem válida."),
});

type FormData = z.infer<typeof schema>;

interface IFormProductProps {
  typeform?: "new" | "edit";
  product?: IProduct;
  onSubmitForm: (product: IProductWithoutId) => void;
  isPending: boolean;
  onDelete?: () => void;
  isPendingDeleted?: boolean;
}

export function FormProduct({
  typeform = "new",
  product,
  onSubmitForm,
  isPending,
  onDelete,
  isPendingDeleted,
}: IFormProductProps) {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    values: product,
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    // console.log("submeteu", data);
    if (data) {
      onSubmitForm({
        title: data.title,
        price: Number(data.price),
        description: data.description ?? "",
        image: data.image,
        category: data.category,
      });
    }
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label>Titulo</label>
        <Input
          placeholder="Informe o titulo"
          {...register("title")}
          error={errors.title?.message}
        />
      </div>

      <div className="space-y-2">
        <label>Preço</label>
        <Input
          placeholder="Informe o preço"
          {...register("price")}
          error={errors.price?.message}
        />
      </div>

      <div className="space-y-2">
        <label>Descrição</label>
        <Textarea
          placeholder="Informe a descrição"
          {...register("description")}
          error={errors.description?.message}
        />
      </div>

      <div className="space-y-2">
        <label>Categoria</label>

        <Controller
          control={control}
          name="category"
          defaultValue={""}
          render={({ field: { onChange, value } }) => (
            <DropdownCategories
              onChange={onChange}
              value={value}
              error={errors.category?.message}
            />
          )}
        />
      </div>

      <div className="space-y-2">
        <label>Imagem</label>

        <Input
          placeholder="Informe uma URL de imagem"
          {...register("image")}
          error={errors.image?.message}
        />
      </div>

      <div className="flex items-center gap-2">
        <Button disabled={isPending || isPendingDeleted}>
          {typeform === "new" ? "Cadastrar Produto" : "Editar Produto"}
        </Button>

        {typeform === "edit" && (
          <Button
            type="button"
            variant="danger"
            onClick={onDelete}
            disabled={isPending || isPendingDeleted}
          >
            Excluir Produto
          </Button>
        )}
      </div>
    </form>
  );
}
