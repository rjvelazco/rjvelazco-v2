import React from "react";
import { ExperienceCard } from "./ExperienceCard";

export const ExperienceSection = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-2">Experience</h2>
      <ExperienceCard
        title="Senior Software Engineering"
        company="dotCMS"
        duration="January 2025 – Present"
        responsibilities={[
          "Lead the development of web components and integration of new features into the Content Management System.",
          "Participate in the decision-making process pertaining to UI/UX design optimization and technical implementations.",
          "Conduct thorough code reviews and maintain high coding standards to ensure a clean, efficient, and maintainable codebase.",
          "Determine, troubleshoot, and resolve bugs and issues promptly, maintaining the stability and reliability of web applications.",
          "Ensure the responsiveness and scalability of web applications by implementing best practices in front-end development.",
          "Demonstrate leadership in a team setting, including guiding junior developers and collaborating with cross-functional teams.",
          "Stay updated with the latest front-end technologies and trends, integrating these into current projects to enhance outcomes.",
        ]}
        tools="Tools: Angular, NextJS, TypeScript, NodeJS, PostgreSQL, Docker, Git, GitHub, Other"
      />
      <ExperienceCard
        title="Software Engineering"
        company="dotCMS"
        duration="February 2021 – December 2024"
        responsibilities={[
          "Lead the development of web components and integration of new features into the Content Management System.",
          "Participate in the decision-making process pertaining to UI/UX design optimization and technical implementations.",
          "Conduct thorough code reviews and maintain high coding standards to ensure a clean, efficient, and maintainable codebase.",
          "Determine, troubleshoot, and resolve bugs and issues promptly, maintaining the stability and reliability of web applications.",
          "Ensure the responsiveness and scalability of web applications by implementing best practices in front-end development.",
          "Demonstrate leadership in a team setting, including guiding junior developers and collaborating with cross-functional teams.",
          "Stay updated with the latest front-end technologies and trends, integrating these into current projects to enhance outcomes.",
        ]}
        tools="Tools: Angular, NextJS, TypeScript, NodeJS, PostgreSQL, Docker, Git, GitHub, Other"
      />
    </div>
  );
}; 