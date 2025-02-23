import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semi-bold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray900">
      {props.children}
    </button>
  );
}
