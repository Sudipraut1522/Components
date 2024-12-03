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
  
  return (
    <button
      onClick={onClick}
      className={` text-black px-4 py-2 rounded hover:bg-purple-600 tracking-widest ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
