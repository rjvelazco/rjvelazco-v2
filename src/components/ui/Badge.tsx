import React from "react";

export const Badge = ({ children}: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center ">
      <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <div className="border border-green-800 inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer whitespace-nowrap">
          {children}
        </div>
      </span>
    </div>
  );
};
