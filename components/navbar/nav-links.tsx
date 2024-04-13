import Link from "next/link";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Gallery", href: "/gallery" },
  { title: "Projects", href: "/projects" },
  { title: "Recipes", href: "/recipes" },
];

const NavLinks = () => {
  return (
    <nav className="flex flex-wrap w-1/2 justify-end pr-[5.5rem]">
      <ul className="list-none flex">
        {links.map((link) => (
          <li key={link.title}>
            <Link href={link.href} className="px-2 uppercase hover:opacity-60">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
