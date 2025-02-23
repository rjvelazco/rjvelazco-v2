import React from "react";

interface ButtonProps {
  href: string;
  label: string;
  download?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  label,
  download = false,
}) => {
  return (
    <a
      href={href}
      download={download}
      className="inline-flex items-center gap-2 bg-black text-white font-medium py-3 px-6 rounded-lg"
    >
      {label}
      <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        role="img"
        aria-label="Icon"
      >
        <path d="M12 16l-6-6h4V4h4v6h4l-6 6zM4 18h16v2H4v-2z"></path>
      </svg>
    </a>
  );
};
