import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/LogoDark.svg";

const Navbar = () => {
  const navmenu = [
    { name: "Case studie", url: "" },
    { name: "Stappen", url: "" },
    { name: "Klanten", url: "" },
    { name: "Reviews", url: "" },
    { name: "Contact", url: "" },
  ];

  return (
    <div className="flex flex-row items-center gap-5 px-5 py-3 rounded-xl bg-nav-gradient backdrop-blur-lg w-fit h-fit fixed top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Image src={Logo} alt="logo" className="w-10 h-auto" />
      {navmenu.map((nav) => {
        return (
          <div key={nav.name}>
            <Link href={nav.url} className="text-white">
              {nav.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
