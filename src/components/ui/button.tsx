import React from "react";

interface ButtonProps {
  href: string;
  label: string;
  download?: boolean;
  icon?: string;
}

export const Button: React.FC<ButtonProps> = ({ href, label, download = false }) => {
  return (
    <a
      href={href}
      download={download}
      className="inline-flex items-center gap-3 bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
    >
      {label}
    </a>
  );
};
