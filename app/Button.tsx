import React from "react";

interface IButtonProps {
  children: string;
}

const Button = ({ children }: IButtonProps) => {
  return <button className="m-4">{children}</button>;
};

export default Button;
