"use client";

import React, { useState } from "react";

import { Project } from "@data/portfolio";

export const ProjectShowcase = ({ projects }: { projects: Project[] }): JSX.Element => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  const hasMoreProjects = projects.length > 3;

  return (
    <div className="flex flex-col gap-y-16">
      {displayedProjects.map(
        ({ image, title, description, tags, link, github, isPriority }: Project) => (
          <article
            key={title}
            className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
          >
            <div>
              <div className="relative flex flex-col items-center mx-auto w-[256px] h-[200px] col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:hover:bg-gray-800/50">
                <img
                  alt={`Screenshot of ${title} project`}
                  className="object-cover w-full h-full transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                  loading={isPriority ? "eager" : "lazy"}
                  src={image}
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
            </div>

            <div className="w-full flex-1">
              <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
              <div className="flex flex-wrap my-4">
                <ul className="flex flex-row mb-2 gap-x-2 w-full">
                  {tags.map((tag) => (
                    <li key={tag.name}>
                      <span
                        className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 pointer-events-none`}
                      >
                        {tag.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 text-gray-700">{description}</div>
                <footer className="flex items-end justify-start mt-4 gap-x-4">
                  {github && (
                    <ProjectLink
                      href={github}
                      ariaLabel={`View source code for ${title} on GitHub`}
                    >
                      Code
                    </ProjectLink>
                  )}
                  {link && (
                    <ProjectLink
                      href={link}
                      ariaLabel={`View live demo of ${title}`}
                    >
                      Preview
                    </ProjectLink>
                  )}
                </footer>
              </div>
            </div>
          </article>
        )
      )}

      {hasMoreProjects && !showAll && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer"
            aria-label="Show more projects"
          >
            Show More Projects
          </button>
        </div>
      )}
    </div>
  );
};

interface ProjectLinkProps {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

const ProjectLink = ({ href, children, ariaLabel }: ProjectLinkProps) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      aria-label={ariaLabel}
      className="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition border focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2"
    >
      {children}
    </a>
  );
};
