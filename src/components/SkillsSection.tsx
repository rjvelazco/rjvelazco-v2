import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Angular",
  "Bootstrap",
  "Git",
  "React",
  "React Native",
  "Node Js",
  "MongoDB",
  "Express JS",
  "MySQL",
  "Firebase",
  "SQL",
];

// Rename to masonry grid
export const SkillsSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-8 px-8">
        {skills.map((skill) => (
          <li className="list-disc">{skill}</li>
        ))}
      </ul>
    </div>
  );
};
