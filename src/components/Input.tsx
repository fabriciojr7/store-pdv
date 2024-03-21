import { ComponentProps, forwardRef } from "react";

interface IInputProps extends ComponentProps<"input"> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ error, ...props }, ref) => {
    return (
      <>
        <input
          {...props}
          ref={ref}
          className="w-full h-10 px-2 rounded-md bg-zinc-800 outline-none border border-transparent focus:border-primary transition-colors"
        />

        {error && (
          <div className="flex items-center gap-2 mt-2 text-red-500">
            <span className="text-xs">{error}</span>
          </div>
        )}
      </>
    );
  }
);

Input.displayName = "Input";
