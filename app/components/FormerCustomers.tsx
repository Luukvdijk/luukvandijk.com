import Image from "next/image";
import HomePage from "../assets/BuurbakHome.png";

const FormerCustomers = () => {
  const formerCustomers = [
    {
      id: 1,
      number: "01",
      title: "BuurBak",
      img: HomePage,
      discription:
        "BuurBak is een Nederlands platform waarmee buurtbewoners hun aanhangwagens kunnen delen. Het doel is om ongebruikte trailers beter te benutten en een duurzame, gemeenschapsgerichte deelcultuur te bevorderen. Zo kunnen gebruikers geld besparen en hun buurt beter leren kennen door gebruik te maken van trailers die al beschikbaar zijn in hun omgeving.",
    },
  ];

  return (
    <div className="w-full h-dvh px-8">
      <h1 className="text-[3vw] w-fit">Voormalige klanten</h1>
      <div className="w-full h-fit">
        {formerCustomers.map((item) => {
          return (
            <div key={item.id} className="w-full h-fit flex flex-col gap-4">
              <div className="w-full h-fit flex flex-row justify-between">
                <p className="opacity-50 text-[2vw]">{item.number}</p>
                <Image
                  src={item.img}
                  alt={item.title}
                  className="aspect-video w-auto h-[40vh]"
                />
                <div className="max-w-[50vw]">
                  <h2 className="text-[2vw]">{item.title}</h2>
                  <p className="opacity-50 text-[1.5vw]">{item.discription}</p>
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
