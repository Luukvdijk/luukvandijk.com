import { UserCircle } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Review = () => {
  const reviews = [
    {
      id: 1,
      review: "Wajow tering goed. Ik zou je 10K doneren als extratje",
      img: "",
      name: "Lara Krul",
      place: "CEO",
    },
    {
      id: 2,
      review: "Jezus maar 10k doe maar 20k doneren",
      img: "",
      name: "Pepijn Remmerswaal",
      place: "CEO",
    },
  ];

  return (
    <div className="w-full h-fit px-8 pb-8 flex flex-col gap-10">
      <Carousel
        className="w-full flex flex-col items-center sm:block"
        opts={{ loop: true }}
      >
        <div className="flex flex-col w-full sm:flex-row sm:justify-between">
          <h1 className="w-fit text-[8vw] sm:text-[3vw]">Klanten reviews</h1>
          <div className="hidden sm:flex flex-row gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>

        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.id}>
              <div className="p-1">
                <div key={review.id} className="flex flex-col gap-4">
                  <p className="text-[5vw] sm:text-[4vw]">
                    “<span className="opacity-50">{review.review}</span>”
                  </p>
                  <div className="flex flex-row gap-4">
                    {review.img ? (
                      <Image
                        src={review.img}
                        alt="profiel foto"
                        className="size-[8vw] sm:size-[3.5vw]"
                      />
                    ) : (
                      <UserCircle className="size-[10vw] sm:size-[3.5vw]" />
                    )}
                    <div className="flex flex-col">
                      <p className="text-[4vw] sm:text-[1.5vw]">
                        {review.name}
                      </p>
                      <p className="text-[3vw] sm:text-[1.5vw] opacity-50">
                        {review.place}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex sm:hidden flex-row gap-4 pt-5 self-center">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default Review;
