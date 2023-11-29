import React from "react";

export default function Button({ children, className, onClickEvent }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClickEvent(e);
      }}
      className={`block w-full md:inline-block md:w-auto px-4 py-3  md:py-2 rounded-md font-semibold text-base border border-slate-300 mt-4
    md:mt-0 md:order-1 ${className}`}>
      {children}
    </button>
  );
}
