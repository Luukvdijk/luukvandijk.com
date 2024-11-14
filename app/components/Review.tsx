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
      <Carousel className="w-full">
        <div className="flex flex-row justify-between">
          <h1 className="w-fit text-[3vw]">Klanten reviews</h1>
          <div className="flex flex-row gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>

        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.id}>
              <div className="p-1">
                <div key={review.id} className="flex flex-col gap-4">
                  <p className="text-[4vw]">
                    “<span className="opacity-50">{review.review}</span>”
                  </p>
                  <div className="flex flex-row gap-4">
                    {review.img ? (
                      <Image src={review.img} alt="profiel foto" />
                    ) : (
                      <UserCircle size={"3.5vw"} />
                    )}
                    <div className="flex flex-col">
                      <p className="text-[1.5vw]">{review.name}</p>
                      <p className="opacity-50">{review.place}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Review;
