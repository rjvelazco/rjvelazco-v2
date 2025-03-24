const navItems = [
  {
    title: "Experience",
    label: "experience",
    url: "/portfolio#experience",
  },
  {
    title: "Projects",
    label: "projects",
    url: "/portfolio#projects",
  },
  {
    title: "About Me",
    label: "about-me",
    url: "/portfolio#about-me",
  },
  {
    title: "Contact",
    label: "contact",
    url: "mailto:rjvelazco21@gmail.com",
  },
];

export const Header = () => {
  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
      <nav className="flex px-3 text-sm font-medium rounded-full text-gray-600 justify-center items-center bg-white/80 backdrop-blur-xs">
        {navItems.map((link) => (
          <a
            className="relative block px-2 py-2 transition hover:text-blue-500"
            aria-label={link.label}
            href={link.url}
          >
            {link.title}
          </a>
        ))}
      </nav>
    </header>
  );
};
