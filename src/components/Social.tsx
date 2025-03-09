import React from "react";
import Link from "next/link";

export const Social = () => {
  const socials = [
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/rafael-velazco",
      icon: "uil uil-linkedin",
    },
    {
      name: "github",
      link: "https://github.com/rjvelazco",
      icon: "uil uil-github-alt",
    }
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
