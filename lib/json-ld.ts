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

export function buildLinkedGraphJsonLd() {
  const base = "https://www.luukvandijk.com";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${base}#website`,
        url: base,
        name: "Luuk van Dijk – Web Developer & Designer",
        inLanguage: "nl-NL",
        publisher: { "@id": `${base}#organization` },
        author: { "@id": `${base}#person` },
      },
      {
        "@type": "Organization",
        "@id": `${base}#organization`,
        name: "Luuk van Dijk",
        legalName: "Luuk van Dijk",
        url: base,
        logo: {
          "@type": "ImageObject",
          "@id": `${base}#logo`,
          url: `${base}/images/logo.svg`,
          contentUrl: `${base}/images/logo.svg`,
        },
        email: "info@luukvandijk.com",
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "info@luukvandijk.com",
            contactType: "customer support",
            availableLanguage: ["Dutch", "English"],
          },
        ],
        identifier: {
          "@type": "PropertyValue",
          propertyID: "KVK",
          value: "95680756",
        },
        founder: { "@id": `${base}#person` },
      },
      {
        "@type": "Person",
        "@id": `${base}#person`,
        name: "Luuk van Dijk",
        jobTitle: "Web Developer & Designer",
        nationality: "Dutch",
        email: "info@luukvandijk.com",
        url: base,
        sameAs: ["https://www.linkedin.com/in/luuk-van-dijk-web-development/"],
        worksFor: { "@id": `${base}#organization` },
      },
    ],
  };
}
