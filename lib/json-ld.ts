export function buildProjectJsonLd({
  siteUrl, // e.g. https://www.luukvandijk.com
  pathname, // e.g. /case-studies/buurbak
  title,
  description,
  image, // relative or absolute
  datePublished, // ISO string (optional)
  dateModified, // ISO string (optional)
  keywords, // optional array of tags
}: {
  siteUrl: string;
  pathname: string;
  title: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  keywords?: string[];
}) {
  const url = new URL(pathname, siteUrl).toString();
  const img = image ? new URL(image, siteUrl).toString() : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Project",
    "@id": `${url}#project`,
    url,
    name: title,
    headline: title,
    description,
    inLanguage: "nl-NL",
    image: img ? [img] : undefined,
    // Explicit relationships to your global graph:
    author: { "@id": `${siteUrl}#person` },
    creator: { "@id": `${siteUrl}#person` },
    publisher: { "@id": `${siteUrl}#organization` },
    isPartOf: { "@id": `${siteUrl}#website` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished,
    dateModified: dateModified ?? datePublished,
    keywords,
  };
}

export function buildBreadcrumbJsonLd(
  siteUrl: string,
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: new URL(it.path, siteUrl).toString(),
    })),
  };
}

import { siteData } from "@/data/site";

export function buildLinkedGraphJsonLd() {
  const { company } = siteData;
  const { founder } = company;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${company.url}#website`,
        url: company.url,
        name: company.name,
        inLanguage: "nl-NL",
        publisher: { "@id": `${company.url}#organization` },
        author: { "@id": `${company.url}#person` },
      },
      {
        "@type": "Organization",
        "@id": `${company.url}#organization`,
        name: company.name,
        legalName: company.legalName,
        url: company.url,
        logo: {
          "@type": "ImageObject",
          "@id": `${company.url}#logo`,
          url: company.logo,
          contentUrl: company.logo,
        },
        email: company.email,
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: company.email,
            contactType: "customer support",
            availableLanguage: ["Dutch", "English"],
          },
        ],
        identifier: {
          "@type": "PropertyValue",
          propertyID: "KVK",
          value: company.kvk,
        },
        founder: { "@id": `${company.url}#person` },
      },
      {
        "@type": "Person",
        "@id": `${company.url}#person`,
        name: founder.name,
        jobTitle: founder.title,
        nationality: founder.nationality,
        email: company.email,
        url: company.url,
        sameAs: [founder.linkedIn],
        worksFor: { "@id": `${company.url}#organization` },
      },
    ],
  };
}
