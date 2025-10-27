// app/case-studies/[case]/page.tsx
import CaseStudyLayout from "@/app/components/CaseStudyLayout";
import JsonLd from "@/app/components/JsonLd";
import { getAllCases, getCase } from "@/lib/cases";
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/json-ld";
import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ case: string }> };

export async function generateStaticParams() {
  return getAllCases().map((c) => ({ case: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { case: slug } = await params;
  const data = getCase(slug);

  if (!data) {
    return constructMetadata({
      title: "Niet gevonden",
      noIndex: true,
      pathname: `/case-studies/${slug}`,
    });
  }

  return constructMetadata({
    title: data.seo?.title ?? `${data.title} – Case Study`,
    description: data.seo?.description ?? data.summary,
    image: data.seo?.image ?? data.image,
    keywords: data.seo?.keywords,
    pathname: `/case-studies/${slug}`,
    type: "article",
    noIndex: data.draft === true,
  });
}

export default async function CasePage({ params }: PageProps) {
  const { case: slug } = await params;
  const data = getCase(slug);
  if (!data) return notFound();

  const site =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.luukvandijk.com";
  const jsonLd = buildArticleJsonLd({
    siteUrl: site,
    pathname: `/case-studies/${slug}`,
    title: data.seo?.title ?? data.title,
    description: data.seo?.description ?? data.summary,
    image: data.seo?.image ?? data.image,
  });

  const breadcrumbsLd = buildBreadcrumbJsonLd(site, [
    { name: "Home", path: "/" },
    { name: "Case studies", path: "/case-studies" },
    { name: data.title, path: `/case-studies/${slug}` },
  ]);

  const renderTitle =
    slug === "buurbak"
      ? () => (
          <>
            Hoe ik <span className="text-[#398D89]">Buur</span>
            <span className="text-[#EE7B46]">Bak</span> heb gecreëerd en opgezet
          </>
        )
      : undefined;

  return (
    <>
      <JsonLd id="ld-breadcrumbs" data={breadcrumbsLd} />
      <JsonLd id="ld-article" data={jsonLd} />
      <CaseStudyLayout data={data} renderTitle={renderTitle} />
    </>
  );
}
