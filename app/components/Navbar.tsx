"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll } from "./ScrollContext";

export default function Navbar() {
  const { scrollToSection, scrollToTop } = useScroll();
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const navmenu = [
    { name: "Case studie", id: "case-studie" },
    { name: "Stappen", id: "stappen" },
    { name: "Klanten", id: "klanten" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    if (isHomePage) {
      scrollToSection(id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-8">
      <div className="flex flex-row justify-between items-center gap-5 px-5 py-3 rounded-xl bg-nav-gradient backdrop-blur-lg w-full sm:w-fit">
        <Link
          href="/"
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault();
              scrollToTop();
            }
          }}
          className="focus:outline-none"
        >
          <div className="relative w-10 h-10">
            <Image
              src="/images/logoDark.svg"
              alt="Home"
              fill
              className="object-contain"
            />
          </div>
        </Link>
        {navmenu.map((nav) => (
          <Link
            key={nav.name}
            href={isHomePage ? `#${nav.id}` : `/#${nav.id}`}
            onClick={() => handleNavClick(nav.id)}
            className={`text-white hover:text-gray-300 transition-colors focus:outline-none sm:block ${
              nav.name !== "Contact" && `hidden`
            }`}
          >
            {nav.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
