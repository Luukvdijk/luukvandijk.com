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
  const base = company.url.endsWith("/") ? company.url : company.url + "/";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${base}#website`,
        url: base,
        name: company.name,
        inLanguage: "nl-NL",
        publisher: { "@id": `${base}#organization` },
        author: { "@id": `${base}#person` }, // ensures Person is surfaced
      },
      {
        "@type": "Organization",
        "@id": `${base}#organization`,
        name: company.name,
        legalName: company.legalName,
        url: base,
        logo: {
          "@type": "ImageObject",
          "@id": `${base}#logo`,
          url: `${base}images/logo.svg`, // absolute
          contentUrl: `${base}images/logo.svg`, // absolute
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
        founder: { "@id": `${base}#person` },
      },
      {
        "@type": "Person",
        "@id": `${base}#person`,
        name: siteData.company.founder.name,
        jobTitle: siteData.company.founder.title,
        nationality: siteData.company.founder.nationality,
        email: company.email,
        url: base,
        sameAs: [siteData.company.founder.linkedIn],
        worksFor: { "@id": `${base}#organization` },
      },
    ],
  };
}
