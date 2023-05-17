import React, { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
}

const Button = ({ children }: IButtonProps) => {
  return (
    <button className="bg-blue-700 p-2 px-4 rounded-full hover:opacity-50 text-xs tablet:text-base font-display">
      {children}
    </button>
  );
};

export default Button;
