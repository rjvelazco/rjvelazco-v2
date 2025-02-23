import React from "react";
import { ExperienceCard } from "./ExperienceCard";
import { CallToActionButton } from "./CallToActionButton";

export const ExperienceSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">Experience</h2>
      <ExperienceCard
        title="Senior Software Engineering"
        company="dotCMS"
        duration="January 2025 – Present"
        responsibilities={[
          "Plan, design, and implement new features and improvements to the dotCMS platform.",
          "Collaborate with cross-functional teams to gather requirements and ensure seamless integration of features.",
          "Understand customer needs and translate them into technical solutions.",
          "Provide technical support to customers and internal teams.",
          "Participate in the decision-making process pertaining to UI/UX design optimization and technical implementations.",
          "Lead technical discussions and provide guidance to developers.",
          "Stay updated with the latest front-end technologies and trends, integrating these into current projects to enhance outcomes.",
        ]}
        tools="Tools: Angular, NextJS, Astro, TypeScript, PostgreSQL, Docker, Git, GitHub, Other"
      />
      <ExperienceCard
        title="Software Engineering"
        company="dotCMS"
        duration="February 2021 – December 2024"
        responsibilities={[
          "Deliver a high-quality feature on time and within budget.",
          "Work with the product team to understand the business requirements and translate them into technical solutions.",
          "Collaborate with other developers to design, implement, and maintain efficient and scalable code.",
          "Participate in code reviews and provide constructive feedback to ensure code quality.",
          "Stay up-to-date with the latest technologies and best practices in software development.",
        ]}
        tools="Tools: Angular, JSP, Dojo Kit, Docker, Git, GitHub, Other"
      />
      <br />
      <div className="flex justify-end items-center">
        <CallToActionButton
          href="/path/to/your/asset.pdf"
          label="Download CV"
          download
        />
      </div>
    </div>
  );
}; 