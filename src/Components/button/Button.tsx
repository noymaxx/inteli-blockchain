import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="text-xl mt-4 p-2 bg-blue-500 text-white rounded-md shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed"
      type="submit"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
