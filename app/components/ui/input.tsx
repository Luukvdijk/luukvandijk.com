import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  ref?: any;
};

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`bg-background border-b-[0.1rem] w-full py-2 opacity-50 focus:outline-none focus:opacity-100 ${className}`}
      {...props}
    />
  );
};

export default Input;
