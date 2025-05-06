import type { Metadata } from "next";

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string;
};

export function constructMetadata({
  title,
  description,
  keywords,
}: SeoProps): Metadata {
  return {
    title: title ? `${title} | Luuk van Dijk` : "Luuk van Dijk",
    description,
    keywords: keywords,
  };
}
