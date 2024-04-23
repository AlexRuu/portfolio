import Link from "next/link";
import { FaInstagram, FaRegEnvelope, FaGithub } from "react-icons/fa6";

const style = {
  background: "black",
  color: "white",
  padding: "1px",
};

const footerLinks = [
  {
    title: "Email",
    icon: <FaRegEnvelope size={20} style={style} />,
    href: "mailto:alexweiru@gmail.com",
  },
  {
    title: "Instagram",
    icon: <FaInstagram size={20} style={style} />,
    href: "https://www.instagram.com/alex.wru/",
  },
  {
    title: "Github",
    icon: <FaGithub size={20} style={style} />,
    href: "https://github.com/AlexRuu",
  },
];

const Footer = () => {
  return (
    <div className="mt-auto h-32">
      <footer className="w-full text-center justify-center flex flex-col uppercase h-full">
        <h4>Contact Me</h4>
        <div className="flex justify-center hover:opacity-80 mx-auto mt-2">
          {footerLinks.map((link) => (
            <Link key={link.title} href={link.href} className="px-1">
              <div className="bg-black rounded-[50%] p-[0.375rem] h-full w-full opacity-70 hover:!opacity-100 hover:bg-black">
                {link.icon}
              </div>
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
