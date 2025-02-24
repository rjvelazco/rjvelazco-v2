import { MasonryGrid } from "@components/MasonryGrid";
import { ExperienceItem } from "@components/ExperienceItem";
import { Button } from "@components/Button";
import { ContactSection } from "@components/ContactSection";

import { MY_EXPERIENCE, MY_SKILLS } from "../data";

export default function Home() {
  return (
    <div className="max-w-4xl bg-background mx-auto font-sans flex flex-col gap-12">
      <section>
        <h1 className="text-5xl font-bold mb-2">About me</h1>
        <blockquote className="text-lg">
          The value of a developer is measured based on their understanding of
          the product and the impact they can have on the business.
        </blockquote>
        <p className="text-lg mt-4">
          Software Engineer with a passion for building scalable and efficient
          web applications. More than 5 years of experience in the industry. I'm
          working full time with Angular, TypeScript, CSS, Docker, Git, and
          GitHub.
        </p>
        <p className="text-lg mt-4">
          I am passionate about the entire development process, from ideation,
          planning, design and implementation, and I love actively participating
          in the product.
        </p>
      </section>

      <section aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-3xl font-bold mb-8">Skills</h2>
        <MasonryGrid items={MY_SKILLS} />
      </section>

      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-3xl font-bold mb-8">Experience</h2>
        {MY_EXPERIENCE.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
        <div className="flex justify-end items-center mt-4">
          <Button href="/path/to/your/asset.pdf" label="Download CV" download />
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
