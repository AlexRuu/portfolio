"use client";

import { cn } from "@/lib/utils";
import NavLinks from "./nav-links";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "hidden md:flex w-full justify-between pt-3 z-20 relative",
        pathname == "/" && "text-white"
      )}
    >
      <p className="w-1/2 uppercase px-24">Alex Ru</p>
      <NavLinks />
    </div>
  );
};

export default Navbar;
