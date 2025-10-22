// app/case-studies/[case]/page.tsx
import CaseStudyLayout from "@/app/components/CaseStudyLayout";
import { getAllCases, getCase } from "@/lib/cases";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ case: string }> };

export async function generateStaticParams() {
  return getAllCases().map((c) => ({ case: c.slug }));
}

export default async function CasePage({ params }: PageProps) {
  const { case: slug } = await params;
  const data = getCase(slug);
  if (!data) return notFound();

  const renderTitle =
    slug === "buurbak"
      ? () => (
          <>
            Hoe ik <span className="text-[#398D89]">Buur</span>
            <span className="text-[#EE7B46]">Bak</span> heb gecreëerd en opgezet
          </>
        )
      : undefined;

  return <CaseStudyLayout data={data} renderTitle={renderTitle} />;
}
