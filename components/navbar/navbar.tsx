"use client";

import { cn } from "@/lib/utils";
import NavLinks from "./nav-links";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "hidden md:flex w-full justify-between pt-3 z-[100] absolute text-lg",
        pathname == "/" && "text-white"
      )}
    >
      <Link
        href={"/"}
        className="h-10 w-max items-center justify-center rounded-md px-16 py-2"
      >
        Alex Ru
      </Link>
      <NavLinks />
    </div>
  );
};

export default Navbar;
