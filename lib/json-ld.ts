export function buildArticleJsonLd({
  siteUrl, // e.g. process.env.NEXT_PUBLIC_SITE_URL
  pathname, // e.g. `/case-studies/buurbak`
  title,
  description,
  image, // absolute or relative
  authorName = "Luuk van Dijk",
  datePublished, // optional ISO string
  dateModified, // optional ISO string
}: {
  siteUrl: string;
  pathname: string;
  title: string;
  description: string;
  image?: string;
  authorName?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const url = new URL(pathname, siteUrl).toString();
  const img = image ? new URL(image, siteUrl).toString() : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: img ? [img] : undefined,
    author: [{ "@type": "Person", name: authorName }],
    mainEntityOfPage: url,
    datePublished,
    dateModified,
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
