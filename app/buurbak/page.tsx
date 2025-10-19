import Image from "next/image";
import BrandPersonality from "../assets/BrandPersonality.png";
import HomePage from "../assets/BuurbakFullHomePage.png";
import WebsiteFlow from "../assets/websiteFlow.png";
import { constructMetadata } from "../lib/metadata";
import {
  buurbakCase,
  company,
  omschrijving,
  tools,
  uitdagingen,
} from "./buurbak";

export const metadata = constructMetadata({
  title: "Buurbak project | Webdevelopment & UX voor duurzame aanhangers",
  description:
    "Voor Buurbak ontwikkelde ik mee aan een platform waar buurtgenoten eenvoudig aanhangers kunnen huren. Ik was verantwoordelijk voor frontend development, UX, testen en de thematische herstructurering.",
  keywords:
    "Buurbak, webdevelopment, frontend, UX design, duurzame mobiliteit, aanhanger huren, case study, projectervaring, Luuk van Dijk, Next.js, app router",
});

const Buurbak = () => {
  return (
    <div className="w-full h-fit min-h-[100dvh] flex flex-col gap-10 items-center pt-24 px-8">
      <h1 className="text-[8vw] sm:text-[2.5vw]">
        Hoe ik <span className="text-[#398D89]">Buur</span>
        <span className="text-[#EE7B46]">Bak</span> heb gecreërd en opgezet
      </h1>
      <div className="w-full flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0">
          <div className="flex flex-col gap-8 flex-1 md:w-1/3 md:flex-none">
            <div className="flex flex-col gap-1">
              <h2 className="text-[5vw] sm:text-[1.8vw]">Bedrijf</h2>
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
              <h2 className="text-[5vw] sm:text-[1.8vw]">Tools</h2>
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
              <h2 className="text-[5vw] sm:text-[1.8vw]">Omschrijving</h2>
              {omschrijving.map((omschrijving) => (
                <div key={omschrijving.id}>
                  <p className="opacity-50">{omschrijving.discription}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-[5vw] sm:text-[1.8vw]">De uitdagingen</h2>
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
            <h2 className="text-[5vw] sm:text-[1.8vw]">Onderzoek & concept</h2>
            {(() => {
              const section = buurbakCase.sections.find(
                (s: any) => s.title === "Onderzoek & concept"
              );
              return section ? (
                <p className="opacity-50">{section.text}</p>
              ) : null;
            })()}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-1">
            <h2 className="text-[5vw] sm:text-[1.8vw]">Ontwerp</h2>
            {(() => {
              const section = buurbakCase.sections.find(
                (s: any) => s.title === "Ontwerp"
              );
              return section ? (
                <p className="opacity-50">{section.text}</p>
              ) : null;
            })()}
          </div>
          <Image
            className=" md:w-[40vw]"
            src={BrandPersonality}
            alt="Full buurbak home page"
          />
        </div>

        <div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[5vw] sm:text-[1.8vw]">Ontwikkeling</h2>
            {(() => {
              const section = buurbakCase.sections.find(
                (s: any) => s.title === "Ontwikkeling"
              );
              return section ? (
                <p className="opacity-50">{section.text}</p>
              ) : null;
            })()}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-1">
            <h2 className="text-[5vw] sm:text-[1.8vw]">Testen & itereren</h2>
            {(() => {
              const section = buurbakCase.sections.find(
                (s: any) => s.title === "Testen & itereren"
              );
              return section ? (
                <p className="opacity-50">{section.text}</p>
              ) : null;
            })()}
          </div>
          <Image
            className=" md:w-[30vw]"
            src={WebsiteFlow}
            alt="Full buurbak home page"
          />
        </div>

        <div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[5vw] sm:text-[1.8vw]">
              Mijn rol & samenwerking
            </h2>
            {(() => {
              const section = buurbakCase.sections.find(
                (s: any) => s.title === "Mijn rol & samenwerking"
              );
              return section ? (
                <p className="opacity-50">{section.text}</p>
              ) : null;
            })()}
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[5vw] sm:text-[1.8vw]">Resultaat</h2>
            {(() => {
              const section = buurbakCase.sections.find(
                (s: any) => s.title === "Resultaat"
              );
              return section ? (
                <p className="opacity-50">{section.text}</p>
              ) : null;
            })()}
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[5vw] sm:text-[1.8vw]">Reflectie</h2>
            {(() => {
              const section = buurbakCase.sections.find(
                (s: any) => s.title === "Reflectie"
              );
              return section ? (
                <p className="opacity-50">{section.text}</p>
              ) : null;
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buurbak;
