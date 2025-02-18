import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <div className="p-4 bg-white border rounded-lg text-center">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}; 