import { LinkInline } from "./LinkInline";

const EXPERIENCE = [
  {
    date: "Currently...",
    title: "Senior Software Engineer",
    company: "dotCMS",
    description: "Development with Angular and React, while driving technical excellence through mentorship and architectural improvements. I collaborate with R&D to establish UI/UX standards, develop scalable features, and build reusable component libraries. My focus is on creating high-performance web applications using TypeScript, RXJS, and modern frontend technologies while helping the team grow and succeed together.",
    link: "https://github.com/search?q=author%3Arjvelazco+repo%3Adotcms%2Fcore+repo%3Adotcms%2Fcore-web+state%3Aclosed&type=pullrequests"
  },
  {
    date: "Feb 2021",
    title: "Frontend Engineer",
    company: "dotCMS",
    description: "Specialized in Angular, JavaScript, and JSP development, focusing on enhancing application architecture and user experience. Identified and resolved critical pain points while implementing structural improvements across both local and client environments. Collaborated directly with clients to understand their needs and deliver tailored solutions.",
  },
];

export const Experience = () => {
  return (
    <ol className="relative mt-16">
      {EXPERIENCE.map((experience) => (
        <li><ExperienceItem {...experience} /></li>
      ))}
    </ol>
  );
};

const ExperienceItem = ({ title, company, date, description, link }: any) => {
    return (
        <div
        className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"
      >
        <div className="relative pb-12 md:col-span-2">
          <div className="sticky top-0">
            <span className="text-petrol-light -left-[44px] absolute rounded-full text-5xl">&bull;</span>
            <h3 className="text-xl font-bold text-petrol-light">{title}</h3>
            <h4 className="font-semibold text-xl text-gray-600">{company}</h4>
            <time className="p-0 m-0 text-sm text-gray-600/80">{date}</time>
          </div>
        </div>
        <div className="relative flex flex-col gap-2 pb-4 text-gray-600 md:col-span-3">
          {description}
          {
            link && (
              <LinkInline href={link}>
                Saber más{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 icon icon-tabler icon-tabler-chevron-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                  </>
                </svg>
              </LinkInline>
            )
          }
        </div>
      </div>
    )
};

