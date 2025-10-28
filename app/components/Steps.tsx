import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Steps = () => {
  const steps = [
    {
      id: 1,
      title: "Design",
      discrpition:
        "Webdesign is het creëren van websites met een focus op gebruiksvriendelijkheid, uitstraling en functionaliteit. Het omvat visuele elementen zoals kleur, typografie en afbeeldingen, gecombineerd met een logische structuur en navigatie. Goed webdesign is responsief, wat betekent dat de site goed werkt op verschillende apparaten. Dit zorgt ervoor dat gebruikers snel en eenvoudig vinden wat ze zoeken, terwijl de stijl en boodschap van het merk consistent blijven.",
    },
    {
      id: 2,
      title: "Development",
      discrpition:
        "Webdevelopment is het bouwen en technisch realiseren van websites en webapplicaties. Het omvat het schrijven van code voor de front-end (gebruikersinterface) en back-end (serverkant) om functionaliteiten soepel te laten werken. Een webdeveloper zorgt ervoor dat websites snel, veilig en toegankelijk zijn op verschillende apparaten. Dit proces maakt gebruik van programmeertalen en frameworks om ideeën om te zetten naar werkende digitale producten. Webdevelopment vormt zo de technische basis die websites functioneel en betrouwbaar maakt.",
    },
    {
      id: 3,
      title: "Launch",
      discrpition:
        "Het lanceren van een website is het proces van het live zetten van een voltooide website zodat deze voor het publiek toegankelijk is. Dit omvat het controleren van alle functionaliteiten, het testen op verschillende apparaten en browsers, en het optimaliseren van laadtijden en veiligheid. Daarnaast wordt de website op een domein gezet en verbonden met een hostingserver. Na de lancering worden eventuele laatste aanpassingen en updates uitgevoerd. Zo zorgt een succesvolle lancering ervoor dat de site goed functioneert en klaar is voor bezoekers.",
    },
  ];

  return (
    <div className="w-full h-dvh flex flex-row flex-wrap justify-between items-center px-8">
      <h2 className="text-[8vw] sm:text-[4vw] flex-1 min-w-80 max-w-full">
        Deze stappen gaan we doorlopen om jouw website te maken
      </h2>
      <div className="flex-1 min-w-80 max-w-full">
        <Accordion
          type="single"
          className="w-full"
          defaultValue={steps[0].title}
        >
          {steps.map((steps) => {
            return (
              <AccordionItem key={steps.id} value={steps.title}>
                <AccordionTrigger>
                  <h3 className="text-[5vw] sm:text-[1.5vw]">{steps.title}</h3>
                </AccordionTrigger>
                <AccordionContent>{steps.discrpition}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default Steps;
