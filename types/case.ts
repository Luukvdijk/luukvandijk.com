export type CaseBlockType =
  | "research"
  | "design"
  | "development"
  | "testing"
  | "collaboration"
  | "result"
  | "reflection";

export type SEOData = {
  title: string;
  description: string;
  image: string;
  keywords?: string[];
  noIndex?: boolean;
  hiddenH1: string;
  hiddenIntro: string;
};

export type CompanyInfo = {
  id: number;
  cat: string;
  plaats: string;
  employess: string;
  founded: string;
};

export type ToolSet = {
  id: number;
  point1?: string;
  point2?: string;
  point3?: string;
  point4?: string;
  point5?: string;
  point6?: string;
};

export type BriefItem = {
  id: number;
  discription: string;
};

export type BaseBlock = {
  id: string;
  type: CaseBlockType;
  title?: string;
};

export type TextBlock = BaseBlock & {
  text: string;
};

export type MediaBlock = TextBlock & {
  image?: string;
  imageAlt?: string;
};

export type ResearchBlock = TextBlock & { type: "research" };
export type DesignBlock = MediaBlock & { type: "design" };
export type DevelopmentBlock = TextBlock & { type: "development" };
export type TestingBlock = MediaBlock & { type: "testing" };
export type CollaborationBlock = TextBlock & { type: "collaboration" };
export type ResultBlock = TextBlock & { type: "result" };
export type ReflectionBlock = TextBlock & { type: "reflection" };

export type CaseBlock =
  | ResearchBlock
  | DesignBlock
  | DevelopmentBlock
  | TestingBlock
  | CollaborationBlock
  | ResultBlock
  | ReflectionBlock;

export type CaseStudy = {
  id: number;
  slug: string;
  title: string;
  description: string;
  summary: string;
  themeColor: string;
  image: string;
  seo: SEOData;

  company: CompanyInfo[];
  tools: ToolSet[];

  omschrijving?: BriefItem[];
  uitdagingen?: BriefItem[];

  techStack: string[];
  duration: string;
  roles: string[];

  blocks: CaseBlock[];

  draft?: boolean;
  updatedAt?: string;
  publishedAt?: string;
};

export type CasePreview = Pick<
  CaseStudy,
  "slug" | "title" | "summary" | "image" | "themeColor"
>;
