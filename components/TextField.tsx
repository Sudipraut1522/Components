"use client";
import React, { ChangeEvent } from "react";

type TextFieldProps = {
  label: string;
  type?: 'text'|'email'|'password';
  className?: string;
  labeClassName?: string;
  placeholder?: string;
  id?: string;
  value:string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  className = "",
  labeClassName,
  placeholder,
  type = "text",
  id,
  value,
  onChange,
  ...props
}) => {

  return (
    <div className="flex flex-col w-full gap-4 ">
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
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
