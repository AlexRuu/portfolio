"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const sublinks = [
  { title: "About", href: "/about" },
  { title: "Gallery", href: "/gallery" },
  { title: "Projects", href: "/projects" },
  { title: "Recipes", href: "/recipes" },
];

const links = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects", submenu: sublinks },
];

const NavLinks = () => {
  return (
    <nav className="flex flex-wrap w-1/2 justify-end pr-[5.5rem]">
      <NavigationMenu>
        <NavigationMenuList>
          {links.map((link) => (
            <NavigationMenuItem key={link.title}>
              {link.submenu ? (
                <>
                  <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                  <NavigationMenuContent className="text-black">
                    <ul>
                      {link.submenu.map((sublink) => (
                        <li key={sublink.title}>
                          <Link href={sublink.href} legacyBehavior passHref>
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              {sublink.title}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {link.title}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default NavLinks;
