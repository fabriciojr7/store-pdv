import { ComponentProps, forwardRef } from "react";

interface ITextareaProps extends ComponentProps<"textarea"> {
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ error, ...props }, ref) => {
    return (
      <>
        <textarea
          {...props}
          ref={ref}
          className="w-full min-h-28 px-2 rounded-md bg-zinc-800 outline-none border border-transparent focus:border-primary transition-colors"
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

Textarea.displayName = "Textarea";
