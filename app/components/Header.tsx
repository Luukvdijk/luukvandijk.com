import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import Logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <div className="w-full h-dvh">
      <Image
        src={Logo}
        alt="logo"
        className="absolute right-20 bottom-10 w-full sm:w-1/2 max-w-[70vw] h-full sm:h-auto max-h-[90dvh] opacity-30"
      />
      <div className="w-full h-[90%] flex items-end pl-8">
        <div className="flex flex-row-reverse gap-[10vw]">
          <h1 className="h-fit w-fit text-[12vw] sm:text-[8vw] text-9xl">
            Design
            <br />
            Development
            <br />
            Launch
            <br />
          </h1>
          <div className="flex-col justify-between hidden sm:flex">
            <h2 className="h-fit w-fit text-[1.5vw]">
              Creatief
              <br />
              Gebruiksvriendelijk
              <br />
              Nauwkeurig
              <br />
              Oplossend
              <br />
              Analytisch
              <br />
              Kwaliteit
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
