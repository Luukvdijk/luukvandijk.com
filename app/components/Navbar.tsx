"use client";

import Image from "next/image";
import Logo from "../assets/LogoDark.svg";
import { useScroll } from "./ScrollContext";

const Navbar = () => {
  const { scrollToSection, scrollToTop } = useScroll();

  const navmenu = [
    { name: "Case studie", id: "case-studie" },
    { name: "Stappen", id: "stappen" },
    { name: "Klanten", id: "klanten" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4">
      <div className="flex flex-row items-center gap-5 px-5 py-3 rounded-xl bg-nav-gradient backdrop-blur-lg">
        <button onClick={scrollToTop} className="focus:outline-none">
          <Image src={Logo} alt="Home" className="w-10 h-auto" />
        </button>
        {navmenu.map((nav) => (
          <button
            key={nav.name}
            onClick={() => scrollToSection(nav.id)}
            className="text-white hover:text-gray-300 transition-colors focus:outline-none"
          >
            {nav.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
