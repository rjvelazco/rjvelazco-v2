import React from "react";

interface ExperienceItemrops {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
  tools: string;
}

export const ExperienceItem: React.FC<ExperienceItemrops> = ({
  title,
  company,
  duration,
  responsibilities,
  tools,
}) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
        <h3 className="text-xl font-semibold mb-2 sm:mb-0">
          {title}<span className="font-normal text-petrol"> | {company}</span>
        </h3>
        <span className="text-petrol">{duration}</span>
      </div>
      <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <li className="font-semibold mt-2 text-petrol">{tools}</li>
      </ul>
    </div>
  );
}; 