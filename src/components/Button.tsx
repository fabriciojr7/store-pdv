import clsx from "clsx";
import { ComponentProps } from "react";

interface IButtonProps extends ComponentProps<"button"> {}

export function Button({ children, className, ...props }: IButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "bg-primary py-2 rounded-lg w-full hover:bg-primary/85 transition-all disabled:bg-primary/30 disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}
