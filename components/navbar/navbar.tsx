"use client";

import { cn } from "@/lib/utils";
import NavLinks from "./nav-links";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileNavbar from "./mobile-nav";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <div
        className={cn(
          "hidden sm:flex w-full justify-between pt-3 z-[100] absolute",
          pathname == "/" && "text-white"
        )}
      >
        <Link
          href={"/"}
          className="h-10 w-max items-center justify-center rounded-md px-4 py-2 hover:opacity-50"
        >
          Alex Ru
        </Link>
        <NavLinks />
      </div>
      <div
        className={cn(
          "sm:hidden flex w-full justify-between pt-3 z-[100] absolute",
          pathname == "/" && "text-white"
        )}
      >
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
