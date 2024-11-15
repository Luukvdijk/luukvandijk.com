import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BuurbakHome from "../assets/BuurbakHome.png";
import MobileBuurbakHome from "../assets/MobileBuurbakHeader.png";

const CaseStudie = () => {
  const caseStudie = [
    {
      title: "BuurBak",
      img: BuurbakHome,
      imgMobile: MobileBuurbakHome,
      cat: "Handelsplatform",
    },
  ];

  return (
    <div className="w-full h-dvh flex flex-col px-8">
      <h1 className="text-[12vw] sm:text-[3vw] w-fit mb-4 p-0 m-0">
        Case studie
      </h1>
      <div className="flex-1 flex max-h-[80vh] justify-center items-center">
        {caseStudie.map((item) => (
          <Link
            href={"/buurbak"}
            key={item.title}
            className="flex flex-col gap-4 w-full max-w-[70vw] sm:max-w-none sm:w-[50vw]"
          >
            <Image
              src={item.img}
              alt="BuurBak home page"
              className="w-full h-auto hidden sm:block"
            />

            <Image
              src={item.imgMobile}
              alt="BuurBak home page"
              className="w-full h-auto sm:hidden"
            />
            <div className="flex flex-row justify-between m-0 p-0">
              <div className="m-0 p-0">
                <p className="opacity-50 text-[4vw] sm:text-[1vw] m-0 p-0">
                  {item.cat}
                </p>
                <h2 className="text-[10vw] sm:text-[2vw] m-0 p-0">
                  {item.title}
                </h2>
              </div>
              <div className="group flex flex-row gap-4 items-center">
                <p className="opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  Bekijken
                </p>
                <ArrowUpRight className="size-[15vw] sm:size-[3vw]" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudie;
