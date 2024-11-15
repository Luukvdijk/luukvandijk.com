import Image from "next/image";
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <div className="w-full h-fit flex flex-col-reverse gap-8 sm:gap-0 sm:flex-row justify-around px-8 py-10 text-white">
      <Image src={Logo} alt="logo" className="h-[15vh] w-auto" />
      <div className="flex flex-col items-center">
        <p className="opacity-50 text-[3vw] sm:text-[2vw]">Contact</p>
        <p className="text-[5vw] sm:text-[3vw]">
          <a href="mailto:info@luukvandijk.com">info@luukvandijk.com</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
