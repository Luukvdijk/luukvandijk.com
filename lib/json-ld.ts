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

export function buildWebsiteJsonLd({
  siteUrl,
  name = "Luuk van Dijk",
  description = "Frontend developer & designer",
  logo = "/images/logoDark.svg",
}: {
  siteUrl: string;
  name?: string;
  description?: string;
  logo?: string;
}) {
  const absoluteLogo = new URL(logo, siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    name,
    description,
    inLanguage: "nl",
    publisher: {
      "@type": "Organization",
      name,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: absoluteLogo,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildOrganizationJsonLd({
  siteUrl,
  name = "Luukvandijk",
  description = "Web developer & designer in Nederland. Ik ontwerp en bouw schaalbare websites en webapps met Next.js, React en een strakke UX.",
  logo = "/images/logoDark.svg",
  email = "info@luukvandijk.com",
  countryCode = "NL", // ISO 3166-1 alpha-2
  countryName = "Nederland",
  sameAs = ["https://www.linkedin.com/in/luuk-van-dijk-web-development"],
}: {
  siteUrl: string;
  name?: string;
  description?: string;
  logo?: string; // relative or absolute
  email?: string;
  countryCode?: string;
  countryName?: string;
  sameAs?: string[];
}) {
  const absoluteLogo = new URL(logo, siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: siteUrl,
    name,
    description,
    inLanguage: "nl",
    logo: {
      "@type": "ImageObject",
      url: absoluteLogo,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: `mailto:${email}`,
        availableLanguage: ["nl", "en"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: countryCode, // e.g. NL
      name: countryName, // human-friendly label
    },
    sameAs,
  };
}
