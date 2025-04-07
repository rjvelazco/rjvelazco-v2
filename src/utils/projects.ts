interface Tag {
    name: string;
    class: string;
}

interface Project {
    title: string;
    description: string;
    link?: string;
    github?: string;
    image: string;
    tags: Tag[];
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

export const PROJECTS: Project[] = [
    {
        title: "Dashboard App",
        description:
        "Hospital Dashboard to see branches, personnel, patients, and more.",
        link: "https://rjvelazco.github.io/dashboard-angular/dashboard",
        github: "https://github.com/rjvelazco/dashboard-angular",
        image: "/projects/dashboard-app.webp",
        tags: [TAGS.ANGULAR, TAGS.CSS, TAGS.CHARTJS],
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
