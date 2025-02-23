import { MasonryGrid } from "@components/MasonryGrid";
import { ExperienceItem } from "@components/ExperienceItem";
import { CallToActionButton } from "@components/CallToActionButton";
import { experienceData, skills } from "../data";
import { ContactSection } from "@components/ContactSection";

export default function Home() {
  return (
    <div className="max-w-4xl bg-background mx-auto font-sans flex flex-col gap-12">
      <section>
        <h1 className="text-5xl font-bold mb-2">Rafael Velazco </h1>

        <h3 className="text-2xl font-medium mb-4 text-gray-700">
          Senior Software Engineering
        </h3>

        <blockquote className="text-lg">
          The value of a developer is measured based on their understanding of
          the product and the impact they can have on the business.
        </blockquote>
        <br />
        <p className="text-lg">
          Software Engineer with a passion for building scalable and efficient
          web applications. More than 5 years of experience in the industry. I'm
          working full time with Angular, TypeScript, CSS, Docker, Git, and
          GitHub.
        </p>

        <br />

        <p className="text-lg">
          I am passionate about the entire development process, from ideation,
          planning, design and implementation, and I love actively participating
          in the product.
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <MasonryGrid items={skills} />
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-2">Experience</h2>
        {experienceData.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
        <br />
        <div className="flex justify-end items-center">
          <CallToActionButton
            href="/path/to/your/asset.pdf"
            label="Download CV"
            download
          />
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
