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
      review:
        "Het is heel fijn om met Luuk samen te werken. Hij is communicatief heel sterk waardoor hij in een zelfsturend/scrum team goed kan werken als front-end developer, designer, coach van andere jonge developers en scrum master. Hij weet hoe hij dingen goed kan opzetten en doet hier vooraf ook onderzoek naar. Hij kan erg goed samenwerken en is van grote waarde voor elk team. Daarnaast denkt Luuk ook heel fijn en proactief mee met alles wat te maken heeft met de opdracht waardoor hij mij ook regelmatig erg positief verrast heeft.",
      img: "",
      name: "Anja Wolters",
      place: "Oprichter BuurBak",
    },
    {
      id: 2,
      review:
        "Als mede-eigenaar van BuurBak kan ik zeggen dat ik enorm tevreden ben met de samenwerking met Luuk. Zo heeft hij een echte Scrum Master rol op zich en neemt hij het team onder zijn hoede. Hij communiceert met mij wanneer er problemen zijn én op evaluatie en planning momenten. Hierdoor gaan we goed vooruit en blijft de development goed lopen.",
      img: "",
      name: "Michiel Hazel",
      place: "Oprichter BuurBak",
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
                  <p className="text-[3vw] sm:text-[1.5vw]">
                    “<span className="opacity-50">{review.review}</span>”
                  </p>
                  <div className="flex flex-row gap-4">
                    {review.img ? (
                      <div className="relative size-[8vw] sm:size-[3.5vw]">
                        <Image
                          src={review.img}
                          alt="profiel foto"
                          fill
                          className="object-contain"
                        />
                      </div>
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
