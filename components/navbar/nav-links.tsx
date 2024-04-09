import Link from "next/link";

const links = [
  { title: "Home", href: "/" },
  { title: "Gallery", href: "/gallery" },
  { title: "Projects", href: "/projects" },
  { title: "Recipes", href: "/recipes" },
];

const NavLinks = () => {
  return (
    <div className="flex flex-wrap w-1/2 justify-end pr-[5.5rem]">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.title}
          className="px-2 uppercase hover:opacity-60"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
