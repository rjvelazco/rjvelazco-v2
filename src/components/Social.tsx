import React from "react";
import Link from "next/link";

export const Social = () => {
  const socials = [
    {
      name: "instagram",
      link: "https://www.instagram.com/rjvelazco21",
      icon: "uil uil-instagram",
    },
    {
      name: "X",
      link: "https://x.com/rjvelazco21",
      icon: "uil uil-x",
    },
    {
      name: "github",
      link: "https://github.com/rjvelazco",
      icon: "uil uil-github-alt",
    },
  ];

  return (
    <div className="social">
      {socials.map((social, index) => (
        <Link key={index} href={social.link} target="_blank" rel="noreferrer">
            <button>
                <i className={social.icon}></i>
            </button>
        </Link>
      ))}
    </div>
  );
};
