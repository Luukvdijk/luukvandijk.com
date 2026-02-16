import * as React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`bg-background border-b-[0.1rem] w-full py-2 opacity-50 focus:outline-none focus:opacity-100 ${className ?? ""}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
