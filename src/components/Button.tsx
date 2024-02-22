import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  color = "primary",
}) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
