import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, label, id, error, ...props }, ref) => {
    return (
      <div className="relative w-full mb-6">
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full bg-white border border-border rounded-small px-4 py-3.5 text-text outline-none transition-all duration-200 peer placeholder-transparent focus:border-primary focus:ring-1 focus:ring-primary",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className
          )}
          placeholder={label} // For layout purposes, visually hidden by peer-focus logic
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
        <label
          htmlFor={id}
          className={cn(
            "absolute left-4 top-3.5 text-muted transition-all duration-200 pointer-events-none peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:text-xs",
            error && "peer-focus:text-red-500 peer-not-placeholder-shown:text-red-500"
          )}
        >
          {label}
        </label>
        {error && (
          <p id={`${id}-error`} className="mt-1 text-xs text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export { InputField };