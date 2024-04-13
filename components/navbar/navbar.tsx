import NavLinks from "./nav-links";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between pt-3 z-50 fixed top-0 text-white">
      <p className="w-1/2 uppercase px-24">Alex Ru</p>
      <NavLinks />
    </div>
  );
};

export default Navbar;
