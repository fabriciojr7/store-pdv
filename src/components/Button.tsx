import clsx from "clsx";
import { ComponentProps } from "react";

interface IButtonProps extends ComponentProps<"button"> {
  variant?: "danger";
}

export function Button({
  children,
  className,
  variant,
  ...props
}: IButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "bg-primary py-2 rounded-lg w-full hover:bg-primary/85 transition-all disabled:bg-primary/30 disabled:cursor-not-allowed",
        variant === "danger" &&
          "bg-red-500 hover:bg-red-500/85 disabled:bg-red-500/30",
        className
      )}
    >
      {children}
    </button>
  );
}
