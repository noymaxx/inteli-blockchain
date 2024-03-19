// InputField.tsx

import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  opcional?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  opcional,
}) => {
  return (
    <div className="flex flex-col mb-2">
      <label htmlFor={name} className="text-sm text-gray-200">
        {label}
        {opcional && <p>{opcional}</p>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-2 text-black rounded-md shadow-md"
      />
    </div>
  );
};

export default InputField;
