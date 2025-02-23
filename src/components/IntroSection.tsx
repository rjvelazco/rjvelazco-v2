import Link from "next/link";
import React from "react";
import { CallToActionButton } from "./CallToActionButton";

export const IntroSection = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-2">Rafael Velazco </h1>

      <h3 className="text-2xl font-medium mb-4 text-gray-700">
        Senior Software Engineering
      </h3>

      <blockquote className="text-gray-600 text-lg">
        The value of a developer is measured based on their understanding of the
        product and the impact they can have on the business.
      </blockquote>
      <br />
      <p className="text-gray-600 text-lg">
        Software Engineer with a passion for building scalable and efficient web
        applications. More than 5 years of experience in the industry. I'm
        working full time with Angular, TypeScript, CSS, Docker, Git, and
        GitHub.
      </p>

      <br />

      <p className="text-gray-600 text-lg">
        I am passionate about the entire development process, from ideation,
        planning, design and implementation, and I love actively participating
        in the product.
      </p>
      {/* <CallToActionButton href="#contact" label="Say Hello" /> */}
    </div>
  );
};
