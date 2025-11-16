interface Tag {
  name: string;
  class: string;
}

export interface Project {
  title: string;
  description: string;
  link?: string;
  github?: string;
  image: string;
  tags: Tag[];
  isPriority?: boolean;
}

export interface WorkTimelineItem {
  date: string;
  title: string;
  company: string;
  description: string;
  link?: string;
  linkText?: string;
}

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
  NODEJS: {
    name: "Node.js",
    class: "bg-[#333333] text-[#44883e]",
  },
  EXPRESS: {
    name: "Express",
    class: "bg-gray-50 text-[#44883e]",
  },
  MONGODB: {
    name: "MongoDB",
    class: "bg-gray-50 text-[#589636]",
  },
  CSS: {
    name: "CSS",
    class: "bg-gray-50 text-[#4285F4]",
  },
  CHARTJS: {
    name: "Chart.js",
    class: "bg-black text-white",
  },
};

export const WORK_TIMELINE: WorkTimelineItem[] = [
  {
    date: "Currently...",
    title: "Senior Software Engineer",
    company: "dotCMS",
    description:
      "Responsible for the ideation, planning, design, and development of new features. I have a deep understanding of dotCMS as a product and build solutions tailored to our clients' needs. I thrive in team environments and work well with both technical and non-technical stakeholders.",
    link: "https://github.com/search?q=author%3Arjvelazco+repo%3Adotcms%2Fcore+repo%3Adotcms%2Fcore-web+state%3Aclosed&type=pullrequests",
    linkText: "Over 300 solutions at dotCMS",
  },
  {
    date: "Feb 2021",
    title: "Frontend Engineer",
    company: "dotCMS",
    description:
      "Responsible for the development, maintenance, debugging, and testing of components and views within dotCMS. I’m also in charge of the maintenance and continuous improvement of dotcms.com.",
  },
];

export const WORK_TIMELINE_ES: WorkTimelineItem[] = [
  {
    date: "Actualmente...",
    title: "Senior Software Engineer",
    company: "dotCMS",
    description:
      "Responsable de la ideación, planificación, diseño y desarrollo de nuevas funcionalidades. Tengo un profundo entendimiento de dotCMS como producto, y construyo soluciones adaptadas a las necesidades de nuestros clientes. Disfruto trabajar en equipo y me desenvuelvo bien con perfiles técnicos y no técnicos.",
    link: "https://github.com/search?q=author%3Arjvelazco+repo%3Adotcms%2Fcore+repo%3Adotcms%2Fcore-web+state%3Aclosed&type=pullrequests",
    linkText: "Más de 300 soluciones en dotCMS",
  },
  {
    date: "Feb 2021",
    title: "Frontend Engineer",
    company: "dotCMS",
    description:
      "Responsable del desarrollo, mantenimiento, depuración y pruebas de componentes y vistas dentro de dotCMS. También estoy a cargo del mantenimiento y la mejora continua de dotcms.com.",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Dashboard App",
    description:
      "Hospital Dashboard to see branches, personnel, patients, and more.",
    link: "https://rjvelazco.github.io/dashboard-angular/dashboard",
    github: "https://github.com/rjvelazco/dashboard-angular",
    image: "/projects/dashboard-app.webp",
    tags: [TAGS.ANGULAR, TAGS.CSS, TAGS.CHARTJS],
    isPriority: true,
  },
  {
    title: "Dashboard Backend",
    description:
      "Dashboard Backend to see branches, personnel, patients, and more.",
    link: "https://rjvelazco.github.io/dashboard-angular/dashboard",
    github: "https://github.com/rjvelazco/dashboard-angular",
    image: "/projects/dashboard-backend.webp",
    tags: [TAGS.NODEJS, TAGS.EXPRESS, TAGS.MONGODB],
  },
  {
    title: "Gallery App",
    description:
      "Gallery App made with Angular and Firebase. It allows you to upload images and videos to a gallery and share them with your friends.",
    link: "https://rjvelazco.github.io/fotos-angular-firebase/fotos",
    github: "https://github.com/rjvelazco/fotos-angular-firebase",
    image: "/projects/gallery-app.webp",
    tags: [TAGS.ANGULAR, TAGS.FIREBASE],
  },
  {
    title: "Movie Premier App",
    description:
      "Movie Premier App that allows you to see the latest movies and their details.",
    link: "https://rjvelazco.github.io/peliculas-angular/peliculas",
    github: "https://github.com/rjvelazco/peliculas-angular",
    image: "/projects/movie-premier-app.webp",
    tags: [TAGS.ANGULAR, TAGS.CSS],
  },
];

export const PROJECTS_ES: Project[] = [
  {
    title: "Dashboard App",
    description:
      "Dashboard hospitalario para ver sucursales, personal, pacientes y más.",
    link: "https://rjvelazco.github.io/dashboard-angular/dashboard",
    github: "https://github.com/rjvelazco/dashboard-angular",
    image: "/projects/dashboard-app.webp",
    tags: [TAGS.ANGULAR, TAGS.CSS, TAGS.CHARTJS],
    isPriority: true,
  },
  {
    title: "Dashboard Backend",
    description:
      "Backend del dashboard para ver sucursales, personal, pacientes y más.",
    link: "https://rjvelazco.github.io/dashboard-angular/dashboard",
    github: "https://github.com/rjvelazco/dashboard-angular",
    image: "/projects/dashboard-backend.webp",
    tags: [TAGS.NODEJS, TAGS.EXPRESS, TAGS.MONGODB],
  },
  {
    title: "Gallery App",
    description:
      "Aplicación de galería hecha con Angular y Firebase. Te permite subir imágenes y videos a una galería y compartirlos con tus amigos.",
    link: "https://rjvelazco.github.io/fotos-angular-firebase/fotos",
    github: "https://github.com/rjvelazco/fotos-angular-firebase",
    image: "/projects/gallery-app.webp",
    tags: [TAGS.ANGULAR, TAGS.FIREBASE],
  },
  {
    title: "Movie Premier App",
    description:
      "Aplicación de estrenos de películas que te permite ver las películas más recientes y sus detalles.",
    link: "https://rjvelazco.github.io/peliculas-angular/peliculas",
    github: "https://github.com/rjvelazco/peliculas-angular",
    image: "/projects/movie-premier-app.webp",
    tags: [TAGS.ANGULAR, TAGS.CSS],
  },
];
