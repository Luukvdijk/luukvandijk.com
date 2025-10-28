import { siteData } from "@/data/site";
import Image from "next/image";

const Footer = () => {
  const { company } = siteData;
  const { founder } = company;

  return (
    <footer
      className="w-full h-fit flex flex-col-reverse sm:flex-row justify-around items-center gap-8 sm:gap-0 px-8 py-10 text-white border-t border-white/10"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Logo */}
      <div
        className="relative h-[15vh] w-auto"
        itemProp="logo"
        itemScope
        itemType="https://schema.org/ImageObject"
      >
        <Image
          src={company.logo}
          alt={`${company.name} logo`}
          fill
          className="object-contain"
        />
        <meta itemProp="url" content={company.logo} />
        <meta itemProp="contentUrl" content={company.logo} />
      </div>

      {/* Contact Info */}
      <address
        className="flex flex-col items-center not-italic text-center"
        itemScope
        itemType="https://schema.org/Person"
        itemProp="founder"
      >
        <p className="opacity-50 text-[3vw] sm:text-[2.5vw]">Contact</p>

        <p className="text-[5vw] sm:text-[3vw]">
          <a
            href={`mailto:${company.email}`}
            itemProp="email"
            className="hover:underline"
          >
            {company.email}
          </a>
        </p>

        <p className="opacity-50 text-[2.5vw] sm:text-[1vw]">
          KVK: {company.kvk}
        </p>

        {/* LinkedIn */}
        <a
          href={founder.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[4vw] sm:text-[1.5vw] mt-3 opacity-80 hover:opacity-100 transition"
          itemProp="sameAs"
        >
          LinkedIn
        </a>

        {/* Hidden metadata to connect to JSON-LD */}
        <meta itemProp="name" content={company.name} />
        <meta itemProp="url" content={company.url} />
        <meta itemProp="jobTitle" content={founder.title} />
        <meta itemProp="nationality" content={founder.nationality} />
      </address>

      {/* Copyright */}
      <p className="text-[2.5vw] sm:text-[1vw] opacity-50 text-center sm:absolute sm:bottom-4 sm:right-8">
        © {new Date().getFullYear()} {founder.name}
      </p>
    </footer>
  );
};

export default Footer;
