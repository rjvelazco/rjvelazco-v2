import { MasonryGrid } from "@components/MasonryGrid";
import { ExperienceItem } from "@components/ExperienceItem";
import { Button } from "@components/Button";

import { MY_EXPERIENCE, MY_SKILLS } from "../../data";

export default function About() {
  return (
    <div className="max-w-4xl bg-background mx-auto font-sans flex flex-col gap-12 px-4 sm:px-6 py-8 md:py-12">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">About me</h1>
        <blockquote className="text-lg md:text-xl pl-4 border-l-4 border-gray-300 italic">
          The value of a developer is measured based on their understanding of
          the product and the impact they can have on the business.
        </blockquote>
        <p className="text-lg leading-relaxed mt-6">
          Software Engineer with a passion for building scalable and efficient
          web applications. More than 5 years of experience in the industry. I'm
          working full time with Angular, TypeScript, CSS, Docker, Git, and
          GitHub.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          I am passionate about the entire development process, from ideation,
          planning, design and implementation, and I love actively participating
          in the product.
        </p>
      </section>

      <section aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-3xl font-bold mb-8">
          Skills
        </h2>
        <MasonryGrid items={MY_SKILLS} />
      </section>

      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-3xl font-bold mb-8">
          Experience
        </h2>
        <div className="flex flex-col gap-8">
          {MY_EXPERIENCE.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
        <div className="flex justify-end items-center mt-4">
          <Button href="/path/to/your/asset.pdf" label="Download CV" download />
        </div>
      </section>
    </div>
  );
}
