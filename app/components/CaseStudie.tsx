import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import BuurbakHome from "../assets/BuurbakHome.png";

const CaseStudie = () => {
  const caseStudie = [
    { title: "BuurBak", img: BuurbakHome, cat: "Handelsplatform" },
  ];

  return (
    <div className="w-full h-dvh flex flex-col px-8">
      <h1 className="text-[3vw] w-fit mb-4 p-0 m-0">Case studie</h1>
      <div className="flex-1 flex justify-center items-center">
        {caseStudie.map((item) => (
          <div key={item.title} className="flex flex-col gap-4">
            <Image
              src={item.img}
              alt="BuurBak home page"
              className="w-full h-auto"
            />
            <div className="flex flex-row justify-between m-0 p-0">
              <div className="m-0 p-0">
                <p className="opacity-50 text-[1vw] m-0 p-0">{item.cat}</p>
                <h2 className="text-[2vw] m-0 p-0">{item.title}</h2>
              </div>
              <ArrowUpRight size={"3vw"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudie;
