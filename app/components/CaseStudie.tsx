import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const CaseStudie = () => {
  const caseStudie = [
    {
      title: "BuurBak",
      img: "/images/buurbak/cover.png",
      cat: "Handelsplatform",
      href: "/buurbak",
    },
    {
      title: "YoungPWR",
      img: "/images/youngpwr/cover.png",
      cat: "Handelsplatform",
      href: "/youngpwr",
    },
  ];

  return (
    <div className="w-full h-dvh flex flex-col px-8">
      <Carousel opts={{ loop: true }}>
        <div className="flex flex-col w-full sm:flex-row sm:justify-between">
          <h2 className="text-[12vw] sm:text-[3vw] w-fit mb-4 p-0 m-0">
            Case studie
          </h2>
          <div className="hidden sm:flex flex-row gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>

        <div className="flex-1 flex h-full max-h-[80vh] justify-center items-center">
          <CarouselContent className="flex-1 flex h-full">
            {caseStudie.map((item) => (
              <CarouselItem key={item.title} className="sm:basis-3/4">
                <Link
                  href={`/case-studies${item.href}`}
                  className="flex-1 flex flex-col gap-4 w-full max-w-[90vw] sm:max-w-none sm:w-[50vw]"
                >
                  <div className="relative w-full h-auto aspect-video">
                    <Image
                      src={item.img}
                      alt={`${item.title} home page`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-row justify-between m-0 p-0">
                    <div className="m-0 p-0">
                      <p className="opacity-50 text-[4vw] sm:text-[1vw] m-0 p-0">
                        {item.cat}
                      </p>
                      <h3 className="text-[10vw] sm:text-[2vw] m-0 p-0">
                        {item.title}
                      </h3>
                    </div>
                    <div className="group flex flex-row gap-4 items-center">
                      <p className="opacity-50 sm:group-hover:opacity-100 transition-opacity duration-300">
                        Bekijken
                      </p>
                      <ArrowUpRight className="size-[15vw] sm:size-[3vw]" />
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  );
};

export default CaseStudie;
