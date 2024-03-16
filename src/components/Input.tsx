import { ComponentProps } from "react";

interface IInputProps extends ComponentProps<"input"> {}

export function Input({ ...props }: IInputProps) {
  return (
    <input
      {...props}
      className="w-full h-10 px-2 rounded-md bg-zinc-800 outline-none border border-transparent focus:border-primary transition-colors"
    />
  );
}
