import type { CaseStudy } from "@/types/case";

export const cases: CaseStudy[] = [
  {
    id: 1,
    slug: "buurbak",
    title: "Buurbak",
    description:
      "Een schaalbaar platform voor het huren en verhuren van aanhangers in je buurt.",
    summary:
      "Voor Buurbak ontwikkelde ik samen met mijn team een nieuw platform waarmee mensen op een veilige en eenvoudige manier aanhangers kunnen huren of verhuren. Ik was verantwoordelijk voor het ontwerp, de front-end en de rol van scrum master. We bouwden het systeem volledig opnieuw op in Next.js en Strapi, met een focus op overzicht, eenvoud en schaalbaarheid.",
    themeColor: "#E1E8E1",
    image: "/images/buurbak/cover.png",

    seo: {
      title: "Buurbak – Case Study",
      description:
        "Ontdek hoe ik voor Buurbak een schaalbaar platform ontwierp en ontwikkelde waarmee mensen aanhangers in hun buurt kunnen huren of verhuren. Gebouwd met Next.js, Strapi en een focus op eenvoud, UX en schaalbaarheid.",
      image: "/og/buurbak.png",
      keywords: [
        "Buurbak",
        "Next.js",
        "React",
        "Strapi",
        "UX design",
        "Frontend development",
        "Case study",
      ],
      hiddenH1:
        "Buurbak — case study van Luuk van Dijk (webdeveloper & designer)",
      hiddenIntro:
        "Ik ontwierp en bouwde voor Buurbak een schaalbaar platform met Next.js en een sterke focus op UX, performance en eenvoud.",
    },

    company: [
      {
        id: 1,
        cat: "Deel- en duurzame transportsector",
        plaats: "Utrecht, Nederland",
        employess: "6 werknemers",
        founded: "Opgericht in 2023",
      },
    ],
    tools: [
      {
        id: 1,
        point1: "Figma (Design)",
        point2: "React (Development)",
        point3: "NextJs (Development)",
        point4: "Tailwind (Development)",
        point5: "Zeroheight (Documentatie)",
        point6: "Netlify (Hosting)",
      },
    ],
    techStack: [
      "Figma",
      "React",
      "Next.js",
      "Tailwind",
      "Zeroheight",
      "Netlify",
    ],
    duration: "Februari – Juni 2025 (ongeveer 20 weken)",
    roles: ["Designer", "Frontend Developer", "Scrum Master"],

    blocks: [
      {
        id: "buurbak-1",
        type: "research",
        title: "Onderzoek & concept",
        text: "Er was al een eerste versie van Buurbak, maar die voldeed nog niet aan de gebruikerseisen. De site was niet responsive en de structuur maakte het lastig om informatie terug te vinden of foto’s van aanhangers te bekijken. We zijn begonnen met het maken van wireframes en hebben die vergeleken met de resultaten uit het eerdere onderzoek van de pilot. Daaruit bleek dat vooral mensen boven de vijftig de doelgroep vormen — gebruikers die vaak een eigen aanhanger hebben maar die niet meer gebruiken. Daarom lag de focus op een duidelijke, eenvoudige opzet en een logische flow. We hebben de bestaande stijl van Buurbak behouden, maar vertaald naar een moderne, overzichtelijke layout.",
      },
      {
        id: "buurbak-2",
        type: "design",
        title: "Ontwerp",
        text: "Het ontwerpproces startte in Figma met low-fidelity wireframes die stap voor stap werden uitgewerkt tot high-fidelity schermen en een klikbaar prototype. De kleuren uit het Buurbak-logo vormden de basis, maar we hebben ze op een rustige manier toegepast zodat de site niet te druk oogt. De grootste UX-uitdaging lag in de verhuurflow: het online aanbieden van een aanhanger moest duidelijk blijven, zonder de gebruiker te overweldigen. We hebben regelmatig retrospectives gehouden met de product owners van Buurbak om feedback te verzamelen en het ontwerp verder te verfijnen.",
        image: "/images/buurbak/brandPersonality.png",
        imageAlt: "Buurbak brand personality",
      },
      {
        id: "buurbak-3",
        type: "development",
        title: "Ontwikkeling",
        text: "De site is gebouwd met React, Next.js, Tailwind en wordt gehost op Netlify. Figma is gebruikt voor het design en Zeroheight voor de documentatie. Ik was verantwoordelijk voor de homepagina en de volledige aanbodflow, waar gebruikers aanhangers kunnen huren. Daarnaast hielp ik andere teamleden bij vragen over hun onderdelen, aangezien ik zowel lead developer als scrum master was. De grootste uitdaging lag in schaalbaarheid en prioritering. We wilden de site zo snel mogelijk live krijgen, dus we moesten beslissen welke features essentieel waren voor de pilot en welke later konden worden toegevoegd. Hierdoor leerden we scherp keuzes maken tussen wat belangrijk was voor de klant en wat kon wachten.",
      },
      {
        id: "buurbak-4",
        type: "testing",
        title: "Testen & itereren",
        text: "De site werd handmatig getest door het hele developmentteam en een kleine groep gebruikers. Tijdens het testen kwamen we onder andere problemen tegen met het aanmaken, bewerken en verwijderen van accounts. Die hebben we opgelost door de juiste tools te zoeken en de implementatie aan te passen. Feedback werd verzameld tijdens sprints, geprioriteerd en beoordeeld op relevantie voor het MVP. Tijdens dit proces leerden we hoe belangrijk het is om limieten te stellen — bijvoorbeeld bij het aantal foto’s per aanhanger — en hoe verschillend gedrag kan zijn tussen apparaten en browsers.",
        image: "/images/buurbak/websiteFlow.png",
        imageAlt: "Website flow",
      },
      {
        id: "buurbak-5",
        type: "collaboration",
        title: "Mijn rol & samenwerking",
        text: "Binnen het project was ik designer, frontend developer en scrum master. Ik organiseerde retrospectives, bewaakte de voortgang van het team en zorgde dat iedereen wist wanneer en waar de verschillende scrum-events plaatsvonden. Daarnaast hield ik in de gaten wie voor- of achterliep en hielp ik waar nodig. Ik werkte nauw samen met designers, frontend- en backenddevelopers. Ook introduceerde ik tools die het werkproces verbeterden, zoals Zeroheight voor documentatie en samenwerking tussen design en front-end.",
      },
      {
        id: "buurbak-6",
        type: "result",
        title: "Resultaat",
        text: "De nieuwe pilotversie van de website staat klaar om te draaien. De oprichters zijn nu bezig met het werven van de eerste gebruikers en het inrichten van een klantenservice, zodat alles soepel verloopt bij de lancering. De volledige website is functioneel en klaar om getest te worden in een liveomgeving. Zodra de pilot succesvol verloopt, wordt de site publiek gelanceerd en volgen marketingactiviteiten. BuurBak maakt het verhuren en huren van aanhangers eenvoudiger en veiliger, en verbindt mensen in de buurt via een betrouwbaar platform.",
      },
      {
        id: "buurbak-7",
        type: "reflection",
        title: "Reflectie",
        text: "Dit project liet me zien hoe waardevol goede documentatie is, mits je er vroeg mee begint en het consequent bijhoudt. De juiste tools — zoals Zeroheight — maken dat proces veel toegankelijker voor het hele team. Ik ben het meest trots op hoe goed we als team samenwerkten: iedereen hielp elkaar en we wisten binnen een jaar een compleet platform op te zetten. Een volgende keer zou ik eerder beginnen met tools als Storybook en Zeroheight, en erop letten dat het hele team die consequent gebruikt. Daarnaast heb ik geleerd beter in te schatten waar de meeste tijd in gaat zitten: bij Buurbak hebben we te lang aan het design gewerkt, waardoor de ontwikkelfase krapper werd. Ook besefte ik hoe belangrijk het is om vroeg te kiezen voor een component-library die toekomstbestendig is voor nieuwe features.",
      },
    ],
  },

  {
    id: 2,
    slug: "youngpwr",
    title: "YoungPWR",
    description:
      "Een platform dat jongeren helpt hun eigen onderneming te starten of te laten groeien.",
    summary:
      "Tijdens mijn stage bij YoungPWR heb ik de website geoptimaliseerd en uitgebreid. Ik verbeterde de frontend, voegde nieuwe features toe, richtte het CMS in en zorgde dat hosting en analytics betrouwbaar werkten. Het resultaat is een schaalbaar platform dat jongeren en bedrijven samenbrengt.",
    themeColor: "#F0E7FF",
    image: "/images/youngpwr/cover.png",

    seo: {
      title: "YoungPWR – Case Study",
      description:
        "Lees hoe ik tijdens mijn stage bij YoungPWR de website optimaliseerde, uitbreidde en schaalbaar maakte met Next.js en Strapi. Een platform dat jongeren helpt om hun onderneming te starten of te laten groeien.",
      image: "/og/youngpwr.png",
      keywords: [
        "YoungPWR",
        "Next.js",
        "React",
        "Strapi",
        "Frontend development",
        "CMS",
        "Case study",
      ],
      hiddenH1:
        "YoungPWR — case study van Luuk van Dijk (webdeveloper & designer)",
      hiddenIntro:
        "Tijdens mijn stage optimaliseerde ik de site van YoungPWR: frontend, CMS, hosting en analytics, gericht op schaalbaarheid en gebruiksgemak.",
    },

    company: [
      {
        id: 2,
        cat: "Educatie & ondernemerschap",
        plaats: "Nederland (landelijk actief)",
        employess: "10 medewerkers",
        founded: "Actief sinds enkele jaren",
      },
    ],
    tools: [
      {
        id: 2,
        point1: "React (Development)",
        point2: "NextJs (Development)",
        point3: "Tailwind (Development)",
        point4: "Strapi (CMS)",
        point5: "Zeroheight (Documentatie)",
        point6: "ClickUp (Projectmanagement)",
      },
    ],
    techStack: [
      "React",
      "Next.js",
      "Tailwind",
      "Strapi",
      "Zeroheight",
      "ClickUp",
      "Vercel",
    ],
    duration: "Februari – Juni 2025",
    roles: ["Frontend Developer", "Designer", "Begeleider student-developer"],

    blocks: [
      {
        id: "youngpwr-1",
        type: "research",
        title: "Onderzoek & concept",
        text: "Uit onderzoek bleek dat video’s beter aanslaan bij jongeren dan blogs. Daarom kregen deze een prominentere plek op de site. Workshops waren moeilijk te vinden, dus de navigatie is opnieuw opgebouwd rond drie categorieën: scholieren, zzp’ers en gezondheid. Zo is alles snel vindbaar.",
      },
      {
        id: "youngpwr-2",
        type: "design",
        title: "Ontwerp",
        text: "Het ontwerp is versimpeld en beter gestructureerd. De rustige stijl en duidelijke hiërarchie zorgen dat gebruikers sneller vinden wat ze zoeken. De navigatie en categorie-indeling zijn aangepast op basis van gebruikersgedrag op de oude site.",
        // image: "/images/youngpwr/design.png",
        // imageAlt: "YoungPWR ontwerp",
      },
      {
        id: "youngpwr-3",
        type: "development",
        title: "Ontwikkeling",
        text: "Ik was aanvankelijk de enige developer en begeleid nu een student. Samen met Suzan (oprichtster) en het team bepaalden we prioriteiten. Er was geen duidelijke structuur, dus ik heb een Zeroheight-styleguide en ClickUp-bugtracking opgezet. De site draait op Vercel met een schaalbare Strapi-backend.",
      },
      {
        id: "youngpwr-4",
        type: "testing",
        title: "Testen & itereren",
        text: "De site werd getest door het team en gebruikers. Er kwamen fouten naar voren bij wachtwoord-resets en foutmeldingen, die we hebben opgelost. Feedback werd verzameld in ClickUp, waardoor we gestructureerd konden verbeteren.",
        // image: "/images/youngpwr/testing.png",
        // imageAlt: "YoungPWR testflow",
      },
      {
        id: "youngpwr-5",
        type: "collaboration",
        title: "Mijn rol & samenwerking",
        text: "Ik was verantwoordelijk voor de frontend, het design en het begeleiden van een student-developer. Met ClickUp en Zeroheight hield ik het overzicht en maakte ik samenwerking makkelijk voor niet-technische teamleden.",
      },
      {
        id: "youngpwr-6",
        type: "result",
        title: "Resultaat",
        text: "YoungPWR is live en heeft inmiddels zo’n 1000 geregistreerde gebruikers. De website is stabiel, schaalbaar en eenvoudig te beheren via Strapi. Het interne team werkt nu zelfstandig met ClickUp en de workflow is sterk verbeterd.",
      },
      {
        id: "youngpwr-7",
        type: "reflection",
        title: "Reflectie",
        text: "Dit project leerde me werken met een live productieomgeving. Ik leerde prioriteren, communiceren en structuur aanbrengen. Tools als ClickUp en Zeroheight bleken cruciaal voor overzicht. Het combineerde techniek, UX en teamwork op een niveau dat dicht bij echte bedrijfsvoering ligt.",
      },
    ],
  },

  {
    id: 3,
    slug: "jametanouk",
    title: "JA! met Anouk",
    description:
      "Een persoonlijke website voor een zelfstandig trouwambtenaar in het Gooi.",
    summary:
      "Voor JA! met Anouk ontwierp en bouwde ik de volledige website van een zelfstandig trouwambtenaar. Binnen een dag stond er een coming soon pagina in de definitieve huisstijl, daarna groeide de site uit tot een complete, vindbare website met pakketten, een contactformulier met eigen animatie en alles wat juridisch nodig is.",
    themeColor: "#F6E3DF",
    image: "/images/jametanouk/cover.jpg",
    publishedAt: "2026-09-21",
    updatedAt: "2026-10-05",

    seo: {
      title: "JA! met Anouk – Case Study",
      description:
        "Hoe ik voor een zelfstandig trouwambtenaar een persoonlijke, lokaal vindbare website ontwierp en bouwde met Next.js: van coming soon pagina in één dag tot livegang op jametanouk.nl.",
      image: "/og/jametanouk.jpg",
      keywords: [
        "JA! met Anouk",
        "trouwambtenaar website",
        "Next.js",
        "Resend",
        "Lokale SEO",
        "Webdesign",
        "Case study",
      ],
      hiddenH1:
        "JA! met Anouk: case study van Luuk van Dijk (webdeveloper & designer)",
      hiddenIntro:
        "Ik ontwierp en bouwde de website van trouwambtenaar JA! met Anouk, met een persoonlijke uitstraling, een contactformulier dat ja zegt en een sterke focus op lokale vindbaarheid en privacy.",
    },

    company: [
      {
        id: 3,
        cat: "Trouwambtenaar & ceremoniespreker",
        plaats: "Het Gooi, Nederland",
        employess: "Zelfstandig ondernemer",
        founded: "Online sinds 2026",
      },
    ],
    tools: [
      {
        id: 3,
        point1: "NextJs (Development)",
        point2: "Resend (E-mail)",
        point3: "Cloudflare Turnstile (Spambeveiliging)",
        point4: "Vitest (Testen)",
        point5: "Google Analytics (Statistieken)",
        point6: "Vercel (Hosting)",
      },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Resend",
      "Cloudflare Turnstile",
      "Vitest",
      "Vercel",
    ],
    duration: "Juli – September 2026",
    roles: ["Designer", "Full-stack Developer"],

    blocks: [
      {
        id: "jametanouk-1",
        type: "research",
        title: "Onderzoek & concept",
        text: "Anouk startte als zelfstandig trouwambtenaar in het Gooi. Haar werk draait om vertrouwen: stellen kiezen iemand die hun verhaal mag vertellen op de belangrijkste dag van hun leven. Een standaard template-site zou dat nooit overbrengen. Tegelijk wilde ze meteen online zichtbaar zijn, terwijl de teksten, pakketten en juridische zaken nog in beweging waren. Daarom koos ik voor twee stappen: eerst binnen een dag een coming soon pagina in de definitieve huisstijl, zodat het domein live stond en Anouk het al kon delen via WhatsApp en Instagram. Daarna de volledige site, gebouwd rond haar werkwijze en drie duidelijke pakketten.",
      },
      {
        id: "jametanouk-2",
        type: "design",
        title: "Ontwerp",
        text: "De stijl moest warm en persoonlijk voelen, niet zakelijk. Ik koos een donkere espresso-achtergrond met een roze accent, het serif-lettertype Fraunces met schuingedrukte accenten en Jost voor de kleine labels. Rustige scroll-animaties laten de inhoud zacht binnenkomen. De homepage volgt de vragen die een stel heeft: wie is Anouk, hoe werkt ze, welk pakket past bij ons en hoe nemen we contact op. Elk pakket linkt direct naar het contactformulier, met dat pakket al ingevuld.",
        image: "/images/jametanouk/pakketten.jpg",
        imageAlt: "De drie pakketten van JA! met Anouk op desktop",
      },
      {
        id: "jametanouk-3",
        type: "development",
        title: "Ontwikkeling",
        text: "De site is gebouwd met Next.js en TypeScript en draait op Vercel. Het contactformulier verstuurt via een server action en Resend een eigen HTML-mail in de huisstijl. Bij versturen tekenen twee trouwringen zich in elkaar, met de bevestiging “Het is een JA!”. Het formulier is beschermd met Cloudflare Turnstile, een honeypot en rate limiting, en afgedekt met tests in Vitest. Voor vindbaarheid voegde ik structured data toe (LocalBusiness en Person, gericht op Bussum, Naarden, Hilversum en de rest van het Gooi), een sitemap, een llms.txt met veelgestelde vragen voor AI-zoekmachines en een eigen OG-afbeelding. Google Analytics laadt pas na toestemming, via een cookiebanner met de vraag “Ik zeg JA! tegen cookies?”.",
      },
      {
        id: "jametanouk-4",
        type: "testing",
        title: "Testen & itereren",
        text: "Elke wijziging controleerde ik op desktop en mobiel, en voor de livegang deed ik een Lighthouse-ronde: 100 voor toegankelijkheid, best practices en SEO, en 99 voor performance op desktop. Tijdens het testen kwamen kleine dingen boven die echte aanvragen hadden kunnen kosten. Een WhatsApp-preview liet geen afbeelding zien omdat de foto te zwaar was. Ankerlinks in het menu sprongen niet naar hun sectie. En bij bezoekers met een adblocker bleef de verstuurknop uitgeschakeld, omdat de spamcheck nooit laadde. Nu komt de knop na een paar seconden alsnog vrij, zodat er geen aanvraag verloren gaat.",
        image: "/images/jametanouk/mobiel.jpg",
        imageAlt: "JA! met Anouk op mobiel: homepage, werkwijze en contact",
      },
      {
        id: "jametanouk-5",
        type: "collaboration",
        title: "Mijn rol & samenwerking",
        text: "Ik deed het project alleen: ontwerp, development, hosting en de juridische pagina’s. Anouk is niet technisch, dus feedback kwam binnen via Word-documenten en WhatsApp-berichten. Die verwerkte ik in rondes, van ik-vorm in alle teksten tot het consequent schrijven van de merknaam “JA!”. Ook stelde ik een privacyverklaring en algemene voorwaarden op in haar eigen toon, en maakte ik een factuursjabloon in dezelfde huisstijl.",
      },
      {
        id: "jametanouk-6",
        type: "result",
        title: "Resultaat",
        text: "JA! met Anouk staat live op jametanouk.nl. De site laat zien wie Anouk is en hoe ze werkt, stellen kunnen direct een kennismaking aanvragen en aanvragen komen netjes binnen in haar mailbox. Dankzij de structured data en de lokale focus is de site klaar om gevonden te worden door stellen in het Gooi, zowel via Google als via AI-zoekmachines.",
      },
      {
        id: "jametanouk-7",
        type: "reflection",
        title: "Reflectie",
        text: "Dit project liet me zien hoe waardevol het is om iets kleins vroeg live te zetten. De coming soon pagina gaf Anouk direct een plek online, terwijl de rest rustig kon groeien. Ik leerde ook dat een klant niet technisch hoeft te zijn: Word-documenten en WhatsApp-berichten zijn prima input, zolang ik elke ronde zelf controleer. En vooral dat kleine details bij een klein bedrijf het verschil maken. Een preview die niet laadt of een knop die niet werkt kost bij een grote site een paar procent, bij een zelfstandige ondernemer kan het een complete bruiloft zijn.",
      },
    ],
  },
];
