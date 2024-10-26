import React from "react";
import "./index.scss";
import Loader from "../loader";


interface ButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  className = "",
  disabled = false,
  isLoading = false,
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${className} ${disabled || isLoading ? "disabled" : ""}`}
      disabled={disabled || isLoading}
      type={type}
    >
      {isLoading ? <Loader /> : text}
    </button>
  );
};

export default Button;
