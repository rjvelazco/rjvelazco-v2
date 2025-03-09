import React from "react";

export const MasonryGrid = ({ items }: { items: string[] }) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 gap-y-8 px-4 sm:px-6">
      {items.map((item, index) => (
        <li key={index} className="list-disc marker:text-petrol-lighter ml-5 leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
};
