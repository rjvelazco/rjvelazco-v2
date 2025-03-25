const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
  },
  ANGULAR: {
    name: "Angular",
    class: "bg-[#c3002f] text-white",
  },
  FIREBASE: {
    name: "Firebase",
    class: "bg-[#FFC400] text-black",
  },
};
const PROJECTS = [
  {
    title: "Gallery App",
    description:
      "Gallery App made with Angular and Firebase. It allows you to upload images and videos to a gallery and share them with your friends.",
    link: "https://rjvelazco.github.io/fotos-angular-firebase/fotos",
    github: "https://github.com/rjvelazco/fotos-angular-firebase",
    image: "/projects/movie-premier-app.webp",
    tags: [TAGS.ANGULAR, TAGS.FIREBASE],
  },
  {
    title: "Gallery App",
    description:
      "Gallery App made with Angular and Firebase. It allows you to upload images and videos to a gallery and share them with your friends.",
    link: "https://rjvelazco.github.io/fotos-angular-firebase/fotos",
    github: "https://github.com/rjvelazco/fotos-angular-firebase",
    image: "/projects/movie-premier-app.webp",
    tags: [TAGS.ANGULAR, TAGS.FIREBASE],
  },
];

export const Projects = () => {
  return (
    <div className="flex flex-col gap-y-16">
      {PROJECTS.map(({ image, title, description, tags, link, github }) => (
        <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
          <div>
            <div className="relative flex flex-col items-center mx-auto w-[256px] h-[256px] col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:hover:bg-gray-800/50">
              <img
                alt="Recién llegado vs 5 años en Nueva Zelanda"
                className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                loading="lazy"
                width={400}
                height={400}
                src={image}
              />
            </div>
          </div>

          <div className="w-full flex-1">
            <h3 className="text-2xl font-bold text-gray-800">
              {title}
            </h3>
            <div className="flex flex-wrap mt-2">
              <ul className="flex flex-row mb-2 gap-x-2">
                {tags.map((tag) => (
                  <li>
                    <span
                      className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `}
                    >
                      {tag.name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-2 text-gray-700">
                {description}
              </div>
              <footer className="flex items-end justify-start mt-4 gap-x-4">
                {github && <LinkButton href={github}>Code</LinkButton>}
                {link && <LinkButton href={link}>Preview</LinkButton>}
              </footer>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      target="_blank"
      href={href}
      className="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition border focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 "
    >
      {children}
    </a>
  );
};
