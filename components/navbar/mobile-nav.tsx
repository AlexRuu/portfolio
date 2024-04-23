import { Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Accordion } from "@radix-ui/react-accordion";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import useMediaQuery from "@/hooks/useMediaQuery";

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

const MobileNavbar = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  return (
    <>
      {!isDesktop && (
        <div className="flex justify-between w-full items-center">
          <Link
            href={"/"}
            className="h-10 w-max items-center justify-center rounded-md pl-10 py-2"
          >
            Alex Ru
          </Link>
          <Sheet>
            <SheetTrigger>
              <Menu className="mr-5" />
            </SheetTrigger>
            <SheetContent
              className="z-[500] w-full"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <ul className="mt-10">
                {links.map((link) => (
                  <li key={link.title}>
                    {link.submenu ? (
                      <Accordion type="single" collapsible>
                        <AccordionItem value={link.title}>
                          <AccordionTrigger className="hover:opacity-50">
                            {link.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul>
                              {link.submenu.map((sublink) => (
                                <li
                                  key={sublink.title}
                                  className="w-max items-center justify-center rounded-md py-2 hover:opacity-50"
                                >
                                  <SheetClose asChild>
                                    <Link href={sublink.href}>
                                      {sublink.title}
                                    </Link>
                                  </SheetClose>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className="flex flex-1 items-center py-4 font-medium hover:opacity-50"
                        >
                          {link.title}
                        </Link>
                      </SheetClose>
                    )}
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
