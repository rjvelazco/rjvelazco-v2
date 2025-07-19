import { PageSection } from "@components/sections/page-section";

import { WorkTimeline } from "@components/sections/work-timeline";
import { ProjectShowcase } from "@components/sections/project-showcase";

import { SectionHeading } from "@components/ui/section-heading";
import { SocialLink } from "@components/ui/social-link";
import { Badge } from "@components/ui/badge";

export default function Portfolio() {
  return (
    <div className="px-4">
      <PageSection className="py-16 md:py-36" id="home">
        <div className="max-w-xl">
          <div className="flex gap-4 mb-4">
            <img
              className="rounded-full shadow-lg size-16"
              src="/me.jpg"
              alt="Rafael Velazco"
            />
            <a
              href="https://linkedin.com/in/rafael-velazco"
              target="_blank"
              rel="noopener"
              className="flex items-center transition md:justify-center md:hover:scale-105"
            >
              <Badge>Available for work</Badge>
            </a>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
            Hello, I&apos;m Rafael Velazco
          </h1>
          <p className="mt-6 text-lg text-gray-800 leading-[1.7]">
            +5 years of experience.{" "}
            <strong className="text-petrol-light">
              Software Engineer with a passion for building scalable and
              efficient web applications
            </strong>
            . Working full time with Angular, TypeScript, CSS, Docker, Git, and
            GitHub.{" "}
          </p>
          <nav className="flex flex-wrap gap-4 mt-8">
            <SocialLink href="mailto:rjvelazco21@gmail.com">
              Contáctame
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/rafael-velazco">
              LinkedIn
            </SocialLink>
          </nav>
        </div>
      </PageSection>
      <div className="space-y-24">
        <PageSection id="experience">
          <SectionHeading>Work Experience</SectionHeading>
          <WorkTimeline />
        </PageSection>

        <PageSection id="projects">
          <SectionHeading>Projects</SectionHeading>
          <ProjectShowcase />
        </PageSection>

        <PageSection id="about-me">
          <SectionHeading>About Me</SectionHeading>
          <article className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <div className="[&>p]:mb-4 [&>p>strong]:text-petrol [&>p>strong]:font-normal text-pretty order-2 md:order-1">
              <p>
                I&apos;m Rafael Velazco, a software engineer
                passionate about programming and always eager to learn. I
                consider myself a <strong> sociable, adaptable person</strong>,
                constantly looking for new challenges.
              </p>

              <p>
                Currently, I work at{" "}
                <strong>
                  <a
                    className="underline"
                    href="https://dotcms.com"
                    target="_blank"
                    rel="noopener"
                  >
                    dotCMS
                  </a>
                </strong>{" "}
                as one of the <strong>lead software developers</strong>. One of
                our recent achievements has been the development of the{" "}
                <strong>
                  <a
                    className="underline"
                    href="https://dev.dotcms.com/docs/universal-visual-editor"
                    target="_blank"
                    rel="noopener"
                  >
                    Universal Visual Editor
                  </a>
                </strong>{" "}
                and the transition of our product from a{" "}
                <strong>Hybrid CMS</strong> to a <strong>Universal CMS</strong>.
              </p>

              <p className="mb-0">
                In recent months, I&apos;ve been focusing on developing my
                skills in{" "}
                <strong>
                  team management, leadership, and product understanding
                </strong>
                . I&apos;ve realized that beyond writing code, a developer must{" "}
                <strong>deliver strategic value</strong> and deeply understand
                the <strong>business impact of their work</strong>.
              </p>
            </div>

            <img
              width="200"
              height="200"
              src="/me.jpg"
              alt={"Rafael Velazco"}
              className="order-1 object-cover w-64 h-full md:order-2 lg:w-64 aspect-square rounded-2xl"
              style={{ objectPosition: "50% 50%" }}
            />
          </article>
        </PageSection>
      </div>
    </div>
  );
}
