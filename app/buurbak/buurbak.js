export const company = [
  {
    id: 1,
    cat: "Deel- en duurzame transportsector",
    plaats: "Utrecht, Nederland",
    employess: "6 werknemers",
    founded: "Opgericht in 2023",
  },
];

export const tools = [
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

export const omschrijving = [
  {
    id: 1,
    discription:
      "Buurbak bestond nog niet online — ik kreeg de taak om een platform te ontwikkelen waarmee mensen aanhangers kunnen huren en verhuren. De uitdaging was om vanaf nul een schaalbaar systeem te bouwen met een moderne uitstraling en een sterke UX.",
  },
];

export const uitdagingen = [
  {
    id: 1,
    discription:
      "Een van de uitdagingen binnen BuurBak was de noodzaak van schaalbaarheid. Omdat het nog een startup was, hoefde alles niet meteen groots en uitgebreid opgezet te worden, maar er moest wel ruimte zijn voor toekomstige uitbreidingen en extra capaciteit. Daarnaast was het een uitdaging om de verschillende functies binnen BuurBak helder te structureren, zoals het verhuren en huren van een aanhanger, en het onderscheid tussen de rol van huurder en verhuurder van een aanhanger.",
  },
];

export const oplossing = [
  {
    id: 1,
    discription:
      "Anja en Michiel, de oprichters van BuurBak, zijn gestart met hun studentenstartup bij UtrechtINC. Via dit netwerk kwamen ze in contact met mijn opleiding en raakten we in gesprek. Ik heb hen weten te overtuigen om samen aan hun website te werken. Tijdens dit gesprek ontdekte ik dat BuurBak een ontwerp en website nodig had voor een handelsplatform voor het verhuren van aanhangers tussen particulieren.",
  },
];

export const buurbakCase = {
  title: "Buurbak",
  description:
    "Een schaalbaar platform voor het huren en verhuren van aanhangers in je buurt.",
  summary:
    "Voor Buurbak ontwikkelde ik samen met mijn team een nieuw platform waarmee mensen op een veilige en eenvoudige manier aanhangers kunnen huren of verhuren. Ik was verantwoordelijk voor het ontwerp, de front-end en de rol van scrum master. We bouwden het systeem volledig opnieuw op in Next.js en Strapi, met een focus op overzicht, eenvoud en schaalbaarheid.",

  company: company,
  tools: tools,
  omschrijving: omschrijving,
  uitdagingen: uitdagingen,
  oplossing: oplossing,

  techStack: ["Figma", "React", "Next.js", "Tailwind", "Zeroheight", "Netlify"],
  duration: "Februari – Juni 2025 (ongeveer 20 weken)",
  roles: ["Designer", "Frontend Developer", "Scrum Master"],

  sections: [
    {
      title: "Onderzoek & concept",
      text: `Er was al een eerste versie van Buurbak, maar die voldeed nog niet aan de gebruikerseisen. De site was niet responsive en de structuur maakte het lastig om informatie terug te vinden of foto’s van aanhangers te bekijken. We zijn begonnen met het maken van wireframes en hebben die vergeleken met de resultaten uit het eerdere onderzoek van de pilot. Daaruit bleek dat vooral mensen boven de vijftig de doelgroep vormen — gebruikers die vaak een eigen aanhanger hebben maar die niet meer gebruiken. Daarom lag de focus op een duidelijke, eenvoudige opzet en een logische flow. We hebben de bestaande stijl van Buurbak behouden, maar vertaald naar een moderne, overzichtelijke layout.`,
    },
    {
      title: "Ontwerp",
      text: `Het ontwerpproces startte in Figma met low-fidelity wireframes die stap voor stap werden uitgewerkt tot high-fidelity schermen en een klikbaar prototype. De kleuren uit het Buurbak-logo vormden de basis, maar we hebben ze op een rustige manier toegepast zodat de site niet te druk oogt. De grootste UX-uitdaging lag in de verhuurflow: het online aanbieden van een aanhanger moest duidelijk blijven, zonder de gebruiker te overweldigen. We hebben regelmatig retrospectives gehouden met de product owners van Buurbak om feedback te verzamelen en het ontwerp verder te verfijnen.`,
    },
    {
      title: "Ontwikkeling",
      text: `De site is gebouwd met React, Next.js, Tailwind en wordt gehost op Netlify. Figma is gebruikt voor het design en Zeroheight voor de documentatie. Ik was verantwoordelijk voor de homepagina en de volledige aanbodflow, waar gebruikers aanhangers kunnen huren. Daarnaast hielp ik andere teamleden bij vragen over hun onderdelen, aangezien ik zowel lead developer als scrum master was. De grootste uitdaging lag in schaalbaarheid en prioritering. We wilden de site zo snel mogelijk live krijgen, dus we moesten beslissen welke features essentieel waren voor de pilot en welke later konden worden toegevoegd. Hierdoor leerden we scherp keuzes maken tussen wat belangrijk was voor de klant en wat kon wachten.`,
    },
    {
      title: "Testen & itereren",
      text: `De site werd handmatig getest door het hele developmentteam en een kleine groep gebruikers. Tijdens het testen kwamen we onder andere problemen tegen met het aanmaken, bewerken en verwijderen van accounts. Die hebben we opgelost door de juiste tools te zoeken en de implementatie aan te passen. Feedback werd verzameld tijdens sprints, geprioriteerd en beoordeeld op relevantie voor het MVP. Tijdens dit proces leerden we hoe belangrijk het is om limieten te stellen — bijvoorbeeld bij het aantal foto’s per aanhanger — en hoe verschillend gedrag kan zijn tussen apparaten en browsers.`,
    },
    {
      title: "Mijn rol & samenwerking",
      text: `Binnen het project was ik designer, frontend developer en scrum master. Ik organiseerde retrospectives, bewaakte de voortgang van het team en zorgde dat iedereen wist wanneer en waar de verschillende scrum-events plaatsvonden. Daarnaast hield ik in de gaten wie voor- of achterliep en hielp ik waar nodig. Ik werkte nauw samen met designers, frontend- en backenddevelopers. Ook introduceerde ik tools die het werkproces verbeterden, zoals Zeroheight voor documentatie en samenwerking tussen design en front-end.`,
    },
    {
      title: "Resultaat",
      text: `De nieuwe pilotversie van de website staat klaar om te draaien. De oprichters zijn nu bezig met het werven van de eerste gebruikers en het inrichten van een klantenservice, zodat alles soepel verloopt bij de lancering. De volledige website is functioneel en klaar om getest te worden in een liveomgeving. Zodra de pilot succesvol verloopt, wordt de site publiek gelanceerd en volgen marketingactiviteiten. BuurBak maakt het verhuren en huren van aanhangers eenvoudiger en veiliger, en verbindt mensen in de buurt via een betrouwbaar platform.`,
    },
    {
      title: "Reflectie",
      text: `Dit project liet me zien hoe waardevol goede documentatie is, mits je er vroeg mee begint en het consequent bijhoudt. De juiste tools — zoals Zeroheight — maken dat proces veel toegankelijker voor het hele team. Ik ben het meest trots op hoe goed we als team samenwerkten: iedereen hielp elkaar en we wisten binnen een jaar een compleet platform op te zetten. Een volgende keer zou ik eerder beginnen met tools als Storybook en Zeroheight, en erop letten dat het hele team die consequent gebruikt. Daarnaast heb ik geleerd beter in te schatten waar de meeste tijd in gaat zitten: bij Buurbak hebben we te lang aan het design gewerkt, waardoor de ontwikkelfase krapper werd. Ook besefte ik hoe belangrijk het is om vroeg te kiezen voor een component-library die toekomstbestendig is voor nieuwe features.`,
    },
  ],
};
