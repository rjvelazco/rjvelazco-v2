import React from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
  tools: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  duration,
  responsibilities,
  tools,
}) => {
  // Color: rgb(51, 51, 51)
  return (
    <div className="border-t border-gray-300 mt-4 pt-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold">
          {title}<span className="font-normal"> | {company}</span>
        </h3>
        <span className="text-gray-600">{duration}</span>
      </div>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <li className="font-semibold">{tools}</li>
      </ul>
    </div>
  );
}; 