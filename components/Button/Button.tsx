import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className,
  ...props
}) => {
  const styles = {
    primary:
      "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300",
    secondary:
      "bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 disabled:bg-gray-100",
  };
  return (
    <button
      onClick={onClick}
      className={` text-white px-4 py-2 rounded hover:bg-purple-600 ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
