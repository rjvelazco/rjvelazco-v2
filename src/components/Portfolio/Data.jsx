import Work1 from "../../assets/work1.png";
import Work2 from "../../assets/work2.png";
import Work3 from "../../assets/work3.png";
import Work4 from "../../assets/work4.png";
import Work5 from "../../assets/work5.png";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Hopsital Dashboard",
    category: "web",
    repo: "https://github.com/rjvelazco/angular-adv-adminpro",
    demo: "https://admin-pro-dev.onrender.com/",
  },
  {
    id: 2,
    image: Work2,
    title: "Personal Gallery",
    category: "web",
    repo: "https://github.com/rjvelazco/fotos-angular-firebase",
    demo: "https://rjvelazco.github.io/fotos-angular-firebase/fotos",
  },
  {
    id: 3,
    image: Work3,
    title: "Movies Gallery",
    category: "web",
    repo: "https://github.com/rjvelazco/peliculas-angular-app",
    demo: "https://rjvelazco.github.io/peliculas-angular-app/home",
  },
  {
    id: 4,
    image: Work4,
    title: "Rest API",
    category: "backend",
    repo: "https://github.com/rjvelazco/adminpro-backend",
    demo: "https://documenter.getpostman.com/view/13616589/TVzPnJkF",
  },
  {
    id: 5,
    image: Work5,
    title: "Delivery App",
    category: "mobile",
    private: true,
    label: "Private project, contact me for more info.",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "backend",
  },
  {
    name: "mobile",
  },
];
