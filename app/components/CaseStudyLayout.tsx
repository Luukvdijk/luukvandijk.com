import type { CaseBlock, CaseStudy, CompanyInfo, ToolSet } from "@/types/case";
import clsx from "clsx";
import Image from "next/image";

type Props = {
  data: CaseStudy;
  className?: string;
  renderTitle?: (data: CaseStudy) => React.ReactNode;
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[clamp(20px,5vw,1.8vw)] font-semibold">{children}</h2>
  );
}

function Text({ children }: { children: React.ReactNode }) {
  return <p className="opacity-70 leading-relaxed">{children}</p>;
}

function CompanyBlock({ company }: { company: CompanyInfo[] }) {
  if (!company?.length) return null;
  return (
    <div className="flex flex-col gap-1">
      <H2>Bedrijf</H2>
      {company.map((c) => (
        <div key={c.id}>
          <p className="opacity-50">{c.cat}</p>
          <p className="opacity-50">{c.plaats}</p>
          <p className="opacity-50">{c.employess}</p>
          <p className="opacity-50">{c.founded}</p>
        </div>
      ))}
    </div>
  );
}

function ToolsBlock({ tools }: { tools: ToolSet[] }) {
  if (!tools?.length) return null;
  return (
    <div className="flex flex-col gap-1">
      <H2>Tools</H2>
      {tools.map((t) => (
        <div key={t.id}>
          {[t.point1, t.point2, t.point3, t.point4, t.point5, t.point6]
            .filter(Boolean)
            .map((p, i) => (
              <p key={i} className="opacity-50">
                {p}
              </p>
            ))}
        </div>
      ))}
    </div>
  );
}

function AboutList({
  title,
  items,
}: {
  title: string;
  items: { id: number; discription: string }[];
}) {
  if (!items?.length) return null;
  return (
    <div className="flex flex-col gap-1">
      <H2>{title}</H2>
      {items.map((it) => (
        <p key={it.id} className="opacity-50">
          {it.discription}
        </p>
      ))}
    </div>
  );
}

function Block({ block, title }: { block: CaseBlock; title: string }) {
  // Shared text-first section
  const TextSection = (
    <>
      <H2>{block.title ?? ""}</H2>
      {"text" in block && <Text>{block.text}</Text>}
    </>
  );

  switch (block.type) {
    case "research":
    case "development":
    case "collaboration":
    case "result":
    case "reflection":
      return (
        <div key={block.id} className="flex flex-col gap-1">
          {TextSection}
        </div>
      );

    case "design":
    case "testing": {
      const imgClass = block.type === "testing" ? "md:w-[30vw]" : "md:w-[40vw]";
      return (
        <div
          key={block.id}
          className="flex flex-col md:flex-row gap-10 items-start"
        >
          <div className="flex-1">{TextSection}</div>
          {block.image && (
            <Image
              src={block.image}
              alt={block.imageAlt ?? `${title} – ${block.title ?? block.type}`}
              width={1200}
              height={900}
              className={clsx(imgClass, "rounded-xl")}
            />
          )}
        </div>
      );
    }
  }
}

export default function CaseStudyLayout({
  data,
  className,
  renderTitle,
}: Props) {
  return (
    <div
      className={clsx(
        "w-full min-h-[100dvh] flex flex-col items-center pt-24 px-8 gap-10",
        className
      )}
    >
      <h1 className="text-[clamp(28px,8vw,2.5vw)] text-center leading-tight">
        {renderTitle ? (
          renderTitle(data)
        ) : (
          <>Hoe ik {data.title} heb gecreëerd en opgezet</>
        )}
      </h1>

      <div className="w-full flex flex-col gap-10">
        {/* Meta column + hero image row */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-8 flex-1 md:max-w-[38ch]">
            <CompanyBlock company={data.company} />
            <ToolsBlock tools={data.tools} />
            <AboutList title="Omschrijving" items={data.omschrijving as any} />
            <AboutList title="De uitdagingen" items={data.uitdagingen as any} />
          </div>

          {data.image && (
            <Image
              src={data.image}
              alt={`${data.title} – hero`}
              width={1600}
              height={1000}
              className="w-full md:max-w-[60%] rounded-xl"
              priority
            />
          )}
        </div>

        {/* Content blocks */}
        <div className="flex flex-col gap-10">
          {data.blocks.map((b) => (
            <Block key={b.id} block={b} title={data.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
