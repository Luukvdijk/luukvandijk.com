import Image from "next/image";
import HomePage from "../assets/BuurbakFullHomePage.png";

const Buurbak = () => {
  const company = [
    {
      id: 1,
      cat: "Deel- en duurzame transportsector",
      plaats: "Utrecht, Nederland",
      employess: "6 werknemers",
      founded: "Opgericht in 2023",
    },
  ];

  const tools = [
    {
      id: 1,
      point1: "Figma (Design)",
      point2: "React (Development)",
      point3: "NextJs (Development)",
      point4: "Tailwind (Development)",
      point5: "Zeroheight (Documentatie)",
      point6: "Netlify (Hosting)",
    },
  ];

  const omschrijving = [
    {
      id: 1,
      discription:
        "BuurBak is een platform dat buurtgenoten in staat stelt om eenvoudig aanhangers te delen, wat zowel duurzaam gebruik bevordert als de gemeenschapsbanden versterkt. Het werkt binnen de deeleconomie met een focus op buurtgerichte mobiliteitsoplossingen.",
    },
  ];

  const uitdagingen = [
    {
      id: 1,
      discription:
        "Een van de uitdagingen binnen BuurBak was de noodzaak van schaalbaarheid. Omdat het nog een startup was, hoefde alles niet meteen groots en uitgebreid opgezet te worden, maar er moest wel ruimte zijn voor toekomstige uitbreidingen en extra capaciteit. Daarnaast was het een uitdaging om de verschillende functies binnen BuurBak helder te structureren, zoals het verhuren en huren van een aanhanger, en het onderscheid tussen de rol van huurder en verhuurder van een aanhanger.",
    },
  ];

  const oplossing = [
    {
      id: 1,
      discription:
        "Anja en Michiel, de oprichters van BuurBak, zijn gestart met hun studentenstartup bij UtrechtINC. Via dit netwerk kwamen ze in contact met mijn opleiding en raakten we in gesprek. Ik heb hen weten te overtuigen om samen aan hun website te werken. Tijdens dit gesprek ontdekte ik dat BuurBak een ontwerp en website nodig had voor een handelsplatform voor het verhuren van aanhangers tussen particulieren.",
    },
  ];

  return (
    <div className="w-full h-fit min-h-[100dvh] flex flex-col gap-10 items-center pt-24 px-8">
      <h1 className="text-[2.5vw]">
        Hoe ik <span className="text-[#398D89]">Buur</span>
        <span className="text-[#EE7B46]">Bak</span> heb gecreëerd en opgezet
      </h1>
      <div className="w-full flex flex-col gap-10">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-col gap-8 w-1/3">
            <div className="flex flex-col gap-1">
              <h2 className="text-[1.8vw]">Bedrijf</h2>
              {company.map((company) => (
                <div key={company.id}>
                  <p className="opacity-50">{company.cat}</p>
                  <p className="opacity-50">{company.plaats}</p>
                  <p className="opacity-50">{company.employess}</p>
                  <p className="opacity-50">{company.founded}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-[1.8vw]">Tools</h2>
              {tools.map((tools) => (
                <div key={tools.id}>
                  <p className="opacity-50">{tools.point1}</p>
                  <p className="opacity-50">{tools.point2}</p>
                  <p className="opacity-50">{tools.point3}</p>
                  <p className="opacity-50">{tools.point4}</p>
                  <p className="opacity-50">{tools.point5}</p>
                  <p className="opacity-50">{tools.point6}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-[1.8vw]">Omschrijving</h2>
              {omschrijving.map((omschrijving) => (
                <div key={omschrijving.id}>
                  <p className="opacity-50">{omschrijving.discription}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-[1.8vw]">De uitdagingen</h2>
              {uitdagingen.map((uitdagingen) => (
                <div key={uitdagingen.id}>
                  <p className="opacity-50">{uitdagingen.discription}</p>
                </div>
              ))}
            </div>
          </div>

          <Image src={HomePage} alt="Full buurbak home page" />
        </div>

        <div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[1.8vw]">De oplossing</h2>
            {oplossing.map((oplossing) => (
              <div key={oplossing.id}>
                <p className="opacity-50">{oplossing.discription}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buurbak;
