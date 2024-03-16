import { ComponentProps } from "react";

interface IButtonProps extends ComponentProps<"button"> {}

export function Button({ children, ...props }: IButtonProps) {
  return (
    <button
      {...props}
      className="bg-primary py-2 rounded-lg w-full hover:bg-primary/85 transition-all"
    >
      {children}
    </button>
  );
}
