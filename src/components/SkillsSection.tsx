import React from "react";

const skills = {
  frontend: [
    { name: "HTML", level: "Advance" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Advance" },
    { name: "Angular", level: "Advance" },
    { name: "Bootstrap", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "React Native", level: "Basic" },
  ],
  backend: [
    { name: "Node Js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Express JS", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "Firebase", level: "Intermediate" },
    { name: "SQL", level: "Intermediate" },
  ],
};

export const SkillsSection = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-2 text-center">Skills</h2>
      <p className="text-gray-500 mb-8 text-center">My technical level</p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
        <SkillCard title="Frontend Developer" skills={skills.frontend} />
        <SkillCard title="Backend Developer" skills={skills.backend} />
      </div>
    </div>
  );
};

interface SkillCardProps {
  title: string;
  skills: { name: string; level: string }[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <div className="p-6 bg-white border rounded-lg shadow-md">
      <h3 className="font-semibold mb-4 text-center">{title}</h3>
      <ul className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <li key={skill.name} className="flex flex-col items-start">
            <span className="font-medium">{skill.name}</span>
            <span className="text-sm text-gray-600">{skill.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}; 