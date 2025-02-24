import React from "react";

export const MasonryGrid = ({ items }: { items: string[] }) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-8 px-8">
      {items.map((item, index) => (
        <li key={index} className="list-disc">
          {item}
        </li>
      ))}
    </ul>
  );
};
