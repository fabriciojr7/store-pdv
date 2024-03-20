import { ComponentProps } from "react";

interface ITextareaProps extends ComponentProps<"textarea"> {}

export function Textarea({ ...props }: ITextareaProps) {
  return (
    <textarea
      {...props}
      className="w-full min-h-28 px-2 rounded-md bg-zinc-800 outline-none border border-transparent focus:border-primary transition-colors"
    />
  );
}
