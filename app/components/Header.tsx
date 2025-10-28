import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full h-dvh">
      <div className="absolute realtive ml-2 sm:right-20 bottom-1 sm:bottom-10 self-center w-11/12 sm:w-1/2 h-dvh sm:h-[90dvh] opacity-30">
        <Image
          src="/images/logo.svg"
          alt="logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full h-[90%] flex items-end pl-8">
        <div className="flex flex-row-reverse gap-[10vw]">
          <h2 className="h-fit w-fit text-[12vw] sm:text-[8vw] text-9xl">
            Design
            <br />
            Development
            <br />
            Launch
            <br />
          </h2>
          <div className="flex-col justify-between hidden sm:flex">
            <h3 className="h-fit w-fit text-[1.5vw]">
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
            </h3>
            <ArrowDownRight size={"10vw"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
