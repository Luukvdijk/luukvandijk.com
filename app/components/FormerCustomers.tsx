import Image from "next/image";

const FormerCustomers = () => {
  const formerCustomers = [
    {
      id: 1,
      number: "01",
      title: "BuurBak",
      img: "/images/buurbak/cover.png",
      discription:
        "BuurBak is een Nederlands platform waarmee buurtbewoners hun aanhangwagens kunnen delen. Het doel is om ongebruikte trailers beter te benutten en een duurzame, gemeenschapsgerichte deelcultuur te bevorderen. Zo kunnen gebruikers geld besparen en hun buurt beter leren kennen door gebruik te maken van trailers die al beschikbaar zijn in hun omgeving.",
    },
  ];

  return (
    <div className="w-full h-fit px-8 pb-8">
      <h2 className="text-[8vw] sm:text-[3vw] w-fit">Voormalige klanten</h2>
      <div className="w-full h-fit">
        {formerCustomers.map((item) => {
          return (
            <div key={item.id} className="w-full h-fit flex flex-col gap-4">
              <div className="w-full h-fit flex flex-col sm:flex-row justify-between gap-2">
                <p className="opacity-50 text-[5vw] sm:text-[2vw] min-w-fit">
                  {item.number}
                </p>
                <div className="relative aspect-video w-[90vw] h-auto sm:h-auto sm:w-[40vw] object-cover">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="max-w-full sm:max-w-[50vw]">
                  <h3 className="text-[5vw] sm:text-[2vw]">{item.title}</h3>
                  <p className="opacity-50 text-[3vw] sm:text-[1.5vw]">
                    {item.discription}
                  </p>
                </div>
              </div>
              <hr className="w-full h-1 opacity-50 rounded-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormerCustomers;
