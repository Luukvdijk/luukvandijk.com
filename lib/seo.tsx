import type { Metadata } from "next";

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string[] | string;
  pathname?: string;
  image?: string | URL;
  type?: "website" | "article";
  noIndex?: boolean;
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://luukvandijk.com";

export function constructMetadata({
  title,
  description,
  keywords,
  pathname,
  image,
  type = "website",
  noIndex = false,
}: SeoProps = {}): Metadata {
  const url = new URL(SITE_URL);

  const img = image ?? "/og/default.png";

  const keywordsArray = Array.isArray(keywords)
    ? keywords
    : typeof keywords === "string"
      ? keywords
          .split(",")
          .map((k) => k.trim())
          .filter(Boolean)
      : undefined;

  return {
    metadataBase: url,
    title: {
      default: "Luuk van Dijk",
      template: "%s | Luuk van Dijk",
    },
    description,
    keywords: keywordsArray,
    alternates: {
      canonical: pathname ? new URL(pathname, url).toString() : undefined,
    },
    openGraph: {
      type,
      url: pathname ? new URL(pathname, url).toString() : undefined,
      title: title ?? "Luuk van Dijk",
      description,
      images: [
        typeof img === "string" ? { url: img } : { url: img.toString() },
      ],
      siteName: "Luuk van Dijk",
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? "Luuk van Dijk",
      description,
      images: [typeof img === "string" ? img : img.toString()],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    authors: [{ name: "Luuk van Dijk" }],
  };
}
