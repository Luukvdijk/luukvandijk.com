import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import Logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <div className="w-full h-dvh">
      <Image
        src={Logo}
        alt="logo"
        className="absolute right-20 bottom-10 w-1/2 h-auto max-h-[90dvh] opacity-30"
      />
      <div className="w-full h-[90%] flex items-end pl-8">
        <div className="flex flex-row-reverse gap-[10vw]">
          <h1 className="h-fit w-fit text-[8vw] text-9xl">
            Design
            <br />
            Development
            <br />
            Launch
            <br />
          </h1>
          <div className="flex flex-col justify-between">
            <h2 className="h-fit w-fit text-[1.5vw]">
              Ontwerp
              <br />
              Schitterende
              <br />
              Website
              <br />
              Creëer
              <br />
              Aantrekkelijk
              <br />
              Merk
              <br />
            </h2>
            <ArrowDownRight size={"10vw"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
