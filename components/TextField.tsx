"use client";
import React from "react";

type TextFieldProps = {
  label: string;
  type: string;
  className?: string;
  labeClassName?: string;
  placeholder?: string;
  id?: string;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  className = "",
  labeClassName,
  placeholder,
  type = "text",
  id,
  ...props
}) => {
  return (
    <div className="flex flex-col w-full p-4 gap-4 ">
      <label
        htmlFor=""
        id={label}
        className={`uppercase font-bold text-xl ${labeClassName}`}
      >
        {label}
      </label>
      <input
        type={type}
        className={`text-l p-2 tracking-wide border-2 border-blue-400 rounded-md focus:outline-none focus:ring-0 focus:ring-blue-500 ${className}`}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default TextField;
